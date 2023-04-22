using FlashcardService.Application.Services;
using FlashcardService.Domain.Repositories;
using FlashcardService.Domain.Services;
using FlashcardService.Infrastructure.Data;
using FlashcardService.Infrastructure.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Web;

var builder = WebApplication.CreateBuilder(args);

// SERVICES
builder.Services.AddScoped<IUserService, UserService>();

// REPOSITORIES
builder.Services.AddScoped<IUserRepository, UserRepository>();

// EF
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<FlashcardDbContext>(x => x.UseSqlServer(connectionString));

// CORS
const string CORS_POLICY = "FlashcardCorsPolicy";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: CORS_POLICY,
                      corsPolicyBuilder =>
                      {
                          corsPolicyBuilder.AllowAnyOrigin();
                          corsPolicyBuilder.AllowAnyMethod();
                          corsPolicyBuilder.AllowAnyHeader();
                      });
});

// AZURE B2C
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddMicrosoftIdentityWebApi(options =>
            {
                builder.Configuration.Bind("AzureAdB2C", options);

                options.TokenValidationParameters.NameClaimType = "name";
            },
    options => { builder.Configuration.Bind("AzureAdB2C", options); });

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
