import React from 'react'
import {BsLinkedin,BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContanier>
      <span>Copyright &copy; 2022 Travelo all right  reserved</span>
      <ul className="links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#recommend">Places</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <ul className="social-links">
          <li><BsFacebook /></li>
          <li><BsLinkedin /></li>
          <li><AiFillInstagram /></li>
          
        </ul>
    </FooterContanier>
  )
}

const FooterContanier = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  padding: 2.5rem;
 
  ul {
    display:flex;
    list-style: none;
    gap:2rem;

    li {
     
      a {
        text-decoration: none;
        color:black;
        transition:  0.3s ease-in-out;
        &:hover{
          color:#302ce9
        }
      }
      svg {
          font-size: 1.2rem;
          transition: 0.3s ease-in-out; 
          &:hover {
            color:#302ce9
          }
        }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
  
`