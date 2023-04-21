import { Navbar } from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import { theme } from "@/styles/theme";
import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import {
    Container,
    CssBaseline,
    StyledEngineProvider,
    ThemeProvider,
} from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";

// MSAL configuration
const configuration: Configuration = {
    auth: {
        clientId: "Tal8Q~KOkYKm2F1S9gDoH62trh2oGKDMMjEZxa.l",
    },
};

const msalInstance = new PublicClientApplication(configuration);

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
                    <MsalProvider instance={msalInstance}>
                        <CssBaseline />
                        <Navbar />
                        <Container>
                            <Component {...pageProps} />{" "}
                        </Container>
                    </MsalProvider>
                </StyledEngineProvider>
            </ThemeProvider>
        </>
    );
}
