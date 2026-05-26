import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const coaches = [
  {
    name: "Brene Brown",
    href: "/brene-brown",
    img: "/coaches/brene.jpg",
    followers: "5.2M followers",
    format: "Podcast clip",
    how: "2 people talking, mid-sentence start, no music, no editing",
    sells: "Books, Netflix, HBO",
  },
  {
    name: "Simon Sinek",
    href: "/simon-sinek",
    img: "/coaches/simon.jpg",
    followers: "4.9M followers",
    format: "Stage clip",
    how: "Conference keynote, one-liner hook, audience visible",
    sells: "Online courses, speaking",
  },
  {
    name: "Peter Crone",
    href: "/peter-crone",
    img: "/coaches/peter.jpg",
    followers: "1M followers",
    format: "Live breakthrough",
    how: "Real-time coaching on camera, question-based, intimate",
    sells: "Membership, mastermind, retreat",
  },
  {
    name: "Mel Robbins",
    href: "/mel-robbins",
    img: "/coaches/mel.jpg",
    followers: "12.3M followers",
    format: "Expert interview",
    how: "Doctor/author guest, health hook, keyword CTA in caption",
    sells: "Books (9M+ sold), podcast, protein brand",
  },
];

const rules = [
  { emoji: "🎬", title: "First 3 seconds = face + one bold sentence", body: "50% leave in 3 sec. No intros. No logos. Start mid-sentence at the good part." },
  { emoji: "☝️", title: "One idea per video", body: "Not 5 tips. One question, one reframe, one moment. Text-message simple." },
  { emoji: "📩", title: "Make it sendable", body: "DM shares are Instagram's #1 algorithm signal. If it makes someone think of a friend, it wins." },
  { emoji: "📱", title: "Raw over polished", body: "Every coach here uses minimal production. Authenticity IS the aesthetic." },
  { emoji: "💬", title: '"Comment REST" CTA', body: "\"Comment REST and I'll DM you the episode.\" Doubles comments. Sinek + Mel do this every post." },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="pt-16 pb-12">
        <p className="text-sm text-muted-foreground mb-3">Research Study — May 2026</p>
        <h1 className="text-4xl font-bold tracking-tight leading-tight">
          How top life coaches <br />
          <span className="text-primary">win on Instagram</span>
        </h1>
        <p className="text-muted-foreground mt-4 text-lg max-w-lg leading-relaxed">
          4 coaches. Their exact video formats, what they link to, how they sell,
          and step-by-step how to copy each one.
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
                  <p className="text-xs text-muted-foreground mt-2">Sells: {c.sells}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight mb-8">
          5 format rules every coach follows
        </h2>
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

      <div className="mt-16 mb-20 text-center">
        <Link
          href="/formats"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
        >
          See all video format recipes →
        </Link>
      </div>
    </div>
  );
}
