"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import useDeleteServiceMutation from "../composables/useDeleteServiceMutation";
import { Icons } from "@/components/ui/icons";
import { useEffect, useState } from "react";

type ServiceDeteleDialogProps = {
  serviceId: string;
};

const ServiceDeteleDialog = ({ serviceId }: ServiceDeteleDialogProps) => {
  const [open, setOpen] = useState(false);
  const { isPending, isSuccess, mutate } = useDeleteServiceMutation();

  useEffect(() => {
    if (isSuccess) setOpen(false);
  }, [isSuccess]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <p className="text-sm">Xóa</p>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Bạn có chắc chắn muốn xóa không?</AlertDialogTitle>
          <AlertDialogDescription>
            Hành động này không thể được hoàn tác. Điều này sẽ xóa vĩnh viễn
            dịch vụ của bạn.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Hủy bỏ</AlertDialogCancel>
          <Button variant="destructive" onClick={() => mutate(serviceId)}>
            {isPending ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Xóa
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default ServiceDeteleDialog;
