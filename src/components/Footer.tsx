import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Send } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">Art Wood Design</h3>
            <p className="text-sm text-muted-foreground">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold">{t('nav.contact')}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{t('contact.addressValue')}</p>
              <p>+998 XX XXX XX XX</p>
              <p>info@lovable-ai.uz</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 font-semibold">Social Media</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-muted-foreground md:flex-row md:space-y-0">
            <p>{t('footer.copyright')}</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                {t('footer.privacy')}
              </a>
              <a href="#" className="hover:text-primary">
                {t('footer.terms')}
              </a>
              <a href="#" className="hover:text-primary">
                {t('footer.delivery')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
