import "../global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "johlav.com",
		template: "%s | johlav.com",
	},
	description: "Fullstack JS Dev | LyonJS & Duchess Co-orga",
	openGraph: {
		title: "johlav.com",
		description: "Fullstack JS Dev | LyonJS & Duchess Co-orga",
		url: "https://johlav-com.vercel.app",
		siteName: "johlav.com",
		images: [
			{
				url: "https://johlav-com.vercel.app/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Johlav",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
