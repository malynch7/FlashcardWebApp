using Microsoft.EntityFrameworkCore;
using FlashcardService.Domain.Entities;

namespace FlashcardService.Infrastructure.Data
{
    public class FlashcardDbContext : DbContext
    {
        public FlashcardDbContext(DbContextOptions<FlashcardDbContext> options) : base(options)
        {
        }

        public virtual DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");
            });

        }
    }
}
