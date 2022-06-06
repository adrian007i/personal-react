import "./Header.css";
// import { Container } from 'react-bootstrap';

const header = (props) => {
    return (
        <header id="header" >
            <div className="container">

                <h1 id="left">
                    <a href="/">
                        <img src="/images/favicon.png" alt="aj" />
                        <span>Adrian John </span>
                        <span className="hidden">software development website programmer
                            developer app application caribbean Trinidad Tobago design mobile appication</span>
                    </a>
                </h1>

                <nav id="navbar">
                    <ul>
                        <li><a className="nav-link scrollto" href="/">Home</a></li>
                        <li><a className="nav-link scrollto" href="/#about">About</a></li>
                        <li><a className="nav-link scrollto" href="/#knowledge">Knowledge</a></li>
                        <li><a className="nav-link scrollto" href="/#contact">Contact</a></li>
                        <li><a className="nav-link scrollto" id="tech_link" href="/projects">Projects</a></li>
                        <li><a className="nav-link scrollto" id="contact_btn" target="_blank" href="/adrianJohnResume.pdf">Resume</a></li>
                        <li id="nav_contact" className="hidden">
                            {/* <a href="https://www.linkedin.com/in/adrian-john-852a459b/" target="_blank"><i class="bi bi-linkedin"></i></a>
                                <a href="mailto:adrianjohn.developer@gmail.com" target="_blank"><i class="bi bi-envelope"></i></a>
                                <a href="https://github.com/adrian007i" target="_blank"><i class="bi bi-github"></i></a>  */}
                        </li>
                    </ul>
                    <i></i>
                </nav>

            </div>
        </header>

    );
}

export default header;