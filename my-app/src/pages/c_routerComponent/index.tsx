import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Page01 from './Page01'
import Page02 from './Page02'

function index() {
  return (
    
    <div>
      <h1>리액트 라우트 돔</h1>
        
      <ul style={{
      listStyle: 'none',
    }}>
        <li>
          <Link to='page01'>page01</Link>
        </li>
        <li>
          <Link to='page02'>page02</Link>
        </li>
      </ul>
        <Routes>
          <Route path='/page01' element={<Page01 />}/>
          <Route path='/page02' element={<Page02 />}/>
        </Routes>
    </div>
  )
}

export default index