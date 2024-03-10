using Microsoft.EntityFrameworkCore;
using sistema_bancario_post.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//Service container

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<UserLoginTable>(options =>
{
    options.UseOracle(builder.Configuration.GetConnectionString("UserLoginTable"));
}
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
