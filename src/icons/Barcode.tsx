import React from "react";

export default ({ size = 24, color = "black" }: any) => (
    <svg fill={color} width={size} height={size} xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
        <path d="M22 22h-20c-1.104 0-2-.896-2-2v-16c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2v16c0 1.104-.896 2-2 2zm0-18h-20v16h20v-16zm-2 14h-1v-12h1v12zm-5 0h-1v-12h1v12zm-2 0h-1v-12h1v12zm-2 0h-2v-12h2v12zm-3 0h-1v-12h1v12zm10 0h-2v-12h2v12zm-12 0h-2v-12h2v12z" />
    </svg>
);
