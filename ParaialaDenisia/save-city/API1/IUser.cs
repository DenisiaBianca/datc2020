using System.Collections.Generic;
using System.Threading.Tasks;
using Models;
namespace lab4
{
public interface IUser
{
    Task<List<User>>  GetAllStudents();
    Task CreateNewStudent(User student);
    Task<string> UpdateStudent( User student);

     public  Task<string> DeleteStudent(string a);
    
    

    
}
}