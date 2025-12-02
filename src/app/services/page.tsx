"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Globe, Smartphone, Search, Palette } from "lucide-react";

const services = [
    {
        id: "web-development",
        icon: Globe,
        title: "Web Development",
        desc: "Custom websites built with modern technologies like Next.js and React. We focus on performance, SEO, and user experience.",
    },
    {
        id: "app-development",
        icon: Smartphone,
        title: "App Development",
        desc: "Native and cross-platform mobile applications that provide seamless experiences on iOS and Android devices.",
    },
    {
        id: "seo-optimization",
        icon: Search,
        title: "SEO Optimization",
        desc: "Data-driven strategies to improve your search engine rankings and drive organic traffic to your business.",
    },
    {
        id: "ui-ux-design",
        icon: Palette,
        title: "UI/UX Design",
        desc: "User-centric design that combines aesthetics with functionality to create intuitive and engaging digital products.",
    },
];

export default function Services() {
    return (
        <main className="min-h-screen relative">
            <Navbar />

            <section className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Comprehensive digital solutions to help your business thrive in the modern world.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-8 rounded-2xl scroll-mt-32"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                                <p className="text-white/60 leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
