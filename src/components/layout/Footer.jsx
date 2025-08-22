import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Home,
  Building2,
  File,
  PhoneCall,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative bg-background text-text px-6 pt-20 pb-10"
      style={{
        backgroundImage:
          "radial-gradient(1000px 600px at 10% 10%, rgba(108,99,255,0.08), transparent 60%), radial-gradient(800px 500px at 90% 90%, rgba(0,245,212,0.08), transparent 60%)",
      }}
    >
      {/* Glow Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-10 -left-10 h-56 w-56 rounded-full blur-3xl opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(0,245,212,0.35), transparent 60%)",
          }}
        />
        <div
          className="absolute top-24 right-10 h-72 w-72 rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(108,99,255,0.35), transparent 60%)",
          }}
        />
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
        {/* Brand Info */}
        <div className="col-span-2">
          <h2
            className="text-2xl font-heading bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg,#00F5D4,#6C63FF)",
            }}
          >
            VIJSTACK
          </h2>
          <p className="mt-4 opacity-80 max-w-md">
            We craft modern web & app solutions tailored for startups,
            businesses, and creators. Your vision, our code.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com/vijstack"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/vijstack"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 opacity-80">
            {[
              { link: "/", text: "Home", icon: Home },
              { link: "/about", text: "About", icon: Building2 },
              { link: "/portfolio", text: "Portfolio", icon: File },
              { link: "/contact", text: "Contact", icon: PhoneCall },
            ].map((e, i) => (
              <li className="flex gap-2 items-center" key={i}>
                <e.icon />
                <a href={e.link} className="hover:text-primary">
                  {e.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-3 opacity-80">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> vijstack@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 9695146906
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Greater Noida, Uttar Pradesh, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-12 pt-6 border-t border-white/10 text-center opacity-70 text-xs">
        © {new Date().getFullYear()} Vijstack. All rights reserved.
      </div>
    </footer>
  );
}
