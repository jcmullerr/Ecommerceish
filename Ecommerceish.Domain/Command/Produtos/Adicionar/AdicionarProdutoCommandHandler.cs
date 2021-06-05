using System.Threading;
using System.Threading.Tasks;
using Ecommerceish.Domain.Command.Produtos.Base;
using Ecommerceish.Domain.Entities.Produtos;
using Ecommerceish.Domain.Interfaces.Repositories;
using MediatR;

namespace Ecommerceish.Domain.Command.Produtos.Adicionar
{
    public class AdicionarProdutoCommandHandler : ProdutoCommandHandlerBase, IRequestHandler<AdicionarProdutoCommand, bool>
    {
        public AdicionarProdutoCommandHandler(IRepository<Produto> produtoRepository) : base(produtoRepository)
        { }

        public async Task<bool> Handle(AdicionarProdutoCommand request, CancellationToken cancellationToken)
        {
            var produto = new Produto(
                request.Nome,
                request.Descricao,
                request.ValorCusto,
                request.PercentualLucro
            );

            return await _produtoRepository.Insert(produto);
        }
    }
}