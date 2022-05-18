import styles from "../Footer/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.navlinks}>
                <Link href="http://www.ri.edu.sg/visit-us">
                    <a className={styles.link} target="_blank">
                        <Image
                            src="/location.png"
                            width={24}
                            height={24}
                            alt="Location Icon"
                        />{" "}
                        Our Location
                    </a>
                </Link>
                <Link href="mailto:cssrjc@gmail.com">
                    <a className={styles.link} target="_blank">
                        <Image
                            src="/mail.png"
                            width={24}
                            height={24}
                            alt="Mail Icon"
                        />{" "}
                        cssrjc@gmail.com
                    </a>
                </Link>
                <Link href="https://www.instagram.com/rafflescss/">
                    <a className={styles.link} target="_blank">
                        <Image
                            src="/instagram.png"
                            width={24}
                            height={24}
                            alt="Instagram Logo"
                        />{" "}
                        @rafflescss
                    </a>
                </Link>
                <Link href="/contact-us">
                    <a className={styles.link}>
                        <Image
                            src="/form.png"
                            width={24}
                            height={24}
                            alt="Form Logo"
                        />{" "}
                        Contact Us
                    </a>
                </Link>
            </div>

            <sub className={styles.copyright}>
                &#169; 2021 Raffles Institution Computer Science Society
            </sub>
        </footer>
    );
}
