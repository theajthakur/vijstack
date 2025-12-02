"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Layers, DollarSign, Cpu, Smile, Headphones, TrendingUp, BarChart } from "lucide-react";

const features = [
    {
        icon: Search,
        title: "SEO & Online Visibility",
        desc: "We optimize your website for search engines so your business gets discovered by the right audience.",
    },
    {
        icon: PenTool,
        title: "Tailored Solutions",
        desc: "We don’t just build websites; we craft digital solutions designed specifically for your business needs.",
    },
    {
        icon: Layers,
        title: "Full End-to-End Service",
        desc: "From design to development, hosting, and management — everything handled in one place.",
    },
    {
        icon: DollarSign,
        title: "Affordable & Transparent",
        desc: "No hidden costs. Clear packages that give you the best value for money.",
    },
    {
        icon: Cpu,
        title: "Latest Technology",
        desc: "We use modern, scalable, and secure tech stacks to ensure your website/app runs fast and reliably.",
    },
    {
        icon: Smile,
        title: "User-Friendly Experience",
        desc: "We focus on clean design, easy navigation, and mobile responsiveness so your users love it.",
    },
    {
        icon: Headphones,
        title: "Dedicated Support",
        desc: "Get ongoing technical support, updates, and maintenance after launch.",
    },
    {
        icon: TrendingUp,
        title: "Proven Track Record",
        desc: "Delivered projects like e-commerce stores, attendance systems, and business websites.",
    },
    {
        icon: BarChart,
        title: "Scalable for Growth",
        desc: "Start small, and we’ll help you expand as your business grows.",
    },
];

export default function Features() {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Us?</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        We bring your ideas to life with precision, creativity, and technical excellence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="text-white w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
