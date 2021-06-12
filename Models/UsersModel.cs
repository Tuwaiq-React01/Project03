using System.Collections.Generic;

namespace ASP.NETCoreWebApplication.Models
{
    public class UsersModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<AnimeModel> Anime { get; set; }
        // -------------------------------

        public UserInfoModel UserInfo { get; set; }
        public int UserInfoId { get; set; }
    }
}