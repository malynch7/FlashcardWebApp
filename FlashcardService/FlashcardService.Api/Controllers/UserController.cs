using FlashcardService.Domain.Services;
using Microsoft.AspNetCore.Mvc;

namespace FlashcardService.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private IUserService _userService;

        public UserController(ILogger<UserController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpGet]
        public async Task<IActionResult> GetUserByAuthId()
        {
            try
            {
                return (Ok(await _userService.GetUserByAuthId("999")));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}