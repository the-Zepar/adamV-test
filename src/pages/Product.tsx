import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { motion } from "framer-motion";

import { useCart } from "@/context/CartProvider";

// In a real application, this would be fetched from an API

export default function Product() {
  const [quantity, setQuantity] = useState(0);
  const { isLoggedIn } = useAuth();
  const { addToCart } = useCart();
  const product = useLocation().state;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setQuantity(isNaN(value) || value < 1 ? 0 : value);
    console.log(location);
  };

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <Link
        to="/products"
        className="inline-flex items-center text-green-600 hover:text-green-800 mb-6"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Products
      </Link>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold">{product.name}</h1>
          {/* <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              ({product.reviews} reviews)
            </span>
          </div> */}
          <p className="text-2xl font-semibold text-green-600">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {product.description}
          </p>
          <div className="flex items-center space-x-4">
            <Input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max="99"
              className="w-20"
            />
            <Button
              onClick={() => addToCart({ ...product, quantity })}
              disabled={!isLoggedIn || !product.inStock}
              className="flex-grow"
            >
              {isLoggedIn
                ? product.inStock
                  ? "Add to Cart"
                  : "Out of Stock"
                : "Log in to Purchase"}
            </Button>
          </div>
          {!isLoggedIn && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Please
              <Link to="/login" className="text-green-600 hover:underline">
                log in
              </Link>
              to add items to your cart.
            </p>
          )}
        </motion.div>
      </div>
    </main>
  );
}
