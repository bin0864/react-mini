import React from 'react'

const Header = ({title}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <p>지금까지 <stron>0</stron>표</p>
    </header>
  )
}

export default Header