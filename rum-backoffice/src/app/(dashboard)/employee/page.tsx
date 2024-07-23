import { columns } from "@/components/employee/employee_table/columns";
import { taskSchema } from "@/components/employee/data/schema";
import React from "react";
import { z } from "zod";
import { promises as fs } from "fs";
import ServiceTable from "@/components/employee/EmployeeTable";
import ServiceToolbar from "@/components/employee/EmployeeToolbar";

async function getTasks() {
  const data = await fs.readFile(
    `D:\\NextJS\\rum-backoffice\\src\\components\\employee\\data\\tasks.json`
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

const ServicePage = async () => {
  const tasks = await getTasks();
  return (
    <div className="space-y-4">
      <ServiceToolbar />
      <ServiceTable columns={columns} data={tasks} />
    </div>
  );
};

export default ServicePage;
