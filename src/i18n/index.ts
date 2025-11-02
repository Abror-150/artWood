import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      nav: {
        home: "Bosh sahifa",
        products: "Mahsulotlar",
        about: "Biz haqimizda",
        faq: "Savollar",
        contact: "Aloqa"
      },
      hero: {
        title: "Art Wood Design",
        subtitle: "2006 yildan beri mehr va mukammallik bilan yaratilgan qo'lda ishlab chiqarilgan yog'och mahsulotlari",
        cta1: "Mahsulotlarni ko'rish",
        cta2: "Buyurtma berish"
      },
      home: {
        description: "Biz noyob qo'lda ishlab chiqarilgan mebellar, yog'och bezaklar va shaxsiy sovg'alar yaratamiz. Har bir asar g'amxo'rlik va nozik detallarga e'tibor bilan yaratiladi, an'anaviy o'ymakorlikni zamonaviy dizayn bilan uyg'unlashtirib."
      },
      products: {
        title: "Bizning mahsulotlar",
        chair: {
          name: "Qo'lda o'yilgan stul",
          description: "Batafsil o'ymakorlik bilan tabiiy yog'ochdan yasalgan"
        },
        ornament: {
          name: "Dekorativ stol bezagi",
          description: "Uy yoki ofis uchun zamonaviy yog'och haykal"
        },
        giftbox: {
          name: "Sovg'a qutisi",
          description: "O'ymakorlik yoki logotip bilan moslashtiriladi"
        },
        addToCart: "Savatga qo'shish",
        price: "Narx",
        quantity: "Miqdor"
      },
      about: {
        title: "Biz haqimizda",
        story: "Art Wood Design 2006 yildan beri qo'lda ishlab chiqarilgan yog'och san'atini yaratib kelmoqda. Bizning usta hunarmand an'anaviy o'ymakorlik texnikalarini zamonaviy dizayn tamoyillari bilan birlashtirib, bardoshli, badiiy va moslashtirilgan yog'och mahsulotlarini ishlab chiqaradi. Biz ekologik toza materiallar va mahalliy yog'ochdan foydalanamiz, tabiat va hunarmandchilik o'rtasidagi uyg'unlikni saqlab qolamiz.",
        certificates: "Sertifikatlar va mukofotlar",
        cert1: "2010 - Mahalliy qo'l san'ati ko'rgazmasida 1-o'rin",
        cert2: "2014 - Milliy dizayn festivali ishtirokchisi",
        cert3: "2019 - Xalqaro yog'och san'ati ko'rgazmasi sertifikati"
      },
      faq: {
        title: "Ko'p so'raladigan savollar",
        q1: "Yetkazib berish qancha vaqt oladi?",
        a1: "Odatda 3-14 kun, mahsulotga bog'liq. Buyurtma asosidagi mahsulotlar 7-30 kun talab qilishi mumkin.",
        q2: "Maxsus o'lcham yoki dizayn buyurtma qilishim mumkinmi?",
        a2: "Ha! Buyurtma shaklida yoki aloqa formasida ma'lumotlaringizni qoldiring.",
        q3: "Qanday to'lash mumkin?",
        a3: "Biz onlayn to'lovlar, yetkazib berishda naqd to'lov yoki bank o'tkazmalarini qabul qilamiz.",
        q4: "Mahsulotni qaytarish yoki almashtirish uchun nima qilishim kerak?",
        a4: "Ishlab chiqarish xatoligi bo'lgan taqdirda 14 kun ichida qaytarish mumkin."
      },
      contact: {
        title: "Biz bilan bog'laning",
        address: "Manzil",
        addressValue: "Toshkent, O'zbekiston",
        phone: "Telefon",
        email: "Email",
        hours: "Ish vaqti",
        hoursValue: "Dushanba–Shanba, 9:00 – 18:00",
        form: {
          name: "Ism",
          email: "Email",
          message: "Xabar",
          submit: "Yuborish"
        }
      },
      cart: {
        title: "Savat",
        empty: "Savatingiz bo'sh",
        total: "Jami",
        checkout: "Buyurtma berish",
        continueShopping: "Xarid davom ettirish"
      },
      order: {
        title: "Buyurtmani tasdiqlash",
        fullName: "To'liq ism",
        phone: "Telefon raqam",
        email: "Email",
        address: "Yetkazib berish manzili",
        notes: "Qo'shimcha eslatmalar (ixtiyoriy)",
        submit: "Buyurtmani tasdiqlash",
        success: "Rahmat! Buyurtmangiz qabul qilindi. Tez orada siz bilan bog'lanamiz."
      },
      footer: {
        copyright: "© 2006–2025 Art Wood Design - Barcha huquqlar himoyalangan",
        privacy: "Maxfiylik siyosati",
        terms: "Foydalanish shartlari",
        delivery: "Yetkazib berish siyosati"
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        products: "Продукты",
        about: "О нас",
        faq: "Вопросы",
        contact: "Контакты"
      },
      hero: {
        title: "Art Wood Design",
        subtitle: "Изделия ручной работы из дерева, созданные с любовью и совершенством с 2006 года",
        cta1: "Посмотреть продукты",
        cta2: "Разместить заказ"
      },
      home: {
        description: "Мы создаем уникальную мебель ручной работы, деревянные украшения и персонализированные подарки. Каждое изделие создается с заботой и вниманием к деталям, сочетая традиционную резьбу с современным дизайном."
      },
      products: {
        title: "Наши продукты",
        chair: {
          name: "Резной стул ручной работы",
          description: "Из натурального дерева с детальной резьбой"
        },
        ornament: {
          name: "Декоративное украшение для стола",
          description: "Стильная деревянная скульптура для дома или офиса"
        },
        giftbox: {
          name: "Подарочная коробка",
          description: "С гравировкой или логотипом на заказ"
        },
        addToCart: "В корзину",
        price: "Цена",
        quantity: "Количество"
      },
      about: {
        title: "О нас",
        story: "Art Wood Design создает деревянное искусство ручной работы с 2006 года. Наш мастер сочетает традиционные техники резьбы с современными принципами дизайна для производства долговечных, художественных и индивидуальных изделий из дерева. Мы используем экологически чистые материалы и местную древесину, поддерживая гармонию между природой и мастерством.",
        certificates: "Сертификаты и награды",
        cert1: "2010 – 1-е место на местной выставке ремесел",
        cert2: "2014 – Участник национального дизайн-фестиваля",
        cert3: "2019 – Сертификат международной выставки деревянного искусства"
      },
      faq: {
        title: "Часто задаваемые вопросы",
        q1: "Сколько времени занимает доставка?",
        a1: "Обычно 3–14 дней в зависимости от товара. Заказы на заказ могут занять 7–30 дней.",
        q2: "Могу ли я заказать индивидуальные размеры или дизайн?",
        a2: "Да! Просто оставьте свои данные в форме заказа или контактной форме.",
        q3: "Как я могу оплатить?",
        a3: "Мы принимаем онлайн-платежи, наличные при доставке или банковские переводы.",
        q4: "Что делать, если я хочу вернуть или обменять товар?",
        a4: "Возврат принимается в течение 14 дней при производственном браке."
      },
      contact: {
        title: "Свяжитесь с нами",
        address: "Адрес",
        addressValue: "Ташкент, Узбекистан",
        phone: "Телефон",
        email: "Электронная почта",
        hours: "Часы работы",
        hoursValue: "Понедельник–Суббота, 9:00 – 18:00",
        form: {
          name: "Имя",
          email: "Электронная почта",
          message: "Сообщение",
          submit: "Отправить"
        }
      },
      cart: {
        title: "Корзина",
        empty: "Ваша корзина пуста",
        total: "Итого",
        checkout: "Оформить заказ",
        continueShopping: "Продолжить покупки"
      },
      order: {
        title: "Подтверждение заказа",
        fullName: "Полное имя",
        phone: "Номер телефона",
        email: "Электронная почта",
        address: "Адрес доставки",
        notes: "Дополнительные примечания (необязательно)",
        submit: "Подтвердить заказ",
        success: "Спасибо! Ваш заказ получен. Скоро мы свяжемся с вами."
      },
      footer: {
        copyright: "© 2006–2025 Art Wood Design — Все права защищены",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
        delivery: "Политика доставки"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        products: "Products",
        about: "About",
        faq: "FAQ",
        contact: "Contact"
      },
      hero: {
        title: "Art Wood Design",
        subtitle: "Handcrafted wooden products created with love and perfection since 2006",
        cta1: "View Products",
        cta2: "Place an Order"
      },
      home: {
        description: "We create unique handmade furniture, wooden decorations, and personalized gifts. Each piece is crafted with care and fine detailing, blending traditional carving with modern design."
      },
      products: {
        title: "Our Products",
        chair: {
          name: "Hand-Carved Chair",
          description: "Made from natural wood with detailed engraving"
        },
        ornament: {
          name: "Decorative Table Ornament",
          description: "Stylish wood sculpture for home or office"
        },
        giftbox: {
          name: "Gift Box",
          description: "Customizable with engraving or logo"
        },
        addToCart: "Add to Cart",
        price: "Price",
        quantity: "Quantity"
      },
      about: {
        title: "About Us",
        story: "Art Wood Design has been creating handcrafted wooden art since 2006. Our master craftsman combines traditional carving techniques with modern design principles to produce durable, artistic, and customized wooden products. We use eco-friendly materials and local wood, maintaining the harmony between nature and craftsmanship.",
        certificates: "Certificates and Awards",
        cert1: "2010 – 1st Place in Local Handcraft Exhibition",
        cert2: "2014 – National Design Festival Participant",
        cert3: "2019 – International Woodcraft Expo Certificate"
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: "How long does delivery take?",
        a1: "Typically 3–14 days, depending on the product. Custom orders may take 7–30 days.",
        q2: "Can I order custom sizes or designs?",
        a2: "Yes! Just leave your details in the order modal or contact form.",
        q3: "How can I pay?",
        a3: "We accept online payments, cash on delivery, or bank transfers.",
        q4: "What if I want to return or exchange an item?",
        a4: "Returns are accepted within 14 days if there's a production defect."
      },
      contact: {
        title: "Contact Us",
        address: "Address",
        addressValue: "Tashkent, Uzbekistan",
        phone: "Phone",
        email: "Email",
        hours: "Working Hours",
        hoursValue: "Monday–Saturday, 9:00 AM – 6:00 PM",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          submit: "Submit"
        }
      },
      cart: {
        title: "Shopping Cart",
        empty: "Your cart is empty",
        total: "Total",
        checkout: "Checkout",
        continueShopping: "Continue Shopping"
      },
      order: {
        title: "Confirm Order",
        fullName: "Full Name",
        phone: "Phone Number",
        email: "Email",
        address: "Delivery Address",
        notes: "Additional Notes (optional)",
        submit: "Confirm Order",
        success: "Thank you! Your order has been received. We'll contact you soon."
      },
      footer: {
        copyright: "© 2006–2025 Art Wood Design — All rights reserved",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        delivery: "Delivery Policy"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz',
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
