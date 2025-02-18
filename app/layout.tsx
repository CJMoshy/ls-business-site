import type { Metadata } from "next";
import {
  Josefin_Slab,
  Delicious_Handrawn,
  Indie_Flower,
} from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/nav/app-sidebar";
import "./globals.css";
import Script from "next/script";
import AppNavBar from "@/components/nav/app-navbar";

const jfslab = Josefin_Slab({
  subsets: ["latin"],
});

const dHD = Delicious_Handrawn({ weight: "400" });

const flow = Indie_Flower({ weight: "400" });

export const metadata: Metadata = {
  title: "LS",
  description: "The best company to ever exist", // TODO
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jfslab.className} antialiased h-screen flex`}>
        <SidebarProvider className="md:hidden">
          <AppSidebar />
          <main className="min-w-full overflow-y-auto overflow-x-hidden">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
        <div className="max-sm:hidden">
          <AppNavBar />
          <main className="!flex-1">{children}</main>
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
