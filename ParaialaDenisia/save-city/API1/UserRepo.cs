using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using Models;

namespace lab4{
    public class UserRepo :IUser
    {
        private CloudTableClient tableClient;
        private CloudTable studentTable;
        public UserRepo()
        {
            Task.Run(async () => {await InitTable() ;})
            .GetAwaiter()
            .GetResult();
        }

        public async Task CreateNewStudent(User student)
        {
           var insertop =TableOperation.Insert(student);
            await studentTable.ExecuteAsync(insertop);
        }

        public async Task<string> DeleteStudent(string a)
        {
           
     /*TableOperation insertO = TableOperation.Retrieve(student.PartitionKey,student.RowKey);
            TableResult query = await studentTable.ExecuteAsync(insertO);
            
    
     object a=query.Result;
            if(a!=null)
            {
                 TableOperation delete = TableOperation.Delete(student);  
                    await  studentTable.ExecuteAsync(delete);
             
             return "Studentul a fost sters";
            }
            else
            return "Studentul nu exista";
*/
            var students = new List<User>();
            TableQuery<User> query1=new TableQuery<User>().Where(TableQuery.GenerateFilterCondition("PartitionKey",QueryComparisons.Equal,a));
             TableQuerySegment<User> resultSegment=await studentTable.ExecuteQuerySegmentedAsync(query1,null);
              students.AddRange(resultSegment.Results);
              object v=students.Count;
              if(students.Count!=0){
               TableOperation delete = TableOperation.Delete(students[0]);
                    await  studentTable.ExecuteAsync(delete);
                    return "Studentul a fost sters";
              }
              else return "Studentul nu exista";

        }

        public async Task<List<User>> GetAllStudents()
        {
            var students = new List<User>();
            TableQuery<User> query=new TableQuery<User>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<User> resultSegment=await studentTable.ExecuteQuerySegmentedAsync(query,token);
                students.AddRange(resultSegment.Results);
            }while(token!=null);
            return students;

        }

        public async Task<string> UpdateStudent( User student)
        {
            

            TableOperation insertO = TableOperation.Retrieve(student.PartitionKey,student.RowKey);
            TableResult query = await studentTable.ExecuteAsync(insertO);
            
    
     object a=query.Result;
            if(a!=null)
            {
             TableOperation insertOp = TableOperation.InsertOrReplace(student);
             await  studentTable.ExecuteAsync(insertOp);
             return "UPDATE cu succes ";
            }
            else
            return "Studentul introdus nu exista";
              
              
              
        }

        private async  Task InitTable()
        {
            string conect ="DefaultEndpointsProtocol=https;AccountName=datc;AccountKey=IK3FdIeFdddY9G4O4iRo/z+68xaHta1/pvoI4Bo4v2rDkCYJdLCedfpPOtSSCjisEdjdw0fFYwScoHKmvZbcvQ==;EndpointSuffix=core.windows.net";
            var acc=CloudStorageAccount.Parse(conect);
            tableClient=acc.CreateCloudTableClient();
            studentTable=tableClient.GetTableReference("utilizatori");
            await studentTable.CreateIfNotExistsAsync();
        }
    }
}