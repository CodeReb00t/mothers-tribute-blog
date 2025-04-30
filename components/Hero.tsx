// components/Hero.tsx
'use client';

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const articles = [
  {
    tag: "#Guides",
    time: "8 minutes reading",
    title: "Coventry City Guide Including Coventry Hotels",
    description:
      "The diseases most commonly seen in travellers are diarrhoea, malaria, accidents, wound infections and more...",
    image: "/placeholder.png",
  },
  {
    tag: "#Guides",
    time: "6 minutes reading",
    title: "Planning a Trip to Japan in the Time of Covid",
    description:
      "Whether you're just daydreaming or planning a trip, here's essential info about visiting Japan in the time of Covid-19...",
    image: "/placeholder.png",
  },
];

export default function Hero() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 14;

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="container mx-auto px-4 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Articles */}
        <div className="lg:col-span-2 space-y-8">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 border p-4 rounded-lg">
              <div className="w-full md:w-1/3 bg-gray-200 flex items-center justify-center aspect-video">
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
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-10">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300"></div>
            <h3 className="font-bold">Devansh Kumar Gupta</h3>
            <p className="text-sm text-muted-foreground mt-2">
              For as long as I can remember, I’ve been obsessed with the idea of travel...
            </p>
            <Button variant="outline" className="mt-4">Follow me</Button>
            <div className="flex justify-center gap-4 mt-4">
              <span className="text-lg">🌐</span>
              <span className="text-lg">📷</span>
              <span className="text-lg">📹</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleChangePage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="bg-black text-white"
        >
          <ChevronLeft size={20} />
        </Button>

        {[1, 2, 3, 4, 5]
          .filter(page => page <= totalPages)
          .map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "outline" : "ghost"}
              onClick={() => handleChangePage(page)}
              className="w-10 h-10"
            >
              {page}
            </Button>
          ))}

        <span className="px-2">...</span>

        {[10, 11, 12, 13, 14].map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "outline" : "ghost"}
            onClick={() => handleChangePage(page)}
            className="w-10 h-10"
          >
            {page}
          </Button>
        ))}

        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleChangePage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="bg-black text-white"
        >
          <ChevronRight size={20} />
        </Button>
      </div>
    </section>
  );
}
