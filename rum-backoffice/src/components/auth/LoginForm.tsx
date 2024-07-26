"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useSignInMutation from "./composables/useSignInMutation";
import useInitialSignInForm, {
  LoginSchemaType,
} from "./composables/useInitialSignInForm";

export function LoginForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useInitialSignInForm();

  const {
    isPending,
    isError,
    error: RQError,
    mutate,
    data,
  } = useSignInMutation();

  const onSubmit = async (data: LoginSchemaType) => {
    mutate(data);
  };

  return (
    <Card className="mx-auto w-96 h-fit m-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Đăng nhập</CardTitle>
          <CardDescription>
            Bạn có thể hỏi admin để có tài khoản đăng nhập vào Rum Admin.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 ">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" disabled>
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" disabled>
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                hoặc tiếp tục với
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Email</Label>
            <Input
              placeholder="m@example.com"
              {...register("username", { required: true })}
            />
            {errors.username?.message && (
              <p className="text-[0.8rem] font-medium text-destructive">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input
              id="password"
              type="password"
              autoComplete="on"
              {...register("password", { required: true })}
            />
            {errors.password?.message && (
              <p className="text-[0.8rem] font-medium text-destructive">
                {errors.password.message}
              </p>
            )}

            {isError && (
              <p className="text-[0.8rem] font-medium text-destructive mt-1">
                * {RQError.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            {isPending ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Đăng nhập
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default LoginForm;
