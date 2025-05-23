import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/globals.css";
import NavBar from "@/components/ui/Navbar";
import { getBasePath } from "@/utils/basePath";
import { DataManagerProvider } from "@/context/DataManagerContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skyrim Alchemy",
  description: "Enhance your potion-brewing in Skyrim with Skyrim Alchemy.",
  icons: {
    icon: `${getBasePath()}/favicon.ico`
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DataManagerProvider>
        <NavBar />
          <main className="flex flex-col items-center">
            {children}
          </main>
        </DataManagerProvider>
      </body>
    </html>
  );
}
