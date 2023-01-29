import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import VideoPlayer from './components/VideoPlayer'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import ThemeContext from './components/context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    isTheme: false,
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isTheme: !prevState.isTheme,
    }))
  }

  render() {
    const {isTheme} = this.state
    return (
      <>
        <ThemeContext.Provider value={{isTheme, changeTheme: this.changeTheme}}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/videos/:id" component={VideoPlayer} />
            <Route exact path="/trending" component={Trending} />
            <Route exact path="/Gaming" component={Gaming} />
          </Switch>
        </ThemeContext.Provider>
      </>
    )
  }
}

export default App
