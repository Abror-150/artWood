import { useTranslation } from 'react-i18next';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import craftsmanImage from '@/assets/art.png';

const About = () => {
  const { t } = useTranslation();

  const certificates = [
    { year: '2010', title: t('about.cert1') },
    { year: '2014', title: t('about.cert2') },
    { year: '2019', title: t('about.cert3') },
  ];

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
            {t('about.title')}
          </h1>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={craftsmanImage}
              alt="Master Craftsman"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {t('about.story')}
            </p>

            <div>
              <h2 className="mb-6 text-2xl font-bold">
                {t('about.certificates')}
              </h2>
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-4 rounded-lg border bg-card p-4"
                  >
                    <Award className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <div className="font-semibold text-primary">
                        {cert.year}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {cert.title}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
