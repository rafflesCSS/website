import Head from "next/head";
import Image from "next/image";
import styles from "../styles/IG.module.css";
import Topnav from "../components/Topnav/topnav";
import Footer from "../components/Footer/footer";
import { useState } from "react";

export default function IGs() {
    const [ig, setIg] = useState(0);

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
                        <div className={styles.navDiv}>
                            <h1 className={styles.title}>
                                2022 Interest Groups
                            </h1>
                            <p className={styles.code} onClick={() => setIg(0)}>
                                Web Development
                            </p>
                            <p className={styles.code} onClick={() => setIg(1)}>
                                Competitive Programming
                            </p>
                            <p className={styles.code} onClick={() => setIg(2)}>
                                Capture-The-Flag
                            </p>
                        </div>
                        <div className={styles.courseDiv}>
                            {ig === 0 && (
                                <>
                                    <h1 className={styles.title}>
                                        Web Development
                                    </h1>
                                    <p className={styles.text}>
                                        Beginners in the Web Development
                                        interest group learn how to develop
                                        websites using Next.js while experienced
                                        programmers develop web applications
                                        using said framework.
                                    </p>
                                    <div className={styles.image}>
                                        <Image
                                            src="/echoclass.png"
                                            width={360}
                                            height={225}
                                            alt="EchoClass"
                                        />
                                    </div>
                                </>
                            )}
                            {ig === 1 && (
                                <>
                                    <h1 className={styles.title}>
                                        Competitive Programming
                                    </h1>
                                    <p className={styles.text}>
                                        Students in this interest group improve
                                        on their problem-solving skills and
                                        competitive programming expertise.
                                    </p>
                                </>
                            )}
                            {ig === 2 && (
                                <>
                                    <h1 className={styles.title}>
                                        Capture-The-Flag
                                    </h1>
                                    <p className={styles.text}>
                                        This interest group delves into the
                                        techniques and skills useful for
                                        capture-the-flag (CTF) competitions.
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </div>
    );
}
