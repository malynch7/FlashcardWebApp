using FlashcardService.Domain.Entities;
using FlashcardService.Domain.Repositories;
using FlashcardService.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FlashcardService.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly FlashcardDbContext _flashcardDbContext;

        public UserRepository(FlashcardDbContext flashcardDbContext)
        {
            _flashcardDbContext = flashcardDbContext;
        }

        public async Task<User> CreateAsync(User user)
        {
            _flashcardDbContext.Users.Add(user);

            await _flashcardDbContext.SaveChangesAsync();

            return user;
        }

        public async Task DeleteByIdAsync(int id)
        {
            var user = await this.GetByIdAsync(id);
            if (user == null) throw new Exception("User does not exist");

            _flashcardDbContext.Users.Remove(user);

            await _flashcardDbContext.SaveChangesAsync();
        }

        public async Task<User?> GetByIdAsync(int id)
        {
            var user = await _flashcardDbContext.Users
                .Where(u => u.Id == id)
                .FirstOrDefaultAsync();

            return user;
        }

        public async Task<User?> GetByAuthIdAsync(string authId)
        {
            var user = await _flashcardDbContext.Users
                .Where(u => u.AuthId == authId)
                .FirstOrDefaultAsync();

            return user;
        }

        public async Task<User> UpdateAsync(User user)
        {
            _flashcardDbContext.Users.Update(user);

            await _flashcardDbContext.SaveChangesAsync();

            return user;
        }

    }
}
