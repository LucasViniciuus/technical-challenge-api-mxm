using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Models
{
    public class Supplier
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public string cnpj { get; set; }
        public int SupplierType { get; set; }
        public string legalRepresentative { get; set; }

    }
}