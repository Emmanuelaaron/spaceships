import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import planet from '../img/planet.png';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
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
        <div>
          <Image src={planet} alt="App logo" width="50" />
          <Navbar.Brand href="/">SpaceX Ships</Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {links.map((link) => (
                <Nav.Link
                  key={link.id}
                  href={link.path}
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
