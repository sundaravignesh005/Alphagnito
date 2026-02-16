import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  label: string;
  icon: React.ReactNode;
  to: string;
  onClick?: () => void;
}

const SidebarItem = ({ label, icon, to, onClick }: SidebarItemProps) => {
  return (
    <NavLink
      to={to}
      end
      onClick={onClick}
      className={({ isActive }) =>
        `
        group
        flex items-center gap-3
        px-5 py-3.5
        rounded-2xl
        transition-all duration-200 ease-in-out
        ${
          isActive
            ? `
              bg-[linear-gradient(90deg,#EEF1F6_0%,#EEF1F6_70%,rgba(1,59,210,0.18)_100%)]
              text-[#0B1530]
              font-medium
            `
            : `
              text-[#A0A7C2]
              hover:bg-[linear-gradient(90deg,#EEF1F6_0%,#EEF1F6_70%,rgba(1,59,210,0.18)_100%)]
              hover:text-[#0B1530]
            `
        }
        `
      }
    >
      <span className="w-5 h-5 flex items-center justify-center">
        {icon}
      </span>
      <span className="text-sm">{label}</span>
    </NavLink>
  );
};

export default SidebarItem;
