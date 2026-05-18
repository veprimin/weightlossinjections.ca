interface ArticleHeaderProps {
  category: string;
  readTime: string;
  headline: string;
  standfirst: string;
  date: string;
  heroEmoji: string;
  heroGradient?: string;
}

export default function ArticleHeader({
  category, readTime, headline, standfirst, date, heroEmoji,
  heroGradient = "linear-gradient(135deg,#0F6E56,#2DB88A)",
}: ArticleHeaderProps) {
  return (
    <>
      <header className="mb-8 pb-8 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-[#E1F5EE] text-[#0F6E56] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs text-gray-400">{date} · {readTime}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: "Georgia, serif" }}>
          {headline}
        </h1>
        <p className="text-xl font-light text-gray-600 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
          {standfirst}
        </p>
        <div className="flex items-center gap-3 mt-5">
          <div className="w-9 h-9 rounded-full bg-[#E1F5EE] flex items-center justify-center text-base">✍️</div>
          <div>
            <p className="text-sm font-medium text-gray-900">Editorial Team, WeightLossInjections.ca</p>
            <p className="text-xs text-gray-400">Medically reviewed · Updated regularly</p>
          </div>
        </div>
      </header>

      {/* Hero image placeholder */}
      <div className="w-full h-64 sm:h-80 rounded-2xl flex items-center justify-center text-6xl mb-3" style={{ background: heroGradient }}>
        {heroEmoji}
      </div>
    </>
  );
}
