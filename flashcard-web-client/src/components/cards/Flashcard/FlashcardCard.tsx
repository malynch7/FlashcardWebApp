import { Card, CardActions, CardContent } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styles from "./FlashcardCard.module.css";
import { FC, useState } from "react";
import { Flashcard } from "@/models/Flashcard";

interface FlashcardCardProps {
    flashcard: Flashcard;
}

export const FlashcardCard: FC<FlashcardCardProps> = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            onClick={handleFlip}
            className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
        >
            <Card className={styles.front}>
                <CardContent className={styles.content}>
                    <p>{props.flashcard.frontText}</p>
                </CardContent>
                <CardActions className={styles.actions}>
                    <ArrowRightAltIcon />
                </CardActions>
            </Card>
            <Card className={styles.back}>
                <CardContent className={styles.content}>
                    <p>{props.flashcard.backText}</p>
                </CardContent>
                <CardActions className={styles.actions}>
                    <ArrowRightAltIcon />
                </CardActions>
            </Card>
        </div>
    );
};
