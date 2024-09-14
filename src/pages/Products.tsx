"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "../constants";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [mounted, setMounted] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, []);

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container px-4 md:px-6"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            Our Products
          </h1>
          <div className="relative max-w-5xl mx-auto mb-12">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentProduct * 100}%)` }}
              >
                {products.map((product, index) => (
                  <div key={index} className="w-full flex-shrink-0">
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
                              <h3 className="text-2xl font-bold mb-2">
                                {product.name}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {product.description}
                              </p>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-3xl font-bold text-green-600">
                                {product.price}
                              </span>
                              <Button
                                className="bg-green-600/90 hover:bg-green-700/90 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm"
                                onClick={() =>
                                  navigate("/product", {
                                    state: product,
                                  })
                                }
                              >
                                View Product
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card
                key={product.id}
                className="bg-white/80 dark:bg-gray-800/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">
                      {product.price}
                    </span>
                    <Button
                      className="bg-green-600/90 hover:bg-green-700/90 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm"
                      onClick={() =>
                        navigate("/product", {
                          state: product,
                        })
                      }
                    >
                      View Product
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
