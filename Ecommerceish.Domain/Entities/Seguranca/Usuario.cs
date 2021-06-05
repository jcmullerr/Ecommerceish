using Ecommerceish.Domain.Entities.Base;

namespace Ecommerceish.Domain.Entities.Seguranca
{
    public class Usuario : Entity
    {
        public string Nome { get; private set; }
        public string Role { get; private set; }
        public string Email { get; private set; }
        public string Senha { get; private set; }

        public Usuario()
        { }

        public Usuario(
            string nome, 
            string role, 
            string email, 
            string senha
        ):base()
        {
            Nome = nome;
            Role = role;
            Email = email;
            Senha = senha;
        }
    }
}