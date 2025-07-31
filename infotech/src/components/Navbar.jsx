import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled
                ? "bg-[#0D65BE]/95 shadow-md backdrop-blur-lg"
                : "bg-[#059A8F]/50 backdrop-blur-md"
                }`}
        >
            <div className="max-w-screen-xl mx-auto h-16 flex items-center justify-between px-4">
                <p className="text-black font-semibold rounded-full uppercase bg-white drop-shadow-lg px-6 py-2">
                    ACGIL iNFOTECH
                </p>

                {/* Desktop Links */}
                <ul className="hidden md:flex text-white items-center gap-5 uppercase text-sm">
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/about"><li>About</li></NavLink>
                    <NavLink to="/services"><li>Services</li></NavLink>
                    <NavLink to="/product"><li>Product</li></NavLink>
                    <NavLink to="/contact"><li>Contact</li></NavLink>
                </ul>

                {/* Hamburger + Learn More */}
                <div className="flex items-center justify-between gap-5 pr-2">
                    <FaBarsStaggered
                        className="text-white cursor-pointer sm:hidden"
                        onClick={() => setIsOpen(true)}
                    />
                    <div className="hidden sm:flex gap-5 items-center">
                        <p className="bg-white py-2 px-4 rounded-full hover:translate-y-[-4px] transition duration-500 cursor-pointer">
                            Learn More
                        </p>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="fixed top-0 right-0 w-full h-screen bg-white z-50 py-6 px-6 shadow-lg"
                >
                    <IoMdClose
                        className="absolute text-black top-2 right-2 text-2xl border-2 border-black rounded-full p-1 cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    />
                    <ul className="px-2 py-4 text-black text-lg mt-10 space-y-2">
                        <li onClick={() => setIsOpen(false)}>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                            <NavLink to="/about">About Us</NavLink>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                            <NavLink to="/services">Services</NavLink>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                            <NavLink to="/product">Product</NavLink>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

export default Navbar;
