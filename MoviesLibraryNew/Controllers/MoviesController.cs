using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesLibraryNew.Data;
using MoviesLibraryNew.Models;

namespace MoviesLibraryNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly AppDbContext _db;

        public MoviesController(AppDbContext context)
        {
            _db = context;
        }
        
        // GET: api/Movies
        [HttpGet]
        public async Task<IEnumerable<Movie>> Get()
        {
            
            int userId = -1;
            using (StreamReader reader = new StreamReader(Request.Body, Encoding.Default))
            {
                var bodyContent = await reader.ReadToEndAsync();
                if(!String.IsNullOrEmpty(bodyContent))
                {
                    //mapp the bodyContent to your model
                    userId = Convert.ToInt32(bodyContent.Split(":\"")[1].Split("\"")[0]);
                    // Console.WriteLine(bodyContent.Split(":\"")[1]);
                }
            }

            List<FavoriteMovie> favList = _db.FavoriteMovies.Where(f => f.UserId == userId).ToList();
            // List<Movie> finalList = new List<Movie>();
            // foreach (var movie in _db.Movies.ToList())
            // {
            //     if (movie.FavoriteMovie == favList[0])
            //     {
            //         
            //     }
            //     finalList.Add(new Movie()
            //     {
            //         Id = movie.Id,
            //         Title = movie.Title,
            //         Summary = movie.Summary,
            //         Rating = movie.Rating,
            //         Poster = movie.Poster,
            //         FavoriteMovie = 
            //     });
            // }
            return _db.Movies.ToList();
        }
        
        // GET: api/Movies/5
        [HttpGet("{id}", Name = "GetMovie")]
        public IEnumerable<Movie> Get(int id)
        {
            // Response.Redirect("Page2.aspx");
            return _db.Movies.Where(a => a.Id == id).ToList();
        }

        // POST: api/Movies
        [HttpPost]
        public async Task<ActionResult<Movie>> Post(Movie movie)
        {
            var movieInDatabase =  _db.Movies.Where(m => m.Title == movie.Title).ToList();
            if (movieInDatabase.Count > 0)
            {
                // Console.WriteLine("Hi");
                return null;
            }
            // Console.WriteLine("Yooo");
            _db.Movies.Add(movie);
            await _db.SaveChangesAsync();
            
            // Response.Redirect("");
            return Ok(movie);
        }
        
        // PUT: api/Movies/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Movie>> Put(int id, Movie movie)
        {

            var editMovie = _db.Movies.SingleOrDefault(a => a.Id == id);

            if (editMovie != null)
            {
                editMovie.Title = movie.Title;
                editMovie.Date = movie.Date;
                editMovie.Summary = movie.Summary;
                editMovie.Rating = movie.Rating;
                editMovie.Poster = movie.Poster;
            }
            
            await _db.SaveChangesAsync();
            

            return Ok(movie);
        }
    }
}