namespace sistema_bancario_post.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sistema_bancario_post.Data;
using sistema_bancario_post.Data.Entities.Login;

[ApiController]
[Route("analisis1/[controller]")]
public class UserLoginController : ControllerBase
{
    private readonly UserLoginTable _userLoginTable;
    public UserLoginController(UserLoginTable userLoginTable)
    {
        _userLoginTable = userLoginTable;
    }

    [HttpGet]
    public async Task<IActionResult> GetAsync()
    {
        var userLoginGet = await _userLoginTable.Logins.ToListAsync();
        return Ok(userLoginGet);
    }

    [HttpPost]
    public async Task<IActionResult> PostAsync(USERLOGIN log)
    {
        var userLoginPost = await _userLoginTable.Logins.AddAsync(log);
        await _userLoginTable.SaveChangesAsync();
        return Ok(userLoginPost.Entity);
    }

}

