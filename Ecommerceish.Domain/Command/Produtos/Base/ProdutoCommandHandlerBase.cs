using Ecommerceish.Domain.Entities.Produtos;
using Ecommerceish.Domain.Interfaces.Repositories;

namespace Ecommerceish.Domain.Command.Produtos.Base
{
    public class ProdutoCommandHandlerBase
    {
        protected readonly IRepository<Produto> _produtoRepository;

        public ProdutoCommandHandlerBase(IRepository<Produto> produtoRepository)
        {
            _produtoRepository = produtoRepository;
        }
    }
}