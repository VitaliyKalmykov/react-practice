import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        if(count === 0) {
            return count
        }
        else {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>like</button>
            <button onClick={decrement}>dislike</button>
        </div>
    );
};

export default Counter;