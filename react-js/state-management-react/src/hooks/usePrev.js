import React, { useEffect, useRef } from "react";

// Very Important (1. Property of react)
// React returns first, effect gets called later... (Imp)

export function usePrev(value) {
    const ref = useRef()

    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}

