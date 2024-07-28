"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useInitialEmployeeForm, {
  InitialEmployeeFormProps,
} from "../composables/useInitialEmployeeForm";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import DatePicker from "@/components/_shared/DatePicker";
import { useEffect } from "react";
import useEmployeeMutation from "../composables/useEmployeeMutation";
import { Icons } from "@/components/ui/icons";

type EmployeeFormProps = {
  onSuccess?: (...args: any[]) => void;
} & InitialEmployeeFormProps;

const EmployeeForm = ({ employeeId, onSuccess }: EmployeeFormProps) => {
  const { form, fetchEmployee } = useInitialEmployeeForm({ employeeId });
  const { isPending, isSuccess, isError, error, mutate } = useEmployeeMutation({
    employeeId,
  });

  useEffect(() => {
    if (isSuccess) {
      if (onSuccess) onSuccess();
      toast({
        title: "Thành công.",
      });
    }
  }, [isSuccess]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => mutate(data))}
        className="flex-1 flex flex-col space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên nhân viên</FormLabel>
              <FormControl>
                <Input
                  placeholder="Vui lòng nhập đầy đủ tên nhân viên."
                  {...field}
                />
              </FormControl>
              <FormMessage className="!m-0" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nameAlias"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên ẩn danh.</FormLabel>
              <FormControl>
                <Input placeholder="Nhập tên ẩn danh tại đây." {...field} />
              </FormControl>
              <FormMessage className="!m-0" />
              <FormDescription className="leading-snug">
                Tên ẩn danh có thể giúp dễ quản lý và bảo mật hơn.
              </FormDescription>
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vai trò</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập vai trò tại đây." {...field} />
                </FormControl>
                <FormMessage className="!m-0" />
                <FormDescription className="leading-snug">
                  Vai trò là chức vụ của nhân viên. VD: Kỹ thuật viên, bác
                  sĩ,...
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="w-1/4 flex flex-col items-center">
                <FormLabel>Giới tính</FormLabel>
                <FormControl>
                  <RadioGroup
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="M" id="female" />
                      <Label htmlFor="female">Nam</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="F" id="male" />
                      <Label htmlFor="male">Nữ</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage className="!m-0" />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Ngày sinh</FormLabel>
                <FormControl>
                  <DatePicker
                    date={field.value}
                    setDate={field.onChange}
                    captionLayout="dropdown-buttons"
                    fromYear={1960}
                    toYear={2030}
                    classNames={{
                      caption:
                        "flex justify-center pt-1 relative items-center px-10",
                      caption_label:
                        "flex items-center gap-2 text-sm font-medium",
                      caption_dropdowns: "flex gap-4 [&_.rdp-vhidden]:hidden",
                      dropdown_month: "relative inline-flex items-center",
                      dropdown_year: "relative inline-flex items-center",
                      dropdown:
                        "absolute inset-0 w-full appearance-none opacity-0 z-10 cursor-pointer",
                    }}
                  />
                </FormControl>
                <FormMessage className="!m-0" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="joiningDate"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Ngày vào</FormLabel>
                <FormControl>
                  <DatePicker date={field.value} setDate={field.onChange} />
                </FormControl>
                <FormMessage className="!m-0" />
              </FormItem>
            )}
          />
        </div>
        {(isError || fetchEmployee.isError) && (
          <p className="text-[0.8rem] font-medium text-destructive mt-1">
            * {fetchEmployee.error?.message || error?.message}
          </p>
        )}
        <div className="flex-1 flex justify-end">
          <Button
            type="submit"
            className="mt-auto"
            disabled={
              isPending || fetchEmployee.isFetching || fetchEmployee.isError
            }
          >
            {isPending ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            {employeeId ? "Chỉnh sửa" : "Tạo nhân viên"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EmployeeForm;
