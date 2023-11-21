import Container from 'react-bootstrap/Container';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
export default function Header(){
    return(
      
      <Navbar expand="lg" className=" head">
      <Container>
        <div className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
<div className='col-lg-4'>
  hellooo
</div>
<div className='col-lg-8'>
          <Nav className="me-auto mx-5">
            <Nav.Link className=' mx-4 fw-bold'> <Link className='text-dark' style={{textDecoration:'none'}} to="/">Home</Link></Nav.Link>
            <Nav.Link className='mx-4 fw-bold'> <Link className='text-dark' style={{textDecoration:'none'}} to="/allPortfolio">Portfolio</Link></Nav.Link>
            <Nav.Link className='mx-4 fw-bold' href="#About">About</Nav.Link>
            <Nav.Link className='mx-4 fw-bold' href="#Contact">Contact</Nav.Link>
            <Button className='mx-4 login' variant="outline-secondary ">Login</Button>{' '}
          </Nav>
          </div>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    
    )
}