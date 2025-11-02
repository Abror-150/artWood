import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-wood.jpg';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="container relative mx-auto flex h-full items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center"
          >
            <h1 className="mb-4 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              {t('hero.title')}
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products">
                <Button size="lg" className="text-lg">
                  {t('hero.cta1')}
                </Button>
              </Link>
              <Link to="/cart">
                <Button size="lg" variant="outline" className="text-lg">
                  {t('hero.cta2')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              {t('nav.about')}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('home.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {t('hero.cta2')}
            </h2>
            <p className="mb-8 text-lg opacity-90">
              {t('hero.subtitle')}
            </p>
            <Link to="/products">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg"
              >
                {t('hero.cta1')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
