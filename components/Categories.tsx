'use client';

import Link from 'next/link';
import Image from 'next/image';
import categoriesData from '../data/categories.json';

const categories = ['Inspiration', 'Health', 'Stories'];

export default function Categories() {
    return (
        <section className="px-6 py-12 max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-semibold mb-8">Categories</h1>

            {categories.map((category) => {
                const categoryPosts = categoriesData
                    .filter((cat) => cat.title === category)
                    .flatMap((cat) => cat.posts);

                if (categoryPosts.length === 0) return null;

                return (
                    <div key={category} className="mb-14">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-medium">{category}</h2>
                            <div className="space-x-2">
                                <button className="px-2 py-1 border rounded">&lt;</button>
                                <button className="px-2 py-1 border rounded">&gt;</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {categoryPosts.map((post) => (
                                <div key={post.id} className="bg-white shadow-sm border p-4">
                                    <Link href={`/article/${post.id}`}>
                                        <div className="h-32 w-full mb-4 overflow-hidden rounded-md">
                                            <Image
                                                src={post.imageUrl}
                                                alt={post.title}
                                                width={400}
                                                height={200}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </Link>
                                    <div className="text-xs text-gray-500 mb-1">
                                        #{category} • {post.time}
                                    </div>
                                    <h3 className="font-medium mb-2">{post.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{post.summary}</p>
                                    <Link href={`/article/${post.id}`}>
                                        <button className="bg-black text-white px-4 py-2 text-sm cursor-pointer">Read
                                            more
                                        </button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
