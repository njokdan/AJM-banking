import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav({ setImageIndex }) {
  return (
    <BankNav>
      {" "}
      <BrandMessage>
        <Link to="/" onClick={() => setImageIndex(1)}>
          AJM Bank
        </Link>
      </BrandMessage>
      <NavList>
        <Link to="/personal">
          <li>personal</li>
        </Link>
        <Link to="/business">
          <li>business</li>
        </Link>
        <Link to="/investment">
          <li>investment</li>
        </Link>
        <Link to="/about">
          <li>about</li>
        </Link>
      </NavList>
    </BankNav>
  );
}

const BankNav = styled.nav`
  margin: 50px 0 30px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  color: black;
  grid-area: nav;

  a {
    color: black;
    padding: 0 10px;
  }

  li {
    margin: 0px 5px;
  }

  li:hover {
    text-decoration: underline;
    text-decoration-color: #fca311;
    cursor: pointer;
  }

  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(17.5px);
  -webkit-backdrop-filter: blur(17.5px);
`;

const BrandMessage = styled.h1`
  a {
    color: #2496aa;
    text-decoration: none;
  }
  padding-left: 50px;
  font-size: 3.5em;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 50px;
  li {
    display: inline;
    font-size: 1.6rem;
  }
`;

export default Nav;
