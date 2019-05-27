const device = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "mobile" : "desktop";

export const isMobile = () => device() === "mobile";

export const isEmpty = (something: any) => {
    if (something === undefined) {
        return true;
    }
    if (
        typeof something == "function" ||
        typeof something == "number" ||
        typeof something == "boolean" ||
        Object.prototype.toString.call(something) === "[object Date]"
    ) {
        return false;
    }
    if (Array.isArray(something) && something.length === 0) {
        return true;
    }
    if (something === null || something.length === 0) {
        return true;
    }
    if (typeof something == "object") {
        let r = true;
        for (let f in something) {
            r = false;
        }
        return r;
    }
    return false;
};
