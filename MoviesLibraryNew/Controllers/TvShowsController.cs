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
    public class TvShowsController : ControllerBase
    {
        private readonly AppDbContext _db;

        public TvShowsController(AppDbContext context)
        {
            _db = context;
        }
        
        // GET: api/TvShows
        [HttpGet]
        public IEnumerable<TvShow> Get()
        {
            List<FavoriteTvShow> favList = _db.FavoriteTvShows.ToList();
            return _db.TvShows.ToList();
        }
        
        // GET: api/TvShows/5
        [HttpGet("{id}", Name = "GetTvShow")]
        public IEnumerable<TvShow> Get(int id)
        {
            return _db.TvShows.Where(a => a.Id == id).ToList();
        }
        
        // POST: api/TvShows
        [HttpPost]
        public async Task<ActionResult<TvShow>> Post(TvShow tvShow)
        {
            var tvShowInDatabase =  _db.TvShows.Where(m => m.Title == tvShow.Title).ToList();
            if (tvShowInDatabase.Count > 0)
            {
                return null;
            }
            
            _db.TvShows.Add(tvShow);
            await _db.SaveChangesAsync();
            
            // Response.Redirect("");
            return Ok(tvShow);
        }
        
        // PUT: api/TvShows/5
        [HttpPut("{id}")]
        public async Task<ActionResult<TvShow>> Put(int id, TvShow tvShow)
        {

            var editTvShow = _db.TvShows.SingleOrDefault(a => a.Id == id);

            if (editTvShow != null)
            {
                editTvShow.Title = tvShow.Title;
                editTvShow.Date = tvShow.Date;
                editTvShow.Summary = tvShow.Summary;
                editTvShow.Rating = tvShow.Rating;
                editTvShow.Poster = tvShow.Poster;
            }
            
            await _db.SaveChangesAsync();
            
            return Ok(tvShow);
        }
    }
}