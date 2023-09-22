import React,{ useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

export default function About() {

  const a = useContext(noteContext)
  return (
    <div>About {a.name}</div>
  )
}
