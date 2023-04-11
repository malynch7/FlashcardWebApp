import { Flashcard } from "@/models/Flashcard";
import { FlashcardDeck } from "@/models/FlashcardDeck";

const questions = [
    "Why did the chicken cross the road?",
    "2 + 2",
    "What color is the sky?",
    "5 - 1",
];

const answers = ["To get to the other side", "4", "Blue", "4"];

export const getDeck = async () => {
    // TODO: Replace with fetch
    let mockDeck: FlashcardDeck = {
        id: 999,
        author: {
            id: 555,
            firstName: "John",
            lastName: "Doe",
        },
        cards: [],
    };

    for (let i = 0; i < questions.length; i++) {
        let newCard: Flashcard = {
            id: i,
            frontText: questions[i],
            backText: answers[i],
        };
        mockDeck.cards.push(newCard);
    }

    return mockDeck;
};
