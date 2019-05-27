import React from "react";

export default ({ size = 24, color = "black" }) => (
    <svg fill={color} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
);
