
import React, { useRef } from "react";

export function useDebounce(apiCallFunction) {
    const currentClockRef = useRef()

    const fn =  () => {
        clearTimeout(currentClockRef.current)
        currentClockRef.current = setTimeout(apiCallFunction, 500);
    }

    return fn
} 

