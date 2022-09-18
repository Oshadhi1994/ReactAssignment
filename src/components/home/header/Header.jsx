/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./header.css";
import companyLog from "../header/Logo.png";
import { FaOpencart } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
// import { IoMdPerson } from "react-icons/io";
// import { AiFillProfile, AiOutlineLogout } from "react-icons/ai";
// import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <Container fluid>
          <Row>
            <Col lg={3}>
              <div className="header_logo">
                <a className="nav-link navbar-text">
                  <Link to="/">
                    <img
                      src={companyLog}
                      className="img-responsive"
                      alt=""
                    ></img>
                  </Link>
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <nav className="header_menu">
                <ul>
                  <li>
                    <a className="link">Products</a>
                  </li>
                  <li>
                    <a data-after="About" className="link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="link">Contact</a>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col lg={3}>
              <div className="header_right">
                <div className="header_right_auth">
                  <a>
                    <i>
                      <FaOpencart />
                    </i>
                  </a>
                  <a>
                    <Link to="/login">
                      <i>
                        <BsPerson />
                      </i>
                    </Link>
                  </a>
                  {/* <Dropdown>
                    <Dropdown.Toggle>
                      <i>
                        <IoMdPerson />
                      </i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <i>
                          <AiFillProfile />
                        </i>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i>
                          <AiOutlineLogout />
                        </i>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}
                  <ul></ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
