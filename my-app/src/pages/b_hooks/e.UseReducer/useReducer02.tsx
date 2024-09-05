import React, { useReducer } from 'react'
import { reducer } from './UseRecducer'

export default function UseReducer02() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h3>useReducer 재사용한 상태관리</h3>
      <p>count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment'})}>증가</button>
      <button onClick={() => dispatch({ type: 'decrement'})}>감소</button>
    </div>
  )
}
