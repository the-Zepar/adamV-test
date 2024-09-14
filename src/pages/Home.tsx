import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { testimonials, products } from "@/constants";

import {
  Leaf,
  Tractor,
  Recycle,
  Sprout,
  Target,
  Compass,
  Eye,
  Heart,
} from "lucide-react";

import { motion } from "framer-motion";

function Home() {
  const [mounted, setMounted] = useState(false);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(0);

  const productsRef = useRef(null);
  const aboutRef = useRef(null);
  const whyChooseRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [products.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="container px-4 md:px-6"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Revolutionize Your Soil with Adam's VP
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Harness the power of vermicomposting for sustainable
                  agriculture. Our premium organic compost boosts crop yields
                  naturally and enriches your soil for generations to come.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-green-600/90 hover:bg-green-700/90 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm">
                  Explore Our Products
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Vermicomposting Process"
                className="aspect-[4/3] overflow-hidden rounded-xl object-cover object-center shadow-lg"
                height="550"
                src="/placeholder.svg?height=550&width=750&text=Vermicomposting+Process"
                width="750"
              />
            </div>
          </div>
        </motion.div>
      </section>
      <motion.section
        ref={productsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full py-12 md:py-24 lg:py-32 bg-green-200/50 dark:bg-gray-800/50 backdrop-blur-sm"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Our Products
          </h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentProduct * 100}%)` }}
              >
                {products.map((product, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-white/80 dark:bg-gray-900/80 shadow-lg hover:shadow-xl transition-shadow overflow-hidden backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-2">
                          <div className="relative aspect-square">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6 flex flex-col justify-between">
                            <div>
                              <h3 className="text-xl font-bold mb-2">
                                {product.name}
                              </h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                {product.description}
                              </p>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-2xl font-bold text-green-600">
                                {product.price}
                              </span>
                              <Button className="bg-green-600/90 hover:bg-green-700/90 text-white px-3 py-1 rounded-full text-sm shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm">
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <Button
              onClick={prevProduct}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm text-black dark:text-black"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>
            <Button
              onClick={nextProduct}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm text-black dark:text-black"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.section>
      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            About Us
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Our Objectives",
                description:
                  "To provide sustainable, organic solutions for soil enrichment and crop enhancement, promoting eco-friendly agricultural practices.",
              },
              {
                icon: Compass,
                title: "Our Mission",
                description:
                  "To revolutionize agriculture through innovative vermicomposting techniques, empowering farmers with natural, high-yield solutions.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description:
                  "A world where organic waste is transformed into valuable resources, creating a circular economy in agriculture and ensuring food security.",
              },
              {
                icon: Heart,
                title: "Our Values",
                description:
                  "Sustainability, innovation, integrity, and commitment to the well-being of farmers, consumers, and the environment.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer bg-white/80 dark:bg-gray-800/80 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="mb-4 p-2 bg-green-100/80 rounded-full dark:bg-green-900/80 shadow-inner backdrop-blur-sm">
                    <item.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        ref={whyChooseRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full py-12 md:py-24 lg:py-32 bg-green-200/50 dark:bg-gray-800/50 backdrop-blur-sm"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Why Choose Adam's VP?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Leaf,
                title: "100% Organic",
                description:
                  "Our compost is made from natural materials, free from harmful chemicals.",
              },
              {
                icon: Recycle,
                title: "Sustainable Process",
                description:
                  "We utilize organic waste, contributing to a circular economy.",
              },
              {
                icon: Sprout,
                title: "Enhanced Growth",
                description:
                  "Proven to increase crop yields and improve soil health.",
              },
              {
                icon: Tractor,
                title: "Farmer-Friendly",
                description:
                  "Easy to apply and compatible with modern farming practices.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer bg-white/80 dark:bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                <div className="mb-4 p-2 bg-green-100/80 rounded-full dark:bg-green-900/80 shadow-inner backdrop-blur-sm">
                  <item.icon className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        ref={testimonialsRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="text-center bg-white/80 dark:bg-gray-800/80 shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm">
                      <CardContent className="pt-6">
                        <p className="text-lg mb-4">"{testimonial.content}"</p>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <Button
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm text-black dark:text-black"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm text-black dark:text-black"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-200/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Ready to Transform Your Soil?
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl mb-8">
            Join thousands of satisfied farmers and gardeners who have
            experienced the Adam's VP difference.
          </p>
          <Button className="bg-green-600/90 hover:bg-green-700/90 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm">
            Get Started Today
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Home;
