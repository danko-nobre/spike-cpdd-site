"use client";

import { useState } from "react";

export function SimpleButton() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Cliquei {count} vezes
        </button>
    );
}
