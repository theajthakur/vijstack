"use client";
import { useState } from "react";
import Link from "next/link";
import { Contact, Menu, Newspaper, User2, XIcon } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-0 w-full z-40">
      <div className="py-5 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex justify-between items-center">
          <a href={"/"}>
            <img width={50} src="/logo.png" alt="Logo" />
          </a>
          <div onClick={() => setOpen(true)} className="cursor-pointer">
            <Menu />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background text-accent p-8 transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <div className="cursor-pointer" onClick={() => setOpen(false)}>
            <XIcon />
          </div>
        </div>

        <div className="mt-10 space-y-6 text-3xl">
          <Link href={"/about"} onClick={() => setOpen(false)}>
            <div className="flex gap-5 items-center hover:text-primary transition-colors">
              <User2 />
              <span>About</span>
            </div>
          </Link>
          <Link href={"/contact"} onClick={() => setOpen(false)}>
            <div className="flex gap-5 items-center hover:text-primary transition-colors">
              <Contact />
              <span>Contact Us</span>
            </div>
          </Link>
          <Link href={"/newsletter"} onClick={() => setOpen(false)}>
            <div className="flex gap-5 items-center hover:text-primary transition-colors">
              <Newspaper />
              <span>Newsletter</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
