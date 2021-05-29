import React from "react"
import { playAudio } from "../util"

const LibrarySong = ({
  songs,
  song,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song)
    audioRef.current.play()
    // Add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        }
      } else {
        return {
          ...song,
          active: false,
        }
      }
    })
    setSongs(newSongs)
    playAudio(isPlaying, audioRef)

    // Check if song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play()
        })
      }
    }
  }

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} className="photo" src={song.cover}></img>
      <h3 className="song-name"> {song.name} </h3>
      <h4 className="artist"> {song.artist} </h4>
    </div>
  )
}

export default LibrarySong
