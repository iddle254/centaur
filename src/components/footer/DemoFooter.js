import React from "react";


// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="/services"
                  // target="_blank"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  // target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  // target="_blank"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, crafted {" "}
              <i className="fa fa-heart heart" /> by Centaur Labs
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
