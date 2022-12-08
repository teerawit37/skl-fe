import { useState } from "react";

export function useArray(initialState: string[]) {
    const [value, setValue] = useState<string[]>(initialState);
    
    function onUpdate(item: string) {
        setValue([
            ...value,
            item
        ]);
    }
    return {
        value,
        onUpdate
    }
}