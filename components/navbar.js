import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

function refreshPage() {
  window.location.reload(false);
}

const NavbarReact = () => {
  return (
    <div>
      {/* <Container > */}

      <Navbar bg='light' expand='lg' fixed='top' sticky='top'>
        <Link href='/' passHref>
          <Navbar.Brand>INTENTION TEST PROJECT</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic -navbar-nav'>
          <Nav className='ml-auto'>
            <Link href='/' passHref>
              <Nav.Link>HOME</Nav.Link>
            </Link>
            <Link href='/development' passHref>
              <Nav.Link>PROJECT-DEVELOPMENT</Nav.Link>
            </Link>
            <Link href='/bonnHbf' passHref>
              <Nav.Link>BONN-HBF{refreshPage}</Nav.Link>
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* </Container> */}
    </div>
  );
};

export default NavbarReact;
