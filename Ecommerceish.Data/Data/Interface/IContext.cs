using System.Threading;
using System.Threading.Tasks;
using Ecommerceish.DataModel.Models;
using Ecommerceish.DataModel.Models.Base;
using Microsoft.EntityFrameworkCore;

namespace Ecommerceish.Data.Data.Interface
{
    public interface IContext
    {
        DbSet<T> GetRepository<T>() where T : BaseModel, new();
        Task<int> SaveChanges(CancellationToken cancellationToken = default(CancellationToken));
        DbSet<Produto> Produtos{get;set;}
    }
}