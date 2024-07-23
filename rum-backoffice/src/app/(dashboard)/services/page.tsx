import { columns } from "@/components/services/service_table/columns";
import { taskSchema } from "@/components/services/data/schema";
import React from "react";
import { z } from "zod";
import { promises as fs } from "fs";
import ServiceToolbar from "@/components/services/ServiceToolbar";
import ServiceTable from "@/components/services/ServiceTable";

async function getTasks() {
  const data = await fs.readFile(
    `D:\\NextJS\\rum-backoffice\\src\\components\\services\\data\\tasks.json`
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
