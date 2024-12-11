import React from 'react'

const List = ({id, title, removeItem}) => {
  return (
    <li className='listItem'><span><button onClick={removeItem}>Done</button></span> Task № {id}. Task: {title}</li>
  )
}

export default List