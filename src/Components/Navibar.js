import React, {useState} from "react";
import {Button, Container, Form, Modal, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Styles = styled.div`
a, navbar-nav, nav-link {
color: #fff;
:hover {
color: #ccc
}
}`;

export const Navibar = () => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(true)
    }

    const handleHide = () => {
        setShow(false)
    }

    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand>Dev-agency</Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                                <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
                                <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Button variant='primary' onClick={handleShow}>Log in</Button>
                                &nbsp;&nbsp;
                                <Button variant='primary' onClick={handleShow}>Sign out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>

            <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group controlId='fromBasicEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email'/>
                            <Form.Text className='text-muted'>We will never share your email</Form.Text>
                        </Form.Group>

                        <Form.Group controlId='fromBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter password'/>
                            <Form.Text className='text-muted'>Please, enter the password</Form.Text>
                        </Form.Group>

                        <Form.Group controlId='fromBasicCheckbox'>
                            <Form.Check type='checkbox' label='Remember me'/>
                        </Form.Group>
                    </Form>

                </Modal.Body>
            </Modal>
        </>
    )
}