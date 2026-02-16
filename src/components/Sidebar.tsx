import SidebarItem from "./SidebarItem";
import logo from "../assets/solacelogo.png";

import {
  LayoutGrid,
  User,
  UserCheck,
  Home,
  Settings,
} from "lucide-react";

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  return (
    <aside
      className="
        w-[260px] 
        min-h-screen
        lg:h-screen
        sticky top-0
        flex flex-col
        bg-gradient-to-b from-[#0b1530] to-[#060d24]
        px-5 py-6
        overflow-y-auto
      "
    >
    
      <div className="flex items-center gap-2 mb-12 px-2">
        <img src={logo} className="w-8 h-8" alt="Solace logo" />
        <span className="text-white text-lg font-medium">Solace</span>
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-1">
        <SidebarItem
          to="/dashboard"
          label="Dashboard"
          icon={<LayoutGrid size={18} />}
          onClick={onClose}
        />

        <SidebarItem
          to="/dashboard/agents"
          label="Agents"
          icon={<User size={18} />}
          onClick={onClose}
        />

        <SidebarItem
          to="/dashboard/inspectors"
          label="Inspectors"
          icon={<UserCheck size={18} />}
          onClick={onClose}
        />

        <SidebarItem
          to="/dashboard/properties"
          label="Properties"
          icon={<Home size={18} />}
          onClick={onClose}
        />
        <SidebarItem
          to="/dashboard/properties"
          label="Inspections"
          icon={<Home size={18} />}
          onClick={onClose}
        />
        <SidebarItem
          to="/dashboard/properties"
          label="Reports"
          icon={<Home size={18} />}
          onClick={onClose}
        />
        <SidebarItem
          to="/dashboard/properties"
          label="Audit Logs"
          icon={<Home size={18} />}
          onClick={onClose}
        />

        <SidebarItem
          to="/dashboard/settings"
          label="Settings"
          icon={<Settings size={18} />}
          onClick={onClose}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
