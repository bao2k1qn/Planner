"use client";
import React from "react";
import Table from "../_shared/Table";
import { columns } from "./service_table/columns";
import useServicesQuery from "./composables/useServicesQuery";
import useFilterServices from "./composables/useFilterServices";

const ServiceTable = () => {
  const { params, setTableState } = useFilterServices();
  const { data, isLoading, isError } = useServicesQuery(params);
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
};

export default ServiceTable;
