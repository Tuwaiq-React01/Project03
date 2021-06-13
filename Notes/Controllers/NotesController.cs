using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Notes.Models;
namespace Notes.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NotesController : ControllerBase
    {
        private readonly AppDbContext _db;
        public NotesController(AppDbContext context)
        {
            _db = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Note>>> GetNotes()
        {
            return await _db.notes.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Note>> GetNote(int? id)
        {
            var note = await _db.notes.FindAsync(id);
            return (note == null) ? NotFound() : note;
        }

        [HttpPost]
        public async Task<ActionResult<Note>> PostNote(Note note)
        {
            _db.notes.Add(note);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetNote), new { id = note.Id }, note);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutNote(int? id, Note note)
        {
            if (id != note.Id) return BadRequest();
            _db.Entry(note).State = EntityState.Modified;
            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteNote(int? id)
        {
            var note = await _db.notes.FindAsync(id);
            if (note == null)
            {
                return NotFound();
            }
            _db.notes.Remove(note);
            await _db.SaveChangesAsync();
            return NoContent();

        }
    }
}
