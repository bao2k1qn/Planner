"use client";

import Table from "../_shared/Table";
import useEmployeeQuery from "./composables/useEmployeeQuery";
import useFilterEmployees from "./composables/useFilterEmployees";
import { columns } from "./employee_table/columns";

export default function EmployeeTable() {
  const { params, setTableState } = useFilterEmployees();
  const { data, isLoading, isError } = useEmployeeQuery(params);
  const services = data?.data || [];

  return (
    <Table
      columns={columns}
      data={services}
      isLoading={isLoading}
      isError={isError}
      onChange={setTableState}
    />
  );
}
