using System.Threading;
using System.Threading.Tasks;
using Ecommerceish.Domain.Command.Produtos.Base;
using Ecommerceish.Domain.Entities.Produtos;
using Ecommerceish.Domain.Interfaces.Repositories;
using MediatR;

namespace Ecommerceish.Domain.Command.Produtos.Remover
{
    public class RemoverProdutoCommandHandler : ProdutoCommandHandlerBase, IRequestHandler<RemoverProdutoCommand, bool>
    {
        public RemoverProdutoCommandHandler(IRepository<Produto> produtoRepository) : base(produtoRepository)
        {
        }

        public async Task<bool> Handle(RemoverProdutoCommand request, CancellationToken cancellationToken)
        {
            return await _produtoRepository.Delete(request.Id);
        }
    }
}