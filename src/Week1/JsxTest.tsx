// JSX는 JavaScript의 확장으로 문법적 편의를 위해 만들어졌다.
// JSX
// ReactDom.render(
//     <h1 className='heading'> Hello World</h1>,
//      document.getElementById('content')
// )

// JavaScript
// ReactDom.render(
//      React.createElement(
//          'h1',
//          {className: 'heading'},
//          'Hello World'
//      )
// )

// JSX를 사용할 때 주의할 점이 있다.
// React의 컴포넌트는 대소문자를. HTML 요소는 소문자로 작성한다. <대소문자 구분>
// <List />, <Button />                     <h2/>, <p/>, <a/>
// JSX 사용 시 JavaScript 코드는 {} -> 중괄호를 사용해야 한다. 중괄호 내부에 코드를 작성해야 한다.
// HTML에서 class, for와 같은 예약어는 JSX에서 className, htmlFor를 사용해야 한다.

// JSX를 사용했을 때의 문법적 차이를 보자.
// h1 태그 속성없이(null) 문자열지정(JSX Test)
import React from "react";

export const JsxTest = () => {
    //
    const title = React.createElement('h1', null, 'JSX Test');
    // p 태 그 속성없이(null) 문자열지정(Paragraph Text~)
    const text = React.createElement('p', null, 'Paragraph Text~');
    // title과 text를 포함하는 container 지정. 배열 형태로 넣어준다.
    const container = React.createElement('div', null, [title, text]);

    return (
        // JSX를 이용해 div안에 h1 태그와 p 태그를 넣어보기

        //  아래 방식을 JSX로 바꾼다면?
        //   container,

        //  아래가 JSX의 형태
        <div>
            <h1>JSX Test</h1>
            <p>Paragraph Text~!</p>
        </div>
    )
    // 가독성이 JSX가 더 좋다.
}

