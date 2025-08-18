import gsap from "gsap";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function Navbar() {
  const logo = useRef(null);
  const menu = useRef(null);
  useEffect(() => {
    gsap.from(logo.current, {
      x: -100,
      duration: 1,
    });
    gsap.from(menu.current, {
      x: 100,
      duration: 1,
    });
  }, []);
  return (
    <div className="fixed top-0 w-full">
      <div className="py-5 px-20">
        <div className="flex justify-between align-middle">
          <Link href={"/"}>
            <img ref={logo} width={50} src="/logo.png" />
          </Link>
          <div ref={menu} className="cursor-pointer">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}
