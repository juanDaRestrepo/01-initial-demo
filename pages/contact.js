import Head from "next/head";
import Link from "next/link";
import { NavBar } from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1>Contact page</h1>
        <h1 className={styles.title}>
          Go to <Link href="/">Home</Link>
        </h1>
        <h1 className={styles.title}>
          Go to <Link href="/about">About</Link>
        </h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/contact.js</code>
        </p>
      </main>
    </div>
  );
}