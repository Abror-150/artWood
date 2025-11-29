import { useTranslation } from "react-i18next";
import { useCart } from "@/contexts/CartContext";
import ProductCard from "@/components/ProductCard";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useProducts } from "@/hooks/api/useProduct";

const Products = () => {
  const { t, i18n } = useTranslation();
  const { addToCart } = useCart();

  // Backenddagi productlarni olish
  const { data, isLoading } = useProducts({});

  if (isLoading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  // Backend response:
  // { total, limit, page, pages, items: [...] }
  const products = data?.items || [];

  const handleAddToCart = (product: any, quantity: number) => {
    addToCart(product, quantity);
    toast.success(`${product["name_" + i18n.language]} added to cart!`);
  };

  return (
    <div className="min-h-screen py-16">
      {" "}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          {" "}
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {t("products.title")}{" "}
          </h1>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product: any, index: number) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard
                product={{
                  id: product.id,
                  name: product[`name_${i18n.language}`],
                  description: product[`description_${i18n.language}`],
                  price: product.price,
                  image: product.image,
                }}
                onAddToCart={handleAddToCart}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
