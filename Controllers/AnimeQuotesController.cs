using System.Collections.Generic;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication.Data;
using ASP.NETCoreWebApplication.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplication.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class AnimeQuotesController : ControllerBase
    {
        private AppDbContext _context;

        public AnimeQuotesController(AppDbContext _context)
        {
            this._context = _context;
        }
        
        // GET
        [HttpGet]
        public async Task<ActionResult<List<AnimeQuotesModel>>> Index()
        {
            return Ok(await _context.AnimeQuotes.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<AnimeQuotesModel>> Create([FromBody] AnimeQuotesModel animeQuotes)
        {
            await _context.AnimeQuotes.AddAsync(animeQuotes);
            await _context.SaveChangesAsync();
            return Ok(animeQuotes);
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<AnimeQuotesModel>> Delete(int id)
        {
            AnimeQuotesModel quotes = await _context.AnimeQuotes.FirstOrDefaultAsync(quotes => quotes.Id == id);

            if (quotes == null)
                return NotFound();

            _context.AnimeQuotes.Remove(quotes);
            await _context.SaveChangesAsync();
            
            return Ok(quotes);
        }
    }
}