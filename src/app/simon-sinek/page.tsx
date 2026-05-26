import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Embed } from "@/lib/embed";

const format = [
  ["Camera", "Pro multi-camera event recording. Wide stage + close-up face."],
  ["Framing", "Waist-up or head-and-shoulders. Often seated across from interviewer."],
  ["Lighting", "Stage lighting — spotlit speaker, darker background with audience."],
  ["Background", "Conference stage with audience, or podcast studio with guest."],
  ["Length", "30–60 sec. The single best one-liner from a keynote."],
  ["Editing", "Cuts between speaker and audience reactions. Clean, no effects."],
  ["Text overlay", "Sometimes event name. Mostly just spoken word + captions."],
  ["Subtitles", "Burned-in white auto-captions. Standard."],
  ["Audio", "Original voice from event. No music. No trending sounds."],
  ["Appearance", "Casual smart — blazer or sweater, no tie. Approachable."],
  ["First 3 sec", "Opens with THE ONE-LINER. 'Friendship is a foundation — not a luxury.'"],
  ["CTA", "'Comment [WORD] and I'll DM you the episode.' Every. Single. Post."],
];

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 pb-20">
      <div className="flex items-start gap-5 mb-10">
        <img src="/coaches/simon.jpg" alt="Simon Sinek" className="w-20 h-20 rounded-2xl object-cover shrink-0" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Simon Sinek</h1>
          <p className="text-muted-foreground text-sm mt-1">@simonsinek &middot; Founder of The Optimism Company</p>
          <div className="flex gap-2 mt-2">
            <Badge variant="secondary">4.9M followers</Badge>
            <Badge variant="secondary">1.25% engagement</Badge>
            <Badge variant="secondary">3,070 posts</Badge>
          </div>
        </div>
      </div>

      <Card className="bg-orange-50 border-orange-200 mb-10">
        <CardContent className="p-6">
          <h2 className="font-bold text-lg mb-3">How to copy this format</h2>
          <ol className="space-y-2 text-sm">
            <li><strong>1.</strong> Speak at events OR record podcast interviews</li>
            <li><strong>2.</strong> Find the ONE sentence that reframes something familiar</li>
            <li><strong>3.</strong> Open the clip with that sentence — first 3 sec = the hook</li>
            <li><strong>4.</strong> Burn in captions. Clean. No fancy graphics.</li>
            <li><strong>5.</strong> Caption: &ldquo;Comment [WORD] and I&rsquo;ll DM you the full episode&rdquo;</li>
            <li><strong>6.</strong> Each clip should map to something you sell. Free content = the pitch.</li>
          </ol>
        </CardContent>
      </Card>

      <h2 className="text-xl font-bold mb-4">Video format breakdown</h2>
      <div className="grid sm:grid-cols-2 gap-3 mb-12">
        {format.map(([label, desc]) => (
          <Card key={label} className="border-border/50">
            <CardContent className="p-4">
              <p className="text-[11px] uppercase tracking-widest text-orange-500 font-semibold">{label}</p>
              <p className="text-sm mt-1 text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-2">Top reels</h2>
      <p className="text-muted-foreground text-sm mb-6">Watch for the one-liner hook in first 3 seconds.</p>

      <div className="space-y-10">
        <div>
          <h3 className="font-semibold">&ldquo;Friendship is a foundation, not a luxury&rdquo; — 37.8K likes</h3>
          <p className="text-sm text-muted-foreground mt-1">One-sentence reframe. Universal topic. 2x his average.</p>
          <Embed url="https://www.instagram.com/reel/DXO9e3JAeaK/" note="37.8K likes — one reframe, universal resonance" />
        </div>
        <div>
          <h3 className="font-semibold">&ldquo;We used to accidentally get good at being human&rdquo; — 14.2K, 407 comments</h3>
          <p className="text-sm text-muted-foreground mt-1">Podcast clip with Vanessa Van Edwards. CTA: &ldquo;Comment collisions.&rdquo; 2x his comment average.</p>
          <Embed url="https://www.instagram.com/reel/DYhyaMku_gO/" note="Keyword CTA doubled comments" />
        </div>
        <div>
          <h3 className="font-semibold">&ldquo;We are not present until others say we are&rdquo; — 12K likes</h3>
          <p className="text-sm text-muted-foreground mt-1">Counterintuitive reframe. Screenshot-worthy one-liner.</p>
          <Embed url="https://www.instagram.com/reel/DYpTFvuCvba/" note="Quotable reframe = DM shares" />
        </div>
      </div>

      <h2 className="text-xl font-bold mt-12 mb-3">Links in bio &rarr; course funnel</h2>
      <div className="text-sm text-muted-foreground space-y-2">
        <p>Every reel maps to a paid course. The free content IS the sales pitch:</p>
        <ul className="space-y-1 ml-4 list-disc">
          <li><a href="https://simonsinek.com/product/find-your-why" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Find Your WHY</a> — 41 lessons</li>
          <li><a href="https://simonsinek.com/product/unleash-your-infinite-mindset" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Infinite Mindset</a> — 33 lessons</li>
          <li><a href="https://simonsinek.com/product/the-art-of-presenting" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Art of Presenting</a> — 45 lessons</li>
          <li><strong>All-access: $24.99/mo</strong> — 125+ lessons + live Q&A with Simon</li>
        </ul>
      </div>
    </div>
  );
}
