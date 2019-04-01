import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Mobilemenu from './mobilemenu'
import Container from '../components/layout/container'
import { FaLinkedinIn } from "react-icons/fa";
const Nav = styled.div`
  background-color:${props => props.variable.gray}; 
  padding:20px 0px; 
  ul{
    margin:0px;
    padding:0px;
    list-style:none;
    display:flex;
    justify-content:flex-end;
  }
  li{
    margin-left:25px;
    margin-bottom:0px;
    text-decoration:none;
    display:flex;
    align-items:center;
  }
  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    transition: all 0.2s;
    font-family:Poppins, sans-serif;
    text-transform:uppercase;
    font-size:12px;
    letter-spacing: 0.5px;
    -webkit-font-smoothing: antialiased;
    text-decoration:none;
    &:hover {
      color: ${props => props.variable.brand1};
    }
  }
  li:last-child(){
    a{
      border-bottom:0px;
    }
  }
  i{
    color:white;
    font-size:40px;
    margin-right:10px;
  }
  @media (max-width: ${props => props.variable.tabletwidth}) {
    display:none;
  }
`

const TopMenu = ({variable}) => (

  <StaticQuery
  query={graphql`
    query topQuery {
      site {
        siteMetadata {
          topLinks{
            name
            link
            icon
            class
          }
        }
      }
    }
  `}
  render={data => (
    <>
    <Nav
    className="topmenu"
    variable={variable}
    >
    <Container>
    <ul>
      {data.site.siteMetadata.topLinks.map((menuitem, index) =>(
        <li key={index}>{menuitem.icon != null && <i class={menuitem.icon}></i>}<Link className={menuitem.class} to={menuitem.link}>{menuitem.name}</Link></li>
      ))}
    </ul>
    </Container>
    </Nav>
  </>
  )}
  />
)


export default TopMenu
