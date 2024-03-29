import {
  Home,
  Building2,
  Box,
  ArrowDownUp,
  Hourglass,
  Wallet,
  Bell,
  CircleHelp,
  Settings,
} from "lucide-react";
import React from "react";
import Sidebar, { SidebarItem } from "../../components/Sidebar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Graphs from "./components/Graphs";

const Homepage = () => {
  return (
    <div className="flex h-auto">
      <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Home" />
        <SidebarItem icon={<Building2 size={20} />} text="organizations" />
        <SidebarItem icon={<Box size={20} />} text="Assests" />
        <SidebarItem icon={<ArrowDownUp size={20} />} text="Trade" />
        <SidebarItem icon={<Hourglass size={20} />} text="History" />
        <SidebarItem icon={<Wallet size={20} />} text="Wallet" />
        <hr className="m-4" />
        <SidebarItem icon={<Bell size={20} />} text="Notifications" />
        <SidebarItem icon={<CircleHelp size={20} />} text="Support" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
      </Sidebar>
      <div className="p-10 h-full w-full bg-[#0b0b0b] space-y-12">
        <Hero />
        <Graphs />
        <Cards />
      </div>
    </div>
  );
};

export default Homepage;
