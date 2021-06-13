using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MoviesLibraryNew.Data;
using MoviesLibraryNew.Models;

namespace MoviesLibraryNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteMoviesController : ControllerBase
    {
        private readonly AppDbContext _db;

        public FavoriteMoviesController(AppDbContext context)
        {
            _db = context;
        }
        
        
        // GET: api/FavoriteMovies
        // [HttpGet]
        // public IEnumerable<FavoriteMovie> Get()
        // {
        //     return _db.FavoriteMovies.ToList();
        // }
        // [HttpGet]
        // public IEnumerable<Movie> Get()
        // {
        //     List<FavoriteMovie> favList = _db.FavoriteMovies.ToList();
        //
        //     List<Movie> resultList = new List<Movie>();
        //     foreach (var favMovie in favList)
        //     {
        //         resultList.Add(_db.Movies.SingleOrDefault(a => a.Id == favMovie.MovieId));
        //     }
        //         
        //     return resultList.ToList();
        // }

        // GET: api/FavoriteMovies/5
        [HttpGet("{id}", Name = "GetFave")]
        public IEnumerable<Movie> Get(int id)
        {
            Console.WriteLine("FAV");
            List<FavoriteMovie> favList = _db.FavoriteMovies.Where(u => u.UserId == id).ToList();
            Console.WriteLine(favList.Count);
            List<Movie> resultList = new List<Movie>();
            
            foreach (var favMovie in favList)
            {
                resultList.Add(_db.Movies.SingleOrDefault(a => a.Id == favMovie.MovieId));
            }
            
            return resultList;
        }
        
        // POST: api/FavoriteMovies
        [HttpPost]
        public async Task<ActionResult<FavoriteMovie>> Post(FavoriteMovie favoriteMovie)
        {
            if (_db.FavoriteMovies.FirstOrDefault(f => f.UserId == favoriteMovie.UserId && f.MovieId == favoriteMovie.MovieId) != null)
            {
                return BadRequest();
            }
            _db.FavoriteMovies.Add(favoriteMovie);
            await _db.SaveChangesAsync();

            return Ok(favoriteMovie);
        }
        //
        // // PUT: api/FavoriteMovies/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody] string value)
        // {
        //     
        // }
        //
        
        // DELETE: api/FavoriteMovies/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FavoriteMovie>> Delete(int id)
        {
            int userId = 0;
            Console.WriteLine("asdasc");
            using (StreamReader reader = new StreamReader(Request.Body, Encoding.Default))
            {
                var bodyContent = await reader.ReadToEndAsync();
                if(!String.IsNullOrEmpty(bodyContent))
                {
                    //mapp the bodyContent to your model
                    Console.WriteLine(bodyContent);
                    userId = Convert.ToInt32(bodyContent.Split(":\"")[1].Split("\"")[0]);
                }
            }
            var favoriteMovie = _db.FavoriteMovies.Where(f => f.Id == id && f.UserId == userId).ToList();
            // var favoriteMovie = await _db.FavoriteMovies.FindAsync(id);
            if (favoriteMovie.Count < 1)
            {
                Console.WriteLine("NotFound");
                return NotFound();
            }
            _db.FavoriteMovies.Remove(favoriteMovie[0]);
            await _db.SaveChangesAsync();

            return Ok(favoriteMovie);
        }
    }
}
