import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Kamaludin Abdul Basit — Product Designer",
  description:
    "Portfolio of Kamaludin Abdul Basit, a Product Designer with 7+ years of experience in UX research, design systems, and AI-assisted prototyping.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf7f2] text-stone-800">
        {children}
      </body>
    </html>
  );
}
