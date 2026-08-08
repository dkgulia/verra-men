import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "FAQs",
  path: "/faqs",
});

const FAQS = [
  {
    q: "How long does shipping take?",
    a: "Orders typically ship within 2–4 business days and arrive in 4–7 business days depending on location.",
  },
  {
    q: "What is your return window?",
    a: "Unused items with tags attached can be returned within 7 days of delivery.",
  },
  {
    q: "How should I care for linen pieces?",
    a: "Wash cold on a gentle cycle or dry clean. Expect natural texture and soften with wear.",
  },
  {
    q: "Do you offer exchanges?",
    a: "Yes — contact us with your order details and preferred size or color.",
  },
];

export default function FaqsPage() {
  return (
    <div className="container-site py-10 md:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQs" }]} className="mb-6" />
      <h1 className="section-title mb-10">FAQs</h1>
      <div className="mx-auto max-w-2xl divide-y divide-border border-y border-border">
        {FAQS.map((item) => (
          <div key={item.q} className="py-6">
            <h2 className="text-sm font-medium">{item.q}</h2>
            <p className="mt-2 text-sm leading-relaxed text-secondary">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
