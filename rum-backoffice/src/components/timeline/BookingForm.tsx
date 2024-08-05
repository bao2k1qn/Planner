"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Switch } from "../ui/switch";
import { DateTimePicker } from "../_shared/DateTimePicker";
import useInitialBookingForm, {
  BookingFormValues,
} from "./composables/useInitialBookingForm";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import useInitialServiceData from "./composables/useInitialServiceData";
import useInitialEmployeeData from "./composables/useInitialEmployeeData";

const BookingForm = () => {
  const form = useInitialBookingForm();
  const serviceQuery = useInitialServiceData();
  const employeeQuery = useInitialEmployeeData();

  function onSubmit(data: BookingFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 flex flex-col space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên</FormLabel>
              <FormControl>
                <Input placeholder="Tên khách" {...field} />
              </FormControl>
              <FormMessage className="!m-0" />
              <FormDescription className="leading-snug">
                Tên khách có thể là tên khách trong Facebook, Zalo,... Từ 1-30
                ký tự.
              </FormDescription>
            </FormItem>
          )}
        />
        <div className="flex gap-8">
          <FormField
            control={form.control}
            name="serviceId"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[200px]">
                <FormLabel>Dịch vụ</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? serviceQuery.data?.data.find(
                              (service) => service.serviceId === field.value
                            )?.name
                          : "Chọn dịch vụ."}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Tìm kím dịch vụ..." />
                      <CommandEmpty>Không tìm thấy dịch vụ nào.</CommandEmpty>
                      <CommandList>
                        <CommandGroup>
                          {serviceQuery.data?.data.map((service) => (
                            <CommandItem
                              value={service.serviceId}
                              key={service.serviceId}
                              onSelect={() => {
                                form.setValue("serviceId", service.serviceId);
                                form.setError("serviceId", { message: "" });
                              }}
                            >
                              <CheckIcon
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  service.serviceId === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {service.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage className="!m-0" />
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <Label className="block">Thời gian diễn ra</Label>
            <Label className="block">90 phút</Label>
          </div>
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Thời gian bắt đầu</FormLabel>
                <DateTimePicker date={field.value} setDate={field.onChange} />
                <FormMessage className="!m-0" />
                <FormDescription className="leading-snug">
                  Bạn cần cung cấp thời gian bắt đầu để thời gian kết thúc sẽ
                  được tính tự động.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Thời gian kết thúc</FormLabel>
                <DateTimePicker date={field.value} setDate={field.onChange} />
                <FormMessage className="!m-0" />
                <FormDescription className="leading-snug">
                  Thời gian kết thúc được tính dựa trên thời gian bắt đầu và
                  khoảng thời gian một dịch vụ
                </FormDescription>
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-8">
          <FormField
            control={form.control}
            name="employeeId"
            render={({ field }) => (
              <FormItem className="w-fit min-w-[200px]">
                <FormLabel>Nhân viên</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? employeeQuery.data?.data.find(
                              (employee) => employee.employeeId === field.value
                            )?.name
                          : "Chọn nhân viên."}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Tìm kím nhân viên..." />
                      <CommandEmpty>Không tìm thấy nhân viên nào.</CommandEmpty>
                      <CommandList>
                        <CommandGroup>
                          {employeeQuery.data?.data.map((employee) => (
                            <CommandItem
                              value={employee.employeeId}
                              key={employee.employeeId}
                              onSelect={() => {
                                form.setValue(
                                  "employeeId",
                                  employee.employeeId
                                );
                                form.setError("employeeId", { message: "" });
                              }}
                            >
                              <CheckIcon
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  employee.employeeId === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {employee.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage className="!m-0" />
                <FormDescription className="leading-snug">
                  Nhân viên trống với thời gian đã chọn sẽ được hiển thị.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isSelectedInAdvance"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Đặt trước</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage className="!m-0" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lưu ý</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Viết những lưu ý bạn cần về tour này."
                  {...field}
                />
              </FormControl>
              <FormMessage className="!m-0" />
            </FormItem>
          )}
        />
        <div className="flex-1 flex justify-end">
          <Button type="submit" className="mt-auto">
            Tạo mới
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BookingForm;
