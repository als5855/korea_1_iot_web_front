// !쿠기
// : 뒙사이트가 브라우저에 저장하는 작은 텍스트 파일

// &쿠키의 한계
// - 용량 제한 (4KB), 보안에 취약(개인 정보 보호

// & 쿠키 생성 및 수정
// 1. 

// >> document.cookie에 문자열알 할당하면 생성과 수정이 가능
// (필수) 쿠키의 이름, 값
// (선택, 추가 사항) 만료 날짜. 경로, 도메인, 보안

// ? 기본형식
// document.cookie = '쿠키이름=쿠키값; '

// ? EX)
// 'username'이라는 쿠키에 "JJM"라는 값을 저장
// - 
// '/'슬래시 활용
document.cookie = "username=JJM; path=/;"

// - 만료날짜 설정: expire 속성 설정
// >> 만료날짜를 설정하지 않는 경우 세션 쿠키로 자동 설정되어 브라우저가 닫힐 때 자동 삭제
// >> 만료 날짜는 UTC(협정시계) 시간단위 가짐
//    : KST(한국 표준시) 시간 단위보다 9시간 느림 (한국이 UTC보다 9시간 빠름)

let date = new Date(); // 현재 날짜, 시간을 저장
// >> Date 객체에 /setTime()
// >> Date 객체에 /getTime()

date.setTime(date.getTime() + (1 * 60 * 60 * 1000)); // 현재시간에 1시간을 추가

let expires = "expires=" + date.toUTCString();
// expires=시간문자열

document.cookie = "userAge=50;" + expires + "; path=/;"
// "userAge=50; expries=시간문자열"

let date2 = new Date();
date2.setTime(date2.getTime() + (24 * 60 * 60 * 1000));

let expires2 = "expires=" + date2.toUTCString();

document.cookie = "oneDay=하루;" + expires2 + "; path=/;"
