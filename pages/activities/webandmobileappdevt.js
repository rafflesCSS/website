import Link from 'next/link'
import utilStyles from '/styles/utils.module.css'
import Image from 'next/image'

function webandmobileappdevt() {
    return (
        <div className={utilStyles.screen}>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            
            <div className={utilStyles.navBar}>
            
            <Link href="/"><a><Image src="/navlogo.jpg" alt="CSS Logo" width = "250px" height = "75px"/></a></Link>
            <Link href="/our-members"><a>Our Members</a></Link>
            
            
            <div className={utilStyles.dropdown}>
                <a className={utilStyles.dropdownBtn}>2021-2022 Activities/Courses</a>
                <div className={utilStyles.dropdownContent}>
                <Link href="/activities/ui-uxdesign">UI/UX Design </Link>
                <Link href="/activities/webandmobileappdevt">Web and Mobile App Development </Link>
                <Link href="/activities/backenddevt">Backend Development </Link>
                <Link href="/activities/competitiveprogramming">Competitive Programming </Link>
                <Link href="/activities/datasciandmachinelearning">Data Science and Machine Learning </Link>
                <Link href="/activities/incubatorprogramme">Incubator Programmes </Link>
                </div>
            </div>
            <Link href="/competitions"><a>Competitions</a></Link>
        </div>

            <section>
                <h1 className={utilStyles.h1}><b>Web and Mobile App Development</b></h1>
                <div className={utilStyles.container}>
                <p>Participants learnt the basics of building a mobile application using the React Native framework from scratch, including the creation of a functional and appealing User Interface.</p>
                <p> Duration: 4 weeks</p>
                <p><b><u> Students' Works </u></b></p>
                <table className={utilStyles.table}>
                        <tr>
                            <td>
                            <Image src="/chuck.png" alt="work1" width = "350px" height = "500px"/>
                            </td>
                            <td>
                            <Image src="/word.png" alt="work2" width = "350px" height = "500px"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Chuck Norris Quote Generator
                            <br></br>
                            By Daniel Ching
                            </td>
                            <td>
                            Random Word Generator
                            <br></br>
                            By Huang Ziwen
                            </td>
                        </tr>
                    </table>
                
                </div>
                

                <br></br>
            </section>

            <section className={utilStyles.footer}>
                <div className={utilStyles.footercontent}>
                    <div className={utilStyles.li}>
                        <span className="material-icons">place</span>
                        <Link href="http://www.ri.edu.sg/visit-us">
                        <a target="_blank" className={utilStyles.link}>Our Location</a>
                        </Link>
                    </div>

                    <div className={utilStyles.li}>
                        <span className="material-icons">mail</span>
                        <Link href="mailto:cssrjc@gmail.com">
                        <a target="_blank" className={utilStyles.link}>cssrjc@gmail.com</a>
                        </Link>
                    </div>

                    <div className={utilStyles.li}>
                        <span className="material-icons">alternate_email</span>
                        <Link href="https://www.instagram.com/rafflescss/">
                        <a target="_blank" className={utilStyles.link}>rafflescss</a>
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
    )
}

export default webandmobileappdevt;