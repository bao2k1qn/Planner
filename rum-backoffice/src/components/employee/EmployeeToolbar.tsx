import React from "react";
import { Input } from "../ui/input";
import EmployeeFormDialog from "./employee_forms/EmployeeFormDialog";

const EmployeeToolbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          className="h-8 w-[150px] lg:w-[250px]"
          disabled
        />
      </div>
      <EmployeeFormDialog />
    </div>
  );
};

export default EmployeeToolbar;
