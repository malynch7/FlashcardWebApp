import { Button, Card, CardActions, CardContent } from "@mui/material";
import styles from "./FlashcardCard.module.css";
import { FC } from "react";
import { Flashcard } from "@/models/Flashcard";

interface FlashcardCardProps {
    flashcard: Flashcard;
}

export const FlashcardCard: FC<FlashcardCardProps> = (props) => {
    return (
        <Card className={styles.card}>
            <CardContent>
                <p>{props.flashcard.frontText}</p>
                <p>{props.flashcard.backText}</p>
            </CardContent>
            <CardActions>
                <Button size="small">Flip</Button>
            </CardActions>
        </Card>
    );
};
