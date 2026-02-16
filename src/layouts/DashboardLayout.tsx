import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const DashboardLayout = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [open]);

    return (
        <div className="min-h-screen bg-[#f5f7fb]">
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
            <div
                className={`
          fixed top-0 left-0 z-50
          h-screen w-[260px] lg:w-[300px]
          transform transition-transform duration-300
          bg-gradient-to-b from-[#0b1530] to-[#060d24]
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
            >
                <Sidebar onClose={() => setOpen(false)} />
            </div>
            <div className="ml-0 lg:ml-[300px] flex flex-col min-h-screen">
                <Topbar onMenuClick={() => setOpen(true)} />

                <main className="flex-1 p-4 sm:p-6 overflow-x-hidden">
                    <Outlet />
                </main>
            </div>

        </div>
    );
};

export default DashboardLayout;
