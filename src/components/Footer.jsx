
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {

    return (
        <footer>
            <div className="down">
                <section className="socials">
                <div >
                        <a href="https://github.com/temez26" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className='github' />
                        </a>
                        <a href="https://www.linkedin.com/in/teemu-kalmari-755469169/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className='linkedin' />
                        </a>
                    </div>

                </section>
                <section className="footer-section">
                    <section> <p>Bonkkers oy</p></section>
                
                <section><p>Teemu Kalmari</p></section>
               
                </section>
             
            </div>
        </footer>
    )
}


export default Footer;