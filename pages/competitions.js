import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

export default function Competitions() {
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

            <h1 className={utilStyles.h1}>Competitions</h1>
            <Image
                src="/noi.png"
                alt="National Olympiad in Informatics (NOI)"
                width="500px"
                height="200px"
            />
            <br></br>
            <Image
                src="/whitehacks.jpeg"
                alt="Whitehacks"
                width="500px"
                height="200px"
            />
            <br></br>
            <Image
                src="/brainhack.png"
                alt="BrainHack"
                width="500px"
                height="200px"
            />

            <br></br>
            <br></br>

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
