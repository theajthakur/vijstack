import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Prose from "@/components/ui/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using vijstack.com and working with Vijstack.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of service" crumbs={[{ name: "Home", href: "/" }, { name: "Terms of service", href: "/terms" }]} />
      <Prose>
        <p>Last updated: November 2026</p>
        <h2>Using this website</h2>
        <p>The content on this website is for general information about Vijstack&apos;s services. It may change without notice.</p>
        <h2>Projects</h2>
        <p>Every project is covered by its own written quote or agreement, which sets out the scope, timeline, payment terms and ownership. Where that agreement differs from these terms, the agreement applies.</p>
        <h2>Ownership</h2>
        <p>Once a project is paid in full, you own the website content and design created for you, along with your domain. Third-party tools, fonts and licences remain under their own terms.</p>
        <h2>Contact</h2>
        <p>Questions about these terms? Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </Prose>
    </>
  );
}
