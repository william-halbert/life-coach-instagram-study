import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Embed } from "@/lib/embed";

const format = [
  ["Camera", "Someone films him on stage"],
  ["Framing", "Waist-up or head-and-shoulders"],
  ["Lighting", "Stage lighting, audience in background"],
  ["Background", "Stage with people watching"],
  ["Length", "30-60 seconds"],
  ["Editing", "Cuts between him and audience reactions"],
  ["Text", "Sometimes the event name"],
  ["Subtitles", "Yes, always on screen"],
  ["Audio", "Just his voice. No music."],
  ["What he wears", "Blazer or sweater, no tie"],
  ["How it starts", "One powerful sentence right away. No intro."],
  ["Caption", "'Comment [WORD] and I'll DM you the episode'"],
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

      <h2 className="text-xl font-bold mb-4">How he does it</h2>
      <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-sm mb-12">
        {format.map(([label, desc]) => (
          <>
            <span key={label + "l"} className="text-muted-foreground font-medium">{label}</span>
            <span key={label + "d"}>{desc}</span>
          </>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-2">Top reels</h2>
      <p className="text-muted-foreground text-sm mb-6">Watch for the one-liner hook in first 3 seconds.</p>

      <div className="space-y-10">
        <div>
          <h3 className="font-semibold">&ldquo;Friendship is a foundation, not a luxury&rdquo;. 37.8K likes</h3>
          <p className="text-sm text-muted-foreground mt-1">One-sentence reframe. Universal topic. 2x his average.</p>
          <Embed url="https://www.instagram.com/reel/DXO9e3JAeaK/" note="37.8K likes, one reframe, universal resonance" />
        </div>
        <div>
          <h3 className="font-semibold">&ldquo;We used to accidentally get good at being human&rdquo;. 14.2K, 407 comments</h3>
          <p className="text-sm text-muted-foreground mt-1">Conversation clip with Vanessa Van Edwards. CTA: &ldquo;Comment collisions.&rdquo; 2x his comment average.</p>
          <Embed url="https://www.instagram.com/reel/DYhyaMku_gO/" note="Keyword CTA doubled comments" />
        </div>
        <div>
          <h3 className="font-semibold">&ldquo;We are not present until others say we are&rdquo;. 12K likes</h3>
          <p className="text-sm text-muted-foreground mt-1">Counterintuitive reframe. Screenshot-worthy one-liner.</p>
          <Embed url="https://www.instagram.com/reel/DYpTFvuCvba/" note="Quotable reframe = DM shares" />
        </div>
      </div>

      <h2 className="text-xl font-bold mt-12 mb-3">Links in bio → course funnel</h2>
      <div className="text-sm text-muted-foreground space-y-2">
        <p>Every reel maps to a paid course. The free content IS the sales pitch:</p>
        <ul className="space-y-1 ml-4 list-disc">
          <li><a href="https://simonsinek.com/product/find-your-why" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Find Your WHY</a>. 41 lessons</li>
          <li><a href="https://simonsinek.com/product/unleash-your-infinite-mindset" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Infinite Mindset</a>. 33 lessons</li>
          <li><a href="https://simonsinek.com/product/the-art-of-presenting" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Art of Presenting</a>. 45 lessons</li>
          <li><strong>All-access: $24.99/mo</strong>. 125+ lessons + live Q&A with Simon</li>
        </ul>
      </div>
    </div>
  );
}
