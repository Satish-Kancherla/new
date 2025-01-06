"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Blocks } from "lucide-react";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

function ActiveLink({ href, children }: LinkProps & { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <Link href={href} className={` ${pathname === href ? "underline" : ""}`}>
          <Button variant={'ghost'} className={cn("text-base",pathname === href && "bg-zinc-100 dark:bg-zinc-800" )} >

            {children}
          </Button>
        </Link>
    );
}
export default function Navbar() {
    const router = useRouter();
    const signout = () => {
        router.push("/signout");
    };
    return (
        <div className="w-full  md:px-12 flex items-center justify-between  border border-b-px dark:bg-zinc-800 ">
            <div className="flex items-center justify-center gap-4">
                <div className=" mx-auto px-4 py-2 flex  gap-5 items-center">
                    <Image src="/logo1.jpeg" alt="Hospital Logo" className="" width={70} height={24} />

                    <div className="md:flex md:space-x-6 md:items-center">
                        <h1 className="text-2xl font-semibold"> Sudheer Hospital And Neuro Center</h1>
                    </div>
                </div>
                <div className=" flex gap-2 ">
                    <ActiveLink href={"/"}>Dashboard</ActiveLink>
                    <ActiveLink href={"/patients"}>Patients List</ActiveLink>
                    <ActiveLink href={"/patients-form"}>Add Patients</ActiveLink>
                </div>
            </div>
            {/* <div className="">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="" />
                            <AvatarFallback>AU</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500 dark:text-red-600 " onClick={signout}>Sign out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div> */}
        </div>
    );
}
