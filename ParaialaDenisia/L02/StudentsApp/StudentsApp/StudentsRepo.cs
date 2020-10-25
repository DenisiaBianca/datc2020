using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentsApp
{
    public static class StudentsRepo
    {
        public static List<Student> StudentsList = new List<Student>()
        {
            new Student
            {
                Id=1,
                Name="Popescu Andrei",
                Faculty="AC",
                Specialization="IS",
                YearOfStudy=3
            },
            new Student
            {
                Id=2,
                Name="Marinescu Ana",
                Faculty="AC",
                Specialization="CTI",
                YearOfStudy=2
            }
        };
    }
}
