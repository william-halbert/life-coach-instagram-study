import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Embed } from "@/lib/embed";

const format = [
  ["Camera", "Two people sitting across from each other"],
  ["Framing", "Close-up, chest and above"],
  ["Lighting", "Soft, warm, studio-quality"],
  ["Background", "Bookshelf or cozy room"],
  ["Length", "30-90 seconds"],
  ["Editing", "Almost none. Just cuts between speakers."],
  ["Text", "Small title bar at the bottom"],
  ["Subtitles", "Yes, always on screen"],
  ["Audio", "Just their voices. No music."],
  ["What she wears", "T-shirt, glasses, natural hair"],
  ["How it starts", "Mid-sentence at the surprising part. No intro."],
  ["Caption", "'Full episode at link in bio'"],
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

      <h2 className="text-xl font-bold mb-4">How she does it</h2>
      <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-sm mb-12">
        {format.map(([label, desc]) => (
          <>
            <span key={label + "l"} className="text-muted-foreground font-medium">{label}</span>
            <span key={label + "d"}>{desc}</span>
          </>
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
