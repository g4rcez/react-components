import React from "react";

export default ({ children, ...props }: React.AnchorHTMLAttributes<any>) => (
    <a {...props} rel="noopener noreferrer">
        {children}
    </a>
);
