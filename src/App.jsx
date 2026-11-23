import Header from './component/Header'
import MenuCard from './component/MenuCard'
import AddMenu from './component/AddMenu'
import { initialMenus } from './data'
import { useState } from 'react'
import './App.css'

function App() {

  const [menus, setMenus]=useState(initialMenus)

  const addMenu=(name)=>{
    setMenus([...menus, {
      id:Date.now(),
      emoji:'🍽️',
      name:name,
      votes:0
    }])
  }
  
  return (
    <div className='app'>
      <Header title={'🍱 오늘 점심 뭐 먹지?'} />
      <AddMenu onAdd={addMenu}/>
      <ul className='menus'>
          {menus.map((m)=>(
          <MenuCard key={m.id} {...m}/>

        ))}
      </ul>
      <footer className='footer'>
        <button type='button' className='reset'>투표 초기화</button>
      </footer>
    </div>
  )
}

export default App
