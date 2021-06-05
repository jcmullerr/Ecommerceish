using MediatR;

namespace Ecommerceish.Domain.Command.Produtos.Adicionar
{
    public class AdicionarProdutoCommand : IRequest<bool>
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal ValorCusto { get; set; }
        public decimal PercentualLucro { get; set; }
    }
}