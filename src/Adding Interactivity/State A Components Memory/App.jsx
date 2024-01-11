import { useState } from 'react';
import Gallery from './Giving a Component Multiple State Variables'

export default function AppState(){
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
    <Gallery 
      index = {index}
      setIndex = {setIndex}
      showMore = {showMore}      
      setShowMore = {setShowMore}
    />
    <Gallery 
      index = {index}
      setIndex = {setIndex}
      showMore = {showMore}      
      setShowMore = {setShowMore}
    />
    </>
  )
}