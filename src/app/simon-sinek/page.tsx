import { Badge } from "@/components/ui/badge";
import { Clip } from "@/lib/clip";

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

      <h2 className="text-xl font-bold mb-6">His clips</h2>
      <div className="space-y-12">
        <Clip
          url="https://www.instagram.com/reel/DXO9e3JAeaK/"
          opener="Friendship is a foundation, not a luxury"
          subtitle="37.8K likes"
          explanation="One sentence that reframes something everyone knows. Universal topic. People share it because it feels true."
        />
        <Clip
          url="https://www.instagram.com/reel/DYhyaMku_gO/"
          opener="We used to accidentally get good at being human"
          subtitle="14.2K likes, 407 comments"
          explanation="Conversation with Vanessa Van Edwards. Caption says 'Comment collisions and I'll DM you the episode.' That one line doubled his comments."
        />
        <Clip
          url="https://www.instagram.com/reel/DYpTFvuCvba/"
          opener="We are not present until others say we are"
          subtitle="12K likes"
          explanation="Counterintuitive idea that makes you stop and think. The kind of thing people screenshot and send to a friend."
        />
      </div>

      <h2 className="text-xl font-bold mt-12 mb-3">Links in bio → course funnel</h2>
      <div className="text-sm text-muted-foreground space-y-2">
        <p>Every reel maps to a paid course. The free content IS the sales pitch:</p>
        <ul className="space-y-1 ml-4 list-disc">
          <li><a href="https://simonsinek.com/product/find-your-why" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Find Your WHY</a> $129</li>
          <li><a href="https://simonsinek.com/product/unleash-your-infinite-mindset" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Infinite Mindset</a> $129</li>
          <li><a href="https://simonsinek.com/product/the-art-of-presenting" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Art of Presenting</a> $129</li>
          <li><strong>All-access: $24.99/mo</strong></li>
        </ul>
      </div>
    </div>
  );
}
