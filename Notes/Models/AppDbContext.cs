using Microsoft.EntityFrameworkCore;
namespace Notes.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<Note> notes {get; set;}
        public AppDbContext( DbContextOptions<AppDbContext> options)
        : base(options){}
    }
}