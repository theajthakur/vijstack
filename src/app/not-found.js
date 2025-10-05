"use client";
import { Car, Rocket } from "lucide-react";
import React from "react";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] justify-center flex items-center mt-10">
      <div className="px-6 py-8 rounded-xl max-w-md bg-black shadow-2xs text-secondary">
        <div className="flex justify-center w-100">
          <div className="p-3 border-secondary hover:border-accent hover:text-accent transition-all hover:scale-110 border-2 rounded-2xl">
            <Rocket className="w-8 h-8" />
          </div>
        </div>
        <div className="text-center my-3">
          <h2 className="my-3">
            We are prioritising our clients, We'll be fixing this as soon as we
            get free!
          </h2>
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="px-3 py-2 mt-3 border-white rounded-xl border-2 text-white transition-all cursor-pointer hover:bg-secondary hover:border-secondary"
          >
            <div className="flex gap-2">
              <Car />
              <p> Go Back to Home</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
