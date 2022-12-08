import { useState } from "react";

export function useToggle(initialState: boolean) {
    const [value, setValue] = useState<boolean>(initialState);
    function toggleValue() {
        setValue(!value);
    }
    return {
        value,
        onClick: toggleValue
    }
}