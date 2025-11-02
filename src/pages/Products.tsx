import { useTranslation } from 'react-i18next';
import { useCart } from '@/contexts/CartContext';
import ProductCard from '@/components/ProductCard';
import { toast } from 'sonner';
import chairImage from '@/assets/product-chair.jpg';
import ornamentImage from '@/assets/product-ornament.jpg';
import giftboxImage from '@/assets/product-giftbox.jpg';
import { motion } from 'framer-motion';

const Products = () => {
  const { t } = useTranslation();
  const { addToCart } = useCart();

  const products = [
    {
      id: '1',
      name: t('products.chair.name'),
      description: t('products.chair.description'),
      price: 299.99,
      image: chairImage,
    },
    {
      id: '2',
      name: t('products.ornament.name'),
      description: t('products.ornament.description'),
      price: 89.99,
      image: ornamentImage,
    },
    {
      id: '3',
      name: t('products.giftbox.name'),
      description: t('products.giftbox.description'),
      price: 149.99,
      image: giftboxImage,
    },
  ];

  const handleAddToCart = (product: any, quantity: number) => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {t('products.title')}
          </h1>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
