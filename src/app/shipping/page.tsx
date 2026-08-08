import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { shippingCopy } from "@/config/store";

export const metadata: Metadata = buildMetadata({
  title: "Shipping",
  path: "/shipping",
});

export default function ShippingPage() {
  return (
    <div className="container-site py-10 md:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shipping" }]} className="mb-6" />
      <h1 className="section-title mb-6">SHIPPING</h1>
      <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-secondary">
        <p>{shippingCopy.description}</p>
        <p>
          Standard delivery typically arrives within 4–7 business days depending on your location.
          You will receive tracking details once your order ships.
        </p>
        <p>
          Free shipping applies automatically at checkout when your order total meets the threshold.
        </p>
      </div>
    </div>
  );
}
