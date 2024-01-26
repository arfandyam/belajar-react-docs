/**
 * Clear an image while it’s loading 
 * 
 * When you press “Next”, the browser starts loading the next image. However, because it’s displayed
 * in the same <img> tag, by default you would still see the previous image until the next one loads. This may be undesirable if it’s important for the text to always match the image. Change it so that the moment you press “Next”, the previous image immediately clears.
 */

import { useState } from "react";

let images = [{
  place: 'Penang, Malaysia',
  src: 'https://i.imgur.com/FJeJR8M.jpg'
}, {
  place: 'Lisbon, Portugal',
  src: 'https://i.imgur.com/dB2LRbj.jpg'
}, {
  place: 'Bilbao, Spain',
  src: 'https://i.imgur.com/z08o2TS.jpg'
}, {
  place: 'Valparaíso, Chile',
  src: 'https://i.imgur.com/Y3utgTi.jpg'
}, {
  place: 'Schwyz, Switzerland',
  src: 'https://i.imgur.com/JBbMpWY.jpg'
}, {
  place: 'Prague, Czechia',
  src: 'https://i.imgur.com/QwUKKmF.jpg'
}, {
  place: 'Ljubljana, Slovenia',
  src: 'https://i.imgur.com/3aIiwfm.jpg'
}];

export default function Destination(){
  const [index, setIndex] = useState(0);
  let hasNext = index < images.length - 1;

  let image = images[index];

  function handleNext(){
    if(hasNext){
      setIndex(index+1);
    } else {
      setIndex(0);
    }
  }

  return (
    <div>
      <button onClick={handleNext}>
        Next
      </button>
      <label>Image {index+1} of {images.length}</label>
      <img key={image.src} src={image.src}/>
  
      <p>{image.place}</p>
    </div>
  )
}