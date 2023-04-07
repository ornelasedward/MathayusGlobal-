"use client";
import { useState, useEffect } from "react";

interface About {
  title: string;
}

export default function Title() {
  const [about, setAbout] = useState<Title | null>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "title"][0]{
            title,
          }`
      )
      .then((data) => setTitle(data))
      .catch(console.error);
  }, []);

  if (!title) {
    return null;
  }

  return (
    <div>
      <h1 className="md:text-9xl text-7xl font-light">Hello I&apos;m Luis</h1>
    </div>
  );
}
