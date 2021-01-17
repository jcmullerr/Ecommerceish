using System;
namespace Ecommerceish.DataModel.Models.Base
{
    public class BaseModel
    {
        public long Id { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataModificacao { get; set; }
    }
}