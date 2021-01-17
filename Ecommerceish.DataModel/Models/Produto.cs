using Ecommerceish.DataModel.Models.Base;

namespace Ecommerceish.DataModel.Models
{
    public class Produto : BaseModel
    {
        public string Descricao { get; set; }
        public string Nome { get; set; }
        public decimal ValorVenda { get; set; }
        public decimal ValorCusto { get; set; }
    }
}