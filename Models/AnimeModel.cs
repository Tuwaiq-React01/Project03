using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ASP.NETCoreWebApplication.Models
{
    public class AnimeModel
    {
        public int Id { get; set; }
        [MaxLength(255)]
        public string Title { get; set; }
        [MaxLength(255)]
        public string Type { get; set; }
        [MaxLength(255)]
        public string ImageUrl { get; set; }

        [JsonIgnore]
        public UsersModel User { get; set; }
        public int UserId { get; set; }
    }
}