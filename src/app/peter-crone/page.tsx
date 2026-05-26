import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clip } from "@/lib/clip";

const format = [
  ["Camera", "Just his phone"],
  ["Framing", "Close-up on his face. Feels like he's talking to you."],
  ["Lighting", "Natural light. Nothing fancy."],
  ["Background", "Plain wall or outdoors"],
  ["Length", "30-90 seconds"],
  ["Editing", "Almost none. Sometimes a slow zoom."],
  ["Text", "His name and title at the bottom"],
  ["Subtitles", "Yes, always on screen"],
  ["Audio", "Just his voice. Quiet, almost a whisper."],
  ["What he wears", "Plain dark t-shirt. Relaxed, calm."],
  ["How it starts", "Opens with a question that makes you stop scrolling"],
  ["Caption", "'Save this and come back to it'"],
];

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 pb-20">
      <div className="flex items-start gap-5 mb-10">
        <img src="/coaches/peter.jpg" alt="Peter Crone" className="w-20 h-20 rounded-2xl object-cover shrink-0" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Peter Crone</h1>
          <p className="text-muted-foreground text-sm mt-1">@petercrone &middot; The Mind Architect</p>
          <div className="flex gap-2 mt-2">
            <Badge variant="secondary">1M followers</Badge>
            <Badge className="bg-emerald-50 text-emerald-600 border-0">4.5% engagement</Badge>
            <Badge variant="secondary">940 posts</Badge>
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

      <h2 className="text-xl font-bold mb-6">His clips</h2>
      <div className="space-y-12">
        <Clip
          url="https://www.instagram.com/p/DXCtPU0D1Bm/"
          opener="Who could you be in the absence of your concerns?"
          subtitle="14.3K likes"
          explanation="His signature question. Caption asks people to save the post and come back to it later. Drives reflection, not reaction."
        />
      </div>

      <h2 className="text-xl font-bold mt-12 mb-3">Links in bio → layered funnel</h2>
      <div className="text-sm space-y-3">
        <Card className="border-border/50"><CardContent className="p-4">
          <Badge className="bg-green-100 text-green-700 border-0 mb-1">Free</Badge>
          <p className="text-muted-foreground"><a href="https://www.petercrone.com/gifts" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">3 mini-courses</a> (manifestation, stress, listening) + 11-day email sequence</p>
        </CardContent></Card>
        <Card className="border-border/50"><CardContent className="p-4">
          <Badge className="bg-blue-100 text-blue-700 border-0 mb-1">$29/mo</Badge>
          <p className="text-muted-foreground"><a href="https://www.petercrone.com/freedom" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Freedom Membership</a>: courses, workshops, monthly live calls, community</p>
        </CardContent></Card>
        <Card className="border-border/50"><CardContent className="p-4">
          <Badge className="bg-purple-100 text-purple-700 border-0 mb-1">$5,400</Badge>
          <p className="text-muted-foreground"><a href="https://www.petercrone.com/mastermind" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">The Mastermind</a>: 3 months, 8 live modules, workbooks, mentor calls</p>
        </CardContent></Card>
        <Card className="border-border/50"><CardContent className="p-4">
          <Badge className="bg-amber-100 text-amber-700 border-0 mb-1">$2,297</Badge>
          <p className="text-muted-foreground"><a href="https://www.petercrone.com/mm-retreat" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Malibu Retreat</a>, alumni only. Must complete mastermind first.</p>
        </CardContent></Card>
      </div>
    </div>
  );
}
