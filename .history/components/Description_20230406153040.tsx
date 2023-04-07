"use client";
import { useState, useEffect } from "react";
import { client } from "../lib/sanity.client";

interface Title {
  description: string;
}

export default function Description() {
  const [description, setDescription] = useState<Description | null>(null);

  useEffect(() => {
    client
      .fetch<Title>(
        `*[_type == "description"][0]{
            description
          }`
      )
      .then((data) => setDescription(data))
      .catch(console.error);
  }, []);

  if (!description) {
    return null;
  }

  return (
    <div>
      <p className="mt-20 text-3xl md:text-5xl text-gray-500 font-thin">
        {description.description}
      </p>
    </div>
  );
}
