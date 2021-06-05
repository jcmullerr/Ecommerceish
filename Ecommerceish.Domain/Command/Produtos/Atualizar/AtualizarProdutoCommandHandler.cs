using System.Threading;
using System.Threading.Tasks;
using Ecommerceish.Domain.Command.Produtos.Base;
using Ecommerceish.Domain.Entities.Produtos;
using Ecommerceish.Domain.Interfaces.Repositories;
using MediatR;

namespace Ecommerceish.Domain.Command.Produtos.Atualizar
{
    public class AtualizarProdutoCommandHandler : ProdutoCommandHandlerBase, IRequestHandler<AtualizarProdutoCommand, bool>
    {
        public AtualizarProdutoCommandHandler(IRepository<Produto> produtoRepository) : base(produtoRepository)
        { }

        public async Task<bool> Handle(AtualizarProdutoCommand request, CancellationToken cancellationToken)
        {
            var produto = new Produto(
                request.Id,
                request.Nome,
                request.Descricao,
                request.ValorCusto,
                request.PercentualLucro
            );
            
            return await _produtoRepository.Update(produto);
        }
    }
}