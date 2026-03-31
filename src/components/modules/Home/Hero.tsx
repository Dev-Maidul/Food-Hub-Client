import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background to-secondary/30">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6">

            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 text-sm font-medium shadow-sm">
              <Sparkles size={16} />
              #1 Food Delivery Platform
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Your Favorite Food, <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Delivered Fast
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Discover amazing food from multiple providers in one place.
              Order from local restaurants and get it delivered in minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <Link href="/meals">
                <Button
                  size="lg"
                  className="group flex items-center gap-2 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Browse Meals
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/become-provider">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto hover:bg-muted/60 transition"
                >
                  Become a Provider
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-6">
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm text-muted-foreground">Restaurants</p>
              </div>

              <div className="w-px h-12 bg-border" />

              <div>
                <p className="text-3xl font-bold">50k+</p>
                <p className="text-sm text-muted-foreground">Customers</p>
              </div>

              <div className="w-px h-12 bg-border" />

              <div>
                <p className="text-3xl font-bold">15 min</p>
                <p className="text-sm text-muted-foreground">Delivery</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                width={600}
                height={600}
                src="/hero-food.jpg"
                alt="Delicious food"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl border border-border backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <p className="font-semibold">Fast Delivery</p>
                  <p className="text-sm text-muted-foreground">
                    Order is on the way!
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}