using MediatR;

namespace Ecommerceish.Domain.Command.Produtos.Atualizar
{
    public class AtualizarProdutoCommand : IRequest<bool>
    {
        public long Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal ValorCusto { get; set; }
        public decimal PercentualLucro { get; set; }
    }
}