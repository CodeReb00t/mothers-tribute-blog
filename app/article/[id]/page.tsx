'use client'

import { useParams } from 'next/navigation';
import articles from "@/data/articles.json";

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();

  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">Article Not Found</h1>
        <p className="text-gray-600 mt-4">Sorry, the article you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold">{article.title}</h1>
      <div className="text-gray-600 text-sm">
        {article.author} | {article.submissionDate} | {article.category} | {article.readingTime} min read
      </div>
      <img
        src={article.imageUrl}
        alt={article.title}
        className="rounded-lg w-full h-64 object-cover my-4"
      />
      <p className="text-lg">{article.fullContent}</p>
    </div>
  );
}
