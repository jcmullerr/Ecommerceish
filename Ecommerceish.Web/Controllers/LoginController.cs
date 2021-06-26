using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Ecommerceish.Domain.Command;
using MediatR;
using Ecommerceish.Domain.Command.Login;

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
                return BadRequest(new { Erro = "Credenciais incorretas" });

            return Ok(new { token });
        }

        [HttpPost("cadastro")]
        [AllowAnonymous]
        public async Task<IActionResult> CadastrarUsuario([FromBody] CadastrarLoginUsuarioCommand cadastrarLoginUsuarioCommand)
        {
            var token = await _mediator.Send(cadastrarLoginUsuarioCommand);
            if (token == default)
                return BadRequest(new { Erro = "Não foi possivel cadastrar o usuario" });

            return Ok();
        }
    }
}