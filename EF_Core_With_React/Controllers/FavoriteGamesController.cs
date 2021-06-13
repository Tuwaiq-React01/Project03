using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using EF_Core_With_React.Data;
using EF_Core_With_React.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using Newtonsoft.Json.Linq;
using Microsoft.EntityFrameworkCore;

namespace EF_Core_With_React.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //[Route("[controller]")]
    public class FavoriteGamesController : Controller
    {
        private readonly AppDbContext _db;

        public FavoriteGamesController(AppDbContext context)
        {
            _db = context;
        }


        [HttpGet("{id:int}")]
        // GET: /<controller>/
        public IList<Game> Get([FromRoute] int id)
        //public async Task<ActionResult<List<FavoriteGame>>> Get()
        {
            var innerGroupJoinQuery =
             from favoriteGame in _db.FavoriteGames
              join game in _db.Games on favoriteGame.GameId equals game.Id
             where favoriteGame.UserId == id
             select game;
            return innerGroupJoinQuery.ToList();
        }




        [HttpPost("Favorite")]
        //[Route("[controller]/Favorite")]
        public ActionResult Favorite([FromQuery] int userId, [FromQuery] int gameId)
        {
            if (ModelState.IsValid)

            {
                FavoriteGame favoriteGame = new FavoriteGame(){UserId=userId,GameId=gameId};
                _db.FavoriteGames.Add(favoriteGame);
                _db.SaveChanges();
                return Ok(favoriteGame);
            }
            return BadRequest();
        }



        [HttpDelete("UnFavorite")]
        public ActionResult UnFavorite(int userId, int gameId)
        {
            if (ModelState.IsValid)

            {
                var favoritedGame = _db.FavoriteGames.Where((game) => game.GameId == gameId && game.UserId==userId).First();
                _db.FavoriteGames.Remove(favoritedGame);
                _db.SaveChanges();
                return Ok(favoritedGame);
            }
            return BadRequest();
        }
    }
}
