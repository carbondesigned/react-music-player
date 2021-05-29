import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons"

import { playAudio } from "../util"

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  // useEffect
  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
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
  }, [currentSong])
  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  // Format time
  const getTime = (time) => {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length])
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1])
        playAudio(isPlaying, audioRef)
        return
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length])
    }
    playAudio(isPlaying, audioRef)
  }
  // Add Styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  }

  return (
    <div className="player">
      <div className="time-control">
        <div className="time">
          <p> {getTime(songInfo.currentTime)} </p>
        </div>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
            onChange={dragHandler}
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <div className="time">
          <p> {songInfo.duration ? getTime(songInfo.duration) : "0:00"} </p>
        </div>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="btn btn-skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          className="btn btn-play"
          onClick={playSongHandler}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="btn btn-skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  )
}

export default Player
