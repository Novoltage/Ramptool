//recycled from To-do

import "./Notes.css"
import { useEffect, useState } from 'react';
import { NewBulletForm } from './NewBulletForm'
import { BulletList } from './BulletList'
import { DeleteAll } from './DeleteAll';




export function Notes() {

  const [notes, setNotes] = useState(() => {
    const localValue = localStorage.getItem("NOTES")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("NOTES", JSON.stringify(notes))
  })


  function AddBullet(title) {

    setBullets(currentBullets => {
      return [
        ...currentBullets,
        { id: crypto.randomUUID(), title }
        ,
      ]
    }
    )
  }


  function DeleteBullet(id) {
    setNotes(currentBullets => {
      return currentBullets.filter(notes => notes.id !== id)
    })
  }

  function DeleteBullets() {
    setNotes([])
  }

  return (
    <>
      <section className='wrapper'>
        <NewBulletForm onSubmit={AddBullet} />
        <h1 className='header'>Bullet List </h1>
        <BulletList bullets={notes} DeleteBullet={DeleteBullet} />
        <DeleteAll DeleteAll={DeleteBullets} bullets={notes} />

      </section>

    </>
  );

}