import { Loader } from "lucide-react";
import React from "react";

export default function MainLoader() {
  return (
    <div className="bg-background">
      <div
        className="loader-container"
        style={{
          minHeight: "100dvh",
          maxWidth: "100vw",
          overflow: "hidden",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "radial-gradient(1200px 600px at 10% 10%, rgba(108,99,255,0.08), transparent 60%), radial-gradient(900px 500px at 90% 90%, rgba(0,245,212,0.08), transparent 60%)",
        }}
      >
        <div>
          <div className="flex justify-center">
            <Loader />
          </div>
          <h1 className="loader-text font-extrabold text-5xl flex justify-center">
            {"VIJSTACK".split("").map((l, i) => (
              <span
                key={i}
                className={l === "V" || l === "S" ? "text-primary" : ""}
              >
                {l}
              </span>
            ))}
          </h1>
          <p className="tagline">
            {"Designing. Developing. Delivering.".split("").map((w, i) => (
              <span
                key={i}
                className={
                  ["d", "i"].includes(w.toLowerCase()) ? "text-primary" : ""
                }
              >
                {w}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
