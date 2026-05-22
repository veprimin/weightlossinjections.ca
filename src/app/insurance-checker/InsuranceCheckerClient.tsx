"use client";

import { useState } from "react";
import Link from "next/link";
import { FELIX_LINK } from "@/lib/constants";

type Step = "employment" | "province" | "plan" | "indication" | "result";

interface Answers {
  employment?: string;
  province?: string;
  plan?: string;
  indication?: string;
}

function ProgressBar({ step }: { step: Step }) {
  const steps: Step[] = ["employment", "province", "plan", "indication", "result"];
  const idx = steps.indexOf(step);
  return (
    <div className="flex items-center gap-1 mb-8">
      {steps.slice(0, -1).map((s, i) => (
        <div key={s} className="flex items-center gap-1 flex-1">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
            style={{
              background: i < idx ? "#1B3A6B" : i === idx ? "#1B3A6B" : "#E5E7EB",
              color: i <= idx ? "#fff" : "#6B7280",
            }}
          >
            {i < idx ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            ) : i + 1}
          </div>
          {i < steps.length - 2 && (
            <div className="flex-1 h-0.5" style={{ background: i < idx ? "#1B3A6B" : "#E5E7EB" }} />
          )}
        </div>
      ))}
    </div>
  );
}

function OptionButton({ label, description, selected, onClick }: { label: string; description?: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left rounded-xl border-2 px-5 py-4 transition-all"
      style={{
        borderColor: selected ? "#1B3A6B" : "#E5E7EB",
        background: selected ? "#EEF3FF" : "#fff",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center"
          style={{ borderColor: selected ? "#1B3A6B" : "#D1D5DB" }}
        >
          {selected && <div className="w-2 h-2 rounded-full" style={{ background: "#1B3A6B" }} />}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{label}</p>
          {description && <p className="text-xs text-gray-700 mt-0.5">{description}</p>}
        </div>
      </div>
    </button>
  );
}

function ResultCard({ answers }: { answers: Answers }) {
  const { employment, province, plan, indication } = answers;

  // Determine coverage likelihood
  let coverageStatus: "likely" | "possible" | "unlikely" | "publiconly";
  let headline = "";
  let body = "";
  let tips: string[] = [];

  // Public programs only (seniors/social assistance/unemployed on assistance)
  if (employment === "retired" || employment === "social-assistance") {
    coverageStatus = "publiconly";
    headline = "Public drug plan coverage may apply";

    const provincePlan: Record<string, string> = {
      on: "Ontario Drug Benefit (ODB) Program",
      bc: "BC PharmaCare (Fair PharmaCare)",
      ab: "Alberta Blue Cross Government programs",
      mb: "Manitoba Pharmacare",
      sk: "Saskatchewan Drug Plan",
      ns: "Nova Scotia Seniors Pharmacare",
      nb: "NB Prescription Drug Program",
      nl: "NL Prescription Drug Program",
      pe: "PEI Pharmacare",
    };
    const planName = province ? provincePlan[province] || "your provincial drug plan" : "your provincial drug plan";

    if (indication === "diabetes") {
      body = `Based on your answers, you may qualify for Ozempic coverage through ${planName}. Most provincial programs cover semaglutide for type 2 diabetes with prior authorization criteria.`;
      tips = [
        "Ask your physician to submit a prior authorization request to your provincial drug plan",
        "Criteria typically require a confirmed T2D diagnosis and HbA1c above target",
        "Approval usually takes 2-4 weeks",
        indication === "diabetes" ? "Wegovy is NOT covered by public plans - only Ozempic (diabetes indication)" : "",
      ].filter(Boolean);
    } else {
      body = `Wegovy and other GLP-1 medications for weight management only are not covered by any provincial public drug plan in Canada as of 2025. However, Ozempic may be covered if you also have type 2 diabetes.`;
      tips = [
        "Check if you have type 2 diabetes - this opens coverage for Ozempic",
        "Ask about the Novo Nordisk Care Rx patient support program",
        "Generic semaglutide (Plosbrio/Poviztra) is significantly cheaper",
        "Virtual care platforms like Felix can help assess your full options",
      ];
    }
  } else if (employment === "employed-large") {
    if (plan === "yes-comprehensive") {
      coverageStatus = "likely";
      headline = "Coverage likely - check your formulary";
      body = "Large employer group plans often include GLP-1 medications, though prior authorization is almost always required. The process typically takes 2-4 weeks and requires your physician to submit clinical justification.";
      tips = [
        "Download your benefits booklet and search for 'GLP-1', 'Ozempic', 'semaglutide', or 'tirzepatide'",
        "Call your benefits administrator to confirm if prior authorization is required",
        "Ask your physician to prepare a prior authorization letter with your diagnosis and clinical rationale",
        "Weight management indication (Wegovy) is harder to get approved than diabetes (Ozempic)",
      ];
    } else if (plan === "yes-limited") {
      coverageStatus = "possible";
      headline = "Coverage possible but not guaranteed";
      body = "GLP-1 medications are high-cost and many employer plans explicitly exclude them or have a drug cap. Check your benefits booklet carefully or call your benefits administrator.";
      tips = [
        "Check your plan's annual drug maximum - GLP-1s can cost $400-600/month",
        "Ask if Ozempic (diabetes indication) vs Wegovy (weight management) have different coverage rules",
        "Request a prior authorization form from your physician even before confirming coverage",
        "Consider generic semaglutide if brand-name isn't covered",
      ];
    } else {
      coverageStatus = "unlikely";
      headline = "No employer coverage - out-of-pocket options available";
      body = "Without employer drug benefits, you will need to pay out-of-pocket or use patient support programs.";
      tips = [
        "Novo Nordisk Care Rx program: free medication for eligible patients with limited income",
        "Generic semaglutide (Plosbrio/Poviztra) costs 45-90% less than brand-name Ozempic",
        "Individual health insurance plans (Blue Cross etc.) may include drug benefits",
        "Felix Health virtual care can prescribe and advise on the most affordable options",
      ];
    }
  } else if (employment === "employed-small" || employment === "self-employed") {
    if (plan === "yes-comprehensive" || plan === "yes-limited") {
      coverageStatus = "possible";
      headline = "Check your plan details carefully";
      body = "Small employer and individual plans vary widely. Many have annual drug maximums or explicit exclusions for high-cost GLP-1 medications. Call your insurer directly to confirm.";
      tips = [
        "Call your insurer and ask specifically: 'Is semaglutide (DIN 02471167) covered under my plan?'",
        "Ask about prior authorization requirements and maximum covered amounts",
        "Generic semaglutide may be covered where brand-name is not",
        "Blue Cross individual plans in most provinces offer drug coverage options",
      ];
    } else {
      coverageStatus = "unlikely";
      headline = "Self-pay options available";
      body = "Without drug coverage, generic semaglutide and patient support programs are the most affordable paths to treatment.";
      tips = [
        "Generic semaglutide (Plosbrio/Poviztra) - ~$50-150/month vs $235-430/month brand name",
        "Novo Nordisk Care Rx: income-based patient support program",
        "Consider adding individual health insurance - some plans cover GLP-1s",
        "Felix Health can help navigate the most affordable treatment pathway",
      ];
    }
  } else {
    coverageStatus = "possible";
    headline = "Your coverage depends on several factors";
    body = "Based on your answers, we need more information to give a precise assessment. Use the tips below to check your specific situation.";
    tips = [
      "Review your benefits booklet or call your insurer",
      "Ask your physician about prior authorization",
      "Consider generic semaglutide as a lower-cost option",
    ];
  }

  const statusConfig = {
    likely:     { bg: "#EEF3FF", border: "#1B3A6B", dot: "#1B3A6B", label: "Coverage Likely" },
    possible:   { bg: "#FFFBEB", border: "#D97706", dot: "#D97706", label: "Coverage Possible" },
    unlikely:   { bg: "#FEF2F2", border: "#DC2626", dot: "#DC2626", label: "Limited Coverage" },
    publiconly: { bg: "#EEF3FF", border: "#1B3A6B", dot: "#1B3A6B", label: "Public Plan May Apply" },
  };
  const sc = statusConfig[coverageStatus];

  return (
    <div>
      <div className="rounded-xl border-2 p-6 mb-6" style={{ background: sc.bg, borderColor: sc.border }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full" style={{ background: sc.dot }} />
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: sc.dot }}>{sc.label}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Georgia, serif" }}>{headline}</h3>
        <p className="text-sm text-gray-900 leading-relaxed">{body}</p>
      </div>

      {tips.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Next steps</h4>
          <ul className="space-y-2">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-900">
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5" style={{ background: "#1B3A6B" }}>
                  {i + 1}
                </div>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-xl border border-gray-200 bg-white p-5 mb-4">
        <p className="text-sm font-semibold text-gray-900 mb-1">Want expert help navigating coverage?</p>
        <p className="text-xs text-gray-700 mb-3">Felix Health's licensed Canadian physicians can assess your eligibility, navigate prior authorization, and find the most affordable option for your situation.</p>
        <a
          href={FELIX_LINK}
          target="_blank"
          rel="noopener sponsored"
          className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors"
          style={{ background: "#1B3A6B" }}
        >
          Start free assessment with Felix →
        </a>
        <p className="text-xs text-gray-600 mt-2">Sponsored · Felix Health</p>
      </div>

      <div className="flex gap-3">
        <Link
          href="/insurance-coverage"
          className="text-sm font-medium text-[#1B3A6B] underline underline-offset-2"
        >
          Full insurance coverage guide
        </Link>
        <span className="text-gray-400">·</span>
        <Link
          href="/generic-semaglutide"
          className="text-sm font-medium text-[#1B3A6B] underline underline-offset-2"
        >
          Generic semaglutide guide
        </Link>
      </div>
    </div>
  );
}

export default function InsuranceCheckerClient() {
  const [step, setStep] = useState<Step>("employment");
  const [answers, setAnswers] = useState<Answers>({});

  function setAnswer(key: keyof Answers, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function next(nextStep: Step) {
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reset() {
    setAnswers({});
    setStep("employment");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Determine if province/plan steps are needed
  const needsPlanStep = answers.employment === "employed-large" || answers.employment === "employed-small" || answers.employment === "self-employed";

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-2">Free Tool</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Georgia, serif" }}>
            GLP-1 Insurance Coverage Checker
          </h1>
          <p className="text-base text-gray-900">
            Answer 4 quick questions to find out if your insurance covers Ozempic, Wegovy, or Mounjaro - and what to do next.
          </p>
        </div>

        {step !== "result" && <ProgressBar step={step} />}

        {/* Step: Employment */}
        {step === "employment" && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">What is your employment situation?</h2>
            <p className="text-sm text-gray-700 mb-5">This determines which coverage pathways are available to you.</p>
            <div className="space-y-3 mb-6">
              <OptionButton label="Employed at a large company (50+ employees)" description="You likely have group benefits through an employer plan" selected={answers.employment === "employed-large"} onClick={() => setAnswer("employment", "employed-large")} />
              <OptionButton label="Employed at a small business or part-time" description="Benefits may be limited or unavailable" selected={answers.employment === "employed-small"} onClick={() => setAnswer("employment", "employed-small")} />
              <OptionButton label="Self-employed or freelance" description="You would have individual insurance if any" selected={answers.employment === "self-employed"} onClick={() => setAnswer("employment", "self-employed")} />
              <OptionButton label="Retired (65+)" description="Provincial seniors pharmacare programs may apply" selected={answers.employment === "retired"} onClick={() => setAnswer("employment", "retired")} />
              <OptionButton label="Receiving social assistance or disability support" description="Public drug programs typically cover GLP-1s for eligible conditions" selected={answers.employment === "social-assistance"} onClick={() => setAnswer("employment", "social-assistance")} />
            </div>
            <button
              type="button"
              disabled={!answers.employment}
              onClick={() => next("province")}
              className="w-full rounded-lg py-3 font-semibold text-white transition-opacity disabled:opacity-40"
              style={{ background: "#1B3A6B" }}
            >
              Continue &rarr;
            </button>
          </div>
        )}

        {/* Step: Province */}
        {step === "province" && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">Which province do you live in?</h2>
            <p className="text-sm text-gray-700 mb-5">Provincial drug plans vary significantly in what they cover.</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { value: "on", label: "Ontario" },
                { value: "bc", label: "British Columbia" },
                { value: "ab", label: "Alberta" },
                { value: "mb", label: "Manitoba" },
                { value: "sk", label: "Saskatchewan" },
                { value: "ns", label: "Nova Scotia" },
                { value: "nb", label: "New Brunswick" },
                { value: "nl", label: "Newfoundland & Labrador" },
                { value: "pe", label: "Prince Edward Island" },
              ].map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setAnswer("province", p.value)}
                  className="rounded-xl border-2 px-4 py-3 text-sm font-semibold text-gray-900 text-left transition-all"
                  style={{
                    borderColor: answers.province === p.value ? "#1B3A6B" : "#E5E7EB",
                    background: answers.province === p.value ? "#EEF3FF" : "#fff",
                  }}
                >
                  {p.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setAnswer("province", "other")}
                className="rounded-xl border-2 px-4 py-3 text-sm font-semibold text-gray-900 text-left transition-all col-span-2"
                style={{
                  borderColor: answers.province === "other" ? "#1B3A6B" : "#E5E7EB",
                  background: answers.province === "other" ? "#EEF3FF" : "#fff",
                }}
              >
                Quebec / Territory (GLP-1 access varies)
              </button>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep("employment")}
                className="flex-1 rounded-lg border border-gray-300 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-50"
              >
                &larr; Back
              </button>
              <button
                type="button"
                disabled={!answers.province}
                onClick={() => {
                  if (needsPlanStep) {
                    next("plan");
                  } else {
                    next("indication");
                  }
                }}
                className="flex-1 rounded-lg py-3 font-semibold text-white transition-opacity disabled:opacity-40"
                style={{ background: "#1B3A6B" }}
              >
                Continue &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Step: Insurance Plan */}
        {step === "plan" && needsPlanStep && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">Do you have private drug insurance?</h2>
            <p className="text-sm text-gray-700 mb-5">Check your employment contract or ask your HR department if unsure.</p>
            <div className="space-y-3 mb-6">
              <OptionButton label="Yes - comprehensive group plan" description="E.g. Blue Cross, Manulife, Sun Life, Great-West Life, Canada Life" selected={answers.plan === "yes-comprehensive"} onClick={() => setAnswer("plan", "yes-comprehensive")} />
              <OptionButton label="Yes - but it's a basic or limited plan" description="Small employer, minimal benefits, or low annual drug maximum" selected={answers.plan === "yes-limited"} onClick={() => setAnswer("plan", "yes-limited")} />
              <OptionButton label="No drug insurance" description="No benefits or I waived drug coverage" selected={answers.plan === "none"} onClick={() => setAnswer("plan", "none")} />
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep("province")}
                className="flex-1 rounded-lg border border-gray-300 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-50"
              >
                &larr; Back
              </button>
              <button
                type="button"
                disabled={!answers.plan}
                onClick={() => next("indication")}
                className="flex-1 rounded-lg py-3 font-semibold text-white transition-opacity disabled:opacity-40"
                style={{ background: "#1B3A6B" }}
              >
                Continue &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Step: Indication */}
        {step === "indication" && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">Why are you seeking GLP-1 treatment?</h2>
            <p className="text-sm text-gray-700 mb-5">Coverage rules differ significantly based on the medical indication.</p>
            <div className="space-y-3 mb-6">
              <OptionButton label="Type 2 diabetes management" description="Ozempic is widely covered for T2D with prior authorization across Canada" selected={answers.indication === "diabetes"} onClick={() => setAnswer("indication", "diabetes")} />
              <OptionButton label="Weight management / obesity" description="Wegovy/Mounjaro for weight - fewer plans cover this indication" selected={answers.indication === "weight"} onClick={() => setAnswer("indication", "weight")} />
              <OptionButton label="Both - I have T2D and want to lose weight" description="Ozempic may cover both benefits under the diabetes indication" selected={answers.indication === "both"} onClick={() => setAnswer("indication", "both")} />
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(needsPlanStep ? "plan" : "province")}
                className="flex-1 rounded-lg border border-gray-300 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-50"
              >
                &larr; Back
              </button>
              <button
                type="button"
                disabled={!answers.indication}
                onClick={() => next("result")}
                className="flex-1 rounded-lg py-3 font-semibold text-white transition-opacity disabled:opacity-40"
                style={{ background: "#1B3A6B" }}
              >
                See my results &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Result */}
        {step === "result" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: "Georgia, serif" }}>Your coverage assessment</h2>
              <p className="text-sm text-gray-700">Based on your answers. This is a guide only - verify with your insurer and physician.</p>
            </div>
            <ResultCard answers={answers} />
            <button
              type="button"
              onClick={reset}
              className="mt-6 text-sm font-medium text-[#1B3A6B] underline underline-offset-2"
            >
              Start over with different answers
            </button>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
          <p className="text-xs text-gray-700 leading-relaxed">
            This tool provides general guidance only and does not constitute insurance or medical advice. Coverage eligibility depends on your specific plan documents and individual circumstances. Always verify coverage with your insurer and consult a licensed physician before starting any medication.
          </p>
        </div>
      </div>
    </div>
  );
}
