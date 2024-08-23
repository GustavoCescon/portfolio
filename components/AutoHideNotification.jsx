// components/AutoHideNotification.js
import React, { useEffect, useState } from "react";

const AutoHideNotification = ({ message, duration, onClose, text }) => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
			if (onClose) onClose();
		}, duration);

		return () => clearTimeout(timer);
	}, [duration, onClose]);

	if (!visible) return null;

	return (
		<div
			className={`fixed z-50 px-4 py-2 rounded shadow-lg bottom-4 right-4 ${text}`}
		>
			{message}
		</div>
	);
};

export default AutoHideNotification;
