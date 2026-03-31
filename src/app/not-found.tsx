import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 text-center">
      <div className="max-w-md w-full">

        {/* 404 Title */}
        <h1 className="text-7xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-2 text-foreground">
          Page not found
        </h2>

        {/* Description */}
        <p className="text-muted-foreground mb-6">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}