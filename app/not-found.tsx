"use client";
import { Suspense, useState } from "react";

export default function NotFoundPage() {
  const [hover, setHover] = useState(false);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
        <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
        <p className="text-xl mt-4">Oops! Page not found</p>
        <button
          className={`mt-6 px-6 py-2 border rounded-lg text-lg transition-all duration-300 ${
            hover ? "bg-white text-black" : "border-white"
          }`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => (window.location.href = "/")}
        >
          Go Home
        </button>
      </div>
    </Suspense>
  );
}
