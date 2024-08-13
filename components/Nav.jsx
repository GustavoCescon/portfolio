"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ name: "Home", path: "/", id: 1 },
	{ name: "Serviços", path: "/services", id: 2 },
	{ name: "Resumo", path: "/resume", id: 3 },
	{ name: "Trabalho", path: "/work", id: 4 },
	{ name: "Contato", path: "/contact", id: 5 },
];
export const Nav = () => {
	const pathname = usePathname();
	return (
		<nav className="flex gap-8">
			{links.map((link) => {
				return (
					<Link
						href={link.path}
						key={link.id}
						className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
					>
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};
