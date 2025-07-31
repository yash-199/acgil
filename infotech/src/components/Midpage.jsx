import React from 'react';
import { motion } from 'framer-motion';
import icon from '../assets/icon.png';

// ✅ Fix for Vite background image issue
const midBanner = new URL('../assets/midBanner.jpg', import.meta.url).href;

const Midpage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="w-11/12 mx-auto rounded-2xl shadow-xl overflow-hidden my-10"
        >
            <div
                className="relative bg-cover bg-center h-full"
                style={{ backgroundImage: `url(${midBanner})` }}
            >
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 p-10 text-white items-center">
                    {/* Left Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                            To make requests for further information,
                            <br />
                            contact us
                        </h1>
                        <p className="mt-4 text-lg text-gray-200 max-w-lg">
                            Reach out for any assistance, queries, or project ideas you’d like to discuss.
                        </p>
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className="inline-block p-4 rounded-full shadow-lg"
                        >
                            <img src={icon} alt="Call Icon" className="w-16 h-16" />
                        </motion.div>
                        <p className="text-2xl font-medium mb-2 mt-4">Call Us For Any Inquiry</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gradient-to-r from-[#059A8F] to-[#0D65BE] text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md"
                        >
                            Contact Now
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Midpage;
