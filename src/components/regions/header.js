import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Container from '../layout/container'
import Menu from '../menu'
import TopMenu from '../topmenu'
import styled from "styled-components"
import Image from "../image"
import logo from "../../images/logo_white.png"

const HeaderStyle = styled.header`
  top: 0px;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 1px 2px #ccc;
  .header-menu-logo{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo{
    flex-basis:150px;
    border-bottom:none;
    img{
      width:100%;
      height:auto;
      display:flex;
      align-items:center;
    }
  }
  nav{
    flex-basis:calc(60% - 200px);
    display:flex;
    justify-content:flex-end;
  }
`;

const Header = ({variable}) => (
  <HeaderStyle>
      <TopMenu
      variable={variable}
      ></TopMenu>
      <Container className="header-menu-logo">
      <Link className="logo"to="/"><img src={logo} alt="logo" /></Link>
      <Menu>
      </Menu>
      </Container>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
