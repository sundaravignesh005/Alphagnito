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
        flex items-center gap-3 px-4 py-3.5 rounded-xl transition-colors
        ${
          isActive
            ? "bg-[#e6ebff] text-[#0b1530] font-medium"
            : "text-[#aeb7d8] hover:bg-white/10 hover:text-white"
        }
        `
      }
    >
      <span className="w-5 h-5">{icon}</span>
      <span className="text-sm">{label}</span>
    </NavLink>
  );
};
export default SidebarItem;
