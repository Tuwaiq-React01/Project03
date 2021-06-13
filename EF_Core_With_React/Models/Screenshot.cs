using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EF_Core_With_React.Models
{
    public class Screenshot
    {

        public int Id { get; set; }
        public string Image { get; set; }

        [ForeignKey("GameDetail")]
        public int GameDetailId { get; set; }
        public GameDetail GameDetail { get; set; }
    }
}