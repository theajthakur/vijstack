"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
    return (
        <main className="min-h-screen relative">
            <Navbar />
            <section className="pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-4xl text-white/80">
                    <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                    <div className="space-y-6">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                        <p>
                            At Vijstack, we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
                        </p>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Information We Collect</h2>
                        <p>
                            We may collect personal information that you voluntarily provide to us when you contact us, such as your name, email address, and phone number.
                        </p>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How We Use Your Information</h2>
                        <p>
                            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
                        </p>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at vijstack@gmail.com.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
