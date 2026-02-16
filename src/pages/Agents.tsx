import { useState } from "react";
import {
    Search,
    Plus,
    Eye,
    Pencil,
    Trash2,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

/* ================= DATA ================= */

type AgentStatus = "Active" | "Inactive" | "Suspended";

interface Agent {
    name: string;
    company: string;
    email: string;
    phone: string;
    properties: number;
    inspections: number;
    status: AgentStatus;
}

const agentsData: Agent[] = [
    {
        name: "Michael",
        company: "Bluenest realty",
        email: "michael@bluenest.com",
        phone: "+44 7911 234567",
        properties: 18,
        inspections: 42,
        status: "Active",
    },
    {
        name: "Olivia haris",
        company: "Urbankey estates",
        email: "olivia@urbankey.com",
        phone: "+44 8911 234567",
        properties: 2,
        inspections: 10,
        status: "Active",
    },
    {
        name: "Daniel",
        company: "Bluenest realty",
        email: "daniel@primelet.com",
        phone: "+44 7822 456789",
        properties: 18,
        inspections: 20,
        status: "Inactive",
    },
    {
        name: "Wilson",
        company: "City homes",
        email: "wilson@cityhomes.com",
        phone: "+44 7822 456879",
        properties: 10,
        inspections: 10,
        status: "Active",
    },
    {
        name: "Sophie",
        company: "City homes",
        email: "sophie@cityhomes.com",
        phone: "+44 7700 112233",
        properties: 12,
        inspections: 10,
        status: "Suspended",
    },
    {
        name: "Turner bruno",
        company: "Primelet agents",
        email: "turnes@horizon.com",
        phone: "+44 7555 998877",
        properties: 20,
        inspections: 20,
        status: "Active",
    },
    {
        name: "Bucky",
        company: "Bluenest realty",
        email: "michael@bluenest.com",
        phone: "+44 7911 234567",
        properties: 18,
        inspections: 42,
        status: "Active",
    },
    {
        name: "William Butcher",
        company: "Urbankey estates",
        email: "olivia@urbankey.com",
        phone: "+44 8911 234567",
        properties: 18,
        inspections: 10,
        status: "Inactive",
    },
    {
        name: "John",
        company: "Bluenest realty",
        email: "daniel@primelet.com",
        phone: "+44 7822 456789",
        properties: 18,
        inspections: 20,
        status: "Active",
    },
    {
        name: "Carter",
        company: "Primelet agents",
        email: "wilson@cityhomes.com",
        phone: "+44 7822 456879",
        properties: 18,
        inspections: 10,
        status: "Suspended",
    },
    {
        name: "Willy",
        company: "Urbankey estates",
        email: "sophie@cityhomes.com",
        phone: "+44 7700 112233",
        properties: 18,
        inspections: 10,
        status: "Inactive",
    },
    {
        name: "Mike",
        company: "Primelet agents",
        email: "turnes@horizon.com",
        phone: "+44 7555 998877",
        properties: 18,
        inspections: 20,
        status: "Active",
    },
];

const statusStyle: Record<AgentStatus, string> = {
    Active: "bg-green-100 text-green-600",
    Inactive: "bg-orange-100 text-orange-600",
    Suspended: "bg-red-100 text-red-600",
};



const Agents = () => {
    const [statusFilter, setStatusFilter] = useState<"All" | AgentStatus>("All");
    const [openFilter, setOpenFilter] = useState(false);

    const filteredAgents =
        statusFilter === "All"
            ? agentsData
            : agentsData.filter((a) => a.status === statusFilter);

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">

           
            <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
               
                <div className="flex items-center bg-[#f5f7fb] rounded-xl px-4 h-11 w-full sm:w-[320px]">
                    <Search size={16} className="text-gray-400" />
                    <input
                        className="ml-3 w-full bg-transparent text-sm outline-none"
                        placeholder="Search agents"
                    />
                </div>

              
                <div className="flex items-center gap-3 justify-end relative">
                    <button
                        onClick={() => setOpenFilter(!openFilter)}
                        className="flex items-center gap-2 px-4 h-11 rounded-xl border border-gray-200 text-sm bg-white"
                    >
                        Status
                        <ChevronDown size={14} />
                    </button>

                    {openFilter && (
                        <div className="absolute right-28 top-12 bg-white border rounded-xl shadow-md overflow-hidden z-10">
                            {["All", "Active", "Inactive", "Suspended"].map((s) => (
                                <button
                                    key={s}
                                    onClick={() => {
                                        setStatusFilter(s as any);
                                        setOpenFilter(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}
                    <button className="flex items-center gap-2 px-4 h-11 rounded-xl bg-[#1e3a8a] text-white text-sm">
                        <Plus size={16} />
                        Add Agents
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[1000px] text-sm">
                    <thead className="bg-[#f5f7fb] text-gray-600">
                        <tr>
                            <th className="px-6 py-4 text-left">Agent Name</th>
                            <th className="px-4 py-4 text-left">Company Name</th>
                            <th className="px-4 py-4 text-left">Email</th>
                            <th className="px-4 py-4 text-left">Phone</th>
                            <th className="px-4 py-4 text-left">Properties</th>
                            <th className="px-4 py-4 text-left">Inspections</th>
                            <th className="px-4 py-4 text-left">Status</th>
                            <th className="px-4 py-4 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredAgents.map((agent, index) => (
                            <tr
                                key={index}
                                className="border-t border-gray-100 hover:bg-gray-50"
                            >
                                <td className="px-6 py-4 font-medium">{agent.name}</td>
                                <td className="px-4 py-4">{agent.company}</td>
                                <td className="px-4 py-4 text-gray-500 truncate max-w-[180px]">
                                    {agent.email}
                                </td>
                                <td className="px-4 py-4">{agent.phone}</td>
                                <td className="px-4 py-4">{agent.properties}</td>
                                <td className="px-4 py-4">{agent.inspections}</td>
                                <td className="px-4 py-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs ${statusStyle[agent.status]}`}
                                    >
                                        {agent.status}
                                    </span>
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 rounded-lg border hover:bg-gray-100">
                                            <Eye size={14} />
                                        </button>
                                        <button className="p-2 rounded-lg border hover:bg-gray-100">
                                            <Pencil size={14} />
                                        </button>
                                        <button className="p-2 rounded-lg border text-red-500 hover:bg-red-50">
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-500">
                <p>1 of 100 rows selected</p>

                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 px-3 py-1 rounded-lg border">
                        <ChevronLeft size={14} /> Previous
                    </button>

                    <button className="px-3 py-1 rounded-lg bg-[#1e3a8a] text-white">
                        1
                    </button>
                    <button className="px-3 py-1 rounded-lg border">2</button>
                    <button className="px-3 py-1 rounded-lg border">3</button>

                    <button className="flex items-center gap-1 px-3 py-1 rounded-lg border">
                        Next <ChevronRight size={14} />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Agents;
