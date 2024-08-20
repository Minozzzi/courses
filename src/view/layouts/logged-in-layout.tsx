import { Outlet, useLocation } from "react-router-dom";
import { Home, LogOut } from "lucide-react";

import {
  Button,
  Header,
  Sidebar,
  SidebarList,
  SidebarItem,
} from "../components/ui/";

export const LoggedInLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <main className="grid w-screen h-screen [grid-template-areas:'header_header''sidebar_content'] grid-cols-[325px_1fr] grid-rows-[82px_1fr]">
      <Header
        displayName="Guilherme Minozzi"
        imageUrl=""
        className="[grid-area:header]"
      />

      <Sidebar className="[grid-area:sidebar] shadow-md">
        <SidebarList>
          <SidebarItem active={pathname === "/"}>
            <Home /> Home
          </SidebarItem>
        </SidebarList>

        <Button className="items-center justify-start gap-3 w-full text-base font-semibold mt-auto">
          <LogOut size={24} /> Sair
        </Button>
      </Sidebar>

      <div className="overflow-y-auto p-12 [grid-area:content]">
        <Outlet />
      </div>
    </main>
  );
};
