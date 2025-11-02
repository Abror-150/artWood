import { useTranslation } from 'react-i18next';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Minus, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import chairImage from '@/assets/product-chair.jpg';
import ornamentImage from '@/assets/product-ornament.jpg';
import giftboxImage from '@/assets/product-giftbox.jpg';

const ProductDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: '1',
      name: t('products.chair.name'),
      description: t('products.chair.description'),
      fullDescription: t('products.chair.fullDescription'),
      price: 299.99,
      image: chairImage,
    },
    {
      id: '2',
      name: t('products.ornament.name'),
      description: t('products.ornament.description'),
      fullDescription: t('products.ornament.fullDescription'),
      price: 89.99,
      image: ornamentImage,
    },
    {
      id: '3',
      name: t('products.giftbox.name'),
      description: t('products.giftbox.description'),
      fullDescription: t('products.giftbox.fullDescription'),
      price: 149.99,
      image: giftboxImage,
    },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto min-h-screen px-4 py-16 text-center">
        <h1 className="mb-4 text-3xl font-bold">{t('productDetail.notFound')}</h1>
        <Link to="/products">
          <Button>{t('productDetail.backToProducts')}</Button>
        </Link>
      </div>
    );
  }

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} ${t('productDetail.addedToCart')}`);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/products')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('productDetail.backToProducts')}
          </Button>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h1 className="mb-4 text-4xl font-bold">{product.name}</h1>
                  <p className="mb-6 text-lg text-muted-foreground">
                    {product.fullDescription}
                  </p>

                  <div className="mb-8 border-t border-b py-6">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-muted-foreground">
                        {t('products.price')}:
                      </span>
                      <span className="text-3xl font-bold text-primary">
                        ${(product.price * quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="mb-3 block text-sm font-medium">
                      {t('products.quantity')}:
                    </label>
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleDecrement}
                        className="h-12 w-12"
                      >
                        <Minus className="h-5 w-5" />
                      </Button>
                      <span className="w-16 text-center text-2xl font-semibold">
                        {quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleIncrement}
                        className="h-12 w-12"
                      >
                        <Plus className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="w-full text-lg"
                  >
                    {t('products.addToCart')}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
