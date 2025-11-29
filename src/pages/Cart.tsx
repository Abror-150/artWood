import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import OrderModal from "@/components/OrderModal";
import { motion } from "framer-motion";

const Cart = () => {
  const { t } = useTranslation();
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } =
    useCart();
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold">{t("cart.empty")}</h2>
          <Link to="/products">
            <Button>{t("cart.continueShopping")}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-8 text-4xl font-bold">{t("cart.title")}</h1>

          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 rounded-lg border bg-card p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    ${item.price}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="h-8 w-8"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-8 w-8"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-right">
                  <div className="font-bold">
                    ${(Number(item.price) * item.quantity).toFixed(2)}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="mt-1 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border bg-card p-6">
            <div className="mb-4 flex items-center justify-between text-xl font-bold">
              <span>{t("cart.total")}:</span>
              <span className="text-2xl text-primary">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            <div className="flex gap-4">
              <Link to="/products" className="flex-1">
                <Button variant="outline" className="w-full">
                  {t("cart.continueShopping")}
                </Button>
              </Link>
              <Button
                className="flex-1"
                onClick={() => setOrderModalOpen(true)}
              >
                {t("cart.checkout")}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <OrderModal open={orderModalOpen} onOpenChange={setOrderModalOpen} />
    </div>
  );
};

export default Cart;
