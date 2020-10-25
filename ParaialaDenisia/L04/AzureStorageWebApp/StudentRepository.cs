using AzureStorageWebApp;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System;
using Microsoft.Extensions.Configuration;

namespace AzureStorageWebApp
{
    public class StudentRepository: IStudentRepository  
    {
        private string _connectionString;

        private static CloudTableClient _tableClient;

        private static CloudTable _studentsTable;

        public StudentRepository ( IConfiguration configuration)
	    {
            _connectionString = configuration.GetValue<string>("AzureStorageString");
            Task.Run(async () => { await InitializeTable(); })
                .GetAwaiter().GetResult();
	    }

        public async Task <List<StudentEntity>> GetAllStudents()
        {
            var students = new List<StudentEntity>();

            TableQuery<StudentEntity> query = new TableQuery<StudentEntity>();//.Where(TableQuery.GenerateFilterCondition("FirstName", QueryComparisons.Equal, "Denisia");

            TableContinuationToken token =null;

            do
            {
                TableQuerySegment<StudentEntity> resultSegment = await _studentsTable.ExecuteQuerySegmentedAsync(query,token);
                students.AddRange(resultSegment.Results);

            }while(token!=null);

            return students;
        }

        public async Task CreateNewStudent(StudentEntity student)
        {
            var insertOperation=TableOperation.Insert(student);

            await _studentsTable.ExecuteAsync(insertOperation);
        }

        public async Task Delete (StudentEntity student)
        {

            var deleteOperation=TableOperation.Delete(student);
            await _studentsTable.ExecuteAsync(deleteOperation);
            
        }

        public async Task Update (StudentEntity student)
        {
            
            var updateOperation=TableOperation.InsertOrMerge(student);
            await _studentsTable.ExecuteAsync(updateOperation);
            
        }

        private async Task InitializeTable()
        {
            var account = CloudStorageAccount.Parse(_connectionString); //referentiem contul
            _tableClient = account.CreateCloudTableClient(); //cream o referinta catre Clientul de tabel

            _studentsTable = _tableClient.GetTableReference("studenti"); //referinta catre un anumit tabel

            await _studentsTable.CreateIfNotExistsAsync(); //creaza tabelul daca nu exista

            //await AddNewStudent(); 
        }
    }
}