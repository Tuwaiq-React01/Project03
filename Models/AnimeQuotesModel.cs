using System.ComponentModel.DataAnnotations;

namespace ASP.NETCoreWebApplication.Models
{
    public class AnimeQuotesModel
    {
        public int Id { get; set; }
        [MaxLength(255)]
        public string Quote { get; set; }
        [MaxLength(255)]
        public string Character { get; set; }
        [MaxLength(255)]
        public string CharDescreption { get; set; }
    }
}