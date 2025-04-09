"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { sign } from "crypto";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import FormField from "./FormField";
import { useRouter } from "next/navigation";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "signUp" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const formSchema = authFormSchema(type);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "signIn") {
        console.log("SIGN IN", values);
        router.push('/');
      } else {
        console.log("SIGN UP", values);
        router.push('/sign-in');
      }
    } catch (e) {
      console.log(e);
      toast.error(`Error occurred : ${e}`);
    }
  }
  return (
    <div className="border-gradient p-0.5 rounded-2xl w-fit lg:min-w-[566px]">
      <div className="flex flex-col gap-5 card p-8 items-center">
        <div className="flex gap-2 justify-center">
          <img src="./logo.svg" alt="logo" className="w-12 h-10" />
          <h2 className="text-white font-extrabold text-3xl">AIValuate</h2>
        </div>
        <h3 className="text-[20px] text-gray-200">AI powered mock interview</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full mt-4 "
          >
            {type === "signUp" && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Enter Username"
              />
            )}
            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Email Address"
              type="email"
            />
            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter Password"
              type="password"
            />
            <Button className="w-full rounded-2xl" type="submit">
              {type === "signUp" ? "Create an account" : "Login"}
            </Button>
          </form>
        </Form>
        <div className="flex gap-1">
          <p>{type === "signUp" ? "Already a user?" : "Create an account?"}</p>
          <Link
            className="ml-2 font-semibold"
            href={type === "signUp" ? "/sign-in" : "/sign-up"}
          >
            {type === "signUp" ? "Sign In" : "Sign Up"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
