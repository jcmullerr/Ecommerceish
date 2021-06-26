using System.Threading;
using System.Threading.Tasks;
using Ecommerceish.Domain.Entities.Seguranca;
using Ecommerceish.Domain.Interfaces.Repositories;
using MediatR;

namespace Ecommerceish.Domain.Command.Login
{
    public class CadastrarLoginUsuarioCommandHandler : IRequestHandler<CadastrarLoginUsuarioCommand, bool>
    {
        private readonly IRepository<Usuario> _usuarioRepository;

        public CadastrarLoginUsuarioCommandHandler(IRepository<Usuario> usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        public async Task<bool> Handle(CadastrarLoginUsuarioCommand request, CancellationToken cancellationToken)
        {
            var usuario = new Usuario(request.Nome,"admin",request.Email,request.Senha);
            return await _usuarioRepository.Insert(usuario);
        }
    }
}