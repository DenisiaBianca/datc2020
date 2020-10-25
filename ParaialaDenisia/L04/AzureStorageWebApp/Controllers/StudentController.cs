using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AzureStorageWebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : ControllerBase
    {

        IStudentRepository _studentRepository;

        public StudentController(IStudentRepository studentRepository)
        {
            _studentRepository=studentRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<StudentEntity>> Get()
        {
            return await _studentRepository.GetAllStudents();
        }

        [HttpPost]
        public async Task<string> Post([FromBody] StudentEntity student)
        {
             await _studentRepository.CreateNewStudent(student);
            return "Adaugat!";
        }

        [HttpDelete("{rowKey}")]
        public async Task<string> Delete(string rowKey)
        {
            List<StudentEntity> students = await _studentRepository.GetAllStudents();
            StudentEntity s = students.Find(stud => stud.RowKey==rowKey);
            await _studentRepository.Delete(s);
            return "Sters!";
        }

        [HttpPut("{rowKey}")]
        public async Task <string> Update (string rowKey, [FromBody]string firstName)
        {
            List<StudentEntity> students = await _studentRepository.GetAllStudents();
            StudentEntity s = students.Find(stud => stud.RowKey==rowKey);
            s.FirstName=firstName;
            await _studentRepository.Update(s);
            return "Update Name!";
        }
    }
}
