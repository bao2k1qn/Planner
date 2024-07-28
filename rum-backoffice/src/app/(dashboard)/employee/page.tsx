import EmployeeTable from "@/components/employee/EmployeeTable";
import EmployeeToolbar from "@/components/employee/EmployeeToolbar";

const EmployeePage = async () => {
  return (
    <div className="space-y-4">
      <EmployeeToolbar />
      <EmployeeTable />
    </div>
  );
};

export default EmployeePage;
