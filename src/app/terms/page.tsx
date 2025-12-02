"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
    return (
        <main className="min-h-screen relative">
            <Navbar />
            <section className="pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-4xl text-white/80">
                    <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
                    <div className="space-y-6">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                        <p>
                            Please read these Terms of Service carefully before using the Vijstack website.
                        </p>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Agreement to Terms</h2>
                        <p>
                            By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the website.
                        </p>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Intellectual Property</h2>
                        <p>
                            The service and its original content, features, and functionality are and will remain the exclusive property of Vijstack and its licensors.
                        </p>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Changes</h2>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                        </p>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at vijstack@gmail.com.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
