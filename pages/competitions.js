import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Competitions.module.css";
import Topnav from "../components/Topnav/topnav";
import Footer from "../components/Footer/footer";
import { useState } from "react";

export default function Competitions() {
    const [competition, setCompetition] = useState(0);

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
                            <h1 className={styles.title}>Competitions</h1>
                            <p
                                className={styles.code}
                                onClick={() => setCompetition(0)}
                            >
                                NOI
                            </p>
                            <p
                                className={styles.code}
                                onClick={() => setCompetition(1)}
                            >
                                WhiteHacks
                            </p>
                            <p
                                className={styles.code}
                                onClick={() => setCompetition(2)}
                            >
                                BrainHack
                            </p>
                        </div>
                        <div className={styles.courseDiv}>
                            {competition === 0 && (
                                <>
                                    <h1 className={styles.title}>NOI</h1>
                                    <p className={styles.text}>
                                        The Singapore National Olympiad in
                                        Informatics (NOI) is modelled after the
                                        International Olympiad in Informatics
                                        (IOI), the ultimate international
                                        competition in computing (Informatics is
                                        the European term for computer science).
                                        NOI emphasises creativity in problem
                                        solving on the one hand, and programming
                                        skill and expertise on the other. The
                                        competition aims to spur interest in the
                                        school community of programming, and
                                        equip students with knowledge beyond
                                        that of a mere IT application user, in
                                        line with the national goal of creating
                                        an IT-savvy nation. NOI is hosted
                                        annually by the School of Computing of
                                        NUS.
                                    </p>
                                    <Image
                                        src="/noi.png"
                                        width={1000}
                                        height={320}
                                        alt="NOI Banner"
                                    />
                                </>
                            )}
                            {competition === 1 && (
                                <>
                                    <h1 className={styles.title}>WhiteHacks</h1>
                                    <p className={styles.text}>
                                        WhiteHacks by SMU Whitehat Society is an
                                        introductory competition benchmarking
                                        cybersecurity potential. It is delivered
                                        in a series of challenges which the
                                        participating teams have to solve to
                                        claim points. The team with the highest
                                        score at the end will be the grand
                                        winner for the competition.
                                    </p>
                                    <Image
                                        src="/whitehacks.jpeg"
                                        width={288}
                                        height={175}
                                        alt="WhiteHacks Banner"
                                    />
                                </>
                            )}
                            {competition === 2 && (
                                <>
                                    <h1 className={styles.title}>BrainHack</h1>
                                    <p className={styles.text}>
                                        Organised by the Defence Science and
                                        Technology Agency (DSTA), BrainHack is a
                                        unique, hands-on experience into the
                                        swiftly evolving world of digital tech.
                                        Students get to experience the realms of
                                        cybersecurity, Artificial Intelligence
                                        (AI), space technologies, app
                                        development, fake news detection,
                                        extended reality and more!
                                    </p>
                                    <Image
                                        src="/brainhack.png"
                                        width={439}
                                        height={136}
                                        alt="BrainHack Banner"
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
