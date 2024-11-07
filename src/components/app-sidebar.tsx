"use client"

import { Home, Inbox, HeartCrack, HandHelping, Ticket, BookOpenText, Info } from "lucide-react"
import logo from '@/lib/ProValencia.png'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

  const items = [
    {
        title: "Inicio",
        url: "#",
        icon: Home
    },
    {
        title: "Ofrecer Ayuda",
        url: "#",
        icon: HandHelping
    },
    {
        title: "Profesionales",
        url: "#",
        icon: Inbox
    },
    {
        title: "Afectados",
        url: "#",
        icon: HeartCrack
    },
    {
        title: "Recursos",
        url: "#",
        icon: BookOpenText
    },
    {
        title: "Sobre la Página",
        url: "#",
        icon: Info
    },
    {
        title: "Contacto",
        url: "#",
        icon: Ticket
    },
  ]
  
  export function AppSidebar() {

    return (
        <Sidebar>
          <SidebarHeader className="flex items-center">
            <Image className="mt-4" src={logo} width={100} height={100} alt="logo"/>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="font-semibold">Menú</SidebarGroupLabel>
              <SidebarGroupContent>
                  <SidebarMenu>
                      {items.map(item => (
                          <SidebarMenuItem key={item.title}>
                              <SidebarMenuButton asChild>
                                  <Link href={item.url}>
                                      <item.icon />
                                      <span>{item.title}</span>
                                  </Link>
                              </SidebarMenuButton>
                          </SidebarMenuItem>
                      ))}
                  </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
              <Button>
                  Registro
              </Button>
          </SidebarFooter>
        </Sidebar>
    )
  }
  