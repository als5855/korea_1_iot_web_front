"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
exports.tmp = '';
// ! Async & Await 
// : 프로미스를 기반으로 비동기 작업을 간편하게 작성하는 방어
// : async로 정의된 함수 내에서
// : await 키워드를 사용하여 비동기 작업의 결과를 기다림
// ? 1. async 함수 내에서만 await 사용이 가능
// ? 2. 동기 코드와 우사한 형태로 
// 외부(jsonplaceholder)에서 데이터를 가져오는 함수
// : 시간이 오래걸리는 작업
function fetchUserData() {
    return __awaiter(this, void 0, void 0, function* () {
        // 외부와의 연결 시 발생할 오류를 방지
        // : try - catch 블록 사용
        try {
            // 실행할 로직을 작성
            // : 해당 위치에서 오류 발생 시 catch 블록으로 이동
            // Promise 객체: 연산 결과에 따라 성공 또는 실패의 상태를 가짐
            // +) fetch('url'): 해당 url을 통해 서버에 데이터 요청을 보내고 그 응답을 프로미스 형태로 가져옴
            // >> 프로미스가 성공의 상태를 가질 경우
            //    , Response 객체를 반환 (요청에 대한 결과값)
            const response = yield fetch('https://jsonplaceholder.typicode.com/users/3');
            if (!response.ok) {
                throw new Error('Fecth Fail');
            }
            const data = yield response.json();
            console.log(`가져온 데이터: ${data}`, data);
        }
        catch (error) {
            console.error('데이터 요청 중 오류:', error);
        }
    });
}
fetchUserData();
console.log('hello');
//& fetch() 함수
// : 네트워크 요청을 비동기적으로 처리
// : fetch는 Promise를 반환하는데, 이 Promise는 HTTP 응답을 나타내는 Response 객체로 해결
// : Response 객체는 요청에 대한 서버의 응답을 포함하며, 여러 가지 유용한 속성과 메서드를 제공
//? Response 객체의 주요 속성
// ok: 이 속성은 HTTP 상태 코드가 200-299 범위에 있을 때 true를 반환
//     >> 요청이 성공적으로 완료되었음을 나타냄
// status: 응답의 HTTP 상태 코드를 반환 (예: 200, 404).
// statusText: HTTP 상태 코드에 대한 텍스트 메시지를 반환 (예: "OK", "Not Found").
// headers: 응답 헤더를 나타내는 Headers 객체. 헤더에서 특정 값을 조회 가능
// body: 응답의 본문을 ReadableStream 형태로 제공 - 이 스트림을 통해 데이터를 읽기 가능
// - 해당 데이터를 json()을 사용하여 JSON 형식으로 파싱
