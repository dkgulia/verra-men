import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { shippingCopy } from "@/config/store";

export const metadata: Metadata = buildMetadata({
  title: "Size Guide",
  path: "/size-guide",
});

export default function SizeGuidePage() {
  return (
    <div className="container-site py-10 md:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Size Guide" }]} className="mb-6" />
      <h1 className="section-title mb-4">SIZE GUIDE</h1>
      <p className="section-subtitle mb-10">{shippingCopy.sizeGuideNote}</p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs uppercase tracking-wide2">
              <th className="py-3 pr-4">Size</th>
              <th className="py-3 pr-4">Chest (in)</th>
              <th className="py-3 pr-4">Waist (in)</th>
              <th className="py-3">Hip (in)</th>
            </tr>
          </thead>
          <tbody className="text-secondary">
            {[
              ["S", "36–38", "30–32", "36–38"],
              ["M", "38–40", "32–34", "38–40"],
              ["L", "40–42", "34–36", "40–42"],
              ["XL", "42–44", "36–38", "42–44"],
              ["XXL", "44–46", "38–40", "44–46"],
            ].map((row) => (
              <tr key={row[0]} className="border-b border-border/70">
                {row.map((cell) => (
                  <td key={cell} className="py-3 pr-4">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
