using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MoviesLibraryNew.Data;
using MoviesLibraryNew.Models;

namespace MoviesLibraryNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _db;

        public UsersController(AppDbContext context)
        {
            _db = context;
        }
        
        // GET: api/Users
        [HttpGet]
        public IEnumerable<User> Get()
        {
            List<FavoriteMovie> favMovieList = _db.FavoriteMovies.ToList();
            List<FavoriteTvShow> favTvShowList = _db.FavoriteTvShows.ToList();
            
            return _db.Users.ToList();
        }

        // GET: api/Users/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Users
        [HttpPost]
        public async Task<ActionResult<User>> Post(User user)
        {
            var userInDatabase =  _db.Users.Where(m => m.Email == user.Email).ToList();
            if (userInDatabase.Count > 0)
            {
                Console.WriteLine("Hi");
                return Ok(userInDatabase);
            }
            
            _db.Users.Add(user);
            await _db.SaveChangesAsync();

            var u = new List<User> {user};

            // Response.Redirect("");
            return Ok(u);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
