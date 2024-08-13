import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
	{ icon: <FaGithub />, path: "https://github.com/GustavoCescon" },
	{ icon: <FaLinkedin />, path: "https://www.linkedin.com/in/gustavo-cescon/" },
];
const Socials = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<Link key={index} href={item.path} className={iconStyles}>
						{item.icon}
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
