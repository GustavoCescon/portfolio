import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	heights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-jetbrainsMono",
});

export const metadata = {
	title: "Cescon - Software Engineer",
	description: "Portfolio do Gustavo Cescon - Software Engineer",
	openGraph: {
		title: "Cescon - Software Engineer",
		description: "Portfolio do Gustavo Cescon - Software Engineer",
		url: "https://cescon-portfolio.vercel.app/",
		type: "website",
		images: [
			{
				url: "/assets/thumb.png",
				width: 1200,
				height: 630,
				alt: "Cescon - Software Engineer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Cescon - Software Engineer",
		description: "Portfolio do Gustavo Cescon - Software Engineer",
		images: ["/assets/thumb.png"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={jetbrainsMono.variable}>
				<Header />
				<StairTransition />

				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	);
}
