import React, {useEffect} from "react";

// here value is the input-value of input-tag from App component...
export function useDebounceUsingState(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeOut(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay]);
    return debounceValue;
}

// usehooks.com
// swr & react Query
