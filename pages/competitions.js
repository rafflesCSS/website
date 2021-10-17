import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Footer from "../components/footer";

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

            <section className={utilStyles.marginBottom}>
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
            </section>

            <Footer />
        </div>
    );
}
