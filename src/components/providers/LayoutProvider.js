"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../layout/Navbar";
import MainLoader from "../layout/Loader";
import Footer from "../layout/Footer";

export default function LayoutProvider({ children }) {
  const loaderRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && (
        <div
          ref={loaderRef}
          className={`w-full min-h-dvh fixed top-0 z-50 transition-opacity duration-1000 ease-in-out ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <MainLoader />
        </div>
      )}
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
