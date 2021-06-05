using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Ecommerceish.Domain.Entities.Base;
using Ecommerceish.Domain.Interfaces.Data;
using Ecommerceish.Domain.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Ecommerceish.Data.Repository.Base
{
    public class BaseRepository<T> : IRepository<T> where T : Entity, new()
    {
        private readonly DbSet<T> _dbSet;
        private readonly IContext _context;

        public BaseRepository(IContext context)
        {
            _dbSet = context.GetDbSet<T>();
            _context = context;
        }

        public async Task<bool> Delete(long id)
        {
            try
            {
                var data = await _dbSet.Where(x => x.Id == id).FirstOrDefaultAsync();
                _dbSet.Remove(data);
                await _context.SaveChanges();

            }
            catch (Exception ex)
            {
                return false;
            }

            return true;
        }

        public async Task<List<T>> GetMany(Expression<Func<T, bool>> predicate)
        {
            return await GetQuery().Where(predicate).ToListAsync();
        }

        public async Task<T> GetSingle(Expression<Func<T, bool>> predicate,bool noTrcking = false)
        {
            if(noTrcking)
                return await _dbSet.AsNoTracking().Where(predicate).FirstOrDefaultAsync();
            else
                return await GetQuery().Where(predicate).FirstOrDefaultAsync();
        }

        public async Task<bool> Insert(T model)
        {
            try
            {
                await _dbSet.AddAsync(model);
                await _context.SaveChanges();
            }
            catch (Exception ex)
            {
                return false;
            }

            return true;
        }

        public async Task<bool> Update(T model)
        {
            try
            {
                _dbSet.Update(model);
                await _context.SaveChanges();
            }
            catch (Exception ex)
            {
                return false;
            }

            return true;
        }

        public virtual IQueryable<T> GetQuery()
        {
            /*
             Criar expression para carregar objetos relacionados
             */
            var query = _dbSet;
            var expression = new List<Expression<Func<T, object>>>();

            Type type = typeof(T);
            foreach (var prop in type.GetProperties().Where(p => p.GetMethod.IsVirtual))
            {
                var parameterExpression = Expression.Parameter(type);
                var exp = Expression.PropertyOrField(parameterExpression, prop.Name);
                var lamb = Expression.Lambda<Func<T, object>>(exp, parameterExpression);
                query.Include(lamb);
            }

            return query.AsQueryable();
        }
    }
}