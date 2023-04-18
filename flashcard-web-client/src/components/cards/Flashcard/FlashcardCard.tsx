import { Card, CardActions, CardContent, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styles from "./FlashcardCard.module.css";
import { FC } from "react";
import { Flashcard } from "@/models/Flashcard";

interface FlashcardCardProps {
    flashcard: Flashcard;
    isFlipped: boolean;
    handleFlip: Function;
    backHidden: boolean;
}

export const FlashcardCard: FC<FlashcardCardProps> = (props) => {
    return (
        <div
            onClick={() => props.handleFlip()}
            className={`${styles.card} ${
                props.isFlipped ? styles.flipped : ""
            }`}
        >
            <Card className={styles.front}>
                <CardContent className={styles.content}>
                    <p>{props.flashcard.frontText}</p>
                </CardContent>
                <CardActions className={styles.actions}>
                    <Typography variant="subtitle2">Answer</Typography>
                    <ArrowRightAltIcon />
                </CardActions>
            </Card>
            <Card className={styles.back}>
                <CardContent className={styles.content}>
                    <p className={props.backHidden ? styles.hidden : ""}>
                        {props.flashcard.backText}
                    </p>
                </CardContent>
                <CardActions className={styles.actions}>
                    <Typography variant="subtitle2">Question</Typography>
                    <ArrowRightAltIcon />
                </CardActions>
            </Card>
        </div>
    );
};
