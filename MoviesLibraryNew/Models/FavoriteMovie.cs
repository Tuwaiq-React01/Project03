namespace MoviesLibraryNew.Models
{
    public class FavoriteMovie
    {
        public int Id { get; set; }
        
        public int UserId { get; set; }
        public User User { get; set; }
        public int MovieId { get; set; }
        public Movie Movie { get; set; }
        
    }
}