using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;

namespace DATC.Function
{
    public static class QueueTriggerDATC
    {
        [FunctionName("QueueTriggerDATC")]
        public static void Run([QueueTrigger("myqueue-datc", Connection = "denisiaparaiala_STORAGE")]string myQueueItem, ILogger log)
        {
            log.LogInformation($"C# Queue trigger function processed: {myQueueItem}");
        }
    }
}
