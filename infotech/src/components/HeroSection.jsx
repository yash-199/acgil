import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from "../assets/headerbg3.png";
import HeroImage from "../assets/HeroImage.png";

const HeroSection = () => {
    return (
        <div
            className="h-screen bg-[#0d65be4e] bg-blend-overlay bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center text-white px-6 md:px-16">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center md:text-left"
                >
                    <p className="text-lg md:text-xl mb-2">Welcome to ACGIL INFOTECH</p>
                    <h1 className="text-3xl md:text-6xl font-bold leading-tight py-2">
                        Innovating Solutions for Tomorrow
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-semibold py-2">
                        Empowering Businesses with Technology
                    </h2>
                    <p className="text-sm md:text-base mt-2 max-w-xl">
                        People worldwide love how easy it is to design, simple & fast. Join us in designing your future with cutting-edge technology.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05, y: -4 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gradient-to-r from-[#059A8F] to-[#0D65BE] text-white mt-8 font-bold text-lg md:text-xl py-3 px-6 rounded-lg shadow-lg"
                    >
                        Contact Now
                    </motion.button>
                </motion.div>

                {/* Right Hero Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="hidden md:flex justify-center"
                >
                    {/* <img src={HeroImage} alt="Hero Illustration" className="w-[80%] max-w-md" /> */}
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
