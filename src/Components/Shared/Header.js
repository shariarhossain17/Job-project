import { signOut } from "firebase/auth";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import auth from "../../firebase.init";
import "../Css/Header.css";


const Navar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="sticky-top">
      <Navbar bg="light" style={{ padding: "16px"}} className="" expand="lg">
        <Container className="px-4">
          <Navbar.Brand href="#home">Audrina Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto header-style">
              <Link to="/">Home</Link>
              <HashLink to="/home/#description">Description</HashLink>
              <HashLink to="/home/#about">About</HashLink>
              <Link to='/blog'>Blog</Link>

              {user ? (
                <a onClick={handleSignOut}>Logout</a>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navar;
