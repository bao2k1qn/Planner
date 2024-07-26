"use client";
import { ArrowLeftRight } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { toast } from "../ui/use-toast";
import useInitialPaymentForm, {
  PaymentFormType,
} from "./composables/useInitialPaymentForm";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const PaymentForm = () => {
  const form = useInitialPaymentForm();

  function onSubmit(data: PaymentFormType) {
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
          name="paymentType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phương thức thanh toán</FormLabel>
              <FormControl>
                <RadioGroup
                  defaultValue={field.value}
                  onChange={field.onChange}
                  className="grid grid-cols-3 gap-4"
                >
                  <div>
                    <RadioGroupItem
                      value="COD"
                      id="COD"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="COD"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover py-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <div className="mb-3 h-6 w-fit flex items-center">
                        COD
                      </div>
                      Tiền mặt
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="Transfer"
                      id="Transfer"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="Transfer"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover py-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <ArrowLeftRight className="mb-3 h-6 w-6" />
                      Chuyển khoản
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="Card"
                      id="Card"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="Card"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover py-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="mb-3 h-6 w-6"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <path d="M2 10h20" />
                      </svg>
                      Thẻ
                    </Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage className="!m-0" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="servicePrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Giá dịch vụ</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Vui lòng nhập giá dịch vụ."
                  {...field}
                  value={field.value}
                  onChange={(e) =>
                    e.target.validity.valid && field.onChange(e.target.value)
                  }
                />
              </FormControl>
              <FormMessage className="!m-0" />
              <FormDescription className="leading-snug">
                Giá dịch vụ sẽ dựa trên dịch vụ đã đăng ký.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tips"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tips</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Tiền tips không bắt buộc."
                  {...field}
                />
              </FormControl>
              <FormMessage className="!m-0" />
              <FormDescription className="leading-snug">
                Tiền tips nhân viên hoặc tiền tips dịch vụ
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lưu ý</FormLabel>
              <FormControl>
                <Textarea placeholder="Viết những lưu ý bạn cần về thanh toán." />
              </FormControl>
              <FormMessage className="!m-0" />
            </FormItem>
          )}
        />
        <div className="flex-1 flex justify-end">
          <Button type="submit" className="mt-auto">
            Thanh toán
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PaymentForm;
