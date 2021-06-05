using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Ecommerceish.Domain.Entities.Base;
using Ecommerceish.Domain.Entities.Produtos;
using Ecommerceish.Domain.Entities.Seguranca;
using Ecommerceish.Domain.Interfaces.Data;
using Microsoft.EntityFrameworkCore;

namespace Ecommerceish.Data.Data.Concrete
{
    public class Context : DbContext, IContext
    {
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Produto> Produtos { get; set; }

        public Context(DbContextOptions<Context> options) : base(options){}

        public DbSet<T> GetDbSet<T>() where T : Entity, new()
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