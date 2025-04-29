import articles from "@/data/articles.json";
import { notFound } from "next/navigation";

interface Params {
  params: { id: string };
}

export default function ArticlePage({ params }: Params) {
  const article = articles.find((a) => a.id === params.id);

  if (!article) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold">{article.title}</h1>
      <div className="text-gray-600 text-sm">
        {article.author} | {article.submissionDate} | {article.category} | {article.readingTime} min read
      </div>
      <img src={article.imageUrl} alt={article.title} className="rounded-lg w-full h-64 object-cover my-4" />
      <p className="text-lg">{article.fullContent}</p>
    </div>
  );
}
