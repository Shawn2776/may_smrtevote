import DashboardElectionsTable from "@/components/ui/dashboard/dashboard-elections-table";
import { elections } from "@/data";
import Link from "next/link";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-4">
      <DashboardElectionsTable elections={elections} />
    </div>
  );
};

export default Dashboard;
