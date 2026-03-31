"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

export function CategorySlider({
  categories,
}: {
  categories: any[] | undefined;
}) {
  const plugin = useRef(Autoplay({ delay: 2800, stopOnInteraction: true }));

  const getCategoryImage = (categoryName: string) => {
    const images: { [key: string]: string } = {
      pizza:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop",
      burger:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
      sushi:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=400&fit=crop",
      pasta:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop",
      salad:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
      dessert:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop",
      drinks:
        "https://images.unsplash.com/photo-1546548970-71785318a17b?w=400&h=400&fit=crop",
      chicken:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop",
      seafood:
        "https://images.unsplash.com/photo-1559737558-2f5a2f9f0f8b?w=400&h=400&fit=crop",
      vegetarian:
        "https://images.unsplash.com/photo-1540914124281-342587941389?w=400&h=400&fit=crop",
    };

    const name = categoryName?.toLowerCase() || "";
    return (
      images[name] ||
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop"
    );
  };

  return (
    <section className="relative py-20 px-4 md:px-16 bg-gradient-to-b from-background via-secondary/20 to-background">

      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Popular Categories
        </h2>
        <p className="text-muted-foreground mt-2">
          Explore your favorite foods from top restaurants
        </p>
      </div>

      {/* Carousel */}
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          containScroll: "trimSnaps",
        }}
        className="w-full max-w-7xl mx-auto"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent className="-ml-3">
          {categories?.map((category, index) => (
            <CarouselItem
              key={index}
              className="pl-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
              <div className="group">

                <Card className="overflow-hidden border border-border/50 bg-card/80 backdrop-blur-xl shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl">

                  <CardContent className="p-0 relative aspect-square">

                    {/* Image */}
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={
                          category?.image || getCategoryImage(category?.name)
                        }
                        alt={category?.name || "Category"}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-4">

                        {/* Name */}
                        <h3 className="text-white font-semibold text-base md:text-lg leading-tight group-hover:translate-y-[-2px] transition">
                          {category?.name}
                        </h3>

                        {/* Count */}
                        <p className="text-xs text-white/80">
                          {category?._count?.meals || 0} items
                        </p>

                      </div>

                    </div>
                  </CardContent>
                </Card>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 rounded-full bg-background/80 backdrop-blur border shadow-lg hover:scale-110 transition" />
        <CarouselNext className="hidden md:flex -right-12 h-12 w-12 rounded-full bg-background/80 backdrop-blur border shadow-lg hover:scale-110 transition" />
      </Carousel>
    </section>
  );
}