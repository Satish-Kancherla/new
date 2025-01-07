"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

function ActiveLink({ href, children }: LinkProps & { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <Link href={href}>
            <Button variant="ghost" className={cn("text-base", pathname === href && "bg-zinc-100 dark:bg-zinc-800 ")}>
                {children}
            </Button>
        </Link>
    );
}

export default function Navbar() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const signout = () => router.push("/signout");

    return (
        <nav className="w-full border-b dark:bg-zinc-800 shadow-md">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between py-3">
                {/* Logo and Title */}
                <div className="flex items-center gap-4">
                    <Image src="/logo1.jpeg" alt="Hospital Logo" width={50} height={50} className="w-12 h-12" />
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold md:font-semibold text-center md:text-left">
                        Sudheer Hospital And Neuro Center
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-4 items-center">
                    {/* <ActiveLink href="/">Dashboard</ActiveLink> */}
                    <ActiveLink href="/">Patients List</ActiveLink>
                    <ActiveLink href="/patients-form">Patients Registration</ActiveLink>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <Button variant="ghost" onClick={toggleMenu}>
                        <Menu size={24} />
                    </Button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-zinc-900 border-t shadow-md">
                    <ul className="flex flex-col gap-2 p-4">
                        {/* <li>
                            <ActiveLink href="/">Dashboard</ActiveLink>
                        </li> */}
                        <li>
                            <ActiveLink href="/">Patients List</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/patients-form">Add Patients</ActiveLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
