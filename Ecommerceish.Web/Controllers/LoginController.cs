using Ecommerceish.Web.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace Ecommerceish.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        public LoginController()
        { }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel loginObj)
        {
            return Ok();
        }
    }
}