import { Blocks, UserPlus, Users } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./ModeToggle";

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/",
        icon: Blocks,
    },
    {
        title: "Patients List",
        url: "/patients",
        icon: Users,
    },
    {
        title: "Add Patient Form",
        url: "/patients-form",
        icon: UserPlus,
    },
];

export function AppSidebar() {
    return (
        <Sidebar >
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu >
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} >
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} >
                                            <item.icon  />
                                            <span >{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <ModeToggle />
            </SidebarFooter>
        </Sidebar>
    );
}
