import {Component} from 'react'

import Cookies from 'js-cookie'

import {Link} from 'react-router-dom'

import {HiFire} from 'react-icons/hi'
import Navbar from '../Navbar'
import ThemeContext from '../context/ThemeContext'

import {
  TrendingContainer,
  TrendingHeadCard,
  TrendingHeading,
  TrendingDetailContainer,
  TrendingImageContainer,
  TrendingImageCard,
  TrendingImage,
  ImageDetails,
  PublishedAt,
  ChannelName,
  TrendingViews,
  TrendingPublished,
  TrendingCard,
  SideBarContainer,
  TrendingOrderList,
  TrendingItemsCard,
} from './styledComponents'

import SideBar from '../SideBar'

class Trending extends Component {
  state = {
    trendingList: [],
  }

  componentDidMount = () => {
    this.getTrendingDetails()
  }

  getTrendingDetails = async () => {
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    const trendingData = data.videos.map(each => ({
      channel: each.channel,
      id: each.id,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    this.setState({
      trendingList: trendingData,
    })
  }

  render() {
    const {trendingList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isTheme} = value
          return (
            <>
              <Navbar />
              <TrendingContainer isTheme={isTheme}>
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <TrendingDetailContainer>
                  <TrendingHeadCard isTheme={isTheme}>
                    <HiFire color="red" fontSize={40} />
                    <TrendingHeading isTheme={isTheme}>
                      Trending
                    </TrendingHeading>
                  </TrendingHeadCard>
                  <TrendingItemsCard>
                    <TrendingOrderList>
                      {trendingList.map(each => (
                        <TrendingImageContainer>
                          <TrendingImageCard>
                            <Link to={`/videos/${each.id}`}>
                              <TrendingImage src={each.thumbnailUrl} alt="a" />
                            </Link>
                          </TrendingImageCard>
                          <ImageDetails>
                            <PublishedAt isTheme={isTheme}>
                              {each.title}
                            </PublishedAt>
                            <ChannelName isTheme={isTheme}>
                              {each.channel.name}
                            </ChannelName>
                            <TrendingCard>
                              <TrendingViews>
                                {each.viewCount} views
                              </TrendingViews>
                              <TrendingPublished>
                                {each.publishedAt}
                              </TrendingPublished>
                            </TrendingCard>
                          </ImageDetails>
                        </TrendingImageContainer>
                      ))}
                    </TrendingOrderList>
                  </TrendingItemsCard>
                </TrendingDetailContainer>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
