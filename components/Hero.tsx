'use client';

import Image from "next/image";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight, Github, Linkedin} from "lucide-react";
import {mothersDayArticles} from "@/data/motherDayArticles";
import Link from "next/link";

const ARTICLES_PER_PAGE = 2;
const categories = ["Inspiration", "Health", "Stories"];

export default function Hero() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory]);

    const filteredArticles = selectedCategory
        ? mothersDayArticles.filter(
            (article) =>
                article.tag.substring(1).toLowerCase() === selectedCategory.toLowerCase()
        )
        : mothersDayArticles;

    const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
    const paginatedArticles = filteredArticles.slice(
        (currentPage - 1) * ARTICLES_PER_PAGE,
        currentPage * ARTICLES_PER_PAGE
    );

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section className="container mx-auto px-4 py-10">
            <p className="text-3xl flex justify-center items-center mb-10">
                Explore By Categories
            </p>

            <div className="flex items-center justify-center gap-x-4 mb-10 flex-wrap">
                <Button
                    onClick={() => setSelectedCategory(null)}
                    className={`text-xl ${
                        selectedCategory === null ? "bg-black text-white" : ""
                    }`}
                >
                    Show All
                </Button>
                {categories.map((category) => (
                    <Button
                        key={category}
                        onClick={() =>
                            setSelectedCategory((prev) =>
                                prev === category ? null : category
                            )
                        }
                        className={`text-xl ${
                            selectedCategory === category ? "bg-black text-white" : ""
                        }`}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-8">
                    {paginatedArticles.length > 0 ? (
                        paginatedArticles.map((article) => (
                            <Link key={article.id} href={`/article/${article.id}`} className="block">
                                <div
                                    className="flex flex-col md:flex-row gap-4 border p-4 rounded-lg hover:shadow-md transition">
                                    <div
                                        className="w-full md:w-1/3 bg-gray-200 flex items-center justify-center aspect-video">
                                        <Image
                                            src={article.image}
                                            alt="Article image"
                                            width={300}
                                            height={200}
                                            className="object-cover w-full h-auto"
                                        />
                                    </div>
                                    <div className="w-full md:w-2/3">
                                        <p className="text-sm text-muted-foreground">
                                            {article.tag} · {article.time}
                                        </p>
                                        <h2 className="text-xl font-semibold mt-1">{article.title}</h2>
                                        <p className="text-sm text-gray-600 mt-2">{article.description}</p>
                                        <Button className="mt-4">Read more</Button>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No articles found.</p>
                    )}
                </div>

                <aside className="space-y-10">
                    <div className="bg-gray-100 p-6 rounded-lg text-center">
                        <Image
                            src="/contact-logo.png"
                            width={28}
                            height={28}
                            alt="photo"
                            className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300"
                        />
                        <h3 className="font-bold">Devansh Kumar Gupta</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                            I'm a passionate Full Stack Web and App Developer 👨‍💻 with an interest in building seamless,
                            user-focused digital experiences. With a strong foundation in both frontend and backend
                            technologies, I love bringing ideas to life from concept to deployment 🚀.
                        </p>
                        <Button variant="outline" className="mt-4">
                            <Link href="/about">Follow me</Link>
                        </Button>
                        <div className="flex justify-center gap-4 mt-4">
              <span className="text-lg">
                <Link href="https://github.com/CodeReb00t"><Github/></Link>
              </span>
                            <span className="text-lg">
                <Link href="https://www.linkedin.com/in/devansh-kumar-gupta/"><Linkedin/></Link>
              </span>
                        </div>
                    </div>
                </aside>
            </div>

            <div className="mt-10 flex justify-center items-center space-x-2">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleChangePage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="bg-black text-white"
                >
                    <ChevronLeft size={20}/>
                </Button>

                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    return (
                        <Button
                            key={page}
                            variant={currentPage === page ? "outline" : "ghost"}
                            onClick={() => handleChangePage(page)}
                            className="w-10 h-10"
                        >
                            {page}
                        </Button>
                    );
                })}

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleChangePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="bg-black text-white"
                >
                    <ChevronRight size={20}/>
                </Button>
            </div>
        </section>
    );
}
