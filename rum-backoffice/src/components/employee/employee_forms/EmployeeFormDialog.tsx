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
import EmployeeForm from "./EmployeeForm";

type EmployeeFormDialogProps = {
  employeeId?: string;
};

const EmployeeFormDialog = ({ employeeId }: EmployeeFormDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleSuccess = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {employeeId ? (
          <p className="text-sm">Chỉnh sửa</p>
        ) : (
          <Button>Tạo nhân viên</Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-dvh overflow-auto rum-scroll-bar">
        <DialogTitle className="hidden" />
        <DialogDescription className="hidden" />
        <div className="flex">
          <div className="flex-1 h-full flex flex-col">
            <h2 className="text-lg mb-4">
              {employeeId ? "Chỉnh sửa nhân viên" : "Tạo nhân viên mới"}
            </h2>
            <EmployeeForm employeeId={employeeId} onSuccess={handleSuccess} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeFormDialog;
