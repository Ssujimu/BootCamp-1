import {useState} from "react";

export const UseStateComponent = () => {

    // 변수명과 함수선언
    const [ count, setCount ] = useState(0);

    // 클릭시 숫자 +1
    const onClickUpBtn = () => {
        //
        setCount(count + 1);
    }

    // 클릭시 숫자 -1
    const onClickDownBtn = () => {
        //
        setCount(count - 1);
    }

    return(
        // 버튼 생성과 보여질 값
        <>
            <button onClick={onClickDownBtn}>-</button>
            <span>{count}</span>
            <button onClick={onClickUpBtn}>+</button>
        </>
    )
}