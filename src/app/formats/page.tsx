import { Card, CardContent } from "@/components/ui/card";

const formats = [
  {
    name: "The Podcast Clip",
    who: "Brene Brown, Mel Robbins",
    color: "text-violet-500",
    steps: [
      "Record a long conversation (podcast, interview, coaching call)",
      "Find the single most surprising or emotional 30–90 sec moment",
      "Cut so it starts MID-SENTENCE at the interesting part — no intro",
      "Burn in subtitles. Small title bar at bottom. Nothing else.",
      "Caption: context + 'full episode at link in bio'",
      "No music. No effects. The conversation IS the content.",
    ],
    setup: "2 cameras, podcast studio or quiet room, 2 people seated",
    gear: "Any podcast mic + camera. iPhone works for video.",
    editing: "Trim to best moment. Add captions. Done.",
  },
  {
    name: "The Stage Clip",
    who: "Simon Sinek",
    color: "text-orange-500",
    steps: [
      "Speak at events or record yourself presenting to any audience",
      "Find the ONE sentence that reframes something familiar",
      "Open the clip with that sentence — first 3 sec = the hook",
      "Burn in captions. Clean, no fancy graphics.",
      "Caption: 'Comment [WORD] and I'll DM you the full episode'",
      "Each clip maps to something you sell. Free content = the pitch.",
    ],
    setup: "Stage or front of room. Audience visible. Multi-camera if possible.",
    gear: "Event videographer, or phone on tripod + lapel mic.",
    editing: "Cut to 30–60 sec. Add captions. Show audience reaction shots.",
  },
  {
    name: "The Live Breakthrough",
    who: "Peter Crone",
    color: "text-emerald-500",
    steps: [
      "Develop ONE signature question that reframes identity",
      "Film direct-to-camera, close-up, natural light, plain background",
      "Speak quietly and intimately — thoughtful energy, not motivational",
      "Open with the question in first 3 seconds",
      "Caption: ask people to SAVE the post and come back to it",
      "Film live coaching sessions and clip the breakthrough moments",
    ],
    setup: "Close-up, face fills frame. Natural light. Plain background.",
    gear: "Phone camera. No mic needed — quiet room.",
    editing: "Almost none. Maybe a slow zoom on the key moment.",
  },
  {
    name: "The Expert Interview",
    who: "Mel Robbins",
    color: "text-blue-500",
    steps: [
      "Interview a credible expert (doctor, author, researcher)",
      "Pull the most surprising stat or claim — 30–60 seconds",
      "Open with the SHOCK: 'This stat will blow your mind'",
      "Bold subtitles + guest name + episode title on screen",
      "Caption: 'Comment [WORD] and I'll DM you the full episode'",
      "Test concepts as clips FIRST — turn winners into products later",
    ],
    setup: "Podcast studio, 2 people. Professional but warm.",
    gear: "Podcast setup — 2 mics, 2 cameras, good lighting.",
    editing: "Quick cuts between speakers. Zoom on key lines. More polished.",
  },
];

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 pb-20">
      <h1 className="text-3xl font-bold tracking-tight">Video format recipes</h1>
      <p className="text-muted-foreground mt-2 text-base max-w-lg">
        4 proven formats. Each one works. Pick the one closest to your style and copy it.
      </p>

      <div className="mt-10 space-y-8">
        {formats.map((f) => (
          <Card key={f.name} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-baseline gap-3 mb-4">
                <h2 className="text-xl font-bold">{f.name}</h2>
                <span className={`text-sm font-medium ${f.color}`}>Used by: {f.who}</span>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Setup</p>
                  <p className="text-sm">{f.setup}</p>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Gear</p>
                  <p className="text-sm">{f.gear}</p>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Editing</p>
                  <p className="text-sm">{f.editing}</p>
                </div>
              </div>

              <h3 className="font-semibold text-sm mb-3">Step by step</h3>
              <ol className="space-y-2">
                {f.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground pt-0.5">{s}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
