import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Embed } from "@/lib/embed";

const format = [
  ["Camera", "Phone or single camera. Direct-to-camera solo. Interview-style for coaching."],
  ["Framing", "Close-up face, head-and-shoulders. Intimate. Feels like he's talking TO you."],
  ["Lighting", "Natural or soft indoor. Not studio-grade. Warm, slightly imperfect."],
  ["Background", "Plain wall, outdoor, or event stage. Nothing distracting."],
  ["Length", "30–90 sec. Live coaching clips can run 60–90 sec."],
  ["Editing", "Minimal. Sometimes slow zoom on key moment. No jump cuts."],
  ["Text overlay", "Name + 'The Mind Architect' lower third. Sometimes question as text."],
  ["Subtitles", "Burned-in white captions. Standard placement."],
  ["Audio", "Original voice. No music. Quiet intimate delivery, almost a whisper."],
  ["Appearance", "Plain dark t-shirt, relaxed, calm. Nothing flashy. Energy IS the brand."],
  ["First 3 sec", "Opens with THE QUESTION: 'Who could you be in the absence of your concerns?'"],
  ["CTA", "'SAVE this post and come back to it.' Asks for saves, not likes or comments."],
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

      <Card className="bg-emerald-50 border-emerald-200 mb-10">
        <CardContent className="p-6">
          <h2 className="font-bold text-lg mb-3">How to copy this format</h2>
          <ol className="space-y-2 text-sm">
            <li><strong>1.</strong> Develop ONE signature question that reframes identity</li>
            <li><strong>2.</strong> Film direct-to-camera, close-up, natural light, plain background</li>
            <li><strong>3.</strong> Speak quietly and intimately — thoughtful, not motivational</li>
            <li><strong>4.</strong> Open with the question in first 3 seconds</li>
            <li><strong>5.</strong> Caption: ask people to SAVE the post and come back to it</li>
            <li><strong>6.</strong> Film live coaching sessions → clip the breakthrough moments</li>
            <li><strong>7.</strong> Funnel: free gift &rarr; $29/mo membership &rarr; $5,400 mastermind</li>
          </ol>
        </CardContent>
      </Card>

      <Card className="bg-emerald-50/50 border-emerald-100 mb-10">
        <CardContent className="p-6">
          <h2 className="font-bold text-lg mb-2">Why his engagement is 4.5% at 1M followers</h2>
          <p className="text-sm text-muted-foreground mb-3">Brene gets 0.59% at 5.2M. Simon gets 1.25% at 4.9M. Peter gets 4.5% at 1M — 3.6x Simon, 7.6x Brene.</p>
          <ul className="text-sm space-y-1.5">
            <li><strong>Questions &gt; statements.</strong> Questions trigger response. Statements trigger scroll.</li>
            <li><strong>Live breakthroughs are unwatchable-to-stop.</strong> Real person, real shift, real emotion.</li>
            <li><strong>Save CTA &gt; like CTA.</strong> Saves = higher algo signal than likes.</li>
            <li><strong>Paying members engage on free content too.</strong> $29/mo community boosts everything.</li>
          </ul>
        </CardContent>
      </Card>

      <h2 className="text-xl font-bold mb-4">Video format breakdown</h2>
      <div className="grid sm:grid-cols-2 gap-3 mb-12">
        {format.map(([label, desc]) => (
          <Card key={label} className="border-border/50">
            <CardContent className="p-4">
              <p className="text-[11px] uppercase tracking-widest text-emerald-500 font-semibold">{label}</p>
              <p className="text-sm mt-1 text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-2">Top reel</h2>
      <div>
        <h3 className="font-semibold">&ldquo;Who could you be in the absence of your concerns?&rdquo; — 14.3K likes</h3>
        <p className="text-sm text-muted-foreground mt-1">
          His signature question. Save CTA in caption. Drives reflection, not reaction.
        </p>
        <Embed url="https://www.instagram.com/p/DXCtPU0D1Bm/" note="Direct-to-camera question + save CTA = high engagement" />
      </div>

      <h2 className="text-xl font-bold mt-12 mb-3">Links in bio &rarr; layered funnel</h2>
      <div className="text-sm space-y-3">
        <Card className="border-border/50"><CardContent className="p-4">
          <Badge className="bg-green-100 text-green-700 border-0 mb-1">Free</Badge>
          <p className="text-muted-foreground"><a href="https://www.petercrone.com/gifts" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">3 mini-courses</a> (manifestation, stress, listening) + 11-day email sequence</p>
        </CardContent></Card>
        <Card className="border-border/50"><CardContent className="p-4">
          <Badge className="bg-blue-100 text-blue-700 border-0 mb-1">$29/mo</Badge>
          <p className="text-muted-foreground"><a href="https://www.petercrone.com/freedom" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Freedom Membership</a> — courses, workshops, monthly live calls, community</p>
        </CardContent></Card>
        <Card className="border-border/50"><CardContent className="p-4">
          <Badge className="bg-purple-100 text-purple-700 border-0 mb-1">$5,400</Badge>
          <p className="text-muted-foreground"><a href="https://www.petercrone.com/mastermind" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">The Mastermind</a> — 3 months, 8 live modules, workbooks, mentor calls</p>
        </CardContent></Card>
        <Card className="border-border/50"><CardContent className="p-4">
          <Badge className="bg-amber-100 text-amber-700 border-0 mb-1">$2,297</Badge>
          <p className="text-muted-foreground"><a href="https://www.petercrone.com/mm-retreat" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Malibu Retreat</a> — alumni only. Must complete mastermind first.</p>
        </CardContent></Card>
      </div>
    </div>
  );
}
