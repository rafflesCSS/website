import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Incubator.module.css";
import Topnav from "../components/Topnav/topnav";
import Footer from "../components/Footer/footer";
import { useState } from "react";

export default function Incubator() {
    const [project, setProject] = useState(0);

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
                            <h1 className={styles.title}>Projects</h1>
                            <p
                                className={styles.code}
                                onClick={() => setProject(0)}
                            >
                                CCA Website
                            </p>
                            <p
                                className={styles.code}
                                onClick={() => setProject(1)}
                            >
                                BookUs
                            </p>
                        </div>
                        <div className={styles.courseDiv}>
                            {project === 0 && (
                                <>
                                    <h1 className={styles.title}>
                                        CCA Website
                                    </h1>
                                    <p className={styles.text}>
                                        This project is the website you are on
                                        right now! Using Figma and Next.js, CSS
                                        members{" "}
                                        <Link href="https://github.com/xyntechx">
                                            <a
                                                target="_blank"
                                                className={styles.link}
                                            >
                                                Nyx
                                            </a>
                                        </Link>
                                        ,{" "}
                                        <Link href="https://github.com/glenda-tann">
                                            <a
                                                target="_blank"
                                                className={styles.link}
                                            >
                                                Glenda
                                            </a>
                                        </Link>{" "}
                                        and{" "}
                                        <Link href="https://github.com/janani10734">
                                            <a
                                                target="_blank"
                                                className={styles.link}
                                            >
                                                Janani
                                            </a>
                                        </Link>{" "}
                                        designed and developed this website from
                                        scratch.
                                    </p>
                                    <Image
                                        src="/cca-web.png"
                                        width={360}
                                        height={225}
                                        alt="CCA Website"
                                    />
                                </>
                            )}
                            {project === 1 && (
                                <>
                                    <h1 className={styles.title}>BookUs</h1>
                                    <p className={styles.text}>
                                        BookUs is a centralised platform for
                                        booking academic consultations, study
                                        groups, and many more! This project was
                                        initiated and led by{" "}
                                        <Link href="https://github.com/xyntechx">
                                            <a
                                                target="_blank"
                                                className={styles.link}
                                            >
                                                Nyx
                                            </a>
                                        </Link>
                                        , who believes in a hassle-free school
                                        life. BookUs was brought to life by a
                                        dedicated and skilled team of CSS
                                        members using Next.js, Tailwind CSS and
                                        Supabase.
                                    </p>
                                    <Image
                                        src="/bookus.png"
                                        width={360}
                                        height={225}
                                        alt="BookUs"
                                    />
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
