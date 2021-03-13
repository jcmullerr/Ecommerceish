using System;

namespace Ecommerceish.Domain.Entities.Base
{
    public class BaseModel
    {
        public long Id { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataModificacao { get; set; }
    }
}