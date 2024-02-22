 
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public partial class ListTable
    {
     [Key]
        public int Id { get; set; }
        public string StepName { get; set; } = string.Empty;
        public string ItemList { get; set; } = string.Empty;
        public int? TotalNumber1 { get; set; }
        public int? TotalNumber2 { get; set; }
       // List<ListTable> ListTables { get; set; }
    }
}
