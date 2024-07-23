import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import ServiceForm from "./ServiceForm";

const ServiceFormDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Tạo dịch vụ</Button>
      </DialogTrigger>
      <DialogContent className="max-h-dvh overflow-auto rum-scroll-bar">
        <DialogTitle className="hidden" />
        <DialogDescription className="hidden" />
        <div className="flex">
          <div className="flex-1 h-full flex flex-col">
            <h2 className="text-lg mb-4">Tạo dịch vụ mới</h2>
            <ServiceForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceFormDialog;
