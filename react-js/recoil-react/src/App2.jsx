import React from "react";

// recoil selectors
export function App2() {

    return <>
        <Button />
        <Counter />
        <IsEven />
    </>
}

function Button() {

    function increase() {
        setCount(c=> c+2)
    }
    
    return <>
        <button>increase</button>
        <button>decrease</button>
    </>
}