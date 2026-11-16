import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Prose from "@/components/ui/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Vijstack collects, uses and protects information shared through vijstack.com.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy policy" crumbs={[{ name: "Home", href: "/" }, { name: "Privacy policy", href: "/privacy" }]} />
      <Prose>
        <p>Last updated: November 2026</p>
        <p>This policy explains what information Vijstack collects through this website and how it is used.</p>
        <h2>Information you share</h2>
        <p>When you use the contact form, email or WhatsApp, you share details such as your name, email address, phone number and project information. This is used only to reply to you and to discuss, quote for and deliver your project.</p>
        <h2>Analytics</h2>
        <p>This site may use privacy-friendly analytics, such as Google Analytics, to understand how visitors use it. This data is aggregated and is not used to identify you personally.</p>
        <h2>Sharing</h2>
        <p>Your information is never sold. It is shared only with services needed to run this website, such as email delivery and hosting providers, or where required by law.</p>
        <h2>Your choices</h2>
        <p>You can ask for a copy of your information or ask for it to be deleted at any time by emailing <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </Prose>
    </>
  );
}
