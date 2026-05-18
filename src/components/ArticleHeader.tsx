interface ArticleHeaderProps {
  category: string;
  readTime: string;
  headline: string;
  standfirst: string;
  date: string;
  heroEmoji?: string;
  heroGradient?: string;
}

export default function ArticleHeader({
  category, readTime, headline, standfirst, date,
}: ArticleHeaderProps) {
  return (
    <header className="mb-10 pb-8 border-b border-gray-200">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#0F6E56]">{category}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span className="text-[12px] text-gray-400">{date}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span className="text-[12px] text-gray-400">{readTime} read</span>
      </div>

      <div className="border-l-4 border-[#0F6E56] pl-5 mb-6">
        <h1
          className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)", letterSpacing: "-0.01em" }}
        >
          {headline}
        </h1>
      </div>

      <p
        className="text-xl text-gray-600 leading-relaxed mb-6 max-w-2xl"
        style={{ fontFamily: "var(--font-source-serif, Georgia, serif)", fontWeight: 300 }}
      >
        {standfirst}
      </p>

      <div className="flex items-center gap-3 text-sm text-gray-500">
        <span>By the editorial team at WeightLossInjections.ca</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span>Medically reviewed</span>
      </div>
    </header>
  );
}
