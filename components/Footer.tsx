import React from 'react'
import Link from "next/link";
import Image from "next/image";
import articles from '../data/articles.json'

const Footer = () => {
    const data = articles
    return (
        <div className="">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-4 pt-10">
                {data.map((article) => (
                    <Link href={`/article/${article.id}`} key={article.id}>
                        <div
                            key={article.id}
                            className="group relative bg-gray-300 aspect-square flex items-center justify-center hover:bg-gray-500 transition"
                        >
                            <Image
                                src={article.imageUrl}
                                alt="Image"
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full opacity-80 group-hover:opacity-40 transition-opacity"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition"
                            >
                                <div className="flex space-x-4 items-center text-white text-xl">
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
                    </Link>
                ))}
            </div>

            <footer className="bg-white py-6 mt-10">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-semibold text-black">Mothers Blog(By Devansh)</h2>
                        <p className="text-gray-500 text-sm">Copyrights © 2025. All Rights Reserved.</p>
                    </div>

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
