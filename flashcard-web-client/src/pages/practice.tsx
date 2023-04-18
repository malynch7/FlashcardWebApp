import { FlashcardCard } from "@/components/cards/Flashcard/FlashcardCard";
import styles from "@/styles/Practice.module.css";
import { Box, IconButton, Typography } from "@mui/material";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Tooltip from "@mui/material/Tooltip";
import FlipIcon from "@mui/icons-material/Flip";
import { FlashcardDeck } from "@/models/FlashcardDeck";
import { getDeck } from "@/hooks/service/flashcard.service";

const Practice: NextPage = () => {
    const [deck, setDeck] = useState<FlashcardDeck>();
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [currentCardIsFlipped, setCurrentCardIsFlipped] = useState(false);
    const [currentCardBackHidden, setCurrentCardBackHidden] = useState(true);

    const getNextCard = () => {
        if (!deck || currentCardIndex > deck.cards.length - 2) return;
        setCurrentCardBackHidden(true);
        setCurrentCardIsFlipped(false);
        setCurrentCardIndex((currentCardIndex) => currentCardIndex + 1);
    };
    const getPreviousCard = () => {
        if (currentCardIndex < 1) return;
        setCurrentCardBackHidden(true);
        setCurrentCardIsFlipped(false);
        setCurrentCardIndex((currentCardIndex) => currentCardIndex - 1);
    };

    const handleFlip = () => {
        setCurrentCardBackHidden(false);
        setCurrentCardIsFlipped(!currentCardIsFlipped);
    };

    const loadDeck = async () => {
        let deck: FlashcardDeck = await getDeck();
        setDeck(deck);
    };

    useEffect(() => {
        loadDeck();
    }, []);

    return (
        <main className={styles.main}>
            <Typography variant="h2">Practice</Typography>
            {deck != undefined && (
                <>
                    <FlashcardCard
                        flashcard={deck.cards[currentCardIndex]}
                        isFlipped={currentCardIsFlipped}
                        handleFlip={handleFlip}
                        backHidden={currentCardBackHidden}
                    />
                    <Box className={styles.controls}>
                        <Tooltip title="Previous">
                            <IconButton
                                onClick={getPreviousCard}
                                disabled={currentCardIndex < 1}
                            >
                                <NavigateBeforeIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Flip">
                            <IconButton onClick={handleFlip}>
                                <FlipIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Next">
                            <IconButton
                                onClick={getNextCard}
                                disabled={
                                    currentCardIndex > deck.cards.length - 2
                                }
                            >
                                <NavigateNextIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </>
            )}
        </main>
    );
};

export default Practice;
