import React from "react";
import Navbar from "react-bootstrap/Navbar";

function Nav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/Cocktail">
          <img
            alt=""
            src="https://images.creativemarket.com/0.1.0/ps/8627349/1820/1214/m1/fpnw/wm0/cocktail-icon-glass-cup-drink-logo-thin-line-web-symbol-on-white-background-.jpg?1593368949&s=d95c0f0910d8f2b59fa7148da00171e7"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          Cocktail app
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Nav;
