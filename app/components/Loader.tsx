"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-container">
      <div className="text-center">
        <Image
          src="/logo white.png"
          alt="Foodica Logo"
          width={150}
          height={150}
          className="animate-heartbeat"
          priority
        />

      </div>
    </div>
  );
}