using Ecommerceish.Data.Repository.Base;
using Ecommerceish.Domain.DomainServices;
using Ecommerceish.Domain.Entities.Seguranca;
using Ecommerceish.Domain.Interfaces.DomainServices;
using Ecommerceish.Domain.Interfaces.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace Ecommerceish.CrossCutting.Extensions.Injection
{
    public static class DependencyInjection
    {
        public static void AddDependencies(this IServiceCollection services)
        {
            //Repository
            services.AddScoped<IRepository<Usuario>,BaseRepository<Usuario>>();

            //Domain Services
            services.AddScoped<IUsuarioDomainService,UsuarioDomainService>();
        }
    }
}