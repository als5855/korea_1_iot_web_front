import React from 'react'
import { NavLink } from 'react-router-dom'

function NaviBar() {

  const links = [
    '/', 'basic', 'hooks', 'routerComponent', 'parent', 'routerhook', 'axios', 'global'
  ];

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: '10px',
      padding: '10px 20px',
      border: '1px solid black',
      borderRadius: '5px'
    }}>
      {links.map(link => (
          <NavLink 
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'white' : 'black',
            backgroundColor: isActive ? 'red' : 'lightgray',
            padding: '10px 20px',
            borderRadius: '5px'
          })}
          to={link} 
          key={link} 
          >
            {link === '/' ? 'Home' : link}
          </NavLink>
      ))}
    </div>
  )
}

export default NaviBar