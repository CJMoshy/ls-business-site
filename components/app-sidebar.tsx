import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import NavLinks from "@/components/nav/links";
import Image from "next/image";
import { SidebarDivider } from "@/components/ui/sidebar-divider";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <Image
        className="self-center"
        src="/logo.png"
        alt="Company logo"
        width="150"
        height="180"
      />
      <SidebarDivider />
      <SidebarContent>
        <SidebarGroup>
          <NavLinks />
        </SidebarGroup>
      </SidebarContent>
      <SidebarDivider />
      <SidebarFooter />
    </Sidebar>
  );
}
