import { Flashcard } from "./Flashcard";
import { User } from "./User";

export interface FlashcardDeck {
    id: number;
    author?: User;
    cards: Flashcard[];
}
