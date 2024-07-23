import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import EmployeeForm from "./EmployeeForm";

const EmployeeFormDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Tạo nhân viên</Button>
      </DialogTrigger>
      <DialogContent className="max-h-dvh overflow-auto rum-scroll-bar">
        <DialogTitle className="hidden" />
        <DialogDescription className="hidden" />
        <div className="flex">
          <div className="flex-1 h-full flex flex-col">
            <h2 className="text-lg mb-4">Tạo nhân viên mới</h2>
            <EmployeeForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeFormDialog;
