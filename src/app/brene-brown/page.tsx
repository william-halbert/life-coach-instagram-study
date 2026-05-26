import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Embed } from "@/lib/embed";

const format = [
  ["Camera", "2-camera podcast setup. Seated, eye-level. Cuts between her and guest."],
  ["Framing", "Chest-up close shot. Standard podcast framing."],
  ["Lighting", "Soft warm studio lights. 3-point setup, not ring light."],
  ["Background", "Styled bookshelf, cozy podcast set. Warm, slightly blurred."],
  ["Length", "30-90 sec. One moment pulled from a 60-min episode."],
  ["Editing", "Almost zero. Cuts between speakers. No jump cuts, no effects."],
  ["Text overlay", "Small episode title bar at bottom. No big text hooks on screen."],
  ["Subtitles", "White text on screen so people can read without sound."],
  ["Audio", "Original voice only. Zero music. Zero trending sounds."],
  ["Appearance", "T-shirt, glasses, natural hair. 'Real person at a table.'"],
  ["First 3 sec", "Drops in MID-SENTENCE at the surprising part. No intro."],
  ["CTA", "Caption: 'full episode at link in bio.' No DM automation."],
];

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 pb-20">
      {/* Header */}
      <div className="flex items-start gap-5 mb-10">
        <img src="/coaches/brene.jpg" alt="Brene Brown" className="w-20 h-20 rounded-2xl object-cover shrink-0" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Brene Brown</h1>
          <p className="text-muted-foreground text-sm mt-1">@brenebrown &middot; Researcher. Storyteller. Texan.</p>
          <div className="flex gap-2 mt-2">
            <Badge variant="secondary">5.2M followers</Badge>
            <Badge variant="secondary">0.59% engagement</Badge>
            <Badge variant="secondary">1,134 posts</Badge>
          </div>
        </div>
      </div>

      {/* Copy instructions. TOP, not bottom */}
      <Card className="bg-violet-50 border-violet-200 mb-10">
        <CardContent className="p-6">
          <h2 className="font-bold text-lg mb-3">How to copy this format</h2>
          <ol className="space-y-2 text-sm">
            <li><strong>1.</strong> Record a long conversation (conversation, coaching call, or talk)</li>
            <li><strong>2.</strong> Find the single most surprising 30-90 second moment</li>
            <li><strong>3.</strong> Cut it so it starts MID-SENTENCE at the surprising part</li>
            <li><strong>4.</strong> Add subtitles. Small title bar at bottom. Nothing else.</li>
            <li><strong>5.</strong> Caption: context + &ldquo;full episode at link in bio&rdquo;</li>
            <li><strong>6.</strong> No music. No effects. No transitions. Conversation IS the content.</li>
          </ol>
        </CardContent>
      </Card>

      {/* Format grid */}
      <h2 className="text-xl font-bold mb-4">Video format breakdown</h2>
      <div className="grid sm:grid-cols-2 gap-3 mb-12">
        {format.map(([label, desc]) => (
          <Card key={label} className="border-border/50">
            <CardContent className="p-4">
              <p className="text-[11px] uppercase tracking-widest text-violet-500 font-semibold">{label}</p>
              <p className="text-sm mt-1 text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reels */}
      <h2 className="text-xl font-bold mb-2">Top reels</h2>
      <p className="text-muted-foreground text-sm mb-6">Watch these to see the format in action.</p>

      <div className="space-y-10">
        <div>
          <h3 className="font-semibold">&ldquo;Protect the Flame&rdquo;, 266K likes</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Candle metaphor. Everyone thinks of a specific person → DM share → viral.
          </p>
          <Embed url="https://www.instagram.com/reel/CcjD8t7OJ7U/" note="266K likes, one metaphor, universal recognition" />
        </div>
        <div>
          <h3 className="font-semibold">&ldquo;Joy can cause relapse&rdquo;. Adam Grant</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Counterintuitive hook. Starts mid-conversation at the surprise. No intro.
          </p>
          <Embed url="https://www.instagram.com/reel/DYnNRRTz0eW/" note="Conversation clip, counterintuitive finding drives shares" />
        </div>
        <div>
          <h3 className="font-semibold">Atlas of the Heart teaser. 121K likes</h3>
          <p className="text-sm text-muted-foreground mt-1">
            &ldquo;Been working on something special.&rdquo; Anticipation from trusted source.
          </p>
          <Embed url="https://www.instagram.com/reel/Ca5GwE3poLv/" note="Simple tease + date = anticipation engine" />
        </div>
      </div>

      {/* Links */}
      <h2 className="text-xl font-bold mt-12 mb-3">Links in bio</h2>
      <p className="text-sm text-muted-foreground">
        Links to <a href="https://brenebrown.com/linkinprofile/" target="_blank" rel="noopener noreferrer" className="text-violet-600 underline">brenebrown.com/linkinprofile</a> which pushes one thing: her <a href="https://brenebrown.com/email/" target="_blank" rel="noopener noreferrer" className="text-violet-600 underline">email newsletter</a>.
        No courses, no lead magnets, no paid funnels. She monetizes through books, Netflix, HBO specials, and speaking. not Instagram.
      </p>
    </div>
  );
}
