import React from "react";
import ServiceToolbar from "@/components/services/ServiceToolbar";
import ServiceTable from "@/components/services/ServiceTable";

const ServicePage = async () => {
  return (
    <div className="space-y-4">
      <ServiceToolbar />
      <ServiceTable />
    </div>
  );
};

export default ServicePage;
