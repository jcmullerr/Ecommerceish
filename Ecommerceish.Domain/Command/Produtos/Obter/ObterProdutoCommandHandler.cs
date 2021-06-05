using System.Threading;
using System.Threading.Tasks;
using Ecommerceish.Domain.Command.Produtos.Base;
using Ecommerceish.Domain.Entities.Produtos;
using Ecommerceish.Domain.Interfaces.Repositories;
using MediatR;

namespace Ecommerceish.Domain.Command.Produtos.Obter
{
    public class ObterProdutoCommandHandler : ProdutoCommandHandlerBase, IRequestHandler<ObterProdutoCommand, Produto>
    {
        public ObterProdutoCommandHandler(IRepository<Produto> produtoRepository) : base(produtoRepository)
        { }

        public async Task<Produto> Handle(ObterProdutoCommand request, CancellationToken cancellationToken)
        {
            return await _produtoRepository.GetSingle(p => p.Id == request.ProdutoId);
        }
    }
}