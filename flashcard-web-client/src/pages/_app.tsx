import { Navbar } from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import { theme } from "@/styles/theme";
import {
    Container,
    CssBaseline,
    StyledEngineProvider,
    ThemeProvider,
} from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Flashcard App</title>
                <meta name="Flashcard App" content="Flashcard App" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst>
                    <CssBaseline />
                    <Navbar />
                    <Container>
                        <Component {...pageProps} />{" "}
                    </Container>
                </StyledEngineProvider>
            </ThemeProvider>
        </>
    );
}
