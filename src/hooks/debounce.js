import { useEffect, useState } from "react";

export function useDebounce(value, delay = 300) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const handlerDebounce = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(handlerDebounce);
    }, [value, delay]);
    
    
    return debounced
}