"use client";

import { useEffect, useRef } from "react";

export function Embed({ url, note }: { url: string; note?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const w = window as any;
      if (w.instgrm) {
        w.instgrm.Embeds.process(ref.current);
      } else {
        const s = document.createElement("script");
        s.src = "https://www.instagram.com/embed.js";
        s.async = true;
        document.body.appendChild(s);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [url]);

  const clean = url.replace(/\/$/, "");

  return (
    <div className="my-4" ref={ref}>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={`${clean}/`}
        data-instgrm-version="14"
        style={{
          background: "#fff",
          border: "1px solid #eee",
          borderRadius: 16,
          margin: "0 auto",
          maxWidth: 540,
          minWidth: 280,
          padding: 0,
          width: "100%",
        }}
      >
        <a href={`${clean}/`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 underline p-4 block">
          View on Instagram
        </a>
      </blockquote>
      {note && <p className="text-xs text-muted-foreground mt-2 text-center">{note}</p>}
    </div>
  );
}
