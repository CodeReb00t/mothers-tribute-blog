"use client";

import {Menu, Search, X} from "lucide-react";
import {useState} from "react";
import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";
import Banner from "@/components/Banner";
import {usePathname} from "next/navigation";

const navLinks = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Categories", href: "/categories"},
    {name: "Contact", href: "/contact"},
];

export default function Header() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <>
            {/* Top Header - Always Visible */}
            <header
                className="w-full  flex items-center justify-between px-6 py-4 border-b bg-white fixed top-0 left-0 z-50">
                <button onClick={() => setMenuOpen(true)}>
                    <Menu size={24}/>
                </button>

                <h1 className="text-lg font-semibold">Mothers Day Tribute Blog</h1>

                <button>
                    <Search size={24}/>
                </button>
            </header>
            {pathname!== "/categories" && pathname!=="/contact" && <Banner/>}

            {/* AnimatePresence for Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black text-white z-60 flex flex-col"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        {/* Header inside Menu (X button) */}
                        <div className="w-full flex items-center justify-between px-6 py-4 border-b border-white">
                            <button onClick={() => setMenuOpen(false)}>
                                <X size={24}/>
                            </button>

                            <h1 className="text-lg font-semibold">Mothers Day Tribute Blog</h1>

                            <button>
                                <Search size={24}/>
                            </button>
                        </div>

                        {/* Main Menu Content */}
                        <div className="flex-1 flex flex-col md:flex-row p-8">
                            {/* Left: Links */}
                            <div className="flex-1 flex flex-col gap-8 justify-center text-4xl font-light">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className="relative"
                                    >
                                        <span className="flex items-center gap-2 gap-x-5 group">
                                      <motion.span
                                          className="w-5 text-white"
                                          initial={{opacity: 0}}
                                          animate={{
                                              opacity: hoveredIndex === index ? 1 : 0,
                                          }}
                                          transition={{duration: 0.3}}
                                      >
                                        —
                                      </motion.span>
                                      <span className="transition-all duration-300 group-hover:tracking-widest group-hover:text-pink-400">
                                        {link.name}
                                      </span>
                                    </span>

                                    </Link>
                                ))}
                            </div>

                            {/* Right: Newsletter */}
                            <div className="flex-1 flex flex-col justify-center items-center mt-8 md:mt-0">
                                <div className="border p-6 w-full max-w-md">
                                    <h2 className="text-xl mb-2">Newsletter</h2>
                                    <p className="text-sm mb-4">
                                        Subscribe to receive exclusive content!
                                    </p>
                                    <form className="flex justify-between  gap-4">
                                        <input
                                            type="email"
                                            placeholder="devanshkg19@gmail.com"
                                            className="p-2 rounded bg-transparent border-b flex-1 text-white placeholder-gray-400"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-white text-black p-2 flex-1  font-semibold"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Space below header */}
            <div className="h-16"/>
        </>
    );
}
