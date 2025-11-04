import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';


function Navsection() {
  return (
    
<>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home"><h1 className='text-light'><span style={{color:'red'}}>Pro</span>ducts</h1></Navbar.Brand>
        </Container>
      </Navbar>
</>
  )
}

export default Navsection
