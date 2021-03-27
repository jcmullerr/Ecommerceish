using System.Threading.Tasks;
using Ecommerceish.Domain.Command;

namespace Ecommerceish.Domain.Interfaces.DomainServices
{
    public interface IUsuarioDomainService
    {
        Task<string> GerarToken(LoginCommand command);
    }
}