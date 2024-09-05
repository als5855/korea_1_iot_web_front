import React from 'react'
import { useInput } from './useInput';

// useInput
// >> input창 입력되는 값을 저장학 UI의 변경 상태에 따라 데이터의 상태 관리
// >> 여러 개의 input 창을 하나의 훅으로 관리
// >> input창에 대한 비움 처리 (초기화)

function Custom02() {
  //커스텀 훅을 사용한 input창 상태관리
  // # 이름 입력에 대한 관리
  const { 
    value: name, 
    bind: nameBind, // value 데이터 값, onChange 변화 함수
    reset: nameReset 
  } = useInput("");

  const { 
    value: email, 
    bind: emailBind, 
    reset: emailReset 
  } = useInput("");

  // # 이메일 입력에 대한 관리
  const handleSubmit = () => {
    console.log(`회원가입 완료: `);
    emailReset();
    nameReset();
  }

  // useInput에 대한 호출 마다 새로운 데이터가 상태 관리
  // const [value, setValue] = useState(initialValue);

  // const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // } 

  // const reset = () => {
  //   setValue(initialValue);
  // }

  return (
    <div>
      <input 
      type="text" 
      name='username'  
      placeholder='사용자 이름' 

      value={nameBind.value} 
      onChange={nameBind.onChange}/>
      <button onClick={nameReset}>이름 초기화</button>

      <input 
      type="text"
      name='email'  
      placeholder='사용자 이메일'
      {...emailBind}
      // value={emailBind.value} 
      // onChange={emailBind.onChange}
      />

      <button onClick={emailReset}>이메일 초기화</button>
      <button onClick={handleSubmit}>회원가입</button>

    </div>
  )
}

export default Custom02