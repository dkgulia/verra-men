import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { shippingCopy } from "@/config/store";

export const metadata: Metadata = buildMetadata({
  title: "Returns",
  path: "/returns",
});

export default function ReturnsPage() {
  return (
    <div className="container-site py-10 md:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Returns" }]} className="mb-6" />
      <h1 className="section-title mb-6">RETURNS</h1>
      <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-secondary">
        <p>{shippingCopy.returns}</p>
        <p>
          Initiate a return from your order confirmation email or contact our team.
          Refunds are processed to the original payment method once the return is received.
        </p>
      </div>
    </div>
  );
}
