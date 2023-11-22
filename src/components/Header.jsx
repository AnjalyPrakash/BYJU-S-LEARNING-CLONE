import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'

function Header() {
  return (
    <div style={{backgroundColor:'rgb(145, 52, 145)',color:'white'}}>
        <Navbar expand="lg" className='text-light'>
      <Container>
        <Navbar.Brand href="#home"><img src="https://cdn1.byjus.com/byjusweb/img/home/svg/byjus_logo.svg" style={{height:'50px'}} alt="" /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse  id="basic-navbar-nav"> 
          <Nav>
            <NavDropdown 
              id="nav-dropdown-light-example"
              title="Study Materials"
              
            >
              <NavDropdown.Item style={{backgroundColor:' rgb(145, 52, 145)'}} href="#action/3.1">NCERT Solutions <i class="fa-solid fa-circle-chevron-right"  style={{color:'#ffc846',backgroundColor:'rgb(145, 52, 145) '}} ></i></NavDropdown.Item >
              <NavDropdown.Item href="#action/3.2" style={{backgroundColor:'rgb(145, 52, 145)'}}>
                classess  <i class="fa-solid fa-circle-chevron-right"  style={{color:'#ffc846',backgroundColor:'rgb(145, 52, 145) ',marginLeft:'63px'}} ></i>
              </NavDropdown.Item>
              <NavDropdown.Item style={{backgroundColor:'rgb(145, 52, 145)'}} href="#action/3.3">CBSE  <i class="fa-solid fa-circle-chevron-right"  style={{color:'#ffc846',backgroundColor:'rgb(145, 52, 145) ' ,marginLeft:'83px'}} ></i></NavDropdown.Item>
              <NavDropdown.Item style={{backgroundColor:'rgb(145, 52, 145)'}} href="#action/3.3">IAS  <i class="fa-solid fa-circle-chevron-right"  style={{color:'#ffc846',backgroundColor:'rgb(145, 52, 145) ',marginLeft:'95px'}} ></i></NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home" className='text-dark ms-2'>BYJU'S Answer</Nav.Link>
            <NavDropdown 
              id="nav-dropdown-dark-example"
              title="Scholarship"
              
              menuVariant="light"
              
            >
              <NavDropdown.Item style={{backgroundColor:' rgb(145, 52, 145)'}} href="#action/3.1">NCERT Solutions  <i class="fa-solid fa-circle-chevron-right"  style={{color:'#ffc846',backgroundColor:'rgb(145, 52, 145) '}} ></i></NavDropdown.Item >
              <NavDropdown.Item href="#action/3.2" style={{backgroundColor:'rgb(145, 52, 145)'}}>
                classess  <i class="fa-solid fa-circle-chevron-right"  style={{color:'#ffc846',backgroundColor:'rgb(145, 52, 145) ',marginLeft:'63px'}} ></i>
              </NavDropdown.Item>
              <NavDropdown.Item style={{backgroundColor:'rgb(145, 52, 145)'}} href="#action/3.3">CBSE  <i class="fa-solid fa-circle-chevron-right"  style={{color:'#ffc846',backgroundColor:'rgb(145, 52, 145) ',marginLeft:'83px'}} ></i></NavDropdown.Item>
              <NavDropdown.Item style={{backgroundColor:'rgb(145, 52, 145)'}} href="#action/3.3">IAS  <i class="fa-solid fa-circle-chevron-right"  style={{color:'#ffc846',backgroundColor:'rgb(145, 52, 145) ',marginLeft:'95px'}} ></i></NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown 
              id="nav-dropdown-dark-example"
              title="BTC"
              className='text-warning ms-2'

            //   menuVariant=""
            >
              <NavDropdown.Item style={{backgroundColor:' rgb(145, 52, 145)'}} href="#action/3.1">NCERT Solutions  <i class="fa-solid fa-circle-chevron-right"  style={{color:'#ffc846',backgroundColor:'rgb(145, 52, 145) '}} ></i></NavDropdown.Item >
              <NavDropdown.Item href="#action/3.2" style={{backgroundColor:'rgb(145, 52, 145)'}}>
                classess  <i class="fa-solid fa-circle-chevron-right"  style={{color:'#ffc846',backgroundColor:'rgb(145, 52, 145) ',marginLeft:'63px'}} ></i>
              </NavDropdown.Item>
              <NavDropdown.Item style={{backgroundColor:'rgb(145, 52, 145)'}} href="#action/3.3">CBSE  <i class="fa-solid fa-circle-chevron-right"  style={{color:'#ffc846',backgroundColor:'rgb(145, 52, 145)' ,marginLeft:'83px'}} ></i></NavDropdown.Item>
              <NavDropdown.Item style={{backgroundColor:'rgb(145, 52, 145)'}} href="#action/3.3">IAS  <i class="fa-solid fa-circle-chevron-right"  style={{color:'#ffc846',backgroundColor:'rgb(145, 52, 145) ',marginLeft:'95px'}} ></i></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  className='text-dark ms-2' href="#home">Buy a Course</Nav.Link>
            <Nav.Link  className='text-dark ms-2' href="#home">Success Stories</Nav.Link>
            <button className='btn btn-outline-black ms-2' style={{width:'70px',height:'40px'}}>login</button>
            <button className=' btn-outline-light ms-4 mt-2'  style={{height:'30px',width:'30px',borderRadius:'15px',backgroundColor:' black',border:'none'}}><i class="fa-solid fa-phone" style={{color:'rgb(145, 52, 145)',backgroundColor:' black'}}></i></button>
            <button className=' btn-outline-light ms-4 mt-2'  style={{height:'30px',width:'30px',borderRadius:'15px',backgroundColor:' black',border:'none'}}><i class="fa-solid fa-magnifying-glass" style={{color:'rgb(145, 52, 145)',backgroundColor:' black'}}></i></button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header