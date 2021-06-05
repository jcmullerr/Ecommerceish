using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Ecommerceish.Domain.Command.Produtos.Base;
using Ecommerceish.Domain.Entities.Produtos;
using Ecommerceish.Domain.Interfaces.Repositories;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Ecommerceish.Domain.Command.Produtos.Obter
{
    public class ListarProdutosCommandHandler : ProdutoCommandHandlerBase, IRequestHandler<ListarProdutosCommand, IEnumerable<Produto>>
    {
        public ListarProdutosCommandHandler(IRepository<Produto> produtoRepository) : base(produtoRepository)
        { }

        public async Task<IEnumerable<Produto>> Handle(ListarProdutosCommand request, CancellationToken cancellationToken)
        {
            return await _produtoRepository.GetQuery().ToListAsync();
        }
    }
}