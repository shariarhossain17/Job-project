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
      <Navbar  className="header-bg" style={{ padding: "16px"}} expand="lg">
        <Container className="px-4">
          <Navbar.Brand className="text-white" href="#home">Audrino nanoShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto header-style">
              <HashLink to="/#">Home</HashLink>
              <HashLink to="/home/#description">Description</HashLink>
              <HashLink to="/home/#about">About</HashLink>
              <Link to='/blog'>Blog</Link>

              {user ? (
                <a className="text-white" onClick={handleSignOut}>Logout</a>
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
