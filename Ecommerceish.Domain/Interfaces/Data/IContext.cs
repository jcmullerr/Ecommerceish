using System.Threading;
using System.Threading.Tasks;
using Ecommerceish.Domain.Entities.Base;
using Microsoft.EntityFrameworkCore;

namespace Ecommerceish.Domain.Interfaces.Data
{
    public interface IContext
    {
        DbSet<T> GetDbSet<T>() where T : BaseModel, new();
        Task<int> SaveChanges(CancellationToken cancellationToken = default(CancellationToken));
    }
}