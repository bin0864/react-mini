import React from 'react'

const MenuCard = ({ emoji, name, votes }) => {
  return (
    <div className='card'>
        <div className="card__emoji">
            {emoji}
        </div>

        <div className="card__name">
            {name}
        </div>

        <div className="card__votes">
            {votes}
        </div>

        <button type='button' className='card__btn'>투표하기</button>
    </div>
  )
}

export default MenuCard