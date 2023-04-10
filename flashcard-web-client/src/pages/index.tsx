import styles from "@/styles/Home.module.css";
import { Button, Link } from "@mui/material";
import { NextPage } from "next";


const Home: NextPage = () => {
    return (
        <main className={styles.main}>
                <h1>Welcome to Flashcard App!</h1>
                <Link href="/play"><Button variant="contained">Play</Button></Link>
                <Link href="/create"><Button variant="contained">Create</Button></Link>
                <Link href="/practice"><Button variant="contained">Practice</Button></Link>
        </main>
    );
};

export default Home;
