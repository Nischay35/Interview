import {Component} from 'react'
import './index.css'
import MusicList from '../MusicList'
const initialTracksList = [
  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-perfect-img.png',
    name: 'Perfect',
    genre: 'Pop',
    duration: '4:04',
  },
  {
    id: '40f97965-ff45-469e-a635-b2ef9f1642ed',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shape-of-you-img.png',
    name: 'Shape of You',
    genre: 'Divide',
    duration: '4:24',
  },
  {
    id: '782f916b-4056-44ec-a95f-5115c3f84904',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-visiting-hours.png',
    name: 'Visiting Hours',
    genre: 'Folk-Pop',
    duration: '3:49',
  },
  {
    id: 'fcf0dc77-3427-457c-9ee0-91b1dc39fece',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shivers-img.png',
    name: 'Shivers',
    genre: 'Dance-Pop',
    duration: '3:58',
  },
  {
    id: '9c1bb890-d4d5-4edf-9d95-6959d716b442',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-bad-habits-img.png',
    name: 'Bad Habits',
    genre: 'Dance-Pop',
    duration: '4:01',
  },
  {
    id: '2216db9c-647f-4814-b880-179740e4d748',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-castle-on-the-hill-img.png',
    name: 'Castle on the Hill',
    genre: 'Pop&Rock',
    duration: '4:48',
  },
  {
    id: 'a5e30966-b760-4660-bf08-073135f7d010',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-happier-img.png',
    name: 'Happier',
    genre: 'Pop',
    duration: '3:36',
  },
  {
    id: '2d5c9bc0-b8b0-41c6-aa55-cb3b659d8604',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-photograph-img.png',
    name: 'Photograph',
    genre: 'Folk music',
    duration: '4:26',
  },
  {
    id: 'efd3d621-2c05-4941-acdc-0a1a0786bc53',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-galway-girl-img.png',
    name: 'Galway Girl',
    genre: 'Pop',
    duration: '3:20',
  },
  {
    id: 'e4b8e3b8-7776-4c09-8abc-ba328a8babe9',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-i-dont-care-img.png',
    name: "I Don't Care",
    genre: 'Pop',
    duration: '3:38',
  },
]
class MusicApp extends Component {
  state = {searchInput: '', musicItemsList: initialTracksList}
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  onDeleteItem = id => {
    const {musicItemsList} = this.state
    const filteredList = musicItemsList.filter(eachList => eachList.id !== id)
    this.setState({musicItemsList: filteredList})
  }

  renderTopView = () => {
    const {searchInput} = this.state
    return (
      <div className="container">
        <h1 className="heading">Ed Sheeran</h1>
        <p className="text">Singer</p>
        <div className="plays">
          <h1 className="songs">Songs Playlist</h1>
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
            placeholder="Search"
          />
        </div>
      </div>
    )
  }
  renderUnfilteredItems = () => {
    const {musicItemsList} = this.state
    const isEmpty = musicItemsList.length === 0
    if (isEmpty) {
      return <p className="no">No Songs Found</p>
    }
    return (
      <ul className="lists">
        {musicItemsList.map(eachList => (
          <MusicList
            key={eachList.id}
            musicDetails={eachList}
            onDeleteItem={this.onDeleteItem}
          />
        ))}
      </ul>
    )
  }
  renderFilteredItems = () => {
    const {searchInput, musicItemsList} = this.state
    const filteredItems = musicItemsList.filter(eachList =>
      eachList.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const isEmpty = filteredItems.length === 0
    if (isEmpty) {
      return <p className="no">No Songs Found</p>
    }
    return (
      <ul className="lists">
        {filteredItems.map(eachList => (
          <MusicList
            key={eachList.id}
            musicDetails={eachList}
            onDeleteItem={this.onDeleteItem}
          />
        ))}
      </ul>
    )
  }
  render() {
    const {searchInput} = this.state
    const isSearchEmpty = searchInput === ''
    return (
      <div className="app">
        {this.renderTopView()}
        {isSearchEmpty
          ? this.renderUnfilteredItems()
          : this.renderFilteredItems()}
      </div>
    )
  }
}
export default MusicApp
