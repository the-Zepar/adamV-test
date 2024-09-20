import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import { useCart } from "@/context/CartProvider";
import PayButton from "@/components/Pay";

export default function Cart() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart } = useCart();
  const totalPrice = cart.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  if (!isLoggedIn) {
    navigate("/login");
  }

  return (
    <main className="flex-1 container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <Card>
          <CardContent className="p-6">
            <p>Your cart is empty.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            {cart.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4 flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div className="flex-1">
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.price}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addToCart({ ...item, quantity: -1 })}
                    >
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addToCart({ ...item, quantity: +1 })}
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-4"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="space-y-6">
            <div className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$10.0</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(totalPrice * 0.15).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>
                    $
                    {totalPrice &&
                      (totalPrice + 10.0 + totalPrice * 0.15).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <PayButton amount={totalPrice + 10.0 + totalPrice * 0.15} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
