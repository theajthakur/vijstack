"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Working with this team transformed our business. Our website now attracts more customers, and the support after launch has been outstanding!",
        author: "Anjali Sharma",
        role: "Owner, Anjali's Boutique",
    },
    {
        quote: "They built us a custom e-commerce platform that’s fast, secure, and super easy to manage. We saw a sales boost within the first month!",
        author: "Rahul Verma",
        role: "Founder, TechGear Hub",
    },
    {
        quote: "Professional, transparent, and always ready to help. The design is sleek, mobile-friendly, and exactly what we envisioned.",
        author: "Sanya Kapoor",
        role: "Marketing Lead, GreenGrocer",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 relative overflow-hidden bg-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our partners have to say.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl relative"
                        >
                            <Quote className="absolute top-8 right-8 text-white/10 w-12 h-12" />
                            <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                                "{item.quote}"
                            </p>
                            <div>
                                <h4 className="text-white font-semibold">{item.author}</h4>
                                <p className="text-primary text-sm">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
