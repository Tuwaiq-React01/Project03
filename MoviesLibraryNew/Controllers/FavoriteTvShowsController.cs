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
    public class FavoriteTvShowsController : ControllerBase
    {
        
        private readonly AppDbContext _db;

        public FavoriteTvShowsController(AppDbContext context)
        {
            _db = context;
        }
        
        
        // GET: api/FavoriteTvShows
        // [HttpGet]
        // public IEnumerable<TvShow> Get()
        // {
        //     List<FavoriteTvShow> favList = _db.FavoriteTvShows.ToList();
        //
        //     List<TvShow> resultList = new List<TvShow>();
        //     foreach (var favTvShow in favList)
        //     {
        //         resultList.Add(_db.TvShows.SingleOrDefault(a => a.Id == favTvShow.TvShowId));
        //     }
        //
        //     return resultList.ToList();
        // }

        // GET: api/FavoriteTvShows/5
        [HttpGet("{id}", Name = "GetFaveTv")]
        public IEnumerable<TvShow> Get(int id)
        {
            Console.WriteLine("FAV");
            List<FavoriteTvShow> favList = _db.FavoriteTvShows.Where(u => u.UserId == id).ToList();
            Console.WriteLine(favList.Count);
            List<TvShow> resultList = new List<TvShow>();
            
            foreach (var favMovie in favList)
            {
                resultList.Add(_db.TvShows.SingleOrDefault(a => a.Id == favMovie.TvShowId));
            }
            
            return resultList;
        }
        
        // POST: api/FavoriteTvShows
        [HttpPost]
        public async Task<ActionResult<FavoriteTvShow>> Post(FavoriteTvShow favoriteTvShow)
        {
            if (_db.FavoriteTvShows.FirstOrDefault(f => f.UserId == favoriteTvShow.UserId && f.TvShowId == favoriteTvShow.TvShowId) != null)
            {
                return BadRequest();
            }
            _db.FavoriteTvShows.Add(favoriteTvShow);
            await _db.SaveChangesAsync();

            return Ok(favoriteTvShow);
        }
        
        // // PUT: api/FavoriteTvShows/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody] string value)
        // {
        // }
        
        // // DELETE: api/FavoriteTvShows/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FavoriteTvShow>> Delete(int id)
        {
            int userId = 0;
            Console.WriteLine("asdasc");
            using (StreamReader reader = new StreamReader(Request.Body, Encoding.Default))
            {
                var bodyContent = await reader.ReadToEndAsync();
                if(!String.IsNullOrEmpty(bodyContent))
                {
                    //mapp the bodyContent to your model
                    Console.WriteLine("asdf");
                    userId = Convert.ToInt32(bodyContent.Split(":\"")[1].Split("\"")[0]);
                }
            }
            
            var favoriteTvShow =  _db.FavoriteTvShows.Where(f => f.Id == id && f.UserId == userId).ToList();
            if (favoriteTvShow.Count < 1)
            {
                return NotFound();
            }
            _db.FavoriteTvShows.Remove(favoriteTvShow[0]);
            await _db.SaveChangesAsync();

            return Ok(favoriteTvShow);
        }
    }
}
