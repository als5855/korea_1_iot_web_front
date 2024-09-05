import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Basic from './pages/a_basic';
import Hooks from './pages/b_hooks';
import RouterComponent from './pages/c_routerComponent';
import RouterHook from './pages/d_routerHook';

import Todos01 from './pages/z_todos';
import NaviBar from './component/NaviBar';
import Parent from './pages/c_routerComponent/Parent';
import Example01 from './pages/c_routerComponent/Example01';
import Example02 from './pages/c_routerComponent/Example02.';
import Axios from './pages/e_axio';
import Global from './pages/f_globarState';
// import { useCountStore } from './pages/f_globarState/Zustand01';

//! 리액트 프로젝트 개발 실행 명령어
// npm run start
// : http://localhost:3000 환경에서 실행

function App() {
  // const { count } = useCountStore();
  return (
    <div>
      <h1>React Project</h1>
      <NaviBar />
      {/* Routes태그: Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그: 단일 태그 사용 권장 */}
        {/* path속성: 해당 Routes 내에서 사용하는 URL 경로 */}
        {/* element속성: 해당 path속성과 일치할 경우 보여질 컴포넌트 */}
        <Route path='/basic' element={<Basic />} />
        <Route path='/hooks' element={<Hooks />} />
        <Route path='/routerComponent/*' element={<RouterComponent />} />
        <Route path='/parent' >
        <Route index element={<Parent />}/>
          <Route path='example01' element={<Example01 />}/>
          <Route path='example02' element={<Example02 />}/>
        </Route>
        <Route path='/todos01' element={<Todos01 />} />
        <Route path='/routerhook' element={<RouterHook />} />
        <Route path='/axios' element={<Axios/>} />
        <Route path='/global' element={<Global/>} />
      </Routes>
    </div>
  );
}

export default App;