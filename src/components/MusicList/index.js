import './index.css'
import {MdDeleteOutline} from 'react-icons/md'
const MusicList = props => {
  const {musicDetails, onDeleteItem} = props
  const {id, imageUrl, name, genre, duration} = musicDetails
  const onDeleteTab = () => {
    onDeleteItem(id)
  }
  return (
    <li className="list">
      <img src={imageUrl} alt="track" className="image" />
      <h1 className="heading">{name}</h1>
      <p className="text">{genre}</p>
      <p className="text">{duration}</p>
      <button onClick={onDeleteTab} className="button" data-testid="delete">
        <MdDeleteOutline className="deletes" />
      </button>
    </li>
  )
}
export default MusicList
