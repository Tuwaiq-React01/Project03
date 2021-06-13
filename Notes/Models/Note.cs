namespace Notes.Models
{
    public class Note
    {
        private static int auto_id = 1;
        public int Id {get; set;}
        public string Title {get; set;}
        public string text {get; set;}
        public string color {get; set;}
        public Note()
        {
            Id = auto_id++;
        }
    }
}