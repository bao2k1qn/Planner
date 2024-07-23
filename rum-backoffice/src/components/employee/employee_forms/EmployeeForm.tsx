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
              <FormLabel>Tên dịch vụ</FormLabel>
              <FormControl>
                <Input placeholder="Vui lòng nhập tên dịch vụ." {...field} />
              </FormControl>
              <FormMessage className="!m-0" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="period"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thời gian</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min="0"
                  placeholder="Vui lòng nhập thời gian."
                  {...field}
                />
              </FormControl>
              <FormMessage className="!m-0" />
              <FormDescription className="leading-snug">
                Thời gian diễn ra dịch vụ. Đợn vị: phút
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Giá dịch vụ</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min="0"
                  placeholder="Vui lòng nhập giá dịch vụ."
                  {...field}
                />
              </FormControl>
              <FormMessage className="!m-0" />
            </FormItem>
          )}
        />
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
