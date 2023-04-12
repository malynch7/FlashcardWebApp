import styles from "@/styles/Home.module.css";
import { Box, Button, Link, Typography } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <Box className={styles.main}>
            <Typography variant="h3">Welcome to Flashcard App!</Typography>
            <Box className={styles.button_group}>
                <Link href="/play">
                    <Button variant="contained">Play</Button>
                </Link>
                <Link href="/create">
                    <Button variant="contained">Create</Button>
                </Link>
                <Link href="/practice">
                    <Button variant="contained">Practice</Button>
                </Link>
            </Box>
        </Box>
    );
};

export default Home;
