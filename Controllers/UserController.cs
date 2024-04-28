using Microsoft.AspNetCore.Mvc;
using Models;
using System.Collections.Generic;

namespace UserAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly List<User> _users = new List<User>();

        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            return Ok(_users);
        }

        [HttpGet("{id}")]
        public ActionResult<User> Get(int id)
        {
            var user = _users.Find(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public ActionResult<User> Post(User user)
        {
            _users.Add(user);
            return CreatedAtAction(nameof(Get), new { id = user.Id }, user);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, User updatedUser)
        {
            var userIndex = _users.FindIndex(u => u.Id == id);
            if (userIndex == -1)
            {
                return NotFound();
            }
            _users[userIndex] = updatedUser;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var user = _users.Find(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            _users.Remove(user);
            return NoContent();
        }
    }
}
