import { Card, CardContent } from "@/components/ui/card";

const variations = [
  { setting: "Seated conversation", who: "Brene, Mel", camera: "2 cameras, seated across from guest", background: "Podcast set or quiet room", energy: "Conversational, warm" },
  { setting: "Stage", who: "Simon", camera: "Multi-cam: wide stage + close-up", background: "Stage with audience visible", energy: "Confident, polished" },
  { setting: "Direct to camera", who: "Peter", camera: "Phone, close-up on face", background: "Plain wall or outdoors", energy: "Quiet, intimate, thoughtful" },
  { setting: "Live coaching", who: "Peter", camera: "2 people, eye-level", background: "Event or studio", energy: "Emotional, real-time breakthrough" },
];

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 pb-20">
      <h1 className="text-3xl font-bold tracking-tight">The recipe to get your message heard</h1>
      <p className="text-muted-foreground mt-2 text-base max-w-xl">
        Every coach in this study uses the same simple format. No studio, no team, no ad budget.
        Just your voice, a phone, and something worth saying. Here's exactly how.
      </p>

      {/* The one recipe */}
      <Card className="mt-10 bg-primary/5 border-primary/20">
        <CardContent className="p-8">
          <h2 className="text-xl font-bold mb-6">The recipe</h2>
          <ol className="space-y-4">
            {[
              { step: "Record something longer", detail: "A conversation, coaching session, talk, anything where you're being real and saying something worth hearing." },
              { step: "Find the one moment", detail: "The single most surprising, emotional, or counterintuitive 30-90 seconds. Not the whole thing. ONE moment." },
              { step: "Start mid-sentence", detail: "Cut so it opens at the interesting part. No intro, no logo, no 'hey guys.' Face on screen, bold sentence out of your mouth, first 3 seconds." },
              { step: "Add captions", detail: "Burned-in subtitles. Most people watch without sound. That's it for editing: no music, no transitions, no effects." },
              { step: "Write the caption", detail: "Brief context. Then either: 'Comment [WORD] and I'll DM you the full episode' (doubles comments) or 'Save this and come back to it' (drives saves)." },
              { step: "Post 3-5x per week", detail: "Consistency matters more than perfection. One long recording gives you multiple clips." },
            ].map((s, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-sm">{s.step}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Variations */}
      <h2 className="text-xl font-bold mt-14 mb-2">Same recipe, different settings</h2>
      <p className="text-muted-foreground text-sm mb-6">Pick whichever feels natural to you. They all work.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        {variations.map((v) => (
          <Card key={v.setting} className="border-border/50">
            <CardContent className="p-5">
              <h3 className="font-semibold text-base mb-3">{v.setting}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <span className="text-muted-foreground shrink-0 w-20">Used by</span>
                  <span>{v.who}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-muted-foreground shrink-0 w-20">Camera</span>
                  <span>{v.camera}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-muted-foreground shrink-0 w-20">Background</span>
                  <span>{v.background}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-muted-foreground shrink-0 w-20">Energy</span>
                  <span>{v.energy}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* What doesn't change */}
      <h2 className="text-xl font-bold mt-14 mb-4">What never changes</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          "Face in frame in the first 3 seconds",
          "One idea per video, not five",
          "No intro, no logo, no greeting",
          "Burned-in subtitles, always",
          "Original voice, no trending audio",
          "Raw over polished, authenticity wins",
          "30-90 seconds max",
          "Every clip maps to something you sell or a longer piece of content",
        ].map((rule) => (
          <div key={rule} className="flex items-start gap-2 text-sm">
            <span className="text-primary mt-0.5">✓</span>
            <span>{rule}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
