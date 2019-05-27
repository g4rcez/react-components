import React from "react";

export default ({ size = 24, color = "black" }) => (
    <svg fill={color} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <path d="M1 0h22l-9 14.094v9.906l-4-2v-7.906z" />
    </svg>
);
