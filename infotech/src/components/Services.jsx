import React from 'react';
import { FaRocket, FaMobileAlt, FaLock, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import cardBg from '../assets/cardbg.svg';
import serviceimage from '../assets/serviceimage.png';
import serviceBg from '../assets/serviceBg.png';

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};

const Services = () => {
    return (
        <div
            className="min-h-screen bg-blend-overlay bg-cover bg-center py-16"
            style={{ backgroundImage: `url(${serviceBg})` }}
        >
            <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">Our Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
                {/* Card 1 */}
                <motion.div
                    className="bg-[#0D65BE] text-white p-6 rounded-xl shadow-md hover:border-2 hover:border-[#059A8F] transition-all duration-300"
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                >
                    <FaRocket className="text-6xl my-4" />
                    <h2 className="text-2xl font-semibold mb-2">Fast Performance</h2>
                    <p className="text-gray-300 text-justify text-sm">
                        Our platform is optimized for speed, offering minimal latency and rapid load times across all devices. Enjoy a seamless and responsive user experience without interruptions.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    className="text-white bg-white p-6 rounded-xl shadow-md hover:border-2 hover:border-[#059A8F] transition-all duration-300 bg-cover bg-center"
                    style={{ backgroundImage: `url(${cardBg})` }}
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                >
                    <FaMobileAlt className="text-6xl my-4 bg-gradient-to-r from-[#059A8F] to-[#0D65BE] text-white p-2 rounded-full" />
                    <h2 className="text-2xl font-semibold mb-2 text-black">Responsive Design</h2>
                    <p className="text-black text-justify text-sm pt-2">
                        Our responsive design ensures a seamless and consistent experience across all screen sizes, whether you're on a phone, tablet, or desktop.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    className="bg-white p-6 rounded-xl shadow-md hover:border-2 hover:border-[#059A8F] transition-all duration-300 bg-cover bg-center"
                    style={{ backgroundImage: `url(${cardBg})` }}
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                >
                    <FaLock className="text-6xl my-4 bg-gradient-to-r from-[#059A8F] to-[#0D65BE] text-white p-2 rounded-full" />
                    <h2 className="text-2xl font-semibold mb-2 text-black">Secure Platform</h2>
                    <p className="text-black text-justify text-sm">
                        Built with robust security protocols, we prioritize data protection and platform integrity. Your privacy and safety are at the core of our services.
                    </p>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                    className="bg-[#059A8F] text-white pt-6 px-6 rounded-xl shadow-md hover:border-2 hover:border-[#0D65BE] transition-all duration-300 flex flex-col justify-between"
                    custom={3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                >
                    <div>
                        <div className='flex items-center gap-2 mb-3'>
                            <div className="h-2 w-2 bg-white rounded-full"></div>
                            <p className="text-sm">Need Help?</p>
                        </div>
                        <h1 className="text-xl md:text-2xl font-bold">Free advice — Book a callback</h1>
                        <img src={serviceimage} className="w-4/6" alt="Service Illustration" />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="bg-white text-[#059A8F] font-bold text-lg py-2 px-4 rounded-lg text-center mt-auto transition-all duration-300"
                    >
                        Contact Now
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
