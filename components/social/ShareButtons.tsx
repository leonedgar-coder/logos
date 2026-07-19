"use client";

import { useEffect, useState } from "react";

export default function ShareButtons({ title }: { title: string }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUrl(window.location.href);
  }, []);

  if (!url) return null;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center space-x-4 my-10 py-6 border-y border-gray-100">
      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
        Compartir esta reflexión:
      </span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-brand-blue hover:bg-brand-blue hover:text-white font-medium transition-colors"
      >
        Twitter / X
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-brand-blue hover:bg-brand-blue hover:text-white font-medium transition-colors"
      >
        LinkedIn
      </a>
    </div>
  );
}
