"use client"

import { useEffect, useState } from "react";

interface TypewriterProps {
    textValue: string;
}

export default function Typewriter({ textValue }: TypewriterProps) {
    const [text, setText] = useState("");

    function printOnScrean(text: string, index: number = 0) {
        if (index < text.length) {
            setText(text.slice(0, index + 1));
            setTimeout(() => printOnScrean(text, index + 1), 20);
        }
    }

    useEffect(() => {
        setText("");
        printOnScrean(textValue);
    }, [textValue]);

    return (
        <>
            {text}
        </>
    );
}
