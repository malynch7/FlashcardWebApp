import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import styles from "./Navbar.module.css";
import { FC } from "react";
import Link from "next/link";

export const Navbar: FC = () => {
    return (
        <AppBar className={styles.appbar}>
            <Toolbar className={styles.toolbar}>
                <Box className={styles.primary_button_group}>
                    <Link href="/">
                        <Typography variant="h4">Flashcard App</Typography>
                    </Link>
                    <Link href="/play">
                        <Button color="inherit">Play</Button>
                    </Link>
                    <Link href="/practice">
                        <Button color="inherit">Practice</Button>
                    </Link>
                </Box>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};
