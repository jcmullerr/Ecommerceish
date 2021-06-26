using MediatR;

namespace Ecommerceish.Domain.Command.Login
{
    public class CadastrarLoginUsuarioCommand : IRequest<bool>
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}