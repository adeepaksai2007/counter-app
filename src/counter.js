// src/Counter.js
import React, { useState } from 'react';

const Counter = () => {
    // Initialize state for count
    const [count, setCount] = useState(0);

    // Function to handle increment
    const increment = () => {
        setCount(count + 1);
    };

    // Function to handle decrement
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
        // src/Counter.js
import React, { useState } from 'react';

const Counter = () => {
    // Initialize state for count
    const [count, setCount] = useState(0);

    // Function to handle increment
    const increment = () => {
        setCount(count + 1);
    };

    // Function to handle decrement
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
