import type { Metadata } from "next";
import { Josefin_Slab } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "./globals.css";

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
      <body className={`${jfslab.className} antialiased h-screen flex bg-[#BABABA]`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="!flex-1">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
