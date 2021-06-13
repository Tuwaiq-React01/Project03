using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using Microsoft.EntityFrameworkCore;
using MoviesLibraryNew.Models;
using Newtonsoft.Json.Linq;

namespace MoviesLibraryNew.Data
{
    public class AppDbContext  : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https: //go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer(
                    "Server=.;Database=movieslibrary;Trusted_Connection=True;MultipleActiveResultSets=true",
                    builder => { builder.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null); });
                base.OnConfiguring(optionsBuilder);
            }
        }
        
        
        public DbSet<Movie>Movies { get; set; }
        public DbSet<TvShow>TvShows { get; set; }
        public DbSet<FavoriteMovie>FavoriteMovies { get; set; }
        public DbSet<FavoriteTvShow>FavoriteTvShows { get; set; }
        
        public DbSet<User>Users { get; set; }
        
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.Entity<Room>().Property(r => r.RoomType).IsRequired();
            
            modelBuilder.Entity<Movie>().ToTable("Movies");
            modelBuilder.Entity<TvShow>().ToTable("TvShows");
            modelBuilder.Entity<FavoriteMovie>().ToTable("FavoriteMovies");
            modelBuilder.Entity<FavoriteTvShow>().ToTable("FavoriteTvShows");
            modelBuilder.Entity<User>().ToTable("Users");
            
            // seeding
            List<Movie> moviesList = GetMovieList();

            for (int i = 0; i < moviesList.Count; i++)
            {
                modelBuilder.Entity<Movie>().HasData(new Movie()
                    {Id = moviesList[i].Id,
                        Title = moviesList[i].Title,
                        Date = moviesList[i].Date,
                        Summary = moviesList[i].Summary,
                        Rating = moviesList[i].Rating,
                        Poster = moviesList[i].Poster});
            }
            
            List<TvShow> tvShowList = GetTvShowsList();

            for (int i = 0; i < tvShowList.Count; i++)
            {
                modelBuilder.Entity<TvShow>().HasData(new TvShow()
                {Id = tvShowList[i].Id,
                    Title = tvShowList[i].Title,
                    Date = tvShowList[i].Date,
                    Summary = tvShowList[i].Summary,
                    Rating = tvShowList[i].Rating,
                    Poster = tvShowList[i].Poster});
            }
             
        }

       
        
        
        public List<Movie> GetMovieList()
        {
            List<Movie> MovieList = new List<Movie>();
            JArray result = GetJSON(true);
            for (int i = 0; i < result.Count; i++)
            {
                MovieList.Add(new Movie()
                {
                    Id = i + 1,
                    Title = result[i]["title"].ToString(),
                    Date = result[i]["release_date"].ToString(),
                    Summary = result[i]["overview"].ToString(),
                    Rating = Convert.ToInt32(result[i]["vote_average"]),
                    Poster = "https://image.tmdb.org/t/p/w300" + result[i]["poster_path"].ToString()
                });
            }

            return MovieList;
        }
        public List<TvShow> GetTvShowsList()
        {
            List<TvShow> tvShowList = new List<TvShow>();
            JArray result = GetJSON(false);
            for (int i = 0; i < result.Count; i++)
            {
                tvShowList.Add(new TvShow()
                {
                    Id = i + 1,
                    Title = result[i]["name"].ToString(),
                    Date = result[i]["first_air_date"].ToString(),
                    Summary = result[i]["overview"].ToString(),
                    Rating = Convert.ToInt32(result[i]["vote_average"]),
                    Poster = "https://image.tmdb.org/t/p/w300" + result[i]["poster_path"].ToString()
                });
            }

            return tvShowList;
        }

        public JArray GetJSON(bool what)
        {
            string html = string.Empty;
            
            string url = what? "https://api.themoviedb.org/3/movie/popular?api_key=5b1b9f67b573e2104ae29d0da0c6104f&language=en-US&page=1" :@"https://api.themoviedb.org/3/tv/popular?api_key=5b1b9f67b573e2104ae29d0da0c6104f&language=en-US&page=1";
            
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.AutomaticDecompression = DecompressionMethods.GZip;
            
            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            using (Stream stream = response.GetResponseStream())
            using (StreamReader reader = new StreamReader(stream))
            {
                html = reader.ReadToEnd();
            }
            
            var res = JObject.Parse(html);
            JArray result = JArray.Parse(res["results"].ToString());

            return result;
        }
    }
    
    
}