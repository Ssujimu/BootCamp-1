import React from "react";

interface State {
    count: number;
}

class LifeCycleComponent extends React.Component<any, State> {
    //
    state: State = {
        count: 0,
    }


    componentDidMount() {
        // 처음 실행 시 작동, 렌더링 됐을 때 작동. (컴포넌트 부를때)
        console.log('CDM 작동')
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        // 특정한 값이 바뀔 때 작동
        console.log('CDU 작동')
    }

    componentWillUnmount() {
        // 컴포넌트가 사라질 때 확인할 수 있다.
        console.log('CWU 작동')
    }

    upCount() {
        this.setState({count: this.state.count + 1});
    }

    downCount() {
        this.setState({count: this.state.count - 1});
    }

    render() {
        return (
            <>
                <div>
                    count : {this.state.count}
                </div>
                <button onClick={() => this.upCount()}> Up </button>
                <button onClick={() => this.downCount()}> Down </button>
            </>
        )
    }
}
export default LifeCycleComponent;