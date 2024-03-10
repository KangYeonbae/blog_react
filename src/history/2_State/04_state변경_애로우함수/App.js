import './App.css';
import {useState} from "react";

function App() {


    /*
       기존변수를 사용한 방식
       let post ='강남우동맛집'
       State를 사용한 방식
       -사용방법
       1.import {useState} from "react"
       2. let [state명, state 변경을 도와주는 함수명] = userState('[보관할자료]')
       state 변경을 도와주는 함수명은 추후에 알아보자

       State 를 변경하게 되면 State 변경 함수와 함께
        Html 화면 갱신이 일어나도록 설계되어져있다.
        결론 : 동적으로 자주 변경 될 것 같은 html 요소는 State로 만들자!


          let [post, postChange] = useState('명동 우동 맛집')
          상태 변경함수를 사용하지 않으면 생략도 가능하다.
     */
    let [post, setPosts] = useState(['남자코트 추천', '우동맛집', '강남우동맛집'])
    let [likes, setLikes] = useState(0)

    // function changeLikes(){
    //     setLikes(likes+1)
    // }
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
              <button onClick={ () => { setPosts (['여자코트추천', '강남우동맛집', '파이썬독학'])}}> 제목수정 테스트 </button>
              {/*인라인 속성을 적용할때에는 {{}} 구조를 사용한다.
          스타일의 속성을 객체로 표현한다.
          속성명에 - 가들어갈경우에는 카멜표기법으로 명시한다. ex font-sixe > fontSize*/}
              <h4 style={{color: 'red', fontSize: "large"}}>
                  {/*치환할 값은 {} 사용*/}
                  {post[0]}
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
                  {post[1]}
              </h4>
              <p>3월 10일 발행</p>
          </div>
          <div className="list">
              {/*인라인 속성을 적용할때에는 {{}} 구조를 사용한다.
          스타일의 속성을 객체로 표현한다.
          속성명에 - 가들어갈경우에는 카멜표기법으로 명시한다. ex font-sixe > fontSize*/}
              <h4 style={{color: 'red', fontSize: "large"}}>
                  {/*치환할 값은 {} 사용*/}
                  {post[2]}
              </h4>
              <p>3월 10일 발행</p>
          </div>
      </div>
  );
}

export default App;
