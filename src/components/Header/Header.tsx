import * as React from "react";
import logo from "../../images/drdoctor-company-logo.jpg";
import { Link } from "react-router-dom";
import { Wrapper, Logo } from "./styled";

const Header = (): React.ReactElement => (
  <Wrapper>
    <Link to="/">
      <Logo src={logo} alt="Dr Doctor" />
    </Link>
  </Wrapper>
);

export default Header;
