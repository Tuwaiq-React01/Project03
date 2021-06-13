using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using EF_Core_With_React.Data;
using EF_Core_With_React.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;

namespace EF_Core_With_React.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameDetailsController : Controller
    {
        private readonly AppDbContext _db;

        public GameDetailsController(AppDbContext context)
        {
            _db = context;
        }

        // GET: /GameDetails/Index
        [HttpGet("{id:int}")]
        public ActionResult Index([FromRoute] int id)
        {
            GameDetail GameDetail = _db.GameDetails.ToList().Find(game => game.Id == id);
            var Gamescreenshots =
                 from game in _db.GameDetails
                 join screenshot in _db.Screenshots on game.Id equals screenshot.GameDetailId
                 where game.Id == id
                 select new
                 {
                     game.Status,
                     game.Genre,
                     game.Platform,
                     game.ReleaseDate,
                     game.Description,
                     game.Developer,
                     screenshot.Image

                 }.Image;
            var returnedJson = new { gameDetail=GameDetail, screenshots = Gamescreenshots };
            return Ok(returnedJson);
        }
    }
}


