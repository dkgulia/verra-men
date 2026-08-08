import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-site flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-xs uppercase tracking-wide2 text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl tracking-tight">Page not found</h1>
      <p className="mt-3 text-sm text-secondary">
        This page doesn&apos;t exist — or the piece has moved.
      </p>
      <Link href="/shop" className="btn-primary mt-8">
        Back to shop
      </Link>
    </div>
  );
}
