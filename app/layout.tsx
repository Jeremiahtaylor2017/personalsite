import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const syne = Syne({
	variable: "--font-display",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
	variable: "--font-body",
	subsets: ["latin"],
	weight: ["300", "400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
	weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
	title: "Jeremiah Taylor | Security Engineer",
	description: "Security Engineer focused on infrastructure, platform security, and reliable systems in constrained enterprise environments.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<Nav />
				{children}
			</body>
		</html>
	);
}
