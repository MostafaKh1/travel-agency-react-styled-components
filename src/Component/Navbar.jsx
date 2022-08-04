import React from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.png"



export default function Navbar() {
  return (
    <>
    <Nav>
    <div className="brand">
          <div className="container">
            <img src={logo} alt="" />
            Travelo
          </div>
          <div className="toggle">
            
          </div>
        </div>

        <ul>
          <li>
            <a href="#home">Home</a>
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
        <button>Connect</button>
    </Nav>
    </>
  )
}

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
.brand {
  .container {
      display: flex;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;
      gap:0.4rem
  }
}
ul {
  list-style: none;
  display: flex;
  gap:1rem;
  li {

    a {
      text-decoration: none;
      color:#0077b6;
      font-size: 1.2rem;
      transition: 0.1s ease-in-out;
      &:hover{
        color:#023e8a;
      }
    
    }
   &:first-of-type {
    a {
      color:#023e8a;
      font-weight: bold;
    }
   }
  }
}
button {
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: none;
  color:white;
  font-size: 1.1ream;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  background-color: #48cae4 ;
  &:hover {
    background-color:#023e8a
  }
}



`

