import {Link} from 'react-router-dom'
import {FaFacebook, FaLinkedin} from 'react-icons/fa'

import {
  AiOutlineHome,
  AiFillHome,
  AiFillFire,
  AiOutlineFire,
  AiFillTwitterCircle,
} from 'react-icons/ai'

import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../context/ThemeContext'

import {
  HeaderContainer,
  LinkCard,
  Home,
  ParaText,
  SideBarMainContainer,
  SocialContainer,
  SocialHeading,
  SocialLogoCard,
} from './styledComponents'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isTheme, changeTheme} = value
      console.log(isTheme)
      return (
        <SideBarMainContainer isTheme={isTheme}>
          <HeaderContainer isTheme={isTheme}>
            <Link to="/">
              <LinkCard>
                {isTheme ? <AiFillHome /> : <AiOutlineHome />}
                <Home> Home </Home>
              </LinkCard>
            </Link>
            <Link to="/trending">
              <LinkCard>
                {isTheme ? <AiFillFire /> : <AiOutlineFire />}
                <Home> Trending </Home>
              </LinkCard>
            </Link>
            <Link to="/gaming">
              <LinkCard>
                {isTheme ? <SiYoutubegaming /> : <SiYoutubegaming />}
                <Home> Gaming </Home>
              </LinkCard>
            </Link>
            <Link to="/gaming">
              <LinkCard>
                {isTheme ? <AiFillFire /> : <AiOutlineFire />}
                <Home> Saved Videos </Home>
              </LinkCard>
            </Link>
          </HeaderContainer>
          <SocialContainer>
            <SocialHeading> Contact us</SocialHeading>
            <SocialLogoCard>
              <FaFacebook color="#4f46e5" fontSize={30} />
              <AiFillTwitterCircle color="#3b82f6" fontSize={30} />
              <FaLinkedin color="#00306e" fontSize={30} />
            </SocialLogoCard>
            <ParaText>
              Enjoy! Now to see your channels and recommendations!
            </ParaText>
          </SocialContainer>
        </SideBarMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
