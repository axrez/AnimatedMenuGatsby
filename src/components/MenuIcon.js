import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const MenuIcon = ({ rotate }) => (
  <div>
    <MenuBar1 rot={rotate} />
    <MenuBar2 rot={rotate} />
    <MenuBar3 rot={rotate} />
  </div>
)

MenuIcon.propTypes = {
  rotate: PropTypes.bool.isRequired,
}

export const MenuBar1 = styled.div`
  width: 35px;
  height: 5px;
  background: #0afcf4;
  margin: 6px 0;
  transition: all 200ms ease-in-out;
  border-radius: 10px;
  ${props =>
    props.rot &&
    css`
      transform: rotate(-45deg) translate(-6px, 9px);
    `}
`

export const MenuBar2 = styled.div`
  width: 35px;
  height: 5px;
  background: #0afcf4;
  margin: 6px 0;
  transition: all 200ms ease-in-out;
  border-radius: 10px;
  ${props =>
    props.rot &&
    css`
      opacity: 0;
    `}
`

export const MenuBar3 = styled.div`
  width: 35px;
  height: 5px;
  background: #0afcf4;
  margin: 6px 0;
  transition: all 200ms ease-in-out;
  border-radius: 10px;
  ${props =>
    props.rot &&
    css`
      transform: rotate(45deg) translate(-6px, -9px);
    `}
`

export default MenuIcon
