using System.Collections.Generic;
using Ecommerceish.Domain.Entities.Produtos;
using MediatR;

namespace Ecommerceish.Domain.Command.Produtos.Obter
{
    public class ListarProdutosCommand : IRequest<IEnumerable<Produto>>
    {
        
    }
}