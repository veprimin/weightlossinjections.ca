import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { FelixInline } from "@/components/FelixAd";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "GLP-1 Dosing Guide Canada - Ozempic, Wegovy, Mounjaro Titration Schedules 2025",
  description: "Complete dosing and titration schedules for Ozempic, Wegovy, Mounjaro, and Rybelsus in Canada. How to start, titrate, and what to do if you miss a dose.",
  alternates: {
    canonical: `${SITE_URL}/dosing`,
    languages: { "en-CA": `${SITE_URL}/dosing` },
  },
};

const toc = [
  { id: "why-titration",  label: "Why Titration Matters" },
  { id: "ozempic",        label: "Ozempic Dosing" },
  { id: "wegovy",         label: "Wegovy Dosing" },
  { id: "mounjaro",       label: "Mounjaro Dosing" },
  { id: "rybelsus",       label: "Rybelsus Dosing" },
  { id: "injection",      label: "Injection & Storage" },
];

const related = [
  { href: "/side-effects", emoji: "⚕️", title: "GLP-1 Side Effects Guide",         date: "May 2026" },
  { href: "/semaglutide",  emoji: "💉", title: "Complete Semaglutide Guide",        date: "May 2026" },
  { href: "/tirzepatide",  emoji: "🔬", title: "Mounjaro: Tirzepatide Guide",       date: "May 2026" },
  { href: "/compare",      emoji: "⚖️", title: "Drug Comparison Table",            date: "May 2026" },
];

function DosingTable({ rows, headers }: { rows: string[][]; headers: string[] }) {
  return (
    <div className="not-prose overflow-x-auto my-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr style={{ background: "#1B3A6B" }}>
            {headers.map((h) => (
              <th key={h} className="text-left px-4 py-3 text-white font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 text-black ${j === 0 ? "font-medium" : ""}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DosingPage() {
  return (
    <ArticleLayout toc={toc} related={related}>
      <ArticleHeader
        category="Reference Guide"
        readTime="6 min read"
        date="May 2026"
        headline="GLP-1 Dosing Schedules: Ozempic, Wegovy, Mounjaro & Rybelsus"
        standfirst="GLP-1 medications use a slow titration schedule to minimize side effects. Understanding your dosing timeline helps set realistic expectations for when benefits will fully arrive."
      />

      <div className="prose-editorial">
        <h2 id="why-titration">Why Titration Matters</h2>
        <p>
          All GLP-1 medications begin at a low starting dose and increase gradually over weeks or months. This titration schedule is not optional - it is the core of the treatment protocol. Starting at the maximum dose immediately would cause severe nausea and vomiting in most patients, leading to unnecessary discontinuation.
        </p>
        <p>
          The titration period also sets expectations: you will not see the full weight loss effect until you have been at your maintenance dose for at least 12-20 weeks. Patients who judge the medication's efficacy during the starting dose period are measuring too early.
        </p>

        <div className="bg-[#EEF3FF] border border-[rgba(27,58,107,0.2)] rounded-xl p-5 my-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">Important</p>
          <p className="text-sm text-black">
            Never increase your dose faster than your physician's schedule. If you experience significant nausea at a dose level, staying there for an additional 4 weeks is always appropriate. The titration schedule shown below is the minimum time at each dose, not the maximum.
          </p>
        </div>

        <h2 id="ozempic">Ozempic (Semaglutide) Dosing Schedule</h2>
        <p>Ozempic is injected subcutaneously once weekly. The standard titration schedule is:</p>
        <DosingTable
          headers={["Period", "Dose", "Purpose"]}
          rows={[
            ["Weeks 1-4",   "0.25mg once weekly", "Starting dose - not a therapeutic dose, minimizes side effects"],
            ["Weeks 5+",    "0.5mg once weekly",  "Initial therapeutic dose for most T2D patients"],
            ["If needed",   "1mg once weekly",    "Escalate if HbA1c target not met after 4+ weeks at 0.5mg"],
            ["If needed",   "2mg once weekly",    "Maximum dose - for additional glucose lowering or weight benefit"],
          ]}
        />
        <p>Not all patients need to reach 2mg. Many achieve adequate T2D control at 0.5mg or 1mg. The optimal dose is determined by clinical response and tolerability.</p>

        <h2 id="wegovy">Wegovy (Semaglutide 2.4mg) Dosing Schedule</h2>
        <p>Wegovy uses a longer titration schedule than Ozempic, reflecting its higher target maintenance dose:</p>
        <DosingTable
          headers={["Period", "Dose", "Notes"]}
          rows={[
            ["Weeks 1-4",   "0.25mg once weekly", "Starting dose"],
            ["Weeks 5-8",   "0.5mg once weekly",  ""],
            ["Weeks 9-12",  "1mg once weekly",    ""],
            ["Weeks 13-16", "1.7mg once weekly",  ""],
            ["Week 17+",    "2.4mg once weekly",  "Target maintenance dose for weight management"],
          ]}
        />
        <p>If a patient cannot tolerate the 2.4mg dose, they may continue at 1.7mg. Weight loss is still significant at this lower maintenance dose.</p>

        <FelixInline />

        <h2 id="mounjaro">Mounjaro (Tirzepatide) Dosing Schedule</h2>
        <p>Mounjaro uses 2.5mg increments and a longer overall titration period than semaglutide:</p>
        <DosingTable
          headers={["Period", "Dose", "Notes"]}
          rows={[
            ["Weeks 1-4",   "2.5mg once weekly", "Starting dose - not therapeutic"],
            ["Weeks 5-8",   "5mg once weekly",   "First therapeutic dose"],
            ["Weeks 9-12",  "7.5mg once weekly", "If tolerated and more effect needed"],
            ["Weeks 13-16", "10mg once weekly",  ""],
            ["Weeks 17-20", "12.5mg once weekly",""],
            ["Week 21+",    "15mg once weekly",  "Maximum dose"],
          ]}
        />
        <p>As with all GLP-1s, the minimum time at each step can be extended. Many patients find their optimal dose before reaching 15mg. The physician determines the appropriate maintenance dose based on efficacy and tolerability.</p>

        <h2 id="rybelsus">Rybelsus (Oral Semaglutide) Dosing</h2>
        <p>Rybelsus is a daily oral tablet. The titration is simpler but has strict administration requirements:</p>
        <DosingTable
          headers={["Period", "Dose", "Notes"]}
          rows={[
            ["Month 1",   "3mg once daily",  "Starting dose - not therapeutic"],
            ["Month 2+",  "7mg once daily",  "First therapeutic dose"],
            ["If needed", "14mg once daily", "Maximum dose - for additional effect"],
          ]}
        />
        <p>
          Rybelsus must be taken first thing in the morning with a maximum of 120mL of plain water. Wait at least 30 minutes before eating, drinking anything other than water, or taking other oral medications. Taking Rybelsus with food reduces absorption by up to 75%.
        </p>

        <h2 id="injection">Injection Technique & Storage</h2>
        <h3>How to Inject</h3>
        <ul>
          <li>Inject into subcutaneous fat in the abdomen (at least 2 inches from the navel), front or outer thigh, or outer upper arm</li>
          <li>Rotate injection sites each week to avoid lipohypertrophy (lumps under the skin)</li>
          <li>Do not inject into muscle, scar tissue, bruised, or irritated skin</li>
          <li>The injection is generally painless - use the thinnest, shortest needle (usually 4mm x 31G or 32G)</li>
        </ul>
        <h3>What to Do if You Miss a Dose</h3>
        <ul>
          <li><strong>Ozempic/Wegovy:</strong> If less than 5 days have passed since your scheduled dose, inject as soon as you remember. If more than 5 days have passed, skip it and resume your next scheduled day. Never double dose.</li>
          <li><strong>Mounjaro:</strong> Same rule - inject within 4 days of your scheduled dose day. If more than 4 days have passed, skip and resume next scheduled day.</li>
          <li><strong>Rybelsus:</strong> If you miss a morning dose, skip it and take your next dose the following morning as usual. Do not double up.</li>
        </ul>
        <h3>Storage</h3>
        <ul>
          <li>Keep unused pens refrigerated at 2-8 degrees C (36-46 degrees F)</li>
          <li>After first use, pens can be stored at room temperature (up to 30 degrees C / 86 degrees F) for up to 4 weeks (Ozempic) or 6 weeks (Wegovy)</li>
          <li>Do not freeze - frozen pens must be discarded</li>
          <li>Keep pens away from direct sunlight and heat</li>
        </ul>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10 text-xs text-black leading-relaxed">
          Dosing information reflects Health Canada-approved product monographs as of May 2026. Always follow the specific instructions provided by your physician and pharmacist. Dosing protocols may differ for individual patients based on clinical factors.
        </div>
      </div>
    </ArticleLayout>
  );
}
