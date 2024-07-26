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
  EmployeeFormType,
} from "./composables/useInitialEmployeeForm";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import DatePicker from "@/components/_shared/DatePicker";

const EmployeeForm = () => {
  const form = useInitialEmployeeForm();

  function onSubmit(data: EmployeeFormType) {
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
                      <RadioGroupItem value="Nam" id="female" />
                      <Label htmlFor="female">Nam</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Nữ" id="male" />
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
                  <DatePicker date={field.value} setDate={field.onChange} />
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
        <div className="flex-1 flex justify-end">
          <Button type="submit" className="mt-auto">
            Tạo dịch vụ
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EmployeeForm;
