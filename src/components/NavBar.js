
import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';
import emailme from '../assets/img/envelope-at.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    //useEffect that would determine if the page is scrolled or not
    //useEffect fires when the user scrolls
    useEffect(() =>{
        const onScroll = () =>{
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        //this will fire onlyu on scroll
        window.addEventListener("scroll", onscroll);

        return () => window.addEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt='Logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link 
                    href="#home" 
                    className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => onUpdateActiveLink('home')}>
                    Home
                </Nav.Link>
                <Nav.Link 
                    href="#skills" 
                    className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUpdateActiveLink('skills')}>
                    Skills
                </Nav.Link>
                <Nav.Link 
                    href="#projects" 
                    className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUpdateActiveLink('projects')}>
                    Projects
                </Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.github.com/alexwindy0" target="_"><img src={github} alt="github"/></a>
                    <a href="https://www.linkedin.com/in/alex-windy-528045244/" target="_"><img src={linkedin} alt="linkedin"/></a>
                    <a href="mailto:alexekwem@gmail.com"><img src={emailme} alt="gmail"/></a>
                </div>
                <button
                className={` vvd ${activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}`}
                onClick={() => onUpdateActiveLink('contact')}
                >
                <a 
                    href="#contact"
                    
                >
                <span>Let's Connect</span></a>
                </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}