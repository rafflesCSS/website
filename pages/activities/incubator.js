import Head from "next/head";
import Link from "next/link";
import utilStyles from "/styles/utils.module.css";
import Image from "next/image";
import Footer from "../../components/footer";

export default function Incubator() {
    return (
        <div className={utilStyles.screen}>
            <Head>
                <title>RI CSS</title>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;1,400;1,500&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                ></link>
            </Head>

            <div className={utilStyles.navBar}>
                <Link href="/">
                    <a>
                        <Image
                            src="/navlogo.jpg"
                            alt="CSS Logo"
                            width="250px"
                            height="75px"
                        />
                    </a>
                </Link>
                <Link href="/our-members">
                    <a>Our Members</a>
                </Link>

                <div className={utilStyles.dropdown}>
                    <a className={utilStyles.dropdownBtn}>
                        2021-2022 Activities/Courses
                    </a>
                    <div className={utilStyles.dropdownContent}>
                        <Link href="/activities/uiux">UI/UX Design</Link>
                        <Link href="/activities/web-mobile-dev">
                            Web and Mobile App Development
                        </Link>
                        <Link href="/activities/backend-dev">
                            Backend Development
                        </Link>
                        <Link href="/activities/competitive-programming">
                            Competitive Programming
                        </Link>
                        <Link href="/activities/ds-ml">
                            Data Science and Machine Learning
                        </Link>
                        <Link href="/activities/incubator">
                            Incubator Programmes
                        </Link>
                    </div>
                </div>
                <Link href="/competitions">
                    <a>Competitions</a>
                </Link>
            </div>

            <section className={utilStyles.marginBottom}>
                <h1 className={utilStyles.h1}>
                    <b>Incubator Programmes</b>
                </h1>
                <div className={utilStyles.container}>
                    <ul className={utilStyles.ul}>
                        <li className={utilStyles.li}>
                            <span className="material-icons">emoji_events</span>
                            <p>
                                {" "}
                                Want to prepare for a Computer Science-related
                                competition?
                            </p>
                        </li>

                        <li className={utilStyles.li}>
                            <span className="material-icons">people</span>
                            <p>
                                {" "}
                                Want to start your own project with like-minded
                                individuals*?
                            </p>
                        </li>

                        <li className={utilStyles.li}>
                            <span className="material-icons">computer</span>
                            <p>
                                {" "}
                                Want to learn a different specialization (e.g.
                                Arduino)?
                            </p>
                        </li>
                    </ul>

                    <p>
                        If your answer is "yes" to any of the above questions,
                        look no further than our Incubator Programme! Through
                        it, you will be given the opportunity to pursue your own
                        competitions/projects/courses during CCA periods. If you
                        wish to take part, all you need to do is approach one of
                        the EXCOs!
                    </p>
                    <br></br>
                    <p className={utilStyles.funFact}>
                        *Fun fact: This website was developed under the
                        Incubator Programme by {" "}
                        <a href="https://github.com/xyntechx">Nyx</a>,{" "}
                        <a href="https://github.com/janani10734">Janani</a>, and{" "}
                        <a href="https://github.com/glenda-tann">Glenda</a>!
                    </p>
                </div>

                <br />
            </section>

            <Footer />
        </div>
    );
}
