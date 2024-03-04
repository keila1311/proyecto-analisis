using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace sistema_bancario_post.Data.Entities.Login
{
    [Table("USERLOGIN")]
    public class USERLOGIN
    {
        [Key]
        public int USERID { get; set; }
        public string? LOGINNAME { get; set; }
        public string? PASSWORD { get; set; }

    }
}
