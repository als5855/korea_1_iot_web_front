import React from 'react'
import { useNavigate } from 'react-router-dom'

// ! useNavigate()
// : React Router에서 제공하는 Hook
// >> 사용자를 다른 페이지로 이동시킬 때 사용

// ? >> Link 컴포넌트와의 차이는 
// >> 이벤트 핸들러나 비동기 작업 내에서의 특정 경로 이동이 가능


function UseNavigate01() {
  const navigate = useNavigate();
  const  goToParentPage = () => {
    console.log('버튼이 클릭됨');
    navigate('/parent', { state: { userId: 12345}});
  }

function goToHomePage() {
  navigate('/');
}

function goToPrevPage() {
  navigate(-1);
}

  return (
    <div>
      <p>UseNaviagate01 패이지입니다..</p>
      <button onClick={goToParentPage}>parent 페이지로 이동합니다.</button>
      <button onClick={goToHomePage}>Home</button>

      <button onClick={goToPrevPage}>이전페이지로 이동</button>
      
    </div>
  )
}

export default UseNavigate01