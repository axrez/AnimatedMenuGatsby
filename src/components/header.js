import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { animated, useTransition } from 'react-spring'

import { TopBar, MenuButton, TopBarContainer } from './styled'
import MenuIcon from './MenuIcon'
import Menu from './Menu'

const Header = ({ siteTitle }) => {
  const [menuState, setMenuState] = useState(false)

  const transitions = useTransition(menuState, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <TopBar>
      <TopBarContainer>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#0afcf4`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <MenuButton onClick={() => setMenuState(!menuState)}>
          <MenuIcon rotate={menuState} />
        </MenuButton>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={{
                  ...props,
                  position: 'absolute',
                  width: '100vw',
                  maxWidth: '100%',
                  height: '100vh',
                  top: 0,
                  left: 0,
                  padding: 0,
                  margin: 0,
                }}
              >
                <Menu />
              </animated.div>
            )
        )}
      </TopBarContainer>
    </TopBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
