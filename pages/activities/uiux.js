import Head from "next/head";
import Link from "next/link";
import utilStyles from "/styles/utils.module.css";
import Image from "next/image";
import Footer from "../../components/footer";

export default function UIUX() {
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

            <section>
                <h1 className={utilStyles.h1}>
                    <b>UI/UX Design</b>
                </h1>
                <div className={utilStyles.container}>
                    <p>
                        This course aims to provide course participants with
                        professional feedback on their mockups, and to learn
                        more about UI/UX as a career path.
                    </p>

                    <p>
                        Each team will submit a mockup and a brief product
                        description.
                    </p>

                    <br></br>

                    <p className={utilStyles.pCenter}>
                        <b>
                            <u>Students' Works</u>
                        </b>
                    </p>

                    <section className={utilStyles.grid}>
                        <Image
                            src="/venue.png"
                            alt="work1"
                            width="1000px"
                            height="500px"
                        />
                        <Image
                            src="/eat.png"
                            alt="work2"
                            width="1000px"
                            height="500px"
                        />
                    </section>

                    <section className={utilStyles.grid}>
                        <p>
                            Figma prototype of website for booking school venues
                            <br />
                            By Mike and Adrienne
                        </p>
                        <p>
                            Figma prototype of website to tackle mental health
                            <br />
                            By Yongsheng and David
                        </p>
                    </section>

                </div>

                <br></br>
            </section>

            <Footer />
        </div>
    );
}
