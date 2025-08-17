"use client";

import Navbar from "../layout/Navbar";

export default function LayoutProvider({ children }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
}
