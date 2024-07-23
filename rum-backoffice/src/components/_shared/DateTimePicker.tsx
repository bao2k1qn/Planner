"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn, createRange } from "@/lib/utils";
import { SelectSingleEventHandler } from "react-day-picker";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import moment from "moment";
import { vi } from "date-fns/locale";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface DateTimePickerProps {
  date: Date;
  setDate: (date: Date) => void;
}

export function DateTimePicker({ date, setDate }: DateTimePickerProps) {
  const [selectedDateTime, setSelectedDateTime] = React.useState(
    moment(date).startOf("day")
  );

  const handleSelect: SelectSingleEventHandler = (day, selected) => {
    const selectedDay = moment(selected);
    const modifiedDay = selectedDay.set({
      hour: selectedDateTime.hour(),
      minute: selectedDateTime.minute(),
    });

    setSelectedDateTime(modifiedDay);
    setDate(modifiedDay.toDate());
  };

  const handleTimeChange = (hour: string, minute: string) => {
    const modifiedDay = selectedDateTime.set({
      hour: Number(hour),
      minute: Number(minute),
    });

    setSelectedDateTime(modifiedDay);
    setDate(modifiedDay.toDate());
  };

  return (
    <Popover>
      <PopoverTrigger asChild className="z-10">
        <Button
          variant={"outline"}
          className={cn(
            "justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            selectedDateTime.format("YYYY-MM-DD HH:mm")
          ) : (
            <span>Chọn thời gian</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDateTime.toDate()}
          onSelect={handleSelect}
          locale={vi}
        />
        <TimePicker
          initalHour={selectedDateTime.hour()}
          initalMinute={selectedDateTime.minute()}
          onTimeChange={handleTimeChange}
        />
      </PopoverContent>
    </Popover>
  );
}

interface TimePickerProps {
  initalHour: number;
  initalMinute: number;
  onTimeChange: (hour: string, minute: string) => void;
}

const TimePicker = ({
  initalHour,
  initalMinute,
  onTimeChange,
}: TimePickerProps) => {
  const [hour, setHour] = React.useState(String(initalHour));
  const [minute, setMinute] = React.useState(String(initalMinute));

  React.useEffect(() => {
    onTimeChange(hour, minute);
  }, [hour, minute]);

  return (
    <div className="px-4 -mt-2 pb-4 flex gap-4">
      <div className="flex-1">
        <Label>Giờ</Label>
        <Select value={String(hour).padStart(2, "0")} onValueChange={setHour}>
          <SelectTrigger>
            <SelectValue placeholder="Giờ" defaultValue={hour} />
          </SelectTrigger>
          <SelectContent>
            {createRange(0, 23).map((val) => (
              <SelectItem
                key={`hour-key-${val}`}
                value={String(val).padStart(2, "0")}
              >
                {String(val).padStart(2, "0")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1">
        <Label>Phút</Label>
        <Select
          value={String(minute).padStart(2, "0")}
          onValueChange={setMinute}
        >
          <SelectTrigger>
            <SelectValue placeholder="Phút" />
          </SelectTrigger>
          <SelectContent>
            {createRange(0, 59).map((val) => (
              <SelectItem
                key={`minute-key-${val}`}
                value={String(val).padStart(2, "0")}
              >
                {String(val).padStart(2, "0")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
