namespace MoviesLibraryNew.Models
{
    public class FavoriteTvShow
    {
        public int Id { get; set; }
        
        public int UserId { get; set; }
        public User User { get; set; }
        public int TvShowId { get; set; }
        public TvShow TvShow { get; set; }
    }
}