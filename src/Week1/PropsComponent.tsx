{/*상위 컴퍼넌트로 부터 받아온다.*/} 
interface Props {
    id: string;
    name: string;
    orders: any;
}

export const PropsComponent = (
    {
        id, name, orders
    } :Props
) => {
    //
    // 컴포넌트 사용과 props 이해하기
    // 클래스 컴포넌트, 함수 컴포넌트로 나뉜다. 현재 사용하는 컴포넌트는 함수 컴포넌트이다.
    // 클래스 기반 컴포넌트는 stateful 상태가 존재하며, 함수 기반 컴포넌트는 stateless로 상태가 존재하지 않는다.
    // 컴포넌트는 재사용성이 가능하여 유용하다.

    // props 객체를 가진다.

    return(
        <>
          <div>
              <h2>{id}</h2>
              <p>
                  <span>이름 : {name}</span>
                  <span>주문 수량 : {orders.length}</span>
              </p>
          </div>
        </>
    )
}