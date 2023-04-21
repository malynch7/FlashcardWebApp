using FlashcardService.Domain.Entities;

namespace FlashcardService.Domain.Services
{
    public interface IUserService
    {
        Task<User> GetUserByAuthId(string authId);

    }
}