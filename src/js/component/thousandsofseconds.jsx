import React, { useEffect } from "react";
import { useState } from "react";
import { NumArray } from "./props";




export const ThousandsOfSecondsCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => (prev >= NumArray.length - 1 ? 0 : prev + 1));
        }, 1000000);

        return () => clearInterval(interval);
    }, []);

    return <p>{counter}</p>;
};