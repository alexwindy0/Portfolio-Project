import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';


export const Banner = () => { 
    const [loopNum, setLoopNum] = useState(0);

    //isDeleting state which determines if the word is being typed out or being deleted. 
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [
        "React Developer you need.", 
        "Web Designer you need.", 
        "Web Developer you need.", 
        "Graphics Designer you need."
    ];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() =>{
            tick();
        }, delta)
            return () => { clearInterval(ticker)};
    }, [ text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        //future text to be updated
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2 )
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi i'm Alex Windy, the `}<span className="wrap">{text}</span></h1>
                        <p>
                            I am an enthusiastic individual, who is highly motivated, creative and energetic. 
                            I have developed a mature and responsible approach to any assignment I am given. 
                            I have an eye for details and I am bent on adding value to any organization that provides me the opportunity of career development in a conducive and competitive environment.
                        </p>
                        <button>
                        <a href="#contact">
                            Let's Connect 
                            <ArrowRightCircle size={25}/>
                        </a>
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}