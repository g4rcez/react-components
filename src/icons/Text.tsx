import React from "react";

export default ({ size = 24, color = "black" }) => (
    <svg fill={color} width={size} height={size} xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
        <path d="M24 21h-24v-2h24v2zm0-4.024h-24v-2h24v2zm0-3.976h-24v-2h24v2zm0-4h-24v-2h24v2zm0-6v2h-24v-2h24z" />
    </svg>
);
