import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Embed } from "@/lib/embed";

const format = [
  ["Camera", "Podcast studio, 2+ cameras. Professional but warm. Close-up of her face and guest."],
  ["Framing", "Tight on face when she's making a point. Wider 2-shot during conversation."],
  ["Lighting", "Studio lighting, clean and bright, not moody, energetic and clear."],
  ["Background", "Branded podcast set. Clean, modern, well-lit. Consistent every episode."],
  ["Length", "30-60 sec clips from full episodes. Pulled at the most hook-worthy moment."],
  ["Editing", "Quick cuts between her and guest. Zoom-ins on key lines. More edited than others."],
  ["Text overlay", "Episode title, guest name, topic, all on screen. Bold, clear, readable."],
  ["Subtitles", "Burned-in, large, bold text. Easy to read with sound off."],
  ["Audio", "Original voice. Sometimes light background music bed. No trending sounds."],
  ["Appearance", "Casual chic, fitted top, natural makeup, expressive face. High energy."],
  ["First 3 sec", "SHOCKING stat or bold claim. 'This statistic will leave you SHOCKED.'"],
  ["CTA", "'Comment [WORD] and I'll DM you the link.' Every single conversation clip."],
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

      <Card className="bg-blue-50 border-blue-200 mb-10">
        <CardContent className="p-6">
          <h2 className="font-bold text-lg mb-3">How to copy this format</h2>
          <ol className="space-y-2 text-sm">
            <li><strong>1.</strong> Have a conversation with someone credible (doctor, author, researcher)</li>
            <li><strong>2.</strong> Pull the most surprising stat or claim. 30-60 seconds</li>
            <li><strong>3.</strong> Open with the SHOCK: &ldquo;This stat will blow your mind&rdquo;</li>
            <li><strong>4.</strong> Bold burned-in subtitles + guest name + episode title on screen</li>
            <li><strong>5.</strong> Caption: &ldquo;Comment [WORD] and I&rsquo;ll DM you the full episode&rdquo;</li>
            <li><strong>6.</strong> Test concepts as clips FIRST → turn winners into books/products</li>
          </ol>
        </CardContent>
      </Card>

      <h2 className="text-xl font-bold mb-4">Video format breakdown</h2>
      <div className="grid sm:grid-cols-2 gap-3 mb-12">
        {format.map(([label, desc]) => (
          <Card key={label} className="border-border/50">
            <CardContent className="p-4">
              <p className="text-[11px] uppercase tracking-widest text-blue-500 font-semibold">{label}</p>
              <p className="text-sm mt-1 text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-2">Top reels</h2>
      <p className="text-muted-foreground text-sm mb-6">Watch for: expert guest, health hook, comment trigger.</p>

      <div className="space-y-10">
        <div>
          <h3 className="font-semibold">Dr. Gabor Mate. trauma &amp; autoimmune. 897K likes</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Her biggest ever. Health fear hook + world-class guest + &ldquo;SHOCKED&rdquo; language.
            897K likes on 12.3M followers = 7.3% like rate. Monster.
          </p>
          <Embed url="https://www.instagram.com/reel/DCnA8hTudUX/" note="897K likes, health fear + expert guest = her formula at peak" />
        </div>
        <div>
          <h3 className="font-semibold">&ldquo;You&rsquo;re not lazy&rdquo;. rest with Jim Kwik. 80.8K likes</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Permission-giving hook. &ldquo;Comment REST and I&rsquo;ll DM you.&rdquo; Anti-hustle message.
          </p>
          <Embed url="https://www.instagram.com/reel/DX3O5g7jKVm/" note="80.8K likes, permission + comment trigger = high engagement" />
        </div>
        <div>
          <h3 className="font-semibold">Menopause with Dr. Vonda Wright. 27.2K likes, 1.9K comments</h3>
          <p className="text-sm text-muted-foreground mt-1">
            &ldquo;Comment Vonda.&rdquo; 1.9K comments on 27K likes = 7% comment ratio. CTA drove it.
          </p>
          <Embed url="https://www.instagram.com/reel/DYgJEi3DPs9/" note="Keyword CTA 'Comment Vonda' drove massive comment count" />
        </div>
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
