import React from "react";
import {Container} from "react-bootstrap";

export const Footer = () => {
    return (
        <>
            <Container fluid style={{backgroundColor: '#212529', color: '#fff', margin: '0 auto'}}>
                <Container style={{display: 'flex', justifyContent: 'center'}}>
                    <p>Bootstrap footer</p>
                </Container>
            </Container>
        </>
    )
}