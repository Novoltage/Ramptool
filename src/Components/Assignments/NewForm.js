import { useState } from "react";


export function NewForm({ onSubmit }){
    const [newItem, setNewItem] = useState("")
    const [value, setValue] = useState("")

  function HandleSubmit(e,) {
    e.preventDefault()
    if (newItem === "") return
    onSubmit(newItem, value)
    console.log(value)
    setNewItem("")
    setValue("")
  }

  return (
    <form onSubmit={HandleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label>New Assignment</label>
        <input value={newItem} onChange={e => setNewItem(e.target.value.replace(/\D/g,""))} type='text' id='item' />
        <br/>
        <label>BagCount</label>
        <input value={value} onChange={e => setValue(e.target.value.replace(/\D/g, ""))}  />
      </div>
      <button className='add-btn'>Add Assignment</button>
    </form>
  )
}