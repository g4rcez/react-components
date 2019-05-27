import React from "react";

export default ({ size = 24, color = "black" }) => (
    <svg fill={color} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
    </svg>
);
