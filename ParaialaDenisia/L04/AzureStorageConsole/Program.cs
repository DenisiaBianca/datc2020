using System;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

namespace L04
{
    class Program
    {
        private static CloudTableClient tableClient;

        private static CloudTable studentsTable;

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Task.Run(async () => { await Initialize(); })
                .GetAwaiter().GetResult();
        }

        private static async Task Initialize()
        {
            string storageConnectionString = "DefaultEndpointsProtocol=https;"
            + "AccountName=denisiaparaiala;"
            + "AccountKey=p0ftre8XkCgfPuyEPdc+ytNGn10Ddj2BWKtly6wnMbVh60HhOEDvE+WTR8XFb6GW0c2mB/wm16hj9nPlRdpn8A==;"
            + "EndpointSuffix=core.windows.net";

            var account = CloudStorageAccount.Parse(storageConnectionString); //referentiem contul
            tableClient = account.CreateCloudTableClient(); //cream o referinta catre Clientul de tabel

            studentsTable = tableClient.GetTableReference("studenti"); //referinta catre un anumit tabel

            await studentsTable.CreateIfNotExistsAsync(); //creaza tabelul daca nu exista

            await AddNewStudent();      
        }

        private static async Task AddNewStudent()
        {
            var student=new Student("UPT", "2981001350057");
            student.FirstName="Denisia";
            student.LastName="Paraiala";
            student.Email="paraialadenisia@gmail.com";
            student.PhoneNumber="0727209063";
            student.Year=3;
            student.Faculty="AC";

            var insertOperation=TableOperation.Insert(student);

            await studentsTable.ExecuteAsync(insertOperation);
        }

        private static async Task EditStudent()
        {
            var 
        }
    }
}
