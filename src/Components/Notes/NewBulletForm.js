import * as React from 'react';
import { useState } from 'react';

export function NewBulletForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function HandleSubmit(e,) {
    e.preventDefault()

    if (newItem === "") return
    onSubmit(newItem)
    //dueDate(value)
    //console.log(value)
    //console.log(today)
    setNewItem("")
    
  }

  return (
    <form onSubmit={HandleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label>New Bullet</label>
        <input value={newItem} onChange={e => setNewItem(e.target.value)} type='text' id='item' />
      </div>
      <button className='add-btn'>Add Bullet</button>
    </form>
  )
}