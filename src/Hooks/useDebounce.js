import {useState, useEffect} from "react";

function useDebounce(value,delay) {
    const [debounceValue, setDebounceValue] = useState(value)// create a state, debounceValue stores the delayed value and setDebounceValue is used to update it. 
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay]) //The dependency array makes sure that useEffect only runs when value changes or when delay changes.
    return debounceValue //Hook return the delay, value that are used in the other components.
}



export default useDebounce