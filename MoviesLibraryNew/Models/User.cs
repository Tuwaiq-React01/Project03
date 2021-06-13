using System.Collections.Generic;

namespace MoviesLibraryNew.Models
{
    public class User
    {
        public int Id { get; set; }
        public string GoogleId { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        
        public ICollection<FavoriteMovie> FavoriteMovie { get; set; }
        public ICollection<FavoriteTvShow> FavoriteTvShow { get; set; }
    }
}