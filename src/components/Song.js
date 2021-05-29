import React from "react"

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img
        alt={currentSong.name}
        className="photo"
        src={currentSong.cover}
      ></img>
      <h1 className="song-name"> {currentSong.name} </h1>
      <h3 className="artist"> {currentSong.artist} </h3>
    </div>
  )
}

export default Song
