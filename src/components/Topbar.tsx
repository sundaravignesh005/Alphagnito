import { Menu, Search, Bell } from "lucide-react";

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar = ({ onMenuClick }: TopbarProps) => {
  return (
    <div className="bg-[#eef1f6] px-4 sm:px-8 py-4">
      <div className="hidden sm:flex items-center justify-between gap-6">

        {/* LEFT: SEARCH */}
        <div className="flex items-center bg-white rounded-full px-4 h-11 w-[480px] shadow-sm">
          <Search size={16} className="text-gray-400" />
          <input
            className="ml-3 w-full text-sm outline-none placeholder:text-gray-400"
            placeholder="Search agents, Inspectors etc"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white p-2 rounded-xl shadow-sm">
            <Bell size={16} />
          </div>

          <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-xl shadow-sm">
            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm leading-tight">
              <p className="font-medium">Dinesh Karthick</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="sm:hidden">
        <div className="flex items-center justify-between">
          <button
            onClick={onMenuClick}
            className="p-2 bg-white rounded-lg shadow-sm"
          >
            <Menu size={18} />
          </button>

          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-xl shadow-sm">
              <Bell size={16} />
            </div>

            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
        <div className="mt-3 flex items-center bg-white rounded-full px-4 h-11 w-full shadow-sm">
          <Search size={16} className="text-gray-400" />
          <input
            className="ml-3 w-full text-sm outline-none placeholder:text-gray-400"
            placeholder="Search agents, Inspectors etc"
          />
        </div>
      </div>

    </div>
  );
};
export default Topbar;
