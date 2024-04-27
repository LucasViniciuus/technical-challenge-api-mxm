using Microsoft.EntityFrameworkCore;
using Models;

namespace BackArniway.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Product> product { get; set; }

        protected override void OnConfiguring
        (DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("DataSource=app.db;Cache=Shared");
        }
    }
}