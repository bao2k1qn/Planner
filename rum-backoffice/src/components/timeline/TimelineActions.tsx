import React from "react";
import DatePicker from "../_shared/DatePicker";
import { Button } from "../ui/button";
import BookingForm from "./BookingForm";
import { Separator } from "@/components/ui/separator";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PaymentForm from "./PaymentForm";

const TimelineActions = () => (
  <div className="flex justify-between items-center w-full h-14 p-4 bg-slate-100">
    <div className="">
      <DatePicker />
    </div>
    <div className="space-x-2">
      <Button variant="outline">Sắp xếp</Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Tạo mới</Button>
        </DialogTrigger>
        <DialogContent className="!max-w-4xl max-h-dvh overflow-auto rum-scroll-bar">
          <DialogTitle className="hidden" />
          <DialogDescription className="hidden" />
          <div className="flex">
            <div className="flex-1 h-full flex flex-col">
              <h2 className="text-lg mb-2">Tạo tour mới</h2>
              <BookingForm />
            </div>
            <Separator orientation="vertical" className="mx-6" />
            <div className="w-2/5 h-full flex flex-col">
              <h2 className="text-lg mb-2">Thanh toán</h2>
              <PaymentForm />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  </div>
);
export default TimelineActions;
