"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Target, Heart } from "lucide-react";

export default function About() {
    return (
        <main className="min-h-screen relative">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            We Are <span className="text-gradient">Vijstack</span>
                        </h1>
                        <p className="text-white/60 text-lg leading-relaxed mb-12">
                            A team of passionate developers, designers, and strategists dedicated to building digital products that make a difference.
                        </p>
                    </motion.div>

                    {/* Masonry Gallery */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px] md:h-[400px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group"
                        >
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Team Meeting" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group"
                        >
                            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80" alt="Coding" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group"
                        >
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" alt="Brainstorming" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group"
                        >
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80" alt="Office" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Target, title: "Our Mission", desc: "To empower businesses with cutting-edge technology and design that drives real growth." },
                            { icon: Users, title: "Our Team", desc: "A diverse group of experts who love what they do and are committed to your success." },
                            { icon: Heart, title: "Our Values", desc: "Transparency, innovation, and a relentless focus on user experience." },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-8 rounded-2xl"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                                <p className="text-white/60">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
