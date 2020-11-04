using System;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

namespace L05
{
    public class Metrica : TableEntity
    {
        public int Count { get; set; }
        public Metrica(string university, string timeStamp, int count)
        {
            this.PartitionKey = university;
            this.RowKey = timeStamp;
            this.Count = count;
        }
        public Metrica() { }

    }
}