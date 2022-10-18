import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = ({ categories }) => {

    return (
        <div>
            <Navbar className='p-3 mb-5' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold'><span className='bg-primary text-white px-5 py-2 rounded-pill'>Dragon</span> News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown className='d-block d-lg-none' title="Categories" id="collasible-nav-dropdown">
                                {
                                    categories.map(category => <NavDropdown.Item
                                        key={category.id}
                                    >
                                        {category.name}
                                    </NavDropdown.Item>)
                                }
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;