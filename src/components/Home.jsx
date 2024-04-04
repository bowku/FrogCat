import React, { useState } from 'react';
import "./Home.css";
import frogcat from "../images/frogcat.png";
import liquidity from "../images/liqudity.png";
import taxes from "../images/taxes.png";
import total from "../images/total.png";
import mint from "../images/mint.png";
import clipboard from "../images/clipboard.webp"
import one from "../images/1.gif"
import two from "../images/2.gif"
import three from "../images/3.gif"
import four from "../images/4.gif"
import five from "../images/5.gif"
import six from "../images/6.gif"
import { Container, Row, Col, Carousel, Accordion, Button } from 'react-bootstrap';

function Home() {
  const contractAddress = "6D7NaB2xsLd7cauWu1wKk6KBsJohJmP2qZH9GEfVi5Ui";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
  };

  return (
    <Container fluid className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h1>
            What is <img src={frogcat} alt="Frogcat" style={{ maxWidth: '20%', verticalAlign: 'middle', marginLeft: '10px' }} />
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <h1>$FC ISN'T JUST A FROG CAT, IT IS THE FUTURE OF DIGITAL CURRENCY. IT IS THE PERFECT BALANCE OF BLOCKCHAIN AND OUR FELINE FRIENDS THAT WILL CHANGE THE WORLD OF FINANCE FOREVER.</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={3} className="text-center">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Contract Address</Accordion.Header>
              <Accordion.Body>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ marginRight: '10px' }}>{contractAddress}</span>
                  <img src={clipboard} alt="Copy to Clipboard" style={{ width: '40px', cursor: 'pointer' }} onClick={copyToClipboard} />
                </div>
                {copied && <div style={{ color: 'green' }}>Copied!</div>}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <h1>COMMUNITY OWNED</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <h1>DEV GOT YAMMED BY A SHARKK!</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <Row>
            <Col md={12} className="text-center">
              <img src={one} alt="Gif 1" style={{ height: '300px', width:"300px"}} />
              <img src={two} alt="Gif 2" style={{ height: '300px', width:"300px"}} />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center">
              <img src={three} alt="Gif 3" style={{ height: '300px', width:"300px"}} />
              <img src={four} alt="Gif 4" style={{ height: '300px', width:"300px"}} />
            </Col>

          </Row>
          <Row>
            <Col md={12} className="text-center">
              <img src={five} alt="Gif 5" style={{ height: '300px', width:"300px"}} />
              <img src={six} alt="Gif 6" style={{ height: '300px', width:"300px"}} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <h1>it swims and it bites, don’t overthink it</h1>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <Row>
            <Col md={12} className="text-center">
              <img src={liquidity} alt="Gif 1" style={{ height: '300px', width:"300px"}} />
              <img src={mint} alt="Gif 2" style={{ height: '300px', width:"300px"}} />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center">
              <img src={taxes} alt="Gif 3" style={{ height: '300px', width:"300px"}} />
              <img src={total} alt="Gif 4" style={{ height: '300px', width:"300px"}} />
            </Col>

          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src={mint}
                alt="First slide"
                style={{ maxHeight: '300px' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src={liquidity}
                alt="Second slide"
                style={{ maxHeight: '300px' }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
