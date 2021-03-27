using System.Threading.Tasks;
using Ecommerceish.Domain.Command;
using Ecommerceish.Domain.Entities.Seguranca;
using Ecommerceish.Domain.Interfaces.DomainServices;
using Ecommerceish.Domain.Interfaces.Repositories;

namespace Ecommerceish.Domain.DomainServices
{
    public class UsuarioDomainService : IUsuarioDomainService
    {
        private readonly IRepository<Usuario> _repository;

        public UsuarioDomainService(IRepository<Usuario> repository)
        {
            _repository = repository;
        }

        public async Task<string> GerarToken(LoginCommand command)
        {
            var usuario = await _repository.GetSingle(x => x.Email == command.Email && x.Senha == command.Senha);
            if(usuario == default)
                return default;

            return TokenDomainService.GenerateToken(usuario);
        }
    }
}