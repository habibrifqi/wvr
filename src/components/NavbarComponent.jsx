import {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor,setChangColor] = useState(false);
  const changeBackgroundColor = ()=>{
    if (window.scrollY > 10) {
      setChangColor(true);
    }else{
      setChangColor(false);
    }
  }

  useEffect(()=>{
    changeBackgroundColor();

    window.addEventListener("scroll",changeBackgroundColor)
  })

  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand className="fs-3 fw-bold" href="#home">B V R</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            {navLinks.map((link) => {
              return (
                <div className="nav-link" key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end
                  >
                    {link.text}
                  </NavLink>
                </div>
              );
            })}
          </Nav>
          <div className="text-center button-join-nav">
            <button className ="btn btn-outline-danger rounded-1" >Join with us</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
