using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MoviesLibraryNew.Data;
using MoviesLibraryNew.Models;
using Newtonsoft.Json.Linq;

namespace MoviesLibraryNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchTvShowsController : ControllerBase
    {
        private readonly AppDbContext _db;

        public SearchTvShowsController(AppDbContext context)
        {
            _db = context;
        }
        
       [HttpGet("{title}", Name = "GetTvShowSearch")]
        public IEnumerable<TvShow> Get(string title)
        {
            
            // Console.WriteLine(title);
            List<TvShow> TvShowList = new List<TvShow>();
            JArray result = GetJSON(title);
            for (int i = 0; i < result.Count; i++)
            {
                TvShowList.Add(new TvShow()
                {
                    Id = i + 1,
                    Title = result[i]["name"].ToString(),
                    Date = result[i]["first_air_date"].ToString(),
                    Summary = result[i]["overview"].ToString(),
                    Rating = Convert.ToInt32(result[i]["vote_average"]),
                    Poster = "https://image.tmdb.org/t/p/w300" + result[i]["poster_path"].ToString()
                });
            }

            return TvShowList.ToList();
        }
        
        
        // POST: api/tvshows
        [HttpPost]
        public async Task<ActionResult<TvShow>> Post(TvShow tvShow)
        {
            _db.TvShows.Add(tvShow);
            await _db.SaveChangesAsync();
            
            // Response.Redirect("");
            return Ok(tvShow);
        }
        
        public JArray GetJSON(string title)
        {
            string html = string.Empty;
            
            string url = "https://api.themoviedb.org/3/search/tv?api_key=5b1b9f67b573e2104ae29d0da0c6104f&query=" + title;
            
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