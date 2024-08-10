import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: 'AI Customer Support Assistance',
	description:
		'AI HelpNet: An AI-powered customer support platform designed to enhance customer service efficiency and provide timely assistance.',
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
