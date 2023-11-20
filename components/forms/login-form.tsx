"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { PasswordInput } from "@/components/password-input";

import { signIn } from "next-auth/react";
import { Icons } from "../icons";
import { authSchema } from "@/lib/validations/auth";

type Inputs = z.infer<typeof authSchema>;

export function LogInForm() {
  const router = useRouter();
  const [error, setError] = React.useState("");

  const [isPending, startTransition] = React.useTransition();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      await signIn("credentials", {
        phone: data.phone || "",
        password: data.password || "",
        redirect: false,
      }).then((response) => {
        console.log("response:", response);

        if (!response?.error) {
          router.push("/");
        } else {
          setError("Неправильный пароль или логин");
        }
      });
    });
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер пользователя</FormLabel>
              <FormControl>
                <Input placeholder="Номер пользователя" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage>{error}</FormMessage>
            </FormItem>
          )}
        />
        <Button disabled={isPending}>
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Вход
          <span className="sr-only">Sign in</span>
        </Button>
      </form>
    </Form>
  );
}
