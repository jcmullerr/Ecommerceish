using Ecommerceish.Data.Data.Concrete;
using Ecommerceish.Domain.Interfaces.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Ecommerceish.CrossCutting.Extensions.Injection
{
    public static class ContextInjection
    {
        public static void AddContext(this IServiceCollection services,IConfiguration configuration)
        {
            services.AddDbContext<Context>(x => x.UseLazyLoadingProxies().UseSqlServer(configuration.GetConnectionString("Default")));
            services.AddScoped<IContext,Context>();
        }
    }
}