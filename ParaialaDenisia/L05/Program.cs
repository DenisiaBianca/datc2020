using System;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System.Data.SqlClient;

namespace L05
{
    class Program
    {
        private static CloudTableClient tableClient;

        private static CloudTable studentsTable;
        private static CloudTable statisticsTable;

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
            statisticsTable = tableClient.GetTableReference("statistici");

            await studentsTable.CreateIfNotExistsAsync(); //creaza tabelul daca nu exista
            await statisticsTable.CreateIfNotExistsAsync();

            await CreateStatistics();

        }

        private static async Task CreateStatistics()
        {
            var studUPT = await UPTStudents();
            var studUPTStamp = DateTime.Now.ToString("dd MMM yyyy H mm ss");
            Console.WriteLine(studUPTStamp);
            var studUVT = await UVTStudents();
            var studUVTStamp = DateTime.Now.ToString("dd MMM yyyy H mm ss");
            Console.WriteLine(studUVTStamp);

            var MetricaUPT = new Metrica("UPT", studUPTStamp, studUPT);
            var MetricaUVT = new Metrica("UVT", studUVTStamp, studUVT);

            var insertMetricaUPT = TableOperation.Insert(MetricaUPT);
            var insertMetricaUVT = TableOperation.Insert(MetricaUVT);

            await statisticsTable.ExecuteAsync(insertMetricaUPT);
            await statisticsTable.ExecuteAsync(insertMetricaUVT);
        }

        private static async Task<int> UPTStudents()
        {
            var stud = 0;

            TableQuery<Student> studQuery = new TableQuery<Student>().Where(TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, "UPT"));

            var studList = await studentsTable.ExecuteQuerySegmentedAsync(studQuery, null);

            foreach (Student s in studList) { stud++; }

            Console.WriteLine("In UPT sunt " + stud + " studenti");

            return stud;
        }
        private static async Task<int> UVTStudents()
        {

            var stud = 0;

            TableQuery<Student> studQuery = new TableQuery<Student>().Where(TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, "UVT"));

            var studList = await studentsTable.ExecuteQuerySegmentedAsync(studQuery, null);

            foreach (Student s in studList) { stud++; }

            Console.WriteLine("In UVT sunt " + stud + " studenti");

            return stud;
        }
    }
}
