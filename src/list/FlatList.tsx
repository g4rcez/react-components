import React, { Fragment } from "react";
import { isEmpty } from "../utils";
export type FlatListTypes<T> = {
    data: T[] | any | undefined | null;
    emptyComponent: React.ReactNode;
    hidden?: boolean;
    idKey: string;
    component(data: T): React.ReactNode;
};
export default function FlatList<E>({ idKey = "id", ...props }: FlatListTypes<E>) {
    if (props.hidden) {
        return <Fragment />;
    }
    if (isEmpty(props.data)) {
        return <Fragment>{props.emptyComponent}</Fragment>;
    }
    const Component: any = props.component;
    return (
        <Fragment>
            {props.data.map((x: any) => (
                <Component key={x[idKey]} {...x} />
            ))}{" "}
        </Fragment>
    );
}
