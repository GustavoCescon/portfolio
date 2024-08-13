"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
	{ name: "Home", path: "/", id: 1 },
	{ name: "Serviços", path: "/services", id: 2 },
	{ name: "Resumo", path: "/resume", id: 3 },
	{ name: "Trabalho", path: "/work", id: 4 },
	{ name: "Contato", path: "/contact", id: 5 },
];

const MobileNav = () => {
	const pathname = usePathname();
	return (
		<Sheet>
			<SheetTrigger className="flex justify-center items-center">
				<CiMenuFries className="text-[32px] text-accent" />
			</SheetTrigger>
			<SheetContent>
				<div className="mt-32 mb-40 text-center text-2xl">
					<Link href="/">
						<h1 className="text-4xl font-semibold">
							Cescon<span className="text-accent">.</span>
						</h1>
					</Link>
				</div>
				<nav className="flex flex-col gap-8 items-center justify-center">
					{links.map((link) => {
						return (
							<Link
								href={link.path}
								key={link.id}
								className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
							>
								{link.name}
							</Link>
						);
					})}
				</nav>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
