import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import {QueryClient, QueryClientProvider} from "react-query";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {Card, Col, Container, FormControl, Row} from "react-bootstrap";

const queryClient = new QueryClient()

const MyApp = ({Component, pageProps}) =>
    <QueryClientProvider client={queryClient}>
        <Head>
            <title>Cars</title>
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to <Link href={`/`}>Supercars</Link> Gallery!
            </h1>
            <br/>
            <Component {...pageProps} />
        </main>



        <footer className={styles.footer}>
            <a
                href="https://github.com/rbiedrawa"
                target="_blank"
                rel="noopener noreferrer"
            >
                Copyright © rbiedrawa
            </a>
        </footer>
    </QueryClientProvider>
;

export default MyApp