using FlashcardService.Domain.Entities;
using FlashcardService.Domain.Repositories;
using FlashcardService.Domain.Services;
using System.Net.Security;

namespace FlashcardService.Application.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;


        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User?> GetUserByAuthId(string authId)
        {
            return await _userRepository.GetByAuthIdAsync(authId);
        }
    }
}