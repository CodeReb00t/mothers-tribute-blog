import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-gray-200 py-10">
            {/* Carousel Section */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-4">
                {Array.from({length: 5}).map((_, index) => (
                    <div
                        key={index}
                        className="group relative bg-gray-300 aspect-square flex items-center justify-center hover:bg-gray-500 transition"
                    >
                        {/* Image Icon */}
                        <Image
                            src="/placeholder-image.png"
                            alt="Image"
                            height={28}
                            width={28}
                            className="w-12 h-12 opacity-50"
                        />

                        {/* Heart and Comment */}
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                            <div className="flex space-x-4 items-center text-white">
                                <div className="flex items-center space-x-1">
                                    <span>❤️</span>
                                    <span>1231</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span>💬</span>
                                    <span>543</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Section */}
            <footer className="bg-white py-6 mt-10">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    {/* Left */}
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-semibold text-black">Mothers Blog(By Devansh)</h2>
                        <p className="text-gray-500 text-sm">Copyrights © 2025. All Rights Reserved.</p>
                    </div>

                    {/* Right */}
                    <div className="mt-4 md:mt-0 flex space-x-6 text-gray-500 text-sm">
                        <Link href="/" className="hover:text-black transition">Home</Link>
                        <Link href="/about" className="hover:text-black transition">About me</Link>
                        <Link href="/categories" className="hover:text-black transition">Categories</Link>
                        <Link href="/contact" className="hover:text-black transition">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>

    )
}
export default Footer
