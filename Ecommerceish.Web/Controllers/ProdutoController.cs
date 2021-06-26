using System.Linq;
using System.Threading.Tasks;
using Ecommerceish.Domain.Command.Produtos.Adicionar;
using Ecommerceish.Domain.Command.Produtos.Atualizar;
using Ecommerceish.Domain.Command.Produtos.Obter;
using Ecommerceish.Domain.Command.Produtos.Remover;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerceish.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutoController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ProdutoController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> ListarProdutosAsync()
        {
            var result = await _mediator.Send(new ListarProdutosCommand());            
            return Ok(result);
        }

        [HttpGet("{ProdutoId}")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> ObterProdutoAsync([FromRoute]ObterProdutoCommand command)
        {
            var result = await _mediator.Send(command);
            if(result == default)
                return NotFound(new {Message = "Produto não encontrado"});
            
            return Ok(result);
        }

        [HttpPost]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> AdicionarProdutoAsync(AdicionarProdutoCommand command)
        {
            var result = await _mediator.Send(command);
            if(!result)
                return BadRequest(new {Message = "Não foi possivel inserir o produto"});
            
            return Ok();
        }

        [HttpPut]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> AtualizarProdutoAsync(AtualizarProdutoCommand command)
        {
            var result = await _mediator.Send(command);
            if(!result)
                return BadRequest(new {Message = "Não foi possivel atualizar o produto"});
            
            return Ok();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> RemoverProdutoAsync([FromRoute]RemoverProdutoCommand command)
        {
            var result = await _mediator.Send(command);
            if(!result)
                return BadRequest(new {Message = "Não foi possivel atualizar o produto"});
            
            return Ok();
        }
    }
}