using Ecommerceish.Domain.Entities.Produtos;
using MediatR;

namespace Ecommerceish.Domain.Command.Produtos.Obter
{
    public class ObterProdutoCommand : IRequest<Produto>
    {
        public long ProdutoId { get; set; }
    }
}