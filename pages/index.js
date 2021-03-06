import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Topnav from "../components/Topnav/topnav";
import Footer from "../components/Footer/footer";
import { useState } from "react";

export default function Home() {
    const [viewEasterEgg, setViewEasterEgg] = useState(false);

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
                        <Image
                            src="/justlogo.png"
                            width={150}
                            height={195}
                            alt="Raffles CSS Logo"
                            className={styles.logo}
                        />
                        <div className={styles.subTitleDiv}>
                            <h1 className={styles.title}>
                                Raffles Computer Science Society
                            </h1>
                            <p
                                className={styles.code}
                                onClick={() => setViewEasterEgg(!viewEasterEgg)}
                            >
                                Technology makes us masters of a world that we
                                command by the push of a button
                            </p>
                            {viewEasterEgg && (
                                <p>and you&apos;ve pushed the button!</p>
                            )}
                        </div>
                    </div>
                </section>

                <section className={styles.bigDiv}>
                    <section className={styles.wrapperCol}>
                        <h1 className={styles.title}>About Us</h1>
                        <p className={styles.text}>
                            Raffles Computer Science Society is a CCA filled
                            with passionate individuals who believe in the power
                            of technology in transforming our way of life for
                            the better. We are a diverse group with a plethora
                            of interests, especially in Computer Science.
                            Students of all skill levels, from absolute
                            beginners to programming experts, are welcome in our
                            CCA, which meets every Wednesday (our school&apos;s
                            Gap Day) from 9 to 11am!
                        </p>
                        <br />
                        <p className={styles.text}>
                            <b>2021-22 Executive Committee</b>
                        </p>
                        <Image
                            src="/exco.png"
                            width={448}
                            height={240}
                            alt="2021-22 EXCO"
                        />
                        <p className={styles.text}>
                            <b>Members</b>
                        </p>
                        <div className={styles.memberPics}>
                            <Image
                                src="/ai.png"
                                width={448}
                                height={240}
                                alt="Group 1"
                            />
                            <Image
                                src="/webdevt.png"
                                width={448}
                                height={240}
                                alt="Group 2"
                            />
                        </div>
                    </section>
                </section>

                <section className={styles.bigDiv}>
                    <section className={styles.wrapperCol}>
                        <h1 className={styles.title}>Testimonials</h1>
                        <div className={styles.text}>
                            &quot;CSS is an enriching CCA for all who are
                            passionate about programming! Not only are the
                            courses it offers useful and interesting, the
                            incubator programme in particular promotes
                            creativity and presents the chance for members to
                            experiment and create innovative projects. By and
                            large, anyone who wants to learn computer science
                            should definitely join CSS!&quot;
                            <br />
                            <p className={styles.textGreen}>
                                Nyx Audrey Angelo Iskandar
                            </p>
                        </div>
                        <div className={styles.text}>
                            &quot;CSS is a place where you explore new
                            possibilities and expand your creativity.&quot;
                            <br />
                            <p className={styles.textGreen}>Lee Bao Yu</p>
                        </div>
                        <div className={styles.text}>
                            &quot;CSS is love. CSS is life.&quot;
                            <br />
                            <p className={styles.textGreen}>Huang Zi Wen</p>
                        </div>
                    </section>
                </section>

                <section className={styles.bigDiv}>
                    <section className={styles.wrapperCol}>
                        <h1 className={styles.title}>Curious?</h1>
                        <p className={styles.text}>
                            Explore this website to learn more about what we do
                            at CSS
                        </p>
                        <Link href="/courses">
                            <a className={styles.link}>Courses</a>
                        </Link>
                        <Link href="/interest-groups">
                            <a className={styles.link}>Interest Groups</a>
                        </Link>
                        <Link href="/competitions">
                            <a className={styles.link}>Competitions</a>
                        </Link>
                        <Link href="/incubator">
                            <a className={styles.link}>Incubator Programme</a>
                        </Link>
                        <p className={styles.text}>
                            or{" "}
                            <Link href="/contact-us">
                                <a className={styles.link}>contact us</a>
                            </Link>{" "}
                            to keep in touch with the team!
                        </p>
                    </section>
                </section>

                <br />
                <br />
                <br />
                <br />
                <br />

                <Footer />
            </main>
        </div>
    );
}
