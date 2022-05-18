import Image from "next/image";
import Link from "next/link";
import styles from "../Topnav/Topnav.module.css";

export default function Topnav() {
    return (
        <header className={styles.nav}>
            <Link href="/">
                <a>
                    <Image
                        src="/navlogo.jpg"
                        alt="Raffles CSS Logo"
                        width={165}
                        height={50}
                        className={styles.logo}
                    />
                </a>
            </Link>
            <div className={styles.navlinks}>
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
            </div>
        </header>
    );
}
