import React from "react";

export const ObjectUse = () => {
    //
    // 객체 사용법
    const a = 'age';
    // 객체 생성
    const obj1 = {
        // key 값 넣기, 그 뒤에 value 넣기 = 객체를 만들었고 객체를 obj1에 넣었다.
        id: 1,

        // boolean 값도 들어갈 수 있다.
        // id: false,

        // key 값을 문자열로 감싸서 넣을 수도 있다.
        "name": "수지",
        // 보통은 문자열 기호를 떼고 쓰지만, 내가 쓰고싶은 객체의 key 값이 JavaScript 변수로 쓸 수 없는 특별한 문자일 때 문자열로 감싸서 사용한다.
        // 예를 들어 변수의 이름에 스페이스가 들어갈 수 없는데, 꼭 넣어야 한다면
        "my key" : "키 값에 스페이스를 넣고 싶을때",

        // a라는 변수에 age라는 문자열이 있을 때 이 객체의 키 값으로 age 값을 사용하길 원한다.
        // 그럴 때는 아래와 같이 사용한다.
        [a]: 3,
        getNameWithFunc: function () {
            //
            console.log("박수지");

            // 현재 객체 obj1에서 name 값을 출력하고 싶다면?
            console.log(this.name);
        },

        // 이 함수의 this는?
        getNameWithArrowFunc: () => {
            // 이 함수의 스코프의 상위 스코프를가진다. 아무것도 안나옴 (undefined)
            // console.log("arrow function this: ", this);
            // console.log(this.name);
        }
    }


    // 구조분해할당 사용
    const obj2 = {
        id: 1,
        name: '수지박',
        age: 5,
        habit: 'game',
    };
    // 객체가 있다. 여기서 각각의 값을 꺼내 변수에 저장하고 싶을때
    // 아래의 방법은 비효율 적이지 않은가?
    // const id = obj2.id;
    // const name = obj2.name;
    // const age = obj2.age;
    // const habit = obj2.habit;
    // 따라서 구조분해할당을 이용해 아래와 같이 사용한다.
    const {id, name, age, habit} = obj2;

    const arr1 = [1, '바구지', 9];

    // const aId = arr1[0];
    // const aName = arr1[1];
    // const aAge = arr1[2];
    // 배열도 똑같이 구조분해할당 한다.
    // 만약 1번째 원소가 필요없어도 적어줘야한다. 아니면 언더바로 이름을 준다던지..?
    const [aId, aName, aAge] = arr1;

    console.log(obj1);
    obj1.getNameWithFunc();
    obj1.getNameWithArrowFunc();

    return (
        <>
        </>
    );
}