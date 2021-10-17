import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={utilStyles.footer}>
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
        </footer>
    );
}
