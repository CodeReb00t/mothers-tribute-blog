'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col gap-10 px-4 md:px-16 py-8">

      {/* Hero Carousel */}
      <section className="w-full">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {[1, 2, 3].map((i) => (
              <CarouselItem key={i}>
                <div className="relative h-64 md:h-96 bg-gray-200 rounded-xl overflow-hidden">
                  <Image
                    src={`/images/hero-${i}.jpg`} // update with actual images
                    alt="Hero image"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start px-6 text-white">
                    <h2 className="text-2xl md:text-4xl font-bold mb-2">
                      When Is The Best Time of Year To Visit Japan?
                    </h2>
                    <Button variant="secondary">Read More</Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Explore by Category */}
      <section className="flex justify-center gap-4 flex-wrap">
        {['Guides', 'Cities', 'Travels', 'Food'].map((cat) => (
          <Button key={cat} variant="outline" className="rounded-full">
            {cat}
          </Button>
        ))}
      </section>

      {/* Recent Articles */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <Image
              src={`/images/post-${i}.jpg`} // update with real images
              alt={`Post ${i}`}
              width={400}
              height={250}
              className="rounded-t-lg object-cover"
            />
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">#Guides · 4 min read</p>
              <h3 className="text-lg font-semibold mb-2">
                Coventry City Guide Including Coventry Hotels
              </h3>
              <Button variant="link" className="px-0">Read More</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Newsletter */}
      <section className="max-w-md mx-auto bg-gray-100 p-6 rounded-xl text-center">
        <h4 className="text-xl font-semibold mb-2">Subscribe to Newsletter</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Get travel tips & inspiration delivered weekly!
        </p>
        <div className="flex gap-2">
          <Input placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </div>
      </section>

      {/* Pagination */}
      <section className="flex justify-center mt-8 gap-2">
        {[1, 2, 3, 4, 5].map((page) => (
          <Button
            key={page}
            variant="ghost"
            className="w-10 h-10 rounded-full"
          >
            {page}
          </Button>
        ))}
      </section>
    </div>
  );
}
