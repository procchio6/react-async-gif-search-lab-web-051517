import React from 'react'

const GifList = ({gifs}) => {
  return (
    <ul className='list-group'>
      {gifs.map(Gif)}
    </ul>
  )
}

const Gif = (gif) => {
  return (
    <li className='list-group-item' key={gif.id}>
      <iframe
        src={gif.embed_url}
        width="480"
        height="360"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen>
      </iframe>
    </li>
  )
}

export default GifList
