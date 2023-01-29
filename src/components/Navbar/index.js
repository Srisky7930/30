import {FiSun} from 'react-icons/fi'
import {IoMdContact} from 'react-icons/io'
import {FaMoon} from 'react-icons/fa'

import ThemeContext from '../context/ThemeContext'

import {
  NavbarContainer,
  WebsiteLogo,
  WebsiteLogoContainer,
  LinkLists,
  ButtonLight,
  ButtonLogout,
} from './styledComponents'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isTheme, changeTheme} = value
      const onClickButton = () => {
        changeTheme()
      }

      return (
        <NavbarContainer isTheme={isTheme}>
          <WebsiteLogoContainer>
            {isTheme ? (
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="a"
              />
            ) : (
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="a"
              />
            )}
          </WebsiteLogoContainer>
          <LinkLists>
            <ButtonLight onClick={onClickButton}>
              {isTheme ? <FaMoon /> : <FiSun color="#ffffff" />}
            </ButtonLight>
            <ButtonLight>
              {isTheme ? <IoMdContact /> : <IoMdContact color="#ffffff" />}
            </ButtonLight>
            <ButtonLogout isTheme={isTheme}>Logout</ButtonLogout>
          </LinkLists>
        </NavbarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
