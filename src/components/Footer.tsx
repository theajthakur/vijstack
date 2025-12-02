import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black/40 border-t border-white/10 pt-16 pb-8 backdrop-blur-lg">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tighter">
                            <span className="text-white">VIJ</span>
                            <span className="text-primary">STACK</span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed">
                            We craft modern web & app solutions tailored for startups, businesses, and creators. Your vision, our code.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-white/60 hover:text-primary transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="text-white/60 hover:text-primary transition-colors"><Github size={20} /></Link>
                            <Link href="#" className="text-white/60 hover:text-primary transition-colors"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-white/60 hover:text-primary text-sm transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-white/60 hover:text-primary text-sm transition-colors">About Us</Link></li>
                            <li><Link href="https://dev.vijstack.com" className="text-white/60 hover:text-primary text-sm transition-colors">Portfolio</Link></li>
                            <li><Link href="/contact" className="text-white/60 hover:text-primary text-sm transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/services#web-development" className="text-white/60 hover:text-primary text-sm transition-colors">Web Development</Link></li>
                            <li><Link href="/services#app-development" className="text-white/60 hover:text-primary text-sm transition-colors">App Development</Link></li>
                            <li><Link href="/services#seo-optimization" className="text-white/60 hover:text-primary text-sm transition-colors">SEO Optimization</Link></li>
                            <li><Link href="/services#ui-ux-design" className="text-white/60 hover:text-primary text-sm transition-colors">UI/UX Design</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/60 text-sm">
                                <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                                <span>vijstack@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/60 text-sm">
                                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                                <span>+91 9695146906</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/60 text-sm">
                                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                                <span>Greater Noida, Uttar Pradesh, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} Vijstack. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-white/40 hover:text-white text-sm transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
