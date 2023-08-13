import { useTitle } from "../../hooks/useTitle";
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Faq } from "./components/Faq";
import { Testimonials } from "./components/Testimonials";

export const HomePage = () => {
  useTitle("Access Latest Computer Science eBooks");

  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
    </main>
  )
}
