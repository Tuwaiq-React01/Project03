using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace EF_Core_With_React.Models
{
    public class FavoriteGame
    {
        public int Id { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }
        public User User { get; set; }

        [ForeignKey("Game")]
        public int GameId { get; set; }
        public Game Game { get; set; }
    }
}
