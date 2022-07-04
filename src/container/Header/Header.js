import "./Header.css"; 
import { Link } from "react-router-dom";

const header = (props) => {
 
    // On click to open the navbar
    let navbarShow = () => {
        document.getElementById("navbar").classList.add("nav-show"); 
        document.getElementById("x_btn").classList.remove("hide");
        document.getElementById("burger").classList.add("hide"); 
        
    }

    // on click to close the navbar
    let navbarHide = () => {
        document.getElementById("navbar").classList.remove("nav-show");
        document.getElementById("burger").classList.remove("hide");
        document.getElementById("x_btn").classList.add("hide"); 
    }

    return (
        <header id="header" >
            <div className="container">

                <h1 id="left">
                    <a href="/">
                        <img src="/images/favicon.png" alt="aj" />
                        <span className="aj">Adrian John </span>
                        <span className="hide">
                            software development website programmer
                            developer app application caribbean Trinidad Tobago design mobile appication
                        </span>
                    </a>
                </h1>
                <div id="burger" onClick={navbarShow}>
                    <div class="burger_ico"></div>
                    <div class="burger_ico"></div>
                    <div class="burger_ico"></div>
                </div>
                <nav id="navbar">
                    <span  id="x_btn" class="bi mobile-nav-toggle bi-x hide" onClick={navbarHide}>&times;</span>
                    <ul> 
                        <li><a className="nav-link scrollto" href="/">Home</a></li>
                        <li><a className="nav-link scrollto" href="/#about">About</a></li>
                        <li><a className="nav-link scrollto" href="/#knowledge">Knowledge</a></li>
                        <li><a className="nav-link scrollto" href="/#contact">Contact</a></li>
                        <li><a className="nav-link scrollto" id="tech_link" href="/projects">Projects</a></li>
                        <li><a className="nav-link scrollto" id="contact_btn" target="_blank" href="/adrianJohnResume.pdf">Resume</a></li>
                        <li id="nav_contact" class="hide">
                            <a href="https://www.linkedin.com/in/adrian-john-852a459b/" target="_blank"><img src="/images/linkedin.png"alt=""/></a>
                            <a href="mailto:adrianjohn.developer@gmail.com" target="_blank"><img src="/images/mail.png"alt=""/></a>
                            <a href="https://github.com/adrian007i" target="_blank"><img src="/images/github.png"alt=""/></a>
                        </li>
                    </ul>
                    <i></i>
                </nav>

            </div>
        </header>

    );
}

export default header;