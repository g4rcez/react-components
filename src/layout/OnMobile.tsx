import React, { Fragment } from "react";
import { useWidth } from "../hooks/useWidth";
import { isMobile } from "../utils";
type Props = {
    children: React.ReactNode;
    addOnMobile?: React.ReactNode;
    hideOnMobile?: boolean;
    hideOnDesktop?: boolean;
    Wrapper?: any;
};
export default ({ children, hideOnMobile = false, addOnMobile, hideOnDesktop = false, Wrapper }: Props) => {
    const width = useWidth();
    const mobile = isMobile();
    if (mobile || width < 570) {
        if (hideOnMobile) {
            return <Fragment />;
        }
        if (!!addOnMobile) {
            return (
                <Fragment>
                    {children}
                    {addOnMobile}
                </Fragment>
            );
        }
        return <Fragment>{children}</Fragment>;
    }
    return hideOnDesktop ? <Fragment /> : <Fragment>{children}</Fragment>;
};
