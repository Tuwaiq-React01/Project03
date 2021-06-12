using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication.Data;
using ASP.NETCoreWebApplication.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplication.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class AnimeController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AnimeController(AppDbContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public ActionResult<List<AnimeModel>> Index()
        {
            #region EnteringDataToDB
            
            // using (var client = new HttpClient())
            // {
            //     var result = await client.GetStringAsync("https://api.jikan.moe/v3/top/anime/1/upcoming");
            //     var temp = JsonSerializer.Deserialize<Temp>(result);
            //     var animeModels = new List<AnimeModel>();
            //
            //     foreach (var t in temp.top)
            //     {
            //         animeModels.Add(new AnimeModel()
            //         {
            //             // Id = t.rank,
            //             Title = t.title,
            //             Type = t.type,
            //             ImageUrl = t.image_url
            //         });
            //     }
            //
            //     foreach (var anime in animeModels)
            //     {
            //         Console.WriteLine($"title: {anime.Title}, type: {anime.Type}, image_url: {anime.ImageUrl}");
            //         this._context.Anime.Add(anime);
            //         this._context.SaveChanges();
            //         
            //     }
            // }
            
            #endregion EnteringDataToDB

            // var temp = this._context.Anime.ToList();
            // var jsonVal = JsonSerializer.Serialize(temp);   
            
            return Ok(this._context.Anime.ToList());
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<AnimeModel>> Update([FromRoute] int id, [FromBody] AnimeModel input)
        {
            Console.WriteLine("lkjhdbsj");
            AnimeModel anime = await _context.Anime.FirstOrDefaultAsync(anime => anime.Id == id);
            if (anime == null) return NotFound();

            anime.UserId = input.UserId;
            anime.Title = input.Title;
            anime.Type = input.Type;
            anime.ImageUrl = input.ImageUrl;

            await _context.SaveChangesAsync();

            return Ok(anime);
        }
    }

    class Temp
    {
        public string request_hash { get; set; }
        public bool request_cached { get; set; }
        public int request_cache_expiry { get; set; }
        public List<InsideTemp> top { get; set; }
    }

    class InsideTemp
    {
        public int mal_id { get; set; }
        public int rank { get; set; }
        public string title { get; set; }
        public string url { get; set; }
        public string image_url { get; set; }
        public string type { get; set; }
        public int? episodes { get; set; }
        public string start_date { get; set; }
        public string end_date { get; set; }
        public int members { get; set; }
        public int score { get; set; }
    }
}