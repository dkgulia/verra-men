import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Account",
  path: "/account",
  noIndex: true,
});

export default function AccountPage() {
  return (
    <div className="container-site py-10 md:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Account" }]} className="mb-6" />
      <h1 className="section-title mb-4">ACCOUNT</h1>
      <p className="section-subtitle mb-10">
        Customer accounts can be connected later. For now, manage your bag and wishlist locally.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/cart" className="btn-primary">
          View bag
        </Link>
        <Link href="/wishlist" className="btn-secondary">
          Wishlist
        </Link>
      </div>
    </div>
  );
}
