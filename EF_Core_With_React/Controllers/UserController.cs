using System;
using System.Linq;
using EF_Core_With_React.Data;
using EF_Core_With_React.Models;
using Microsoft.AspNetCore.Mvc;


namespace EF_Core_With_React.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly AppDbContext _db;

        public UserController(AppDbContext context)
        {
            _db = context;
        }


        // GET: /<controller>/
        public IActionResult Index(string color="black")
        {
            string img = "https://www.freeiconspng.com/uploads/controller-game-icon-10.png";
            ViewData["img"] = img;
            ViewData["color"] = color;
            return View();
        }



        [HttpPost("SignUp")]
        public ActionResult SignUp()
        {
            if (ModelState.IsValid)

            {
                var f = (dynamic)TempData["user"];
                User newUser = new User() { Id = f.id, Name = f.name, Image = f.img };
                 _db.Users.Add(newUser);
                UserAccount newUserAcc = new UserAccount() { Id = f.id, Email = f.email, UserId = f.id };
                 _db.UserAccounts.Add(newUserAcc);
                 _db.SaveChanges();
                return Ok(newUserAcc);
            }
            return BadRequest();
        }
       

        [HttpPost("SignIn")]
        public ActionResult SignIn([FromQuery] int id,[FromQuery] string email, [FromQuery] string img, [FromQuery] string name)
        {
            UserAccount userSignedIn ;
            try
            {
                userSignedIn = _db.UserAccounts.Where((user) => user.Id == id && user.Email==email).First();
            }
            catch
            {
                if (ModelState.IsValid)
                {
                    User newUser = new User() { Id = id, Name = name, Image = img, ImageColor = null};
                    _db.Users.Add(newUser);

                    UserAccount newUserAcc = new() { Id = id, Email = email, UserId = id, JoiningDate= DateTime.Now };
                    _db.UserAccounts.Add(newUserAcc);
                    _db.SaveChanges();
                    return Ok("The account has been set up for the user "+ name);
                }
                else
                    return BadRequest();
                //return RedirectToAction("SignUp", "User");

            }
            return Ok(userSignedIn);
        }
    }
}
