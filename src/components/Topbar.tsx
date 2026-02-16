import { Menu, Search, Bell } from "lucide-react";

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar = ({ onMenuClick }: TopbarProps) => {
  return (
    <div className="bg-[#E6EAF2] p-4 rounded-2xl">
      {/* DESKTOP */}
      <div className="hidden sm:flex items-center justify-between gap-6">

        {/* SEARCH */}
        <div className="flex items-center bg-white rounded-full px-5 h-11 w-[480px]">
          <Search size={16} className="text-gray-400" />
          <input
            className="ml-3 w-full text-sm bg-transparent outline-none placeholder:text-gray-400"
            placeholder="Search agents, Inspectors etc"
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <div className="bg-white p-2.5 rounded-xl">
            <Bell size={16} className="text-gray-600" />
          </div>

          <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-xl">
            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm leading-tight">
              <p className="font-medium text-[#0B1530]">
                Dinesh Karthick
              </p>
              <p className="text-xs text-gray-500">
                Admin
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="sm:hidden space-y-3">
        <div className="flex items-center justify-between">
          <button
            onClick={onMenuClick}
            className="p-2 bg-white rounded-xl"
          >
            <Menu size={18} />
          </button>

          <div className="flex items-center gap-3">
            <div className="bg-white p-2.5 rounded-xl">
              <Bell size={16} />
            </div>

            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center bg-white rounded-full px-5 h-11">
          <Search size={16} className="text-gray-400" />
          <input
            className="ml-3 w-full text-sm bg-transparent outline-none placeholder:text-gray-400"
            placeholder="Search agents, Inspectors etc"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
