import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import * as variable from './variables.js'
import Mobilemenu from './mobilemenu'
const Nav = styled.nav`
ul{
  list-style:none;
  position:relative;
  float:left;
  margin:0;
  padding:0;
  width:100%;
  display:flex;
  justify-content:space-between;
  a {
    text-decoration: none;
    color: ${variable.darkGray};
    font-weight: 600;
    transition: all 0.2s;
    text-transform:uppercase;
    font-size:12px;
    letter-spacing: 0.5px;
    -webkit-font-smoothing: antialiased;
    text-decoration:none;
    border-bottom:0px;
  }
  ul{
    display:none;
    position:absolute;
    top:100%;
    left:0;
    padding:0;
    z-index:100;
    padding-top:5px;
    ul{
      top:0;
      left:100%
    }
    li{
      float:none;
      width:220px;
      border-bottom:2px solid $color-brand-light-gray;
      &:last-child{
        border-bottom:0px;
      }
      a{
        line-height:120%;
        padding:10px 15px;
        background-color:rgba(233, 234, 235, .95);
        font-size:16px;
        text-transform: none;
        &:before{
          content:'\f105';
          font-family: FontAwesome;
          color:$color-brand-red;
          margin-right:10px;
        }
      }
    }
  }
  li{
    list-style:none;
    position:relative;
    float:left;
    margin:0;
    padding:0;
    margin-right:26px;
    &:hover > ul{
      display:block;
    }
    a{
      padding:0px;
      display:block;
      text-decoration:none;
      text-transform: uppercase;
      &.is-active{
        color:$color-brand-medium-blue;
      }
      &:hover{
        color:$color-brand-medium-blue;
      }
    }
  }
}
  @media (max-width: ${variable.tabletWidth}) {
    display:none;
  }
`

const Menu = () => (

  <StaticQuery
  query={graphql`
    query MenuQuery {
      site {
        siteMetadata {
          menuLinks{
            name
            link
            children{
              name
              link
            }
          }
        }
      }
    }
  `}
  render={data => (
    <>
    <Nav>
    <ul>
      {data.site.siteMetadata.menuLinks.map((menuitem, index) =>(
        <li key={index}><Link to={menuitem.link}>{menuitem.name}</Link>
        {menuitem.children != null &&
        <ul class="menu-children">
        {menuitem.children.map((childrenitem, index) =>(
          <li key={index}><Link to={childrenitem.link}>{childrenitem.name}</Link></li>
        ))}
        </ul>
        }
        </li>
      ))}
    </ul>
    </Nav>
    <Mobilemenu />
  </>
  )}
  />
)


export default Menu
