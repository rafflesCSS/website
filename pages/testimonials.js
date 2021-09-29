import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Testimonials() {
    return (
        <div className={utilStyles.testimonials}>
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
            </Head>
            <h1>Testimonials</h1>

            <div className={utilStyles.slider}>
                <Link href="#slide-1" scroll={false}>
                    <a>1</a>
                </Link>
                <Link href="#slide-2" scroll={false}>
                    <a>2</a>
                </Link>
                <Link href="#slide-3" scroll={false}>
                    <a>3</a>
                </Link>
                <div className={utilStyles.slides}>
                    <div
                        name="slide-1"
                        id="slide-1"
                        className={utilStyles.slide}
                    >
                        <blockquote>
                            CSS is a place where you explore new possibilities
                            and expand your creativity.
                        </blockquote>
                        <p>~ Lee Baoyu</p>
                    </div>

                    <div
                        name="slide-2"
                        id="slide-2"
                        className={utilStyles.slide}
                    >
                        <blockquote>"I love CSS too!"</blockquote>
                        <p>~ Member 2</p>
                    </div>

                    <div id="slide-3" className={utilStyles.slide}>
                        <blockquote>"I love CSS three!"</blockquote>
                        <p>~ Member 3</p>
                    </div>
                </div>
            </div>

            <div className={utilStyles.subscreen}>
                <Link href="/">
                    <a className={utilStyles.btn}>Back to Home</a>
                </Link>
            </div>
        </div>
    );
}
