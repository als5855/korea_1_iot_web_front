import React from 'react'
import Context from './Context'
import Zustand01 from './Zustand01'
import Zustand02 from './Zustand02'
import { useMemberStore } from '../../store/user.store'

function Index() {
  const { members } =useMemberStore();
    return (
    <div>
      <h1>리액트 전역 상태관리 (Context API / Zustand)</h1>
      <Context />
      <hr />
      <Zustand01 />
      <Zustand02 />
      <hr />
      <p>{members.map(member => {
        <p>{member.id} / {member.name}</p>
      })}</p>
    </div>
  )
}

export default Index