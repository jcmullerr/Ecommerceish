using System.Threading;
using System.Threading.Tasks;
using Ecommerceish.Domain.Interfaces.DomainServices;
using MediatR;

namespace Ecommerceish.Domain.Command
{
    public class LoginCommandHandler : IRequestHandler<LoginCommand, string>
    {
        private readonly IUsuarioDomainService _usuarioDomainService;

        public LoginCommandHandler(IUsuarioDomainService usuarioDomainService)
        {
            _usuarioDomainService = usuarioDomainService;
        }

        public async Task<string> Handle(LoginCommand request, CancellationToken cancellationToken)
        {
            var token = await _usuarioDomainService.GerarToken(request);
            if(token ==  default)
                return default;

            return token;
        }
    }
}