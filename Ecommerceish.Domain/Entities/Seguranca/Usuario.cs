using Ecommerceish.Domain.Entities.Base;

namespace Ecommerceish.Domain.Entities.Seguranca
{
    public class Usuario : BaseModel
    {
        public string Nome { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}