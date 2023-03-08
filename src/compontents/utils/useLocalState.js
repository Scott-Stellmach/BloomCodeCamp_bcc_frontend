
import React from "react"

function useLocalState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
        const localStateValue = window.localStorage.getItem(key);

        return localStateValue !== null 
            ? JSON.parse(localStateValue)
            : defaultValue;
    });

    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export { useLocalState };