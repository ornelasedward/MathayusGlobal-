"use client";
import { useState, useEffect } from "react";
import { client } from "../lib/sanity.client";

interface Title2 {
  title2: string;
}

export default function Title() {
  const [title2, setTitle2] = useState<Title2 | null>(null);

  useEffect(() => {
    client
      .fetch<Title2>(
        `*[_type == "title2"][0]{
            title2,
          }`
      )
      .then((data) => setTitle2(data))
      .catch(console.error);
  }, []);

  if (!title2) {
    return null;
  }

  return (
    <div className="">
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">{title2.title}</h2>
      <br /> <br />
    </div>
  );
}
