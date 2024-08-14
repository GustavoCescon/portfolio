"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";
const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
	const swiper = useSwiper();

	return (
		<div className={containerStyles}>
			<button
				type="button"
				className={btnStyles}
				onClick={() => swiper.slidePrev()}
			>
				<PiCaretLeftBold className={iconsStyles} />
			</button>
			<button
				type="button"
				className={btnStyles}
				onClick={() => swiper.slideNext()}
			>
				<PiCaretRightBold className={iconsStyles} />
			</button>
		</div>
	);
};

export default WorkSliderBtns;
