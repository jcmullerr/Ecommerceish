using MediatR;

namespace Ecommerceish.Domain.Command
{
    public class LoginCommand : IRequest<string>
    {
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}