"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Define the form schema using Zod
const formSchema = z.object({
    username: z.string().min(1, { message: "Username must be at least 1 characters" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" })
});

// Define the form data type using Zod's inferred type
type FormData = z.infer<typeof formSchema>;

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <LoginForm />
        </div>
    );
}

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    });

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch("https://auth.ueditor.lol/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password
                })
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="max-w-md w-full mx-auto md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border border-gray-300 rounded-lg">
            <Image
                src={"/UEditor ID Black BG.svg"}
                className={"block mx-auto"}
                width={100}
                height={100}
                alt="UEditor logo"
            />
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Login to your UEditor ID
            </p>

            <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="identifier">Username or Email Address</Label>
                    <Input id="identifier" className="text-black" placeholder="VeygaX or example@example.com" {...register("username")} />
                    {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" className="text-black" placeholder="••••••••" type="password" {...register("password")} />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Login &rarr;
                    <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
