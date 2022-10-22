import { useContext } from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = ({ categories }) => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/signin');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <Navbar className='p-3 mb-5' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className='fw-bold'><NavLink to={'/'}><span className='bg-primary text-white px-5 py-2 rounded-pill'>Dragon</span> News</NavLink></Navbar.Brand>
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
                        {
                            user?.uid ?
                                <div className='d-flex align-items-center'>
                                    <Nav>
                                        <Nav.Link className='fw-bold my-0' href="#deets">{user?.displayName}</Nav.Link>
                                        <NavLink to={'/profile'}>
                                            {
                                                user?.photoURL ?
                                                    <Image
                                                        src={user.photoURL}
                                                        style={{
                                                            width: '50px',
                                                            height: '50px'
                                                        }}
                                                        roundedCircle
                                                    ></Image>
                                                    :
                                                    <FaUserCircle></FaUserCircle>
                                            }
                                        </NavLink>
                                    </Nav>
                                    <button onClick={handleSignOut} className='fw-bold btn btn-dark'>Sign Out</button>
                                </div>
                                :
                                <>
                                    <button onClick={() => navigate('/signin')} className='mx-2 fw-bold btn btn-primary'>Sign In</button>
                                    <button onClick={() => navigate('/signup')} className='mx-2 fw-bold btn btn-secondary'>Sign Up</button>
                                </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;