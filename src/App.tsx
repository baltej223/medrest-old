// import { useState } from 'react'
import './App.css'
import {Navbar} from "@/comps/Navbar"
import "./index.css"
import { AppSidebar } from './comps/Sidebar'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"

function App() {
  return (
    <>
      <div className='content'>
        <Navbar />
        {/* <AppSidebar /> */}
          <SidebarProvider className='SideBar'>
                <AppSidebar />
                <main>
                  <SidebarTrigger />
                  {/* {children} */}
                </main>
          </SidebarProvider>
      </div>
    </>
  )
}

export default App
