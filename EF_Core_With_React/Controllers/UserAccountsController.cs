using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using EF_Core_With_React.Data;
using EF_Core_With_React.Models;
using Microsoft.AspNetCore.Mvc;


namespace EF_Core_With_React.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserAccountsController : Controller
    {

        private readonly AppDbContext _db;

        public UserAccountsController(AppDbContext context)
        {
            _db = context;
        }


        [HttpGet("{id:int}")]
        // GET: /<controller>/
        public IActionResult Index([FromRoute] int id)
        {
            var userAcc =
                 from account in _db.UserAccounts
                 join user in _db.Users on account.UserId equals user.Id
                 where account.UserId == id
                 select new{
                     //    account,
                     user.Name, account.Email,
                     account.DateOfBirth, account.JoiningDate,
                     account.User.Image, account.Password
                 };
            return Ok(userAcc);
        }



        [HttpPut("EditAccount/{id:int}")]
        [HttpPost("EditAccount/{id:int}")]

        //[ValidateAntiForgeryToken]
        public IActionResult EditAccount(int id, User user)
        {

            //var accountToUpdate = _db.UserAccounts.Find(id);
            //if (accountToUpdate != null)
            //{
            Console.WriteLine(user.Id);
            _db.Users.Update(user);
            _db.SaveChanges();
            var accountToUpdate = _db.Users.Find(id);

            return Ok(accountToUpdate);
            //}
        //return NotFound();
        }
    
    }
}
