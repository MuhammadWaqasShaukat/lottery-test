import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import SessionProviderContextProvider from "@/context/SessionProviderContextProvider";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <SessionProviderContextProvider>
            <div className=" w-2/5 mx-auto  space-y-8">
              <h1 className=" text-2xl font-bold text-black">Latest Results</h1>
              <div className=" flex flex-row justify-between items-center">
                <Link href={"/cosmic"}>Cosmic</Link>
                <Link href={"/classic"}>Classic</Link>
                <Link href={"/atomic"}>Atomic</Link>
              </div>
              {children}
            </div>
          </SessionProviderContextProvider>
        </main>
      </body>
    </html>
  );
}
