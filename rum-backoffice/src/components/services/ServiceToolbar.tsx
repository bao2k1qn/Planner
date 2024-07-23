import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import ServiceFormDialog from "./service_forms/ServiceFormDialog";

const ServiceToolbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          className="h-8 w-[150px] lg:w-[250px]"
          disabled
        />
      </div>
      <ServiceFormDialog />
    </div>
  );
};

export default ServiceToolbar;
