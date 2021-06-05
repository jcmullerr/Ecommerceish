using Ecommerceish.Domain.Entities.Base;

namespace Ecommerceish.Domain.Entities.Produtos
{
    public class Produto : Entity
    {
        public string Nome { get; private set; }
        public string Descricao { get; private set; }
        public decimal ValorCusto { get; private set; }
        public decimal PercentualLucro { get; private set; }

        public Produto()
        { }

        public Produto(
            long id,
            string nome, 
            string descricao, 
            decimal valorCusto, 
            decimal percentualLucro
        )
        {
            Id = id;
            Nome = nome;
            Descricao = descricao;
            ValorCusto = valorCusto;
            PercentualLucro = percentualLucro;
        }

        public Produto(
            string nome, 
            string descricao, 
            decimal valorCusto, 
            decimal percentualLucro
        ):base()
        {
            Nome = nome;
            Descricao = descricao;
            ValorCusto = valorCusto;
            PercentualLucro = percentualLucro;
        }
    }
}