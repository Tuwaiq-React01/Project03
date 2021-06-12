using ASP.NETCoreWebApplication.Models;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplication.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
        }
        
        public DbSet<AnimeModel> Anime { set; get; }
        public DbSet<UsersModel> User { set; get; }
        public DbSet<UserInfoModel> UserInfo { set; get; }
        public DbSet<AnimeQuotesModel> AnimeQuotes { set; get; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UsersModel>().HasData(new UsersModel() {Id = 1,Name = "Sultan"});

            modelBuilder.Entity<AnimeQuotesModel>().HasData(
                new AnimeQuotesModel()
                {
                    Id = 1,
                    Quote = "The world isn't perfect. But it's there for us, doing the best it can....that's what makes it so damn beautiful.",
                    Character = "Roy Mustang (Full Metal Alchemist)",
                    CharDescreption = "Roy Mustang is a character from Full Metal Alchemist who isn't afraid to speak his mind. In this quote, he talks about how imperfect the world can be. Ironically, alchemy can make it perfect via equivalent exchange.  But in the end, Roy says that the world being imperfect is 'perfect.' There is no such thing as perfection. Because once there is perfection, where do you go"
                }
            );
            modelBuilder.Entity<AnimeQuotesModel>().HasData(
                new AnimeQuotesModel()
                {
                    Id = 2,
                    Quote = "We are all like fireworks: we climb, we shine and always go our separate ways and become further apart. But even when that time comes, let's not disappear like a firework and continue to shine.. forever",
                    Character = "Hitsugaya Toshiro (Bleach)",
                    CharDescreption = "Hitsugaya is the captain of Rangiku and one of the captains in Bleach. Known as one of the youngest captains ever, he is known for his strategies, brain and being as cold as ice. Speaking, Hitsugaya reiterates that even though they may grow and travel further apart, they should not disappear like fireworks"
                }
            );
        }
    }
}