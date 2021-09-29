import Head from "next/head";
import Link from "next/link";
import utilStyles from "/styles/utils.module.css";
import Image from "next/image";

export default function incubator() {
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
                        <Link href="/activities/ui-uxdesign">
                            UI/UX Design{" "}
                        </Link>
                        <Link href="/activities/webandmobileappdevt">
                            Web and Mobile App Development{" "}
                        </Link>
                        <Link href="/activities/backenddevt">
                            Backend Development{" "}
                        </Link>
                        <Link href="/activities/competitiveprogramming">
                            Competitive Programming{" "}
                        </Link>
                        <Link href="/activities/datasciandmachinelearning">
                            Data Science and Machine Learning{" "}
                        </Link>
                        <Link href="/activities/incubatorprogramme">
                            Incubator Programmes{" "}
                        </Link>
                    </div>
                </div>
                <Link href="/competitions">
                    <a>Competitions</a>
                </Link>
            </div>

            <section>
                <h1 className={utilStyles.h1}>
                    <b>Incubator Programmes</b>
                </h1>
                <div className={utilStyles.container}>
                    <ul className={utilStyles.ul}>
                        <li className={utilStyles.li}>
                            <span className="material-icons">emoji_events</span>
                            <p>
                                Want to prepare for a Computer Science-related
                                competition?
                            </p>
                        </li>

                        <li className={utilStyles.li}>
                            <span className="material-icons">people</span>
                            <p>
                                Want to start your own project with like-minded
                                individuals*?
                            </p>
                        </li>

                        <li className={utilStyles.li}>
                            <span className="material-icons">computer</span>
                            <p>
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
                        Incubator Programme by{" "}
                        <a href="https://github.com/xyntechx">Nyx</a>,{" "}
                        <a href="https://github.com/janani10734">Janani</a>, and{" "}
                        <a href="https://github.com/glenda-tann">Glenda</a>!
                    </p>
                </div>

                <br></br>
            </section>

            <section className={utilStyles.footer}>
                <div className={utilStyles.footercontent}>
                    <div className={utilStyles.li}>
                        <span className="material-icons">place</span>
                        <Link href="http://www.ri.edu.sg/visit-us">
                            <a target="_blank" className={utilStyles.link}>
                                Our Location
                            </a>
                        </Link>
                    </div>

                    <div className={utilStyles.li}>
                        <span className="material-icons">mail</span>
                        <Link href="mailto:cssrjc@gmail.com">
                            <a target="_blank" className={utilStyles.link}>
                                cssrjc@gmail.com
                            </a>
                        </Link>
                    </div>

                    <div className={utilStyles.li}>
                        <span className="material-icons">alternate_email</span>
                        <Link href="https://www.instagram.com/rafflescss/">
                            <a target="_blank" className={utilStyles.link}>
                                rafflescss
                            </a>
                        </Link>
                    </div>

                    <div className={utilStyles.li}>
                        <span className="material-icons">photo_camera</span>
                        <Link href="https://www.instagram.com/rafflescss/">
                            <a className={utilStyles.link}>Photos</a>
                        </Link>
                    </div>
                </div>

                <hr></hr>

                <p>&#169; 2021 Raffles Institution Computer Science Society</p>
            </section>
        </div>
    );
}
