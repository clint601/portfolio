
import { Link } from "react-router";


const Footer =()=> {

    return (

<footer className="footer mt-5" id="footer">
  <section className="section" id="footerSection1">
    <div className="container">
      <div className="row align-items-start">
        <div className="col-md-6">
          <h2 className="footer-heading about-text">Contact</h2>
          <ul className="myContacts list-unstyled">
            <li>
              <a
                href="mailto:clintjackson601@gmail.com"
                className="footer-link socials-link"
              >
                Email: clintjackson601@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-6 text-md-end">
          <h2 className="footer-heading about-text">Socials</h2>
          <div className="d-flex justify-content-md-end gap-3 mt-2">
            <a href="https://x.com/_CJacksonn" className="footer-link socials-link" target="_blank">
              <i className="bi bi-twitter-x"></i>
              <span className="visually-hidden">Twitter</span>
            </a>
            <a href="https://github.com/clint601?tab=overview&from=2025-08-01&to=2025-08-11" className="footer-link socials-link" target="_blank" >
              <i className="bi bi-github"></i>
              <span className="visually-hidden">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/clint-jackson-b2a2b536a/" className="footer-link socials-link" target="_blank">
              <i className="bi bi-linkedin"></i>
                <span className="visually-hidden">LinkedIn</span>
                </a>
                </div>
            </div>
        </div>
    </div>
</section>
</footer>
    )
}


export default Footer;