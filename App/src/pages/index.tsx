import logo from '../assets/logo.svg'

import Image from 'next/image'
import data from './api/auroraData.json'
import { ChangeEvent, useEffect, useState } from 'react'

interface Lyrics {
  verses: {
    lines: string[]
  }[]
}

export default function Home() {
  const [currentAlbum, setCurrentAlbum] = useState(
    'All My Demons Greeting Me As A Friend',
  )
  const [currentSong, setCurrentSong] = useState('Runaway')
  const [currentLyrics, setCurrentLyrics] = useState<Lyrics>({
    verses: [
      {
        lines: [''],
      },
    ],
  })

  function handleSelectAlbum(e: ChangeEvent<HTMLSelectElement>) {
    setCurrentAlbum(e.target.value)
    setCurrentSong(
      data.albums.filter((album) => album.name === e.target.value)[0].songs[0]
        .name,
    )
  }

  function handleSelectSong(e: ChangeEvent<HTMLSelectElement>) {
    setCurrentSong(e.target.value)
  }

  useEffect(() => {
    const album = data.albums.filter((album) => album.name === currentAlbum)[0]
    const song = album.songs.filter((song) => song.name === currentSong)[0]
    setCurrentLyrics(song.lyrics)
    console.log(currentLyrics)
  }, [currentSong, currentAlbum, currentLyrics])

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <Image className="w-64 md:w-96" src={logo} alt="Aurora Lyrics" />
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="flex flex-col gap-2">
          <label className="font-bold text-white" htmlFor="album">
            Album:
          </label>
          <select
            value={currentAlbum}
            onChange={(e) => handleSelectAlbum(e)}
            className="bg-dark-purple-aurora text-white p-2 rounded-md"
            id="album"
          >
            {data.albums.map((album, index) => {
              return (
                <option key={index} value={album.name}>
                  {album.name}
                </option>
              )
            })}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold text-white" htmlFor="song">
            Song:
          </label>
          <select
            value={currentSong}
            onChange={(e) => handleSelectSong(e)}
            className="bg-dark-purple-aurora text-white p-2 rounded-md"
            id="song"
          >
            {data.albums
              .filter((album) => album.name === currentAlbum)
              .map((album, index) => {
                return album.songs.map((song, index) => {
                  return (
                    <option key={index} value={song.name}>
                      {song.name}
                    </option>
                  )
                })
              })}
          </select>
        </div>
      </div>
      <div className="mt-8 px-2 flex flex-col justify-center pb-20">
        {currentLyrics.verses.map((verse, index) => {
          return (
            <div key={index} className="mt-4 px-4 max-w-md">
              {verse.lines.map((line, index) => {
                return (
                  <p
                    key={index}
                    className="text-white text-center md:text-xl md:text-left"
                  >
                    {line}
                  </p>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
