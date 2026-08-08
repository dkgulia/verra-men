import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with VERRA MEN.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactForm />;
}
