using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Ecommerceish.Domain.DomainServices;
using Ecommerceish.Domain.Entities.Seguranca;
using Ecommerceish.Domain.Command;
using MediatR;
using System;

namespace Ecommerceish.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly IMediator _mediator;

        public LoginController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginCommand loginCommand)
        {
            var token = await _mediator.Send(loginCommand);
            if (token == default)
                return BadRequest(new { Erro = "Deu muita merda meu caro" });

            return Ok(new { token });
        }
    }
}