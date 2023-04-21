using FlashcardService.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FlashcardService.Domain.Repositories
{
    public interface IUserRepository
    {
        Task<User> CreateAsync(User user);
        Task DeleteByIdAsync(int id);
        Task<User?> GetByIdAsync(int id);
        Task<User?> GetByAuthIdAsync(string authId);
    }
}
