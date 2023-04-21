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
        clientId: "18115a2a-4e24-46c1-8cab-f18ed23f3ba2",
        authority:
            "https://mlynchdev.b2clogin.com/mlynchdev.onmicrosoft.com/B2C_1_register",
        knownAuthorities: ["mlynchdev.b2clogin.com"],
        redirectUri: "http://localhost:3000/",
    },
};

const msalInstance = new PublicClientApplication(configuration);

msalInstance
    .handleRedirectPromise()
    .then((tokenResponse) => {
        console.log(tokenResponse);
    })
    .catch((error) => {
        console.log(error);
    });

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
