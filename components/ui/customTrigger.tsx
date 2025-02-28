"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
export function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button onClick={toggleSidebar} className="fixed right-5 top-5">
      <Menu className="text-secondary" size={30} />
    </button>
  );
}
