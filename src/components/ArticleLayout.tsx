import PartnersSidebar from "./PartnersSidebar";
import Link from "next/link";

interface RelatedArticle {
  href: string;
  title: string;
  emoji: React.ReactNode;
  date: string;
}

interface ArticleLayoutProps {
  children: React.ReactNode;
  toc?: { id: string; label: string }[];
  related?: RelatedArticle[];
}

export default function ArticleLayout({ children, toc, related }: ArticleLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14 items-start">
      <article className="min-w-0">{children}</article>
      <aside className="lg:sticky lg:top-20 flex flex-col gap-6">
        <PartnersSidebar />
        {toc && toc.length > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="text-[10.5px] font-bold uppercase tracking-widest text-gray-600 mb-3 pb-2.5 border-b border-gray-200">In This Article</p>
            <ul className="space-y-1">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block text-[13px] text-gray-800 hover:text-[#1B3A6B] py-1 pl-3 border-l-2 border-transparent hover:border-[#2D5FA8] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {related && related.length > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="text-[10.5px] font-bold uppercase tracking-widest text-gray-600 mb-3 pb-2.5 border-b border-gray-200">Related Articles</p>
            <div className="space-y-4">
              {related.map((r) => (
                <Link key={r.href} href={r.href} className="flex gap-3 group">
                  <div className="w-12 h-12 rounded-lg bg-[#E8EFFF] flex items-center justify-center text-xl shrink-0">{r.emoji}</div>
                  <div>
                    <p className="text-[13px] font-medium text-gray-900 leading-snug group-hover:text-[#1B3A6B] transition-colors">{r.title}</p>
                    <p className="text-[11px] text-gray-600 mt-0.5">{r.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
