import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, increaseAsync, decreaseAsync } from '../module/counter';

function CounterContainer() {
    // 리덕스 스토어 안에 들어있는 값을 가져와야 하고, 액션도 디스패치 해줘야 함
    // useSelector()는 리덕스 스토어의 데이터를 추출할 수 있다.
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increaseAsync());
    };

    const onDecrease = () => {
        dispatch(decreaseAsync());
    };

    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    );
}

export default CounterContainer;
