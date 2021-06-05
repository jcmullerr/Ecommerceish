using MediatR;

namespace Ecommerceish.Domain.Command.Produtos.Remover
{
    public class RemoverProdutoCommand : IRequest<bool>
    {
        public long Id { get; set; }
    }
}