import { Card, CardContent } from "@/components/ui/card";

const variations = [
  { setting: "Seated conversation", who: "Brene, Mel", camera: "2 cameras, seated across from guest", background: "Podcast set or quiet room", energy: "Conversational, warm" },
  { setting: "Stage", who: "Simon", camera: "Someone films you from the audience", background: "Stage with audience visible", energy: "Confident, polished" },
  { setting: "Just you and your phone", who: "Peter", camera: "Phone, close-up on face", background: "Plain wall or outdoors", energy: "Quiet, intimate, thoughtful" },
  { setting: "Coaching", who: "Peter", camera: "2 people, eye-level", background: "Event or studio", energy: "Emotional, real-time breakthrough" },
];

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 pb-20">
      <h1 className="text-3xl font-bold tracking-tight">The plan to get your message heard</h1>
      <p className="text-muted-foreground mt-2 text-base max-w-xl">
        Every coach in this study uses the same simple format. No studio, no team, no ad budget.
        Just your voice, a phone, and something worth saying. Here's exactly how.
      </p>

      {/* The plan */}
      <h2 className="text-xl font-bold mt-10 mb-4">The plan</h2>
      <div className="space-y-2">
        {[
          "Record a conversation, coaching session, or talk",
          "Find the one best moment (30-90 seconds)",
          "Start at the interesting part, not the beginning",
          "Add subtitles",
          "Write a short caption",
          "Post a few times a week",
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3 text-sm">
            <span className="text-muted-foreground">{i + 1}.</span>
            <span>{step}</span>
          </div>
        ))}
      </div>

      {/* Variations */}
      <h2 className="text-xl font-bold mt-14 mb-2">Same plan, different settings</h2>
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

      {/* Checklist */}
      <h2 className="text-xl font-bold mt-14 mb-4">Checklist before you post</h2>
      <div className="space-y-2">
        {[
          "Starts with the speaker",
          "Use one idea for each video",
          "Do not use an intro",
          "Add subtitles",
          "Don't use music overlay",
          "Keep it short",
          "Simple editing is all you need",
          "Have a link for people to go deeper",
        ].map((rule) => (
          <div key={rule} className="flex items-start gap-3 text-sm">
            <span className="text-primary mt-0.5">✓</span>
            <span>{rule}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
