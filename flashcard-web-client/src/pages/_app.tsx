import "@/styles/globals.css";
import { Roboto } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Flashcard App</title>
                <meta
                    name="Flashcard App"
                    content="Flashcard App"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={roboto.className}>
                <Component {...pageProps} />{" "}
            </main>
        </>
    )
}
