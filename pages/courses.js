import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Courses.module.css";
import Topnav from "../components/Topnav/topnav";
import Footer from "../components/Footer/footer";
import { useState } from "react";

export default function Courses() {
    const [course, setCourse] = useState(0);

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
                            <h1 className={styles.title}>2021 Courses</h1>
                            <p
                                className={styles.code}
                                onClick={() => setCourse(0)}
                            >
                                UI/UX Design
                            </p>
                            <p
                                className={styles.code}
                                onClick={() => setCourse(1)}
                            >
                                Mobile Development
                            </p>
                            <p
                                className={styles.code}
                                onClick={() => setCourse(2)}
                            >
                                Backend Development
                            </p>
                            <p
                                className={styles.code}
                                onClick={() => setCourse(3)}
                            >
                                Competitive Programming
                            </p>
                            <p
                                className={styles.code}
                                onClick={() => setCourse(4)}
                            >
                                Data Science & Machine Learning
                            </p>
                        </div>
                        <div className={styles.courseDiv}>
                            {course === 0 && (
                                <>
                                    <h1 className={styles.title}>
                                        UI/UX Design
                                    </h1>
                                    <p className={styles.text}>
                                        This course aims to provide students
                                        with professional feedback on their
                                        mockups, and to learn more about UI/UX
                                        as a career path. Students form teams to
                                        submit a mockup and a brief product
                                        description.
                                    </p>
                                    <div className={styles.imagesGrid}>
                                        <Image
                                            src="/venue.png"
                                            width={1144}
                                            height={645}
                                            alt="Sample prototype #2"
                                        />
                                        <Image
                                            src="/eat.png"
                                            width={1144}
                                            height={645}
                                            alt="Sample prototype #1"
                                        />
                                    </div>
                                </>
                            )}
                            {course === 1 && (
                                <>
                                    <h1 className={styles.title}>
                                        Mobile Development
                                    </h1>
                                    <p className={styles.text}>
                                        This course enables students to learn
                                        the basics of building a mobile
                                        application using the React Native
                                        framework from scratch, including the
                                        creation of a functional and appealing
                                        User Interface.
                                    </p>
                                    <div className={styles.imagesGrid}>
                                        <Image
                                            src="/chuck.png"
                                            width={198}
                                            height={283}
                                            alt="Sample prototype #2"
                                        />
                                        <Image
                                            src="/word.png"
                                            width={198}
                                            height={283}
                                            alt="Sample prototype #1"
                                        />
                                    </div>
                                </>
                            )}
                            {course === 2 && (
                                <>
                                    <h1 className={styles.title}>
                                        Backend Development
                                    </h1>
                                    <p className={styles.text}>
                                        Backend developers work behind the
                                        scenes. Without them, there would be
                                        nothing behind the scenes, in fact, the
                                        scene would simply be just that - a
                                        scene - with nothing else in front or
                                        behind it. The “scene” is brought across
                                        a flat plane lacking in dimensionality.
                                        The “scene” merely presents itself in
                                        breadth, spanning across a screen.
                                        Backend developers adds a dimension to
                                        any project - not only does the scene
                                        have breadth, but the presence of a
                                        “behind-the-scenes” gives depth -
                                        showcased in terms of creativity,
                                        innovation and good looks. Students
                                        explored NodeJS, Express, DBs and Auth
                                        through hands-on projects in this
                                        course.
                                    </p>
                                </>
                            )}
                            {course === 3 && (
                                <>
                                    <h1 className={styles.title}>
                                        Competitive Programming
                                    </h1>
                                    <p className={styles.text}>
                                        Students were taught the fundamentals of
                                        competitive programming which includes
                                        algorithms and run-time analysis to
                                        solve problems in a stipulated time.
                                    </p>
                                    <Image
                                        src="/cp.jpeg"
                                        width={572}
                                        height={322}
                                        alt="CP Leaderboard"
                                    />
                                </>
                            )}
                            {course === 4 && (
                                <>
                                    <h1 className={styles.title}>
                                        Data Science & Machine Learning
                                    </h1>
                                    <p className={styles.text}>
                                        This course teaches the fundamentals of
                                        Python and subsequently uses it to
                                        analyse trends and projections in
                                        real-world scenarios.
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
