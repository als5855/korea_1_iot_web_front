// jsonPlaceholder 
// https://jsonplaceholder.typicode.com
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/원하고자 하는 데이터 배열명
// https://jsonplaceholder.typicode.com/원하고자 하는 데이터 배열명/id


// ! async / awaitf를 사용하여 JSONPlaceholder
async function fetchPosts(postId) {
  try {
    // 실제 구현 함수 로직
    const response = await fetchPosts(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if(!response.ok) {
      throw new Error(`HTTP error: status: ${response.status}`);
    }

    const posts = await response.json();
    console.log(posts);
  } catch(e) {
    console.error(`게시물 가져오기 실패: ${e.message}`);
  }
}

fetchPosts(1);

