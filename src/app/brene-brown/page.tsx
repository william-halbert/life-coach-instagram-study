import { Badge } from "@/components/ui/badge";
import { Clip } from "@/lib/clip";

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
      <div className="flex items-start gap-5 mb-10">
        <img src="/coaches/brene.jpg" alt="Brene Brown" className="w-20 h-20 rounded-2xl object-cover shrink-0" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Brene Brown</h1>
          <p className="text-muted-foreground text-sm mt-1">@brenebrown &middot; Researcher. Storyteller. Texan.</p>
          <div className="flex gap-2 mt-2">
            <Badge variant="secondary">5.2M followers</Badge>
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

      <h2 className="text-xl font-bold mb-6">Her clips</h2>
      <div className="space-y-12">
        <Clip
          url="https://www.instagram.com/reel/CcjD8t7OJ7U/"
          opener="Protect the flame"
          subtitle="266K likes"
          explanation="Simple candle metaphor. Some people protect your flame, others blow it out. Everyone thinks of someone specific and sends it to them."
        />
        <Clip
          url="https://www.instagram.com/reel/DYnNRRTz0eW/"
          opener="Intensely joyful experiences can cause relapse"
          subtitle="With Adam Grant"
          explanation="Counterintuitive finding from her research. Starts mid-conversation at the surprising part. No intro, no setup."
        />
      </div>

      <h2 className="text-xl font-bold mt-12 mb-3">Links in bio</h2>
      <p className="text-sm text-muted-foreground">
        Links to <a href="https://brenebrown.com/linkinprofile/" target="_blank" rel="noopener noreferrer" className="text-violet-600 underline">brenebrown.com/linkinprofile</a> which pushes one thing: her <a href="https://brenebrown.com/email/" target="_blank" rel="noopener noreferrer" className="text-violet-600 underline">email newsletter</a>.
        No courses, no lead magnets, no paid funnels.
      </p>
    </div>
  );
}
