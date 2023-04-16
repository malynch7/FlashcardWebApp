import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";
import { FC } from "react";
import Link from "next/link";

export const Navbar: FC = () => {
    return (
        <AppBar className={styles.appbar}>
            <Toolbar className={styles.toolbar}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    className={styles.menu_btn}
                >
                    <MenuIcon />
                </IconButton>
                <Link href="/" className={styles.logo}>
                    <Typography variant="h4">Flashcard App</Typography>
                </Link>
                <Box className={styles.primary_button_group}>
                    <Link href="/play">
                        <Button color="inherit">Play</Button>
                    </Link>
                    <Link href="/practice">
                        <Button color="inherit">Practice</Button>
                    </Link>
                </Box>
                <Box className={styles.secondary_button_group}>
                    <Button color="inherit">Login</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
