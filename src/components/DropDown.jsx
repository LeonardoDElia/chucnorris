import React, { useEffect } from 'react'
import '../styles/DropDown.css'
const DropDown = ({categories, clbk}) => {

  useEffect(clbk, [])


  return (
    <div className='DropDown'>
      <select name="category" id="category">
        <option value="" defaultValue hidden>Categorie</option>
        {categories.map((categories) => 
        <option value={categories.value} key={categories.id}>{categories.value}</option>
        )}
      </select>
    </div>
  )
}

export default DropDown
