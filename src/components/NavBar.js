import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import planet from '../img/planet.png';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/rockets',
      name: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      name: 'Missions',
    },
    {
      id: 3,
      path: '/dragons',
      name: 'Dragons',
    },
    {
      id: 4,
      path: '/my-profile',
      name: 'My Profile',
    },
  ];
  return (
    <Navbar bg="light" expand="lg">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="/rockets">
          <Image src={planet} alt="App logo" width="50" className="me-3" />
          SpaceX Ships
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {links.map((link) => (
                <Nav.Item key={link.id}>
                  <NavLink
                    className="m-3 text-decoration-none"
                    to={link.path}
                    activeClassName="fw-bold text-decoration-underline"
                  >
                    {link.name}
                  </NavLink>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
