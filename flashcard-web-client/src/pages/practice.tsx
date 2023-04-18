import { FlashcardCard } from "@/components/cards/Flashcard/FlashcardCard";
import styles from "@/styles/Practice.module.css";
import { Box, IconButton, Typography } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import FlipIcon from "@mui/icons-material/Flip";
import { FlashcardDeck } from "@/models/FlashcardDeck";

const Practice: NextPage = () => {
    let demoDeck: FlashcardDeck = {
        id: 1,
        cards: [
            {
                id: 1,
                frontText: "2+2",
                backText: "4",
            },
            {
                id: 2,
                frontText: "5+5",
                backText: "10",
            },
            {
                id: 3,
                frontText: "9+9",
                backText: "18",
            },
        ],
    };
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [currentCardIsFlipped, setCurrentCardIsFlipped] = useState(false);

    const getNextCard = () => {
        if (currentCardIndex > demoDeck.cards.length - 1) return;
        setCurrentCardIsFlipped(false);
        setCurrentCardIndex((currentCardIndex) => currentCardIndex + 1);
    };
    const getPreviousCard = () => {
        if (currentCardIndex < 1) return;
        setCurrentCardIsFlipped(false);
        setCurrentCardIndex((currentCardIndex) => currentCardIndex - 1);
    };

    const handleFlip = () => {
        setCurrentCardIsFlipped(!currentCardIsFlipped);
    };

    return (
        <main className={styles.main}>
            <Typography variant="h2">Practice</Typography>
            <FlashcardCard
                flashcard={demoDeck.cards[currentCardIndex]}
                isFlipped={currentCardIsFlipped}
                handleFlip={handleFlip}
            />
            <Box className={styles.controls}>
                <IconButton
                    onClick={getPreviousCard}
                    disabled={currentCardIndex < 1}
                >
                    <NavigateBeforeIcon />
                </IconButton>
                <IconButton onClick={handleFlip}>
                    <FlipIcon />
                </IconButton>
                <IconButton
                    onClick={getNextCard}
                    disabled={currentCardIndex > demoDeck.cards.length - 2}
                >
                    <NavigateNextIcon />
                </IconButton>
            </Box>
        </main>
    );
};

export default Practice;
