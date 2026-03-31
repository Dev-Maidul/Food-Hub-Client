import { Search, ShoppingBag, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Providers",
    description:
      "Explore hundreds of restaurants near you. Filter by cuisine, rating, or delivery time.",
  },
  {
    icon: ShoppingBag,
    title: "Place Your Order",
    description:
      "Add your favorite meals to cart and checkout securely with multiple payment options.",
  },
  {
    icon: Truck,
    title: "Track Delivery",
    description:
      "Track your order in real-time and get live updates until it reaches your doorstep.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-20 bg-gradient-to-b from-background via-secondary/30 to-background"
    >
      <div className="section-container relative">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            How It Works
          </h2>

          <p className="text-lg text-muted-foreground">
            Getting your favorite food delivered is fast, simple, and seamless.
          </p>
        </div>

        {/* Steps Wrapper */}
        <div className="relative">

          {/* Connection Line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border" />

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group relative bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Step number */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-muted-foreground/10">
                  {index + 1}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-red-500 group-hover:scale-110 shadow-sm">
                  <step.icon className="w-8 h-8 text-red-500 group-hover:text-white transition" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-500 transition">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-500/10 to-orange-500/10 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};