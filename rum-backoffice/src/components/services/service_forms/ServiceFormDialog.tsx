"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import ServiceForm from "./ServiceForm";

type ServiceFormDialogProps = {
  serviceId?: string;
};

const ServiceFormDialog = ({ serviceId }: ServiceFormDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleSuccess = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {serviceId ? (
          <p className="text-sm">Chỉnh sửa</p>
        ) : (
          <Button>Tạo dịch vụ</Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-dvh overflow-auto rum-scroll-bar">
        <DialogTitle className="hidden" />
        <DialogDescription className="hidden" />
        <div className="flex">
          <div className="flex-1 h-full flex flex-col">
            <h2 className="text-lg mb-4">
              {serviceId ? "Chỉnh sửa dịch vụ" : "Tạo dịch vụ mới"}
            </h2>
            <ServiceForm serviceId={serviceId} onSuccess={handleSuccess} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceFormDialog;
