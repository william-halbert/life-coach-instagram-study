import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clip } from "@/lib/clip";

const format = [
  ["Camera", "Two people in a studio"],
  ["Framing", "Close-up on faces during key moments"],
  ["Lighting", "Bright, clean, energetic"],
  ["Background", "Her studio set. Same every time."],
  ["Length", "30-60 seconds"],
  ["Editing", "Quick cuts between her and guest. Zoom on key lines."],
  ["Text", "Episode title, guest name, topic on screen"],
  ["Subtitles", "Yes, large and bold"],
  ["Audio", "Their voices. Sometimes light music underneath."],
  ["What she wears", "Casual, natural makeup, high energy"],
  ["How it starts", "A surprising fact or bold claim"],
  ["Caption", "'Comment [WORD] and I'll DM you the link'"],
];

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 pb-20">
      <div className="flex items-start gap-5 mb-10">
        <img src="/coaches/mel.jpg" alt="Mel Robbins" className="w-20 h-20 rounded-2xl object-cover shrink-0" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mel Robbins</h1>
          <p className="text-muted-foreground text-sm mt-1">@melrobbins &middot; Host of #1 podcast &middot; Author of Let Them Theory</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="secondary">12.3M followers</Badge>
            <Badge variant="secondary">~1.5% engagement</Badge>
            <Badge variant="secondary">9,314 posts</Badge>
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
          url="https://www.instagram.com/reel/DCnA8hTudUX/"
          opener="This statistic about women and autoimmune diseases will leave you shocked"
          subtitle="897K likes"
          explanation="Her biggest ever. Surprising health fact from a famous expert. Opens with something that makes you need to keep watching."
        />
        <Clip
          url="https://www.instagram.com/reel/DX3O5g7jKVm/"
          opener="You're not lazy"
          subtitle="80.8K likes"
          explanation="Gives people permission to rest. Caption says 'Comment REST and I'll DM you the episode.' That one line doubled her comments."
        />
        <Clip
          url="https://www.instagram.com/reel/DYgJEi3DPs9/"
          opener="Menopause is not something you need to suffer through"
          subtitle="27.2K likes, 1.9K comments"
          explanation="Talks about something most people avoid. Caption says 'Comment Vonda.' Almost 2,000 people commented that one word."
        />
      </div>

      <h2 className="text-xl font-bold mt-12 mb-3">What she sells</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Unlike the other coaches, no courses, no memberships, no 1:1 coaching. She&rsquo;s a media company.
      </p>
      <div className="space-y-3">
        <Card className="border-border/50"><CardContent className="p-4">
          <Badge className="bg-blue-100 text-blue-700 border-0 mb-1">Books</Badge>
          <p className="text-sm text-muted-foreground">
            <a href="https://www.melrobbins.com/book/the-let-them-theory/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">The Let Them Theory</a>, 9M+ copies, #1 every week of 2025. Also: 5 Second Rule, High 5 Habit.
          </p>
        </CardContent></Card>
        <Card className="border-border/50"><CardContent className="p-4">
          <Badge className="bg-purple-100 text-purple-700 border-0 mb-1">Podcast</Badge>
          <p className="text-sm text-muted-foreground">The Mel Robbins Podcast, #1 most-followed on Apple. Golden Globe nominated. Ad revenue at massive scale.</p>
        </CardContent></Card>
        <Card className="border-border/50"><CardContent className="p-4">
          <Badge className="bg-amber-100 text-amber-700 border-0 mb-1">Product</Badge>
          <p className="text-sm text-muted-foreground">Pure Genius Protein, co-founded CPG brand. Sold out 5x in 3 months. Now in Target nationwide.</p>
        </CardContent></Card>
      </div>
    </div>
  );
}
