import styles from "@/styles/Create.module.css";
import { InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { NextPage } from "next";

const Create: NextPage = () => {
    return (
        <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
            <main className={styles.main}>
                <h1>Create Page</h1>
            </main>
        </MsalAuthenticationTemplate>
    );
};

export default Create;
