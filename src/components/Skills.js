import meter1 from "../assets/img/meter1.jpg";
import meter2 from "../assets/img/meter2.jpg";
import meter3 from "../assets/img/meter3.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

 function Skills ()  {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  return (
    <section className="skill" id="skills">
        <div className="container" style={{backgroundcolor: "blue"}}>
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Current technology stack: <br></br>
Front-end: Javascript, React, Redux, ES6+, CSS, Bootstrap, JQuery, TypeScript <br></br>
Back-end: Python/Flask, Node/Express, PostgreSQL <br></br>
Blockchain: Solidity, hardhat, Ethers.js, Truffle   <br></br>
Testing: Jasmine, Jest, Python TestCase <br></br>
Other: Git, Bash, REST, SQLAlchemy<br></br> </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Application Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Smart Contracts</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Blockchain D-App Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}


export default Skills;