import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./footer.scss"

export const Footer = () => {
    return(
        <footer>
            <section className="bg-info d-flex justify-content-end align-items-center">
                <h4 className="m-2">Contact</h4>
                <ListGroup horizontal>
                    <ListGroup.Item>
                        <a href="https://www.facebook.com/profile.php?id=100026330630905">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <a href="https://github.com/Tuananht2k95">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </ListGroup.Item>
                </ListGroup>
            </section>
        </footer>
    )  
}