using System;
using System.Net.Http;

namespace EF_Core_With_React.Controllers
{
    public class FetchAPI
    {
        public static string httpReq(string api)
        {
            using (var client = new HttpClient())
            {
                var uri = new Uri(api);

                var resonse = client.GetAsync(uri);
                resonse.Wait();
                string res = resonse.Result.Content.ReadAsStringAsync().Result;

                return res;
            }
        }
    }
}
