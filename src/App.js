//모달창 생성 : 사용자가 기존컨테츠에서 부가내용을 설명하기 위한 상호작용을
// 표현사기 위해 동적으로 생성한 컴포넌트

// * 컴포넌트 만드는 법
// 1. function 만들고
// return () 안에 html 담기
// 사용하는 곳에서는 <함수명> </함수명> 또는 <함수명/> 쓰기
// * 언제 컴포넌트를 사용하면 좋을까요?
//  - 반복적인 HTML 요소를 재사용할 경우
//  - 큰 페이지
//  - 자주 변경되는 요소

import './App.css';
import {useState} from "react";

function App() {

    let [posts, setPosts] = useState(['남자코트 추천', '우동맛집', '강남우동맛집'])
    let [likes, setLikes] = useState(0)

  return (
      //JSX(Javas
      <div className="App">
          {/*React에서는 class 속성 대신 calssName을  사용*/}
          <div className="black-nav">
              <h4 style={{color:'red', fontSize:'16px'}}>
                  리엑트 블로그
              </h4>
          </div>
          <div className="list">
              {/* 세개의 state가 리스트로 있기 때문에 문법에 맞지않음.
              <button conClick = {()=>{ setPosts('여자코트추천)}}>*/}
              <button onClick={ () => {
                  // 기존 전체 State를 갱신하는것이 아니라, 필요한 요소만 갱신 하려고 시도,
                  // 하지만 State는 변경이 되지 않음
                  // state의 갱신은 state 주소가 갱신될 때 일어난다.
                  // posts[0] = '여자코트 추천'
                  // setPosts(posts)}}> 제목수정 테스트 </button>
              {/*인라인 속성을 적용할때에는 {{}} 구조를 사용한다.
          스타일의 속성을 객체로 표현한다.
          속성명에 - 가들어갈경우에는 카멜표기법으로 명시한다. ex font-sixe > fontSize*/}
                  let posts_update = [...posts]
                      posts_update[0]='여자코트추천'
                          setPosts(posts_update)}
              }> 제목수정테스트
                  </button>
              <h4 style={{color: 'red', fontSize: "large"}}>
                  {/*치환할 값은 {} 사용*/}
                  {posts[0]}
                  <span onClick={ ()=>{ setLikes(likes+1)} }>👍</span>{likes}
              </h4>
              <p>3월 10일 발행</p>
          </div>
          <div className="list">
              {/*인라인 속성을 적용할때에는 {{}} 구조를 사용한다.
          스타일의 속성을 객체로 표현한다.
          속성명에 - 가들어갈경우에는 카멜표기법으로 명시한다. ex font-sixe > fontSize*/}
              <h4 style={{color: 'red', fontSize: "large"}}>
                  {/*치환할 값은 {} 사용*/}
                  {posts[1]}
              </h4>
              <p>3월 10일 발행</p>
          </div>
          <div className="list">
              {/*인라인 속성을 적용할때에는 {{}} 구조를 사용한다.
          스타일의 속성을 객체로 표현한다.
          속성명에 - 가들어갈경우에는 카멜표기법으로 명시한다. ex font-sixe > fontSize*/}
              <h4 style={{color: 'red', fontSize: "large"}}>
                  {/*치환할 값은 {} 사용*/}
                  {posts[2]}
              </h4>
              <p>3월 10일 발행</p>
          </div>
      {/*    게시글의 상세내용에 대한 모달창  */}
          <MyModal/>
      </div>
  );
}

function MyModal () {
          return(
          <div className="modal">
          <h4> 제목 </h4>
          <p> 날짜 </p>
          <p> 상세내용 </p>
          </div>

          )
      }


export default App;
