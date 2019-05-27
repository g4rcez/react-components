import { useLayoutEffect, useState } from "react";

export function useWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useLayoutEffect(() => {
        const resize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);
    return width;
}
