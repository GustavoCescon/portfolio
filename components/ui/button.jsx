import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
	{
		variants: {
			variant: {
				default: "bg-accent text-primary hover:bg-accent-hover",
				primary: "bg-primary text-white",
				outline:
					"border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
			},
			size: {
				default: "h-[44px] px-6",
				md: "h-[48px] px-6",
				lg: "h-[56px] px-8 text-s uppercase tracking-[2px]",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

const Button = React.forwardRef(
	(
		{ className, variant, size, asChild = false, href, download, ...props },
		ref,
	) => {
		const Comp = asChild ? Slot : href ? "a" : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				href={href}
				download={download}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
