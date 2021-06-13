using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace EF_Core_With_React.Models
{
    public class GameDetail
    {
        public int Id { get; set; }

        public string Status { get; set; }
        public string Description { get; set; }
        public string Genre { get; set; }
        public string Platform { get; set; }
        public string Developer { get; set; }
        public DateTime ReleaseDate { get; set; }
        //public List<Screenshot> Screenshots { get; set; }

        [ForeignKey("Game")]
        public int GameId { get; set; }
        public Game Game { get; set; }

        public ICollection<Screenshot> Screenshots { get; set; }
    }
}
