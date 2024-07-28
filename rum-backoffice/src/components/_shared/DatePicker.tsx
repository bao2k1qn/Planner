"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { vi } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import moment from "moment";

type DatePickerProps = {
  date: string | undefined;
  setDate: (date: string) => void;
} & React.ComponentProps<typeof Calendar>;

const DatePicker = ({ date, setDate, ...rest }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "justify-center text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            moment(date).format("DD-MM-YYYY")
          ) : (
            <span>Chọn thời gian</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={moment(date).toDate()}
          onSelect={(date) =>
            date && setDate(moment(date).startOf("d").toISOString())
          }
          initialFocus
          locale={vi}
          {...(rest as any)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
