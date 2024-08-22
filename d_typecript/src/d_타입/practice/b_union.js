"use strict";
// 타입을 정의해서 "사용자의 데이터를 요청"하는 로직 작성
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ! 2. 사용자의 데이터 요청에 대한 "응답을 처리"하는 함수 정의
function handleResponse(response) {
    // 성공 또는 실패의 데이터를 처리하는 함수
    // in 연산자
    // : '속성' in 객체명
    // >> 해당 속성이 개겣 안에 있는지 여부를 boolean 타입으로 정의
    if ('error' in response) { // 실패(fail)의 데이터가 전달된 정의
        console.log(response.error);
    }
    else {
        // 성공(Success)의 데이터가 전달된 경우
        console.log(`Name: ${response.name}, Email: ${response.email}`);
    }
}
// ! 3. 비동기 작업을 사용하여 JSOPlaceholder에서 사용자 데이터를 가져오는 함수 정의
// >> async/ await
function fetchUserData(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        // https://jsonplaceholder.typicode.com/users
        // >> 사용자 10명의 데이터를 모두 가져옴
        // https://jsonplaceholder.typicode.com/users/${userId}
        // >> 해당 id를 가진 사용자 한 명의 데이터를 가져옴
        try {
            const response = yield fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            // >> fetch함수: 해당 경로를 통해 데이터를 가져와 Response 응답을 반환하는 함수
            if (!response.ok) {
                // response의 응답에 성공이 없다면 (실패)
                throw new Error('Network presopnse was not ok');
            }
            // response 응답에서 data를 객에로 변환하여 반환
            const data = yield response.json(); // jsonplaceholder의 객체 구조를 모두 가지는 데이터
            if (data.id) {
                const userData = {
                    // 좌항(userData 객체의 속성): 우항(데이터 fetch로 가져온 데이터)
                    name: data.name,
                    email: data.email
                };
                // 성공에 대한 
                handleResponse(userData);
            }
            else {
                // 존재하지 않는 사용자인 경우
                handleResponse({ error: '사용자 데이터가 정확하지 않습니다.' });
            }
        }
        catch (e) {
            // Fail 
            /*
            {
              error: 값(삼합연산자 계산)
            }
            */
            // A instanceof
            // : A instanceof B
            // A 데이터 B 안에 포함되어 있는지의 여부를 확인 (상속되어 있는지 여부)
            handleResponse({ error: e instanceof Error ? e.message : 'Unknown Error' });
        }
    });
}
fetchUserData(1);
fetchUserData(4);
fetchUserData(222); // 에러관리가 가능하 에러
// fetchUserData('안녕'); -Error 
