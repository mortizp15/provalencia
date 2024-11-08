import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-togle";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import DashboardSections from "@/components/ui/dashboard-sections";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "ProValencia | Inicio",
  description: "Encuentra profesionales voluntarios o anúnciate como uno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Toaster position="top-right" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          <header className="flex h-16 w-full items-center justify-between gap-2 border-b px-4">
            <div className="flex items-center">
              <AppSidebar />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <h1 className="text-blue-500 font-semibold">ProValencia</h1>
            </div>
            <ModeToggle />
          </header>
          <DashboardSections children={children} />
        </ThemeProvider>
      </body>
    </html>
  );
}
