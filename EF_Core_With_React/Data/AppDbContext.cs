using System;
using System.ComponentModel.DataAnnotations.Schema;
using EF_Core_With_React.Controllers;
using EF_Core_With_React.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;

namespace EF_Core_With_React.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<UserAccount> UserAccounts { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<GameDetail> GameDetails { get; set; }
        public DbSet<Screenshot> Screenshots { get; set; }
        public DbSet<FavoriteGame> FavoriteGames { get; set; }

        //Fluent API 
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //seeding (Have this to be run once)


            //string path = "https://www.freetogame.com/api/games";
            //dynamic jGames = JArray.Parse(FetchAPI.httpReq(path));
            //int countId = 0;
            //foreach (var game in jGames)

            //{
            //    countId++;
            //    int gameId = game.id;
            //    string thumbnail = game.thumbnail;
            //    modelBuilder.Entity<Game>().HasData(new Game() { Id = gameId, Title = (string)game.title, Thumbnail = thumbnail, ShortDcrp = (string)game.short_description, GameUrl = (string)game.game_url });

            //    string path2 = "https://www.freetogame.com/api/game?id=" + gameId;
            //    dynamic g = JObject.Parse(FetchAPI.httpReq(path2));
            //    string release_date = g.release_date;
            //    if (!release_date.Contains("-00"))
            //    {
            //        int gameDetailId = g.id;
            //        foreach (var sc in g.screenshots)
            //        {
            //            string img = sc.image;
            //            modelBuilder.Entity<Screenshot>().HasData(new Screenshot() { Id = countId++, Image = img, GameDetailId = gameDetailId });
            //        }
            //        modelBuilder.Entity<GameDetail>().HasData(new GameDetail()
            //        {
            //            Id = gameDetailId,
            //            Status = (string)g.status,
            //            Description = (string)g.description,
            //            Genre = (string)g.genre,
            //            Platform = (string)g.platform,
            //            Developer = (string)g.developer,
            //            ReleaseDate = (DateTime)g.release_date,
            //            GameId = gameId
            //        });
            //    }
            //}


            //modelBuilder.Entity<User>().HasData(new User() { Id = 77, Name = "Riyad Gh", Image = "https://www.freeiconspng.com/uploads/controller-game-icon-10.png", ImageColor = "Black" });
            //modelBuilder.Entity<UserAccount>().HasData(new UserAccount() { Id = 77, Email = "Riyad@safsp.org.sa", Username = "RioDan", Password = "YouKnowItIsNotThisOne!", DateOfBirth = new DateTime(1994, 6, 5), JoiningDate = new DateTime(2021, 6, 5), UserId = 77 });
            //modelBuilder.Entity<FavoriteGame>().HasData(new FavoriteGame() { Id = 1, UserId = 77, GameId = 57 });
        }
    }
}
