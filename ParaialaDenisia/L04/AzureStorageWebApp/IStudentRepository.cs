using System.Collections.Generic;
using AzureStorageWebApp;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System;
using Microsoft.Extensions.Configuration;

public interface IStudentRepository
{
    Task<List<StudentEntity>> GetAllStudents();

    Task CreateNewStudent(StudentEntity student);

    Task Delete(StudentEntity student);

    Task Update(StudentEntity student);
}