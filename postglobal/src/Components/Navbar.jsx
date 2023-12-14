import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import Moneyorder from './MoneyOrder'
import AllocateBox from './AllocateBox'

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  const handleDropdownClick = (menuId) => {
    setActiveMenu(menuId);
  };

  const sideNavItems = [
    { id: 1, label: 'Link 1' },
    { id: 2, label: 'Link 2' },
    { id: 3, label: 'Link 3' },
    { id: 4, label: 'MoneyOrder' },
    {id: 5,  label:'AllocateBox'},
  ];

  const menuItems = [
    { id: 1, label: 'About', component: '' },
    { id: 2, label: 'Projects', component: '' },
    { id: 3, label: 'Nav', component: <AllocateBox/> },
    { id: 4, component: <Moneyorder /> },
    {id: 5,  component: <AllocateBox/>},
  ];

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="lavender" variant="white">
        <Container>
          <Navbar.Brand href="#home">Your Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" >
              {sideNavItems.map((item) => (
                <Nav.Link
                 
                  key={item.id}
                  href="#"
                  onClick={() => handleMenuClick(item.id)}
                  className={activeMenu === item.id ? 'active' : ''}
                
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 

      <Container fluid className="mt-1">
        <Row className="content ">
          <Col sm={2} className="sidenav" >
            {sideNavItems.map((item) => (
              <h5 className='mb-3  mt-3' key={item.id}>
                <a
                  style={{color: 'gray', textDecoration: 'none'}}
                  href="#"
                  onClick={() => handleMenuClick(item.id)}
                  className={activeMenu === item.id ? 'active' : ''}
                >
                  {item.label}
                </a>
              </h5>
            ))}
          </Col>
          <Col sm={10} className="text-left">
            {menuItems.map((menuItem) =>
              activeMenu === menuItem.id ? menuItem.component : null
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
