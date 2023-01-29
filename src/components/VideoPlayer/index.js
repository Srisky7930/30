import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import SideBar from '../SideBar'

import ThemeContext from '../context/ThemeContext'
import Navbar from '../Navbar'

import {
  VideoPlayerContainer,
  VideoCard,
  VideoTitle,
  ViewsCounts,
  VideoPlayCard,
  Line,
  ChannelContainer,
  ProfilePicCard,
  ProfilePic,
  Card1,
  Card2,
  ChannelName,
  SubscriberCount,
  Description,
} from './styledComponents'

class VideoPlayer extends Component {
  state = {
    video: {},
    channelListData: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
    const videoData = data.video_details
    const fetchedData = {
      channel: videoData.channel,
      description: videoData.description,
      id: videoData.id,
      publishedAt: videoData.published_at,
      thumbnailUrl: videoData.thumbnail_url,
      title: videoData.title,
      videoUrl: videoData.video_url,
      viewCount: videoData.view_count,
    }
    const channelData = {
      name: videoData.channel.name,
      profileImageUrl: videoData.channel.profile_image_url,
      subscriberCount: videoData.channel.subscriber_count,
    }
    this.setState({
      video: fetchedData,
      channelListData: channelData,
    })
  }

  render() {
    const {video, channelListData} = this.state
    console.log(channelListData)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isTheme} = value
          return (
            <>
              <Navbar />
              <VideoPlayerContainer isTheme={isTheme}>
                <SideBar />
                <VideoPlayCard>
                  <VideoCard>
                    <ReactPlayer
                      url={video.videoUrl}
                      height={500}
                      width={900}
                    />
                  </VideoCard>
                  <VideoTitle isTheme={isTheme}> {video.title} </VideoTitle>
                  <VideoCard>
                    <ViewsCounts isTheme={isTheme}>
                      {video.viewCount} Views
                    </ViewsCounts>
                    <ViewsCounts isTheme={isTheme}>
                      {video.publishedAt}
                    </ViewsCounts>
                  </VideoCard>
                  <Line />
                  <ChannelContainer>
                    <ProfilePicCard>
                      <ProfilePic
                        src={channelListData.profileImageUrl}
                        alt="a"
                      />
                    </ProfilePicCard>

                    <Card2>
                      <ChannelName> {channelListData.name} </ChannelName>
                      <SubscriberCount>
                        {channelListData.subscriberCount} Subscribers
                      </SubscriberCount>
                    </Card2>
                  </ChannelContainer>
                  <Card1>
                    <Description isTheme={isTheme}>
                      {video.description}
                    </Description>
                  </Card1>
                </VideoPlayCard>
              </VideoPlayerContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoPlayer
