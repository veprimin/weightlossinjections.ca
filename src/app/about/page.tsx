import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About WeightLossInjections.ca - Editorial Standards & Methodology",
  description:
    "Learn about WeightLossInjections.ca - Canada's independent editorial guide to GLP-1 medications. Our editorial standards, research methodology, and affiliate disclosures.",
  alternates: {
    canonical: `${SITE_URL}/about`,
    languages: { "en-CA": `${SITE_URL}/about`, "x-default": `${SITE_URL}/about` },
  },
};

const toc = [
  { id: "mission",            label: "Our Mission" },
  { id: "what-we-cover",      label: "What We Cover" },
  { id: "editorial-standards", label: "Editorial Standards" },
  { id: "how-we-make-money",  label: "How We Make Money" },
  { id: "data-sources",       label: "Data Sources" },
];

const related = [
  { href: "/disclaimer",        emoji: "📄", title: "Medical Disclaimer",                        date: "May 2026" },
  { href: "/insurance-coverage", emoji: "🛡️", title: "Insurance Coverage Guide",                date: "May 2026" },
  { href: "/cost",              emoji: "💰", title: "Province-by-Province Cost Breakdown",        date: "May 2026" },
  { href: "/semaglutide",       emoji: "💉", title: "Semaglutide (Ozempic & Wegovy) Guide",      date: "May 2026" },
];

export default function AboutPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="About This Site"
        readTime="4 min read"
        date="May 2026"
        headline="About WeightLossInjections.ca"
        standfirst="An independent Canadian editorial resource for GLP-1 medication information - coverage, cost, and access."
        heroEmoji="📰"
        heroGradient="linear-gradient(135deg,#1B3A6B,#2D5FA8)"
      />

      <div className="prose-editorial">

        <h2 id="mission">Our Mission</h2>
        <p>
          WeightLossInjections.ca exists to provide independent, accurate, and practically useful information for Canadians navigating the confusing landscape of GLP-1 medications. These are powerful medicines with a genuine evidence base - but the information environment around them is noisy, often commercial, and frequently out of date.
        </p>
        <p>
          We are not affiliated with any pharmaceutical manufacturer. We do not receive editorial direction from Novo Nordisk, Eli Lilly, or any other drug company. Our only goal is to help Canadians understand what these medications are, what the evidence says, what they cost, and how to access them through legitimate, licensed channels.
        </p>

        <h2 id="what-we-cover">What We Cover</h2>
        <p>
          Our editorial coverage focuses on the GLP-1 medications most relevant to Canadian patients:
        </p>
        <ul>
          <li><strong>Ozempic and Wegovy</strong> (semaglutide) - including the new Canadian generics Plosbrio and Poviztra</li>
          <li><strong>Mounjaro</strong> (tirzepatide) - Health Canada approved for diabetes, widely prescribed off-label for weight management</li>
          <li><strong>Rybelsus</strong> (oral semaglutide) - for patients who prefer tablets to injections</li>
          <li><strong>Saxenda</strong> (liraglutide) - the first GLP-1 approved for weight management in Canada, now largely superseded by newer options</li>
          <li><strong>Provincial drug coverage</strong> across all nine provinces where Felix Health operates: AB, BC, MB, NB, NL, NS, ON, PE, SK</li>
          <li><strong>Insurance coverage</strong> - both provincial drug plans and private employer benefits</li>
          <li><strong>How to access prescriptions</strong> - through traditional primary care and through virtual care</li>
        </ul>
        <p>
          We do not cover Quebec (where our affiliate does not operate) or Canadian territories.
        </p>

        <FelixInline />

        <h2 id="editorial-standards">Editorial Standards</h2>
        <p>
          All content on WeightLossInjections.ca is written with the goal of clinical accuracy. We hold ourselves to the following standards:
        </p>
        <ul>
          <li><strong>Primary sources first:</strong> We cite provincial drug plan formularies directly, Health Canada drug approval notices, and published peer-reviewed clinical trial data. We do not rely on press releases or manufacturer summaries as authoritative sources.</li>
          <li><strong>Named uncertainty:</strong> Where evidence is incomplete or evolving - for example, around long-term outcomes of newer medications - we say so explicitly rather than overstating certainty.</li>
          <li><strong>No editorial direction from sponsors:</strong> Our commercial relationship with Felix Health (see below) does not influence the content of any article. If Felix does not serve a particular province or does not prescribe a particular medication, we say so.</li>
          <li><strong>Regular updates:</strong> Drug approvals, formulary changes, and pricing shift frequently. We update articles when material changes occur, with the date noted in each article header.</li>
          <li><strong>No medical advice:</strong> We provide information, not medical advice. Every article includes a clear disclaimer and a recommendation to consult a licensed healthcare provider.</li>
        </ul>

        <h2 id="how-we-make-money">How We Make Money</h2>
        <p>
          WeightLossInjections.ca earns revenue through affiliate commissions. When a reader clicks through to Felix Health via our links and completes a consultation, we receive a commission payment from Felix. This is how we sustain the editorial operation.
        </p>
        <p>
          We are transparent about this relationship for several reasons. First, it is legally required under Canadian advertising standards. Second, it is the right thing to do. Third, we believe transparency builds rather than undermines trust.
        </p>
        <p>
          All affiliate links on the site are marked with <code>rel="sponsored"</code> in the HTML and are clearly labelled in the visible text. We do not accept payment for editorial coverage, do not publish advertorials without prominent labelling, and do not adjust editorial conclusions based on commercial considerations.
        </p>
        <p>
          Felix Health and Direct Meds are our current commercial partners. We have no financial relationship with Novo Nordisk, Eli Lilly, Apotex, Dr. Reddy's, or any other pharmaceutical company.
        </p>

        <h2 id="data-sources">Our Data Sources</h2>
        <p>
          We draw on the following primary sources when researching and writing our content:
        </p>
        <ul>
          <li><strong>Health Canada drug database</strong> - for drug approvals, indications, and safety information</li>
          <li><strong>Ontario Drug Benefit formulary</strong> - for Ontario coverage and prior authorization criteria</li>
          <li><strong>BC PharmaCare drug plan</strong> - for British Columbia coverage</li>
          <li><strong>Alberta Blue Cross</strong> provincial drug benefit formulary</li>
          <li><strong>Other provincial formularies</strong> - Manitoba Pharmacare, New Brunswick Drug Plan, Nova Scotia Formulary, etc.</li>
          <li><strong>SUSTAIN trial series</strong> - pivotal semaglutide diabetes trials (NEJM, Lancet)</li>
          <li><strong>STEP trial series</strong> - pivotal semaglutide weight management trials (NEJM)</li>
          <li><strong>SELECT cardiovascular outcomes trial</strong> (2023) - semaglutide and cardiovascular risk reduction</li>
          <li><strong>SURMOUNT trial series</strong> - pivotal tirzepatide weight management trials</li>
          <li><strong>Novo Nordisk Care Rx program</strong> documentation</li>
        </ul>
        <p>
          For corrections or feedback on specific clinical claims, please use the contact information below.
        </p>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">Contact</p>
          <p className="text-sm text-black">
            For factual corrections or editorial feedback, please reach out via our{" "}
            email at{" "}
            <a href="mailto:editorial@weightlossinjections.ca">editorial@weightlossinjections.ca</a>.
            We take accuracy seriously and will update content promptly when corrections are warranted.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-black leading-relaxed">
          <strong>Medical disclaimer:</strong> Content on WeightLossInjections.ca is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. GLP-1 medications require a valid prescription from a licensed Canadian healthcare provider. Always consult a qualified clinician before starting, changing, or stopping any medication. See our full <Link href="/disclaimer">medical disclaimer</Link>.
        </div>
      </div>
    </ArticleLayout>
  );
}
