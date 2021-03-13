using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Ecommerceish.Domain.Entities.Base;

namespace Ecommerceish.Data.Data.Interface
{
    public interface IContext
    {
        DbSet<T> GetRepository<T>() where T : BaseModel, new();
        Task<int> SaveChanges(CancellationToken cancellationToken = default(CancellationToken));
    }
}