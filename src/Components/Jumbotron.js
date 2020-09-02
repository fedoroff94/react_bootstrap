import React from 'react';
import {Jumbotron as Jumbo, Container} from "react-bootstrap";
import sun from '../sunrise.jpg';
import styled from "styled-components";

const Styles = styled.div`
.jumbo {
background: url(${sun}) no-repeat fixed bottom;
background-size: cover;
color: '#efefef;
height: '400px';
position: 'relative';
z-index: -2;
}

.overlay {
opacity: 0.5;
background-color: #000;
position: absolute;
top: 0;
bottom: 0;
right: 0,
left: 0
}
`

const Jumbotron = () => {
    return (
        <>
            <Styles>
                <Jumbo fluid className='jumbo'>
                    <div className="overlay"></div>
                    <Container>
                        <h1>React-bootstrap lesson</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolore doloremque ea
                            eaque
                            fuga illo itaque iure iusto magni nobis odio pariatur quas unde vel voluptate? Doloribus
                            dolorum
                            nostrum porro!</p>
                    </Container>
                </Jumbo>
            </Styles>
        </>
    )
}

export default Jumbotron;
