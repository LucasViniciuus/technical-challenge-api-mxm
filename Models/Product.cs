using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Product
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public double price { get; set; }
        public long quantity { get; set; }
        public int category { get; set; }
        public string status { get; set; }
        public string supplier { get; set; }
        //ver possibilidade de criação de tabela fornecedor, pois assim caso tenha tempo, faça um cadastro de fornecedores.
        public DateTime expirationDate { get; set; } = DateTime.Now;
        public int unitMeasure { get; set; }
        public double weight { get; set; }
        public DateTime arrivalDate { get; set; } = DateTime.Now;
        public string team { get; set; }
    }
}