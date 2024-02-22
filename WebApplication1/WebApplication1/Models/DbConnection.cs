using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models
{
   
    public class DbConnection : DbContext
    {
        public DbConnection(DbContextOptions<DbConnection> options) : base(options)
        {
        }
        public DbSet<ListTable> AllNumber { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=.; Initial Catalog=lbs; User Id=sa; password=123; TrustServerCertificate= True");
        }
    }
}
