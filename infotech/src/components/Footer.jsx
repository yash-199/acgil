import React from 'react';
import { motion } from 'framer-motion';
import footerbg from '../assets/FooterBg.png';

const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.6,
            ease: 'easeOut'
        }
    }),
};

const Footer = () => {
    return (
        <footer
            className="relative text-white bg-cover bg-bottom"
            style={{ backgroundImage: `url(${footerbg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0D65BE]/80 z-0" />

            {/* Footer Content */}
            <div className="relative z-10 px-6 py-12 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* About */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    variants={footerVariants}
                >
                    <h3 className="text-2xl font-semibold mb-4">About Us</h3>
                    <p className="text-gray-200 text-sm">
                        We provide innovative tech solutions to help businesses grow. From design to deployment, we handle everything with precision and care.
                    </p>
                </motion.div>

                {/* Links */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    variants={footerVariants}
                >
                    <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/about" className="hover:text-white">About Us</a></li>
                        <li><a href="/services" className="hover:text-white">Services</a></li>
                        <li><a href="/product" className="hover:text-white">Product</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                    </ul>
                </motion.div>

                {/* Contact */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={3}
                    variants={footerVariants}
                >
                    <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                    <p className="text-gray-300 text-sm">Email: support@example.com</p>
                    <p className="text-gray-300 text-sm">Phone: +91-9876543210</p>
                    <p className="text-gray-300 text-sm">Location: New Delhi, India</p>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                className="relative z-10 border-t border-white/10 text-center py-4 text-sm text-gray-300 bg-[#0D65BE]/70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                viewport={{ once: true }}
            >
                © {new Date().getFullYear()} YourCompany. All rights reserved.
            </motion.div>
        </footer>
    );
};

export default Footer;
