import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The World of Ultima",
  description: "Ultima video game series",
  icons: {
    icon: "/icon-192x192.png",
  },
};

export default function RootLayout({ children, page }) {
  // Check if the current page is Akalabeth
  const isAkalabethPage = page?.name === "akalabeth";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${
          isAkalabethPage ? "akalabeth-page" : ""
        }`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
