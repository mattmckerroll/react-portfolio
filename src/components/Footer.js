import React  from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
.navbar {
    background-color: #222;
  }
.navbar-brand {
    color: #bbb;
    font-size: 10px;
    text-align:center;
    float:none;
    &:hover {
      color: white;
    }
  }
`;

export const Footer = () => (
    <Styles>
        <Navbar fixed="bottom">        
            <Navbar.Brand >Matthew McKerroll &copy; 2020</Navbar.Brand>   
        </Navbar>
    </Styles>
  )