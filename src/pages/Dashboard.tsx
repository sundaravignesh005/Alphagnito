import { Plus } from "lucide-react";
type Status =
  | "Pending"
  | "Assigned"
  | "Active"
  | "Completed"
  | "Closed"
  | "Cancelled";

interface StatCardProps {
  title: string;
  value: string;
  color: "green" | "red" | "yellow";
}

interface ActionCardProps {
  label: string;
}
interface RowProps {
  status: Status;
}
const StatCard = ({ title, value, color }: StatCardProps) => {
  const config = {
    green: {
      bar: "bg-green-500",
      icon: "bg-green-100 text-green-600",
    },
    red: {
      bar: "bg-red-500",
      icon: "bg-red-100 text-red-600",
    },
    yellow: {
      bar: "bg-yellow-400",
      icon: "bg-yellow-100 text-yellow-600",
    },
  };
  return (
    <div className="bg-white rounded-2xl px-6 py-5 shadow-sm">
      <p className="text-xs text-gray-500 mb-1">{title}</p>

      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold text-gray-800">{value}</p>
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center text-xs ${config[color].icon}`}
        >
          ✓
        </div>
      </div>
      <div className="mt-4 h-[6px] bg-gray-200 rounded-full overflow-hidden">
        <div className={`${config[color].bar} h-full w-1/2 rounded-full`} />
      </div>
    </div>
  );
};
const ActionCard = ({ label }: ActionCardProps) => (
  <div className="bg-white rounded-2xl px-6 py-10 border border-gray-100 flex flex-col items-center gap-3 cursor-pointer hover:shadow-md transition">
    <div className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center">
      <Plus size={18} />
    </div>
    <p className="text-sm text-gray-700">{label}</p>
  </div>
);
const ActivityRow = ({ status }: RowProps) => {
  const badge: Record<Status, string> = {
    Pending: "bg-orange-100 text-orange-600",
    Assigned: "bg-blue-100 text-blue-600",
    Active: "bg-indigo-100 text-indigo-600",
    Completed: "bg-green-100 text-green-600",
    Closed: "bg-gray-100 text-gray-600",
    Cancelled: "bg-red-100 text-red-600",
  };

  return (
    <tr className="text-sm border-t border-gray-100 hover:bg-gray-50">
      <td className="px-6 py-[18px]">INSP - 10245</td>
      <td className="py-[18px]">Greenview apartment</td>
      <td className="py-[18px]">Bluenest realty</td>
      <td className="py-[18px]">John Mathews</td>
      <td className="py-[18px]">
        <span className={`px-3 py-1 rounded-full text-xs ${badge[status]}`}>
          {status}
        </span>
      </td>
      <td className="py-[18px] text-gray-500">2 mins ago</td>
      <td className="py-[18px] text-blue-500 cursor-pointer">View</td>
    </tr>
  );
};
const Dashboard = () => {
  return (
    <div className="bg-[#f5f7fb] min-h-screen p-4 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        <StatCard title="Total Clients" value="200" color="green" />
        <StatCard title="Total Properties" value="10" color="green" />
        <StatCard title="Total Inspections" value="2" color="red" />
        <StatCard title="Pending Inspections" value="2" color="yellow" />
        <StatCard title="Closed Inspections" value="10" color="yellow" />
      </div>
      <div className="mb-10">
        <h3 className="text-sm font-medium mb-4">Quick actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ActionCard label="Create Inspection" />
          <ActionCard label="Add Property" />
          <ActionCard label="Add Agent" />
          <ActionCard label="Add Inspector" />
        </div>
      </div>
      <div className="bg-white rounded-2xl overflow-x-auto border border-gray-100">
        <h3 className="px-6 py-4 font-medium">Recent Activity</h3>

        <table className="w-full min-w-[900px]">
          <thead className="bg-[#eef1f6] text-left text-sm">
            <tr>
              <th className="px-6 py-3">Inspection ID</th>
              <th>Property</th>
              <th>Agent</th>
              <th>Inspector</th>
              <th>Status</th>
              <th>Last Updated</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <ActivityRow status="Pending" />
            <ActivityRow status="Assigned" />
            <ActivityRow status="Active" />
            <ActivityRow status="Completed" />
            <ActivityRow status="Closed" />
            <ActivityRow status="Cancelled" />
          </tbody>
        </table>
      </div>

    </div>
  );
};
export default Dashboard;
