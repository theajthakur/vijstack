import React from "react";

export default function MainLoader() {
  return (
    <div className="bg-background">
      <div
        className="loader-container"
        style={{
          minHeight: "100dvh",
          backgroundImage:
            "radial-gradient(1200px 600px at 10% 10%, rgba(108,99,255,0.08), transparent 60%), radial-gradient(900px 500px at 90% 90%, rgba(0,245,212,0.08), transparent 60%)",
        }}
      >
        <div>
          <h1 className="loader-text font-extrabold text-5xl flex justify-center">
            {"VIJSTACK".split("").map((l, i) => (
              <span
                key={i}
                className={l === "V" || l === "S" ? "highlighted" : ""}
              >
                {l}
              </span>
            ))}
          </h1>
          <p className="tagline">Designing. Developing. Delivering.</p>
          <p className="loading-message">Your page is being loaded...</p>
        </div>

        <style jsx>{`
          .loader-container {
            position: relative;
            overflow: hidden;
            background-color: var(--background);
            color: var(--text);
            display: grid;
            place-items: center;
            padding: 0 1.5rem;
            min-height: 100vh;
            animation: fadeInOut 3s ease-in-out infinite;
            text-align: center;
          }

          .loader-text {
            display: flex;
            gap: 0.15em;
            margin-bottom: 0.75rem;
          }

          .loader-text span {
            display: inline-block;
          }

          .highlighted {
            color: var(--primary);
            animation: pulse 1.5s ease-in-out infinite;
          }

          .tagline {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 0.5rem;
            animation: fadeInUp 1.5s ease forwards;
            opacity: 0;
          }

          .loading-message {
            font-size: 1rem;
            color: var(--text-muted, #888);
            animation: fadeInUp 2s ease forwards;
            opacity: 0;
          }

          /* Pulse animation for highlighted letters */
          @keyframes pulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.8;
            }
          }

          /* Fade in/out animation for container */
          @keyframes fadeInOut {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.6;
            }
          }

          /* Fade in and slide up for tagline and loading message */
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
