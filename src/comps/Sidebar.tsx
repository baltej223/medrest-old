import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"
import Link from "./link"
  
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader/>
        <SidebarContent className="mt-12 pl-3">
            <span className="text-xl font-bold">Links</span>
          <SidebarGroup className="gap-y-4">
            <Link href="/Dashboard"><span className="font-bold">Dashboard</span></Link>
            <Link href="/appointments"><span className="font-bold">Appointments</span></Link>
            <Link href="/ipd"><span className="font-bold">IPD</span></Link>
            <Link href="/inventory"><span className="font-bold">Inventory</span></Link>
            
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter>
            <div className="w-full flex justify-center item-center">
            <span className="text-xl font-bold">MedREST</span>
            </div>
            {/* Icons before Links to be added */}
        </SidebarFooter>
      </Sidebar>
    )
  }
  