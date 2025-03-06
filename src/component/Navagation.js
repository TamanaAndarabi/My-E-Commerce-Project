
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";




    const Navagation = ()=>{
        return (
            <Navbar collapseOnSelect expand="lg" className="navbar-expand-lg navbar-dark bg-dark fixed-top">
            <Container>
              <Navbar.Brand href="/">Online Shopping</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
                  <Nav.Link href="/cart" className='nav-link'> Market 
                      <FontAwesomeIcon icon={faShoppingCart}/>
                  </Nav.Link>
                  <NavDropdown title="All Supplies"  id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="/cloths">Cloths</NavDropdown.Item>
                    <NavDropdown.Item href="/kitchen"> Kitchen </NavDropdown.Item>
                    <NavDropdown.Item href="sport">Sport</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="electronic"> Electronic </NavDropdown.Item>
                  </NavDropdown>
                </Nav>

                <Nav>
                  <Nav.Link href="/contact"> Contact </Nav.Link>
                  <Nav.Link eventKey={2} href="/login"> Login </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }

export default Navagation;
