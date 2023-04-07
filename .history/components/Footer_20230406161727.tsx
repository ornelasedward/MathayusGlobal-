"use client";
import { useState, useEffect } from "react";
import { client } from "../lib/sanity.client";

interface Footer {
  name: string;
  url: string;
}

export default function Footer() {
  const [footers, setFooters] = useState<Footer[]>([]);

  useEffect(() => {
    client
      .fetch<Footer[]>(
        `*[_type == "footer"]{
        name,
        url
      }`
      )
      .then((data) => setFooters(data))
      .catch(console.error);
  }, []);

  if (!footer) {
    return null;
  }

  return (
    <footer className="">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex justify-center space-x-6">
          <a href={footer.url}>{footer.name}</a>
        </div>
        <div className="mt-8">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2023 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}