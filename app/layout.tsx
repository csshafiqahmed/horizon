import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif  } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: '--font-ibm-plex-serif',
  weight: ['400', '700']
})
export const metadata: Metadata = {
  title: "Horizon - Online Banking Platform",
  description: "Horizon is a modern banking platform which provides security as well as latest features.",
  icons: '/icons/logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}