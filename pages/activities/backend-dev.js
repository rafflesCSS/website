import Head from "next/head";
import Link from "next/link";
import utilStyles from "/styles/utils.module.css";
import Image from "next/image";
import Footer from "../../components/footer";

export default function BackendDev() {
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
                    <b>Backend Development</b>
                </h1>
                <div className={utilStyles.container}>
                    <p className={utilStyles.p}>
                        Backend developers work behind the scenes. Without them,
                        there would be nothing behind the scenes, in fact, the
                        scene would simply be just that – a scene – with nothing
                        else in front or behind it. The “scene” is brought
                        across a flat plane lacking in dimensionality. The
                        “scene” merely presents itself in breadth, spanning
                        across a screen. Backend developers adds a dimension to
                        any project – not only does the scene have breadth, but
                        the presence of a “behind-the-scenes” gives depth –
                        showcased in terms of creativity, innovation and good
                        looks. Students explored NodeJS, Express, DBs and Auth
                        through hands-on projects in this course.
                    </p>
                    <p> Duration: 4 weeks</p>
                </div>

                <br></br>
            </section>

            <Footer />
        </div>
    );
}
