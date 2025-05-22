import { House, Package, Boxes, PackagePlus, ChartColumn } from "lucide-react"
import { Separator } from "@radix-ui/react-separator";
import { 
    Sidebar, 
    SidebarHeader, 
    SidebarContent, 
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
} from "../ui/sidebar";
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: House,
  },
  {
    title: "Productos",
    url: "#",
    icon: Package,
  },
  {
    title: "Inventario",
    url: "#",
    icon: Boxes,
  },
  {
    title: "Movimientos",
    url: "#",
    icon: PackagePlus,
  },
  {
    title: "Reportes",
    url: "#",
    icon: ChartColumn,
  },
]

export function AsaidMenu() {
    return(
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center justify-center space-x-2 my-4">
                    <Boxes />
                    <h1 className="">Sistema Inventario</h1>
                </div>
            </SidebarHeader>
            <Separator className="border-t-1 border-gray-300/80" />
            <SidebarContent>    
                <SidebarGroup>
                    {items.map((item) => (
                        <SidebarMenu key={item.title}>
                            <SidebarMenuButton asChild>
                                <a className="space-x-1 py-5" href={item.url}>
                                    <item.icon/>
                                    <span className="font-medium text-md ">{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenu>
                    ))}
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}