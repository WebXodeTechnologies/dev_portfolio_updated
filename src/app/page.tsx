"use client";
import { useState } from "react";
import Preloader from "@/components/ui/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <main>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <section>
        <h1 className="text-3xl font-bold p-8">
          Welcome to Akash&apos;s Workspace
        </h1>
      </section>
    </main>
  );
}
