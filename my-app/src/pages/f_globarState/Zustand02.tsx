import React, { useState } from 'react'
import { useMemberStore } from '../../store/user.store'
import { useAuthStore } from '../../store/auth.store';

function Zustand02() {
  const { members, addMember, updateMember, deleteMember} = useMemberStore(); 

  const handleCreate = () => {
    addMember({
      id: 1,
      name: '장지민'
    });
  }

  
  return (
    <div>
      {members.map(user => (
        <div>
          <p>{user.id}</p>
          <p>{user.name}</p>
        </div>
      ))}
        <button onClick={() => handleCreate()}>추가</button>
    </div>
  )
}

const Login = () => {
  const [userState, setUsername] = useState('');
  const { login } = useAuthStore();

  return(
    <>
    <input type="text" />
    </>
  )
}

export default Zustand02