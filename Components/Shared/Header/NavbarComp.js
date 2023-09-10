import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { Row, Container, Col } from 'react-bootstrap';

function NavbarComp() {
  return (
    <>
    <Container fluid className='header-styles'>
      <Row>
        <Col md={2} className="mx-5">
        <Image
            src="/img/logo.PNG"
            alt="Next.js Logo"
            width={250}
            height={85}
            priority
          />
        </Col>
        <Col md={2}>
        <Image
              src="/img/header-slogan.PNG"
              alt="Next.js Logo"
              width={200}
              height={105}
              priority
            />
        </Col>
        <Col>
          <div className='text-end pt-3 pb-2'>
            <Link href={"/home"} className="text-dec-none navbar-link-1">
              ABOUT US
            </Link>
            <Link href={"/home"} className="text-dec-none navbar-link-1">
              BLOG
            </Link>
            <Link href={"/home"} className="text-dec-none navbar-link-1">
              GALLERY
            </Link>
            <Link href={"/home"} className="text-dec-none navbar-link-1">
              BROUCHERS
            </Link>
          </div>
          <div className='text-end' style={{marginRight:"1%"}}>
            <Link href={"/home"} className="text-dec-none navbar-link">
              Home
            </Link>
            <Link href={"/home"} className="text-dec-none navbar-link">
              Tours
            </Link>
            <Link href={"/home"} className="text-dec-none navbar-link">
              Activities
            </Link>
            <Link href={"/home"} className="text-dec-none navbar-link">
              Hotel
            </Link>
            <Link href={"/home"} className="text-dec-none navbar-link">
              Cars
            </Link>
            <Link href={"/home"} className="text-dec-none global-blue-btn fs-13">
              CREATE YOUR OWN TRIP
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
    {/* <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className='py-0 header-styles'>
      <Container fluid className='py-0'>
        <Navbar.Brand href="#home" className='py-0'>
        <Image
            src="/img/logo.png"
            alt="Next.js Logo"
            width={210}
            height={75}
            priority
          />
          <Image
              src="/img/header-slogan.png"
              alt="Next.js Logo"
              width={200}
              height={105}
              priority
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="me-auto">
          </Nav>
          <div>456</div>
          <div>456</div>  
      </Container>
    </Navbar> */}
    </>
  );
}

export default NavbarComp;