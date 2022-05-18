import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Topnav from "../components/Topnav/topnav";
import Footer from "../components/Footer/footer";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Raffles CSS</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Raffles Computer Science Society"
                />
                <meta property="og:title" content="Raffles CSS" />
                <meta
                    property="og:description"
                    content="Raffles Computer Science Society"
                />
                <meta
                    property="og:image"
                    content="https://raffles-css.vercel.app/og-image.png"
                />
                <meta
                    property="og:url"
                    content="https://raffles-css.vercel.app/"
                />
                <meta property="og:type" content="website" />
            </Head>

            <Topnav />

            <main className={styles.main}>
                <section className={styles.bigDiv}>
                    <div className={styles.wrapper}>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLScCi9WujhVCyoixCQAAq9VDX28U55WJM0fYv9CqtAoxsY7smw/viewform?embedded=true"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                        />
                    </div>
                </section>
                <Footer />
            </main>
        </div>
    );
}
