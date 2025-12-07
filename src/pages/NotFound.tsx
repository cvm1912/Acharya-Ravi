import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center section-padding">
        <div className="text-center max-w-lg">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <span className="font-display text-4xl font-bold text-primary">404</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let us guide you back to harmony.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/">
              <Home className="w-5 h-5" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
