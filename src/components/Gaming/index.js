import {Component} from 'react'

import {SiYoutubegaming} from 'react-icons/si'

import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'

import Navbar from '../Navbar'
import SideBar from '../SideBar'
import ThemeContext from '../context/ThemeContext'

import {
  GamingContainer,
  GamingCard,
  GamingHeadingCard,
  GamingHeading,
  GamingImageContainer,
  GamingImage,
  GamingDetailContainer,
  GamingOrderList,
  SideBarContainer,
  GamingTitle,
  GamingView,
} from './styledComponents'

class Gaming extends Component {
  state = {
    gamingList: [],
  }

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    const gamingData = data.videos.map(each => ({
      id: each.id,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    this.setState({
      gamingList: gamingData,
    })
  }

  render() {
    const {gamingList} = this.state
    console.log(gamingList)

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isTheme} = value
          return (
            <>
              <Navbar />
              <GamingContainer isTheme={isTheme}>
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <GamingDetailContainer>
                  <GamingHeadingCard isTheme={isTheme}>
                    <SiYoutubegaming fontSize={30} color="red" />
                    <GamingHeading isTheme={isTheme}> Gaming</GamingHeading>
                  </GamingHeadingCard>
                  <GamingCard isTheme={isTheme}>
                    <GamingOrderList isTheme={isTheme}>
                      {gamingList.map(each => (
                        <GamingImageContainer isTheme={isTheme}>
                          <Link to={`/videos/${each.id}`}>
                            <GamingImage src={each.thumbnailUrl} alt="a" />
                          </Link>
                          <GamingTitle isTheme={isTheme}>
                            {each.title}
                          </GamingTitle>
                          <GamingView>
                            {each.viewCount} Watching Worldwide{' '}
                          </GamingView>
                        </GamingImageContainer>
                      ))}
                    </GamingOrderList>
                  </GamingCard>
                </GamingDetailContainer>
              </GamingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
