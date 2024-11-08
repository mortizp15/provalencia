"use client"

import { Home, Inbox, HeartCrack, HandHelping, Ticket, BookOpenText, Info, Menu } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"

  const items = [
    {
        title: "Inicio",
        url: "/",
        icon: Home
    },
    {
        title: "Ofrecer Ayuda",
        url: "/publicar",
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

    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
         <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[320px]">
          <SheetHeader>
            <SheetTitle className="text-sm text-zinc-500 font-semibold">ProValencia</SheetTitle>
          </SheetHeader>
          <div className="flex mt-10 min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden">
            {items.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className="text-sm flex items-center p-1 px-2 rounded-md gap-4 hover:text-primary transition-colors hover:bg-sidebar-accent"
                  onClick={() => setOpen(false)}
                >
                  <item.icon className="h-4 w-4"/> {item.title}
                </a>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    )
  }
  