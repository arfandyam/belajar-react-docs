/**
 * Buat aplikasi yang menampilkan list travel place dimana terdapat checkbox untuk mengubah jenis 
 * image size (besar atau kecil) dimana terdapat 4 komponen yaitu TravelPlace, List, Place,
 * PlaceImage
 */
import PropTypes from 'prop-types'
import getImageUrl from './utils'
import { useContext, useState } from "react"
import { places } from "./data"
import { ImgSizeContext } from './Context'

const PlaceImage = ({imgId, name}) => {
  const imgSize = useContext(ImgSizeContext);
  return (
    <img
      src = {getImageUrl(imgId)}
      alt = {name}
      width={imgSize}
      height={imgSize}
    />
  )
}

const Place = ({
  place
}) => {
  return (
    <>
      <PlaceImage
        imgId = {place.imageId}
        name = {place.name}
      />
      <p>
        <b>{place.name}</b>{': ' + place.description}
      </p>
    </>
  )
}

const List = () => {
  const listItems = places.map(place => (
    <li key={place.id}>
      <Place
        place={place}
      />
    </li>
  ));

  return <ul>{listItems}</ul>
}
const TravelPlace = () => {
  const [isLarge, setIsLarge] = useState(false);
  const imgSize = isLarge ? 150 : 100;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onClick={(e) => setIsLarge(e.target.checked)}
        />
      Use large images
      </label>
      <ImgSizeContext.Provider value = {imgSize}>
        <List/>
      </ImgSizeContext.Provider>
    </>
  )
}

Place.propTypes = {
  place: PropTypes.object
}

PlaceImage.propTypes = {
  imgId: PropTypes.string,
  name: PropTypes.string
} 

export default TravelPlace;