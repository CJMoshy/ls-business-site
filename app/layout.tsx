import type { Metadata } from "next";
import { Josefin_Slab } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/nav/app-sidebar";
import "./globals.css";
import Script from "next/script";
import AppNavBar from "@/components/nav/app-navbar";
import App from "next/app";

const jfslab = Josefin_Slab({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LS",
  description: "The best company to ever exist", // TODO
};

interface WidthHeight {
  width: number;
  height: number;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jfslab.className} antialiased h-screen flex bg-[#BABABA]`}
      >
        <SidebarProvider className="md:hidden">
          <AppSidebar />
          <main className="!flex-1 !md:overflow-hidden">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
        <div className="max-sm:hidden">
          <AppNavBar />
          <main className="!flex-1 min-w-full">{children}</main>
        </div>

        {/* Determine whether or not this script tag should be before-interactive or not 
          tldr if things start crashing look here...
          https://nextjs.org/docs/app/api-reference/components/script

          also might need to go in headers??
        */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.87.0/phaser.min.js" />
      </body>
    </html>
  );
}
