import React, { Fragment } from "react";
import positions from "./positions";
import themes, { NotifyTheme } from "./notify-themes";
// @ts-ignore
import RcNotify from "rc-notification";
import "./notification.css";
import { Icon } from "antd";

const notificationInstance: { [key: string]: any } = {};
const prefixCls = "notify";
let defaultGetContainer: () => HTMLElement;

function instanceNotify(placement: string, callback: (n: any) => void): any {
	const cacheKey = `${prefixCls}-${placement}`;
	if (notificationInstance[cacheKey]) {
		callback(notificationInstance[cacheKey]);
		return;
	}
	return RcNotify.newInstance(
		{
			prefixCls,
			style: {
				//@ts-ignore
				...positions[placement]
			},
			getContainer: defaultGetContainer
		},
		(notification: any) => {
			notificationInstance[cacheKey] = notification;
			callback(notification);
		}
	);
}

const destroy = (doIt: boolean) =>
	doIt
		? Object.keys(notificationInstance).forEach((cacheKey) => {
				notificationInstance[cacheKey].destroy();
				delete notificationInstance[cacheKey];
		  })
		: null;

export type NotifyType = {
	always?: boolean;
	children: string | React.ReactNode;
	clickClose?: boolean;
	duration?: number | null;
	hasIcon?: true;
	icon?: string;
	maxNotifications?: number;
	position?: "default" | "center" | "topLeft" | "topCenter" | "bottomRight" | "bottomLeft" | "bottomCenter";
	style?: React.StyleHTMLAttributes<any>;
	theme?: "info" | "success" | "warn" | "error" | "default" | "dark" | NotifyTheme;
	title: string | React.ReactNode;
	titleClassName?: string;
	onClose?: Function;
	onClick?: Function;
};

export function Notification(props: NotifyType) {
	const closeOnClick = typeof props.clickClose === "undefined" ? true : props.clickClose;
	const duration = typeof props.duration === "undefined" ? 4.5 : props.duration;
	const hasIcon = props.hasIcon || true;
	const maxCount = props.maxNotifications || 6;
	const onClick = props.onClick || function() {};
	const onClose = props.onClose || function() {};
	const position = props.position || "default";
	const theme = typeof props.theme === "string" ? themes(props.theme) : props.theme;
	const title =
		typeof props.title === "string" ? (
			<div className={`${prefixCls}-description f4 mb2 ${props.titleClassName || ""}`}>
				{hasIcon && (
					<Fragment>
						<Icon style={{ fontSize: "1rem", color: theme.icon.color }} type="info-circle" /> {props.title}
					</Fragment>
				)}
			</div>
		) : (
			props.title
		);
	return instanceNotify(position, (notification: any) =>
		notification.notice({
			duration,
			maxCount,
			onClose,
			closable: true,
			style: { right: "50%", ...props.style, ...theme.box },
			content: (
				<div
					onClick={() => {
						destroy(closeOnClick);
						onClick();
					}}
				>
					{title}
					<div className={`${prefixCls}-description`}>{props.children}</div>
				</div>
			)
		})
	);
}
