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
import useInitialServiceForm, {
  InitialServiceFormProps,
  ServiceFormType,
} from "../composables/useInitialServiceForm";
import useServiceMutation from "../composables/useServiceMutation";
import { Icons } from "@/components/ui/icons";
import { useEffect } from "react";

type ServiceFormProps = {
  onSuccess?: (...args: any[]) => void;
} & InitialServiceFormProps;

const ServiceForm = ({ serviceId, onSuccess }: ServiceFormProps) => {
  const { form, fetchService } = useInitialServiceForm({ serviceId });
  const { isPending, isSuccess, isError, error, mutate } = useServiceMutation({
    serviceId,
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
                  placeholder="Vui lòng nhập giá dịch vụ."
                  {...field}
                />
              </FormControl>
              <FormMessage className="!m-0" />
            </FormItem>
          )}
        />
        {(isError || fetchService.isError) && (
          <p className="text-[0.8rem] font-medium text-destructive mt-1">
            * {fetchService.error?.message || error?.message}
          </p>
        )}
        <div className="flex-1 flex justify-end">
          <Button
            type="submit"
            className="mt-auto"
            disabled={
              isPending || fetchService.isFetching || fetchService.isError
            }
          >
            {isPending ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            {serviceId ? "Chỉnh sửa" : "Tạo dịch vụ"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ServiceForm;
