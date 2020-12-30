using Microsoft.WindowsAzure.Storage.Table;
namespace Models
{
    public  class  User : TableEntity
    {
        public  User(string universitate,string CNP)
        {
            this.PartitionKey=CNP;
            this.RowKey=universitate;

        }
        
         public  User(){}
       
        
        




    }
}