import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import React from 'react';
import headerImg from '../assets/img/headerimg.svg';
import {useState, useEffect} from 'react';



const Banner = () => {


    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const [index, setIndex] = useState(1);
    const toRotate = ['Web Developer', 'Web Designer', 'Freelancer', 'Blockchain Developer'];
    const period = 5;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        
        return () => clearInterval(ticker);
    }, [text])
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
            
           
            setIndex(prevIndex => prevIndex - 1);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1)
            setDelta(250)
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }



    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        {/* <span className="tagline">Welcome to Pablo's Portfolio!</span> */}
                        <h1>{`Hey it's Pablo I'm a `} <br></br> <span className="wrap">{text}</span ></h1>
                        <br></br>
                        <p>About myself: <br></br> 
                        Passionate about innovation and the transformative power of technology, I am eager to leverage my experience in finance alongside my newfound expertise in software engineering and blockchain development. My ultimate goal is to be a driving force in revolutionizing the way we perceive and interact with financial systems.</p>
                        {/* <button onClick={() => console.log('connect')}>Lets connect <ArrowRightCircle size={25}/></button> */}
                    
                    
                    </Col>
                    {/* <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='header image'></img>
                    </Col> */}

                    
                    </Row>

            </Container>

        </section>

    )
}

export default Banner;