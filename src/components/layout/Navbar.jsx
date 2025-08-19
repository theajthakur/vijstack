import gsap from "gsap";
import { Contact, Menu, Newspaper, User2, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function Navbar() {
  const logo = useRef(null);
  const menu = useRef(null);
  const sidebar = useRef(null);
  const cross = useRef(null);

  useEffect(() => {
    // Initial animation for logo and menu with smooth GSAP transition
    gsap.from(logo.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
    });
    gsap.from(menu.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
    });

    const ts = gsap.timeline({ paused: true });

    const openSidebar = () => {
      // Open sidebar with smoother transition
      ts.play();
      ts.to(sidebar.current, {
        right: 0,
        duration: 0.6,
      });

      ts.from(".sidebar-link", {
        stagger: 0.2,
        opacity: 0,
        x: 50,
        duration: 0.6,
      });

      ts.to(cross.current, {
        opacity: 1,
        duration: 0.4,
      });
    };

    const closeSidebar = () => {
      // Close sidebar with smooth fade out
      ts.to(cross.current, {
        opacity: 0,
        duration: 0.4,
      });

      ts.to(sidebar.current, {
        right: "-100%",
        duration: 0.6,
      });
    };

    // Event listeners for menu and cross
    if (menu.current) {
      menu.current.addEventListener("click", openSidebar);
    }

    if (cross.current) {
      cross.current.addEventListener("click", closeSidebar);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (menu.current) {
        menu.current.removeEventListener("click", openSidebar);
      }
      if (cross.current) {
        cross.current.removeEventListener("click", closeSidebar);
      }
    };
  }, []);

  return (
    <div className="absolute top-0 w-full z-50">
      <div className="py-5 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <img ref={logo} width={50} src="/logo.png" alt="Logo" />
          </Link>
          <div ref={menu} className="cursor-pointer">
            <Menu />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className="sidebar-container text-3xl w-full max-w-md p-8 fixed bg-background right-[-100%] top-0 h-full transition-all overflow-hidden text-accent"
        ref={sidebar}
      >
        <div className="sidebar-hider flex justify-end">
          <div className="cursor-pointer opacity-0" ref={cross}>
            <XIcon />
          </div>
        </div>
        <div className="my-5 sidebar-link">
          <Link href={"/about"}>
            <div className="flex gap-5 items-center">
              <User2 />
              <span>About</span>
            </div>
          </Link>
        </div>
        <div className="my-5 sidebar-link">
          <Link href={"/contact"}>
            <div className="flex gap-5 items-center">
              <Contact />
              <span>Contact Us</span>
            </div>
          </Link>
        </div>
        <div className="my-5 sidebar-link">
          <Link href={"/newsletter"}>
            <div className="flex gap-5 items-center">
              <Newspaper />
              <span>Newsletter</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
