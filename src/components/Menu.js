import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Menu = () => (
  <MenuContainer>
    <MenuItem>
      <StyledLink to="/">Home</StyledLink>
    </MenuItem>
    <MenuItem>
      <StyledLink to="/about">About</StyledLink>
    </MenuItem>
    <MenuItem>
      <StyledLink to="/contact">Contact</StyledLink>
    </MenuItem>
  </MenuContainer>
)

const MenuContainer = styled.ul`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background: rebeccapurple;
  z-index: 1;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MenuItem = styled.li`
  color: #fff;
  font-size: 4vw;
  padding: 2rem;
  border-bottom: 1px solid #0afcf4;
  cursor: pointer;
  transition: background 400ms;

  :hover {
    background: #6e4696;
  }

  :nth-child(3) {
    border-bottom: none;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

export default Menu
