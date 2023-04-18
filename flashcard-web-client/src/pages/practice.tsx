import { FlashcardCard } from "@/components/cards/Flashcard/FlashcardCard";
import { Flashcard } from "@/models/Flashcard";
import styles from "@/styles/Practice.module.css";
import { Typography } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Practice: NextPage = () => {
    let demoCard: Flashcard = {
        id: 1,
        frontText: "2+2",
        backText: "4",
    };
    const [currentCard, setCurrentCard] = useState(demoCard);

    return (
        <main className={styles.main}>
            <Typography variant="h2">Practice</Typography>
            <FlashcardCard flashcard={currentCard} />
        </main>
    );
};

export default Practice;
