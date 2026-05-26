import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const coaches = [
  {
    name: "Brene Brown",
    href: "/brene-brown",
    img: "/coaches/brene.jpg",
    followers: "5.2M people listening",
    format: "Conversation clip",
    how: "2 people talking, mid-sentence start, no music, no editing",
  },
  {
    name: "Simon Sinek",
    href: "/simon-sinek",
    img: "/coaches/simon.jpg",
    followers: "4.9M people listening",
    format: "Stage clip",
    how: "Stage talk, one powerful sentence, audience visible",
  },
  {
    name: "Peter Crone",
    href: "/peter-crone",
    img: "/coaches/peter.jpg",
    followers: "1M people listening",
    format: "Coaching moment",
    how: "Real-time coaching on camera, question-based, intimate",
  },
  {
    name: "Mel Robbins",
    href: "/mel-robbins",
    img: "/coaches/mel.jpg",
    followers: "12.3M people listening",
    format: "Expert conversation",
    how: "Doctor/author guest, health hook, asking people to comment a word",
  },
];

const rules = [
  { emoji: "🎬", title: "First 3 seconds = face + one bold sentence", body: "50% leave in 3 sec. No intros. No logos. Start mid-sentence at the good part." },
  { emoji: "☝️", title: "One idea per video", body: "Not 5 tips. One question, one reframe, one moment. Text-message simple." },
  { emoji: "📩", title: "Make it sendable", body: "DM shares are Instagram's #1 algorithm signal. If it makes someone think of a friend, it wins." },
  { emoji: "📱", title: "Raw over polished", body: "Every coach here uses minimal production. Authenticity IS the aesthetic." },
  { emoji: "💬", title: '"Comment REST" CTA', body: '"Comment REST and I\'ll DM you the episode." Doubles comments. Sinek + Mel do this every post.' },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <div className="pt-20 pb-16 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          Your message deserves<br />
          <span className="text-primary">to be heard</span>
        </h1>
        <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
          You became a coach to change lives. But the best message in the world
          means nothing if nobody sees it. These 4 coaches figured out how to
          reach millions, and their formula is simpler than you think.
        </p>
        <p className="mt-4 text-base font-medium">
          We broke down exactly how they do it so you can do it too.
        </p>
      </div>

      {/* The promise */}
      <Card className="bg-primary/5 border-primary/20 mb-16">
        <CardContent className="p-8 text-center">
          <p className="text-lg font-semibold">
            The truth: they all use the same simple format.
          </p>
          <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
            Record something real. Find the best 60 seconds. Add captions. Post it.
            No fancy equipment. No editing skills. No ad budget.
            Just your voice and something worth saying, which you already have.
          </p>
          <Link
            href="/formats"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity mt-6"
          >
            See the step-by-step recipe →
          </Link>
        </CardContent>
      </Card>

      {/* Coaches */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight">
          Learn from coaches who've done it
        </h2>
        <p className="text-muted-foreground mt-2">
          Each one started where you are. Click to see their exact format, videos, and what they link to.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {coaches.map((c) => (
          <Link key={c.href} href={c.href} className="group">
            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-border/60">
              <CardContent className="p-5 flex gap-4 items-start">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-14 h-14 rounded-full object-cover shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-semibold text-base">{c.name}</h3>
                  <p className="text-xs text-muted-foreground">{c.followers}</p>
                  <p className="text-sm font-medium text-primary mt-1.5">{c.format}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{c.how}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Rules */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight mb-2">
          The 5 rules they all follow
        </h2>
        <p className="text-muted-foreground mb-8">
          Doesn't matter if you have 100 followers or 100,000. These work at every level.
        </p>
        <div className="space-y-3">
          {rules.map((r, i) => (
            <Card key={i} className="border-border/50">
              <CardContent className="p-5 flex gap-4 items-start">
                <span className="text-2xl">{r.emoji}</span>
                <div>
                  <p className="font-medium text-sm">{r.title}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{r.body}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 mb-24 text-center max-w-lg mx-auto">
        <h2 className="text-2xl font-bold tracking-tight">
          You already have what it takes
        </h2>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          You don't need a studio. You don't need a team. You don't need to be famous first.
          You need a phone, something real to say, and 60 seconds.
          The people who need your help are scrolling right now.
        </p>
        <Link
          href="/formats"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity mt-6"
        >
          Start with the recipe →
        </Link>
      </div>
    </div>
  );
}
