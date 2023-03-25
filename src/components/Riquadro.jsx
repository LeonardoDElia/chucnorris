import React from 'react'
import '../styles/Riquadro.css'

const Riquadro = ({joke}) => {
  return (
    <div className='Riquadro'>
      <p id='joke'>{joke}</p>
    </div>
  )
}

export default Riquadro
