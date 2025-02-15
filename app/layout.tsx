import type { Metadata } from "next";
import { Josefin_Slab } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/nav/app-sidebar";
import "./globals.css";
import Script from "next/script";

const jfslab = Josefin_Slab({
  subsets: ["latin"],
});

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
      <body
        className={`${jfslab.className} antialiased h-screen flex bg-[#BABABA]`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="!flex-1 !md:overflow-hidden">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>

        {/* Determine whether or not this script tag should be before interactive or not 
          tldr if things start crashing look here...
          https://nextjs.org/docs/app/api-reference/components/script
        */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.87.0/phaser.min.js" />
      </body>
    </html>
  );
}

/** unload game before leaving page */
