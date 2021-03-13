using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Ecommerceish.Data.Data.Interface;
using Ecommerceish.Domain.Entities.Base;
using Microsoft.EntityFrameworkCore;

namespace Ecommerceish.Data.Data.Concrete
{
    public class Context : DbContext, IContext
    {
        public Context(DbContextOptions<Context> options) : base(options){}

        public DbSet<T> GetRepository<T>() where T : BaseModel, new()
        {
            Type type = this.GetType();
            Type repositoryType = typeof(DbSet<>).MakeGenericType(typeof(T));

            var propertyInfo = type.GetProperties().FirstOrDefault(p => p.PropertyType == repositoryType);

            return (DbSet<T>)propertyInfo.GetValue(this);
        }

        public async Task<int> SaveChanges(CancellationToken cancellationToken = default)
        {
            return await SaveChangesAsync(cancellationToken);
        }
    }
}