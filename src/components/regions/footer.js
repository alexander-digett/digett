import React from 'react'
import Container from '../../components/layout/container'
import * as variable from '../variables.js'
import styled from 'styled-components'
const Leftfooter = styled.div`
flex-basis:30%;
background-color:#dddddd;
padding:40px 0px;
padding-right:20px;
position:relative;
p{
  margin:5px 0px;
}
h4{
  margin:0px;
}
&:before {
  content:'';
  height:100%;
  position: absolute;
  left:-2000px;
  background-color:#dddddd;
  width: 2000px;
  top: 0px;
}
@media (max-width: ${variable.tabletWidth}) {
  flex-basis:40%;
}
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:100%;
  padding-left:0px;
  padding-right:0px;
  &:after {
    content:'';
    height:100%;
    position: absolute;
    right:-2000px;
    background-color:${variable.brand3};
    width: 2000px;
    top: 0px;
  }
}
`
const FooterContainer = styled.div`
      display:flex;
      flexWrap:wrap;
      padding-bottom:40px;
      .footer-column{
        flex-basis:30%;
        margin-right:5%;
        color:white;
        a{
          color:white;
        }
        h3{
          color:white;
          font-size: 22px;
          line-height: 27px;
          border-bottom: solid 2px #ffffff;
          padding-bottom: 5px;
        }
        &:last-child(){
          margin-right:0px;
        }
        ul{
          padding:0px;
          margin:0px;
          margin-bottom:10px;
        }
        li{
          list-style:none;
          display: inline;
          text-decoration: none;
          margin-right: 10px;
          i{
            font-size:30px;
          }
          a:hover{
            color: #407992;
          }
        }
      }
      .button{
        margin-top:20px;
      }
`

const Footer = () => (
  <footer style={{
    backgroundColor:'#626363',
    overflow:'hidden',
    }}>
    <Container>
<FooterContainer>
<div class="footer-column">
<h3 class="footer-label">TALK TO US TODAY</h3>
<div>Telephone: <a class="footer-bottom-phone" href="tel:1-210-853-5808">210-853-5808</a></div>
<a href="/contact" class="button">CONTACT</a>
</div>
<div class="footer-column">
<h3 class="footer-label">LOCATION</h3>
<div>4358 Lockhill Selma, Suite 108</div>
<div>San Antonio, TX 78249</div>
</div>
<div class="footer-column">
<h3 class="footer-label">FOLLOW US</h3>
<ul class="footer-social-icon">
<li><a href="https://www.facebook.com/Digett/" class="facebook 0" target="_blank" rel="nofollow"><i class="fab fa-facebook-square"></i></a></li>
<li><a href="https://twitter.com/digett" class="twitter 0" target="_blank" rel="nofollow"><i class="fab fa-twitter-square"></i></a></li>
<li><a href="http://www.linkedin.com/company/digett" class="linkedin 0" target="_blank" rel="nofollow"><i class="fab fa-linkedin"></i></a></li>
</ul>
<div><span><a href="/privacy-policy">Privacy Policy</a></span> | <span>All Rights Reserved</span></div> 
</div>
</FooterContainer>
    </Container>
  </footer>
)


export default Footer
