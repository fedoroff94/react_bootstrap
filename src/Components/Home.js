import React from "react";
import {Slider} from "./Slider";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import sun from '../sunrise.jpg';
import Jumbotron from "./Jumbotron";


export const Home = () => {
    return (
        <>
            <Slider/>
            <Container>
                <Row style={{paddingLeft: '60px', paddingTop: '10px', paddingBottom: '10px', margin: '0 auto', width: '0 auto'}}>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant='top' src={sun}/>
                            <Card.Body>
                                <Card.Title>Web dev blog lesson!!!</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam
                                    asperiores commodi consectetur consequuntur culpa delectus.</Card.Text>
                                <Button variant='primary' style={{marginLeft: '4rem'}}>Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant='top' src={sun}/>
                            <Card.Body>
                                <Card.Title>Web dev blog lesson!!!</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam
                                    asperiores commodi consectetur consequuntur culpa delectus.</Card.Text>
                                <Button variant='primary' style={{marginLeft: '4rem'}}>Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant='top' src={sun}/>
                            <Card.Body>
                                <Card.Title>Web dev blog lesson!!!</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam
                                    asperiores commodi consectetur consequuntur culpa delectus.</Card.Text>
                                <Button variant='primary' style={{marginLeft: '4rem'}}>Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>

            <Jumbotron/>

            <Container style={{marginBottom: '30px'}}>
                <Row>
                    <Col md='7'>
                        <img src={sun} height='400px' style={{borderRadius: '5px'}}/>
                    </Col>
                    <Col md='5'>
                        <h2>Bootstrap lesson</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur earum ex
                            nesciunt nihil officia quod tenetur? Animi doloremque, eveniet. Magni odio pariatur
                            provident quibusdam.
                            At delectus necessitatibus quibusdam tenetur.</p>
                    </Col>
                </Row>
            </Container>
        </>
)
}