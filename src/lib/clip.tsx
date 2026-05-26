"use client";

import { Embed } from "@/lib/embed";

export function Clip({
  url,
  opener,
  subtitle,
  explanation,
}: {
  url: string;
  opener: string;
  subtitle: string;
  explanation: string;
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-6 items-start">
      <Embed url={url} />
      <div className="py-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Opener</p>
        <p className="text-base font-semibold mt-1">{opener}</p>
        <p className="text-sm text-muted-foreground mt-3">{subtitle}</p>
        <p className="text-sm mt-3">{explanation}</p>
      </div>
    </div>
  );
}
