import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      nav: {
        home: "Bosh sahifa",
        products: "Mahsulotlar",
        about: "Biz haqimizda",
        faq: "Savollar",
        contact: "Aloqa",
      },
      hero: {
        title: "Art Wood Design",
        subtitle:
          "2006 yildan beri mehr va mukammallik bilan yaratilgan qo'lda ishlab chiqarilgan yog'och mahsulotlari",
        cta1: "Mahsulotlarni ko'rish",
        cta2: "Buyurtma berish",
      },
      home: {
        description:
          "Biz noyob qo'lda ishlab chiqarilgan mebellar, yog'och bezaklar va shaxsiy sovg'alar yaratamiz. Har bir asar g'amxo'rlik va nozik detallarga e'tibor bilan yaratiladi, an'anaviy o'ymakorlikni zamonaviy dizayn bilan uyg'unlashtirib.",
      },
      products: {
        title: "Bizning mahsulotlar",
        chair: {
          name: "Qo'lda o'yilgan stul",
          description: "Batafsil o'ymakorlik bilan tabiiy yog'ochdan yasalgan",
          fullDescription:
            "Bu ajoyib stul mahalliy yog'ochdan qo'lda o'yilgan bo'lib, har bir detal diqqat bilan ishlov berilgan. An'anaviy hunarmandchilik zamonaviy dizayn bilan uyg'unlashgan holda, uyingizga nafis va bardoshli qo'shimcha bo'ladi.",
        },
        ornament: {
          name: "Dekorativ stol bezagi",
          description: "Uy yoki ofis uchun zamonaviy yog'och haykal",
          fullDescription:
            "Zamonaviy va an'anaviy uslublarni birlashtirgan bu dekorativ bezak har qanday xonaga noyob charm qo'shadi. Yuqori sifatli yog'ochdan yasalgan va mukammal yakunlangan.",
        },
        giftbox: {
          name: "Sovg'a qutisi",
          description: "O'ymakorlik yoki logotip bilan moslashtiriladi",
          fullDescription:
            "Premium yog'ochdan yasalgan moslashtirilgan sovg'a qutisi. Shaxsiy xabarlar, logotiplar yoki naqshlar bilan personalizatsiya qilish mumkin. Maxsus tadbirlar uchun mukammal.",
        },
        addToCart: "Savatga qo'shish",
        price: "Narx",
        quantity: "Miqdor",
      },
      productDetail: {
        backToProducts: "Mahsulotlarga qaytish",
        notFound: "Mahsulot topilmadi",
        addedToCart: "savatga qo'shildi",
      },
      about: {
        title: "Biz haqimizda",
        story:
          "Art Wood Design 2006 yildan beri qo'lda ishlab chiqarilgan yog'och san'atini yaratib kelmoqda. Bizning usta hunarmand an'anaviy o'ymakorlik texnikalarini zamonaviy dizayn tamoyillari bilan birlashtirib, bardoshli, badiiy va moslashtirilgan yog'och mahsulotlarini ishlab chiqaradi. Biz ekologik toza materiallar va mahalliy yog'ochdan foydalanamiz, tabiat va hunarmandchilik o'rtasidagi uyg'unlikni saqlab qolamiz.",
        certificates: "Sertifikatlar va mukofotlar",
        cert1: "2010 - Mahalliy qo'l san'ati ko'rgazmasida 1-o'rin",
        cert2: "2014 - Milliy dizayn festivali ishtirokchisi",
        cert3: "2019 - Xalqaro yog'och san'ati ko'rgazmasi sertifikati",
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
        a4: "Ishlab chiqarish xatoligi bo'lgan taqdirda 14 kun ichida qaytarish mumkin.",
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
          submit: "Yuborish",
        },
      },
      cart: {
        title: "Savat",
        empty: "Savatingiz bo'sh",
        total: "Jami",
        checkout: "Buyurtma berish",
        continueShopping: "Xarid davom ettirish",
      },
      order: {
        title: "Buyurtmani tasdiqlash",
        fullName: "To'liq ism",
        phone: "Telefon raqam",
        email: "Email",
        address: "Manzil",
        notes: "Qo'shimcha eslatmalar (ixtiyoriy)",
        submit: "Buyurtmani tasdiqlash",
        success:
          "Rahmat! Buyurtmangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.",
        acceptOferta:
          "Men Ommaviy Oferta va Shaxsiy ma'lumotlarni qayta ishlashga rozi bo‘laman",
        ofertaLink: "Ommaviy Oferta",
        ofertaText: `
📄 OMMAVIY OFERTA VA SHAXSIY MA’LUMOTLARNI QAYTA ISHLASHGA ROZILIK

Ushbu hujjat O‘zbekiston Respublikasi Fuqarolik kodeksi, “Elektron tijorat to‘g‘risida”gi Qonun hamda “Shaxsga doir ma’lumotlar to‘g‘risida”gi Qonunga muvofiq, [Sizning kompaniya/loyiha nomi] tomonidan e’lon qilingan ommaviy oferta hisoblanadi.

1. Umumiy qoidalar
1.1. Ushbu hujjat foydalanuvchi (keyinchalik – “Mijoz”) va [Kompaniya nomi] (keyinchalik – “Ijrochi”) o‘rtasidagi huquqiy munosabatlarni belgilaydi.
1.2. Mijoz sayt orqali o‘z shaxsiy ma’lumotlarini kiritish va “Roziman” tugmasini bosish orqali ushbu ofertaga to‘liq qo‘shilgan hisoblanadi.

2. Ma’lumotlarni yig‘ish va ishlatish
2.1. Mijoz o‘zining quyidagi ma’lumotlarini taqdim etishi mumkin: ism-sharif, telefon raqami, elektron pochta manzili, manzil va boshqa zaruriy ma’lumotlar.
2.2. Ushbu ma’lumotlar faqat quyidagi maqsadlarda ishlatiladi:
xizmat ko‘rsatish va aloqa o‘rnatish;
mijozga yangiliklar, chegirmalar va takliflarni yuborish;
xizmat sifatini oshirish va ichki tahlillar o‘tkazish.

3. Ma’lumotlarni himoya qilish
3.1. Ijrochi Mijozning shaxsiy ma’lumotlarini uchinchi shaxslarga bermaslik majburiyatini oladi, bundan qonunda nazarda tutilgan holatlar mustasno.
3.2. Ma’lumotlar maxfiy saqlanadi va ruxsatsiz foydalanishdan himoya qilinadi.

4. Mijozning huquqlari
4.1. Mijoz o‘z shaxsiy ma’lumotlarini o‘zgartirish, yangilash yoki ularni o‘chirib tashlashni talab qilish huquqiga ega.
4.2. Mijoz istalgan vaqtda info@[kompaniya nomi].uz elektron manziliga murojaat qilib, shaxsiy ma’lumotlarini qayta ishlashga bergan roziligini bekor qilishi mumkin.

5. Yakuniy qoidalar
5.1. Ushbu oferta saytga joylashtirilgan paytdan boshlab kuchga kiradi va cheklanmagan muddat davomida amal qiladi.
5.2. Mijoz tomonidan ma’lumotlarni kiritish va “Roziman” tugmasini bosish – ushbu hujjatning barcha shartlariga rozilik berish demakdir.

❗️Tavsiya: Saytingizda alohida sahifa ochib (masalan: oferta.html yoki privacy.html), ushbu matnni joylashtiring va mijozlar forma to‘ldirganda “Roziman” chekbox qo‘ying. Shunda huquqiy tomondan sizni himoya qiladi.
`,
      },
      footer: {
        copyright: "© 2006–2025 Art Wood Design - Barcha huquqlar himoyalangan",
        privacy: "Maxfiylik siyosati",
        terms: "Foydalanish shartlari",
        delivery: "Yetkazib berish siyosati",
      },
    },
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        products: "Продукты",
        about: "О нас",
        faq: "Вопросы",
        contact: "Контакты",
      },
      hero: {
        title: "Art Wood Design",
        subtitle:
          "Изделия ручной работы из дерева, созданные с любовью и совершенством с 2006 года",
        cta1: "Посмотреть продукты",
        cta2: "Разместить заказ",
      },
      home: {
        description:
          "Мы создаем уникальную мебель ручной работы, деревянные украшения и персонализированные подарки. Каждое изделие создается с заботой и вниманием к деталям, сочетая традиционную резьбу с современным дизайном.",
      },
      products: {
        title: "Наши продукты",
        chair: {
          name: "Резной стул ручной работы",
          description: "Из натурального дерева с детальной резьбой",
          fullDescription:
            "Этот красивый стул вручную вырезан из местной древесины с тщательно проработанной каждой деталью. Сочетая традиционное мастерство с современным дизайном, он станет элегантным и долговечным дополнением к вашему дому.",
        },
        ornament: {
          name: "Декоративное украшение для стола",
          description: "Стильная деревянная скульптура для дома или офиса",
          fullDescription:
            "Это декоративное украшение сочетает современный и традиционный стили, добавляя уникальный шарм в любую комнату. Изготовлено из высококачественного дерева с безупречной отделкой.",
        },
        giftbox: {
          name: "Подарочная коробка",
          description: "С гравировкой или логотипом на заказ",
          fullDescription:
            "Персонализированная подарочная коробка из премиального дерева. Может быть персонализирована личными сообщениями, логотипами или узорами. Идеально для особых случаев.",
        },
        addToCart: "В корзину",
        price: "Цена",
        quantity: "Количество",
      },
      productDetail: {
        backToProducts: "Вернуться к продуктам",
        notFound: "Продукт не найден",
        addedToCart: "добавлен в корзину",
      },
      about: {
        title: "О нас",
        story:
          "Art Wood Design создает деревянное искусство ручной работы с 2006 года. Наш мастер сочетает традиционные техники резьбы с современными принципами дизайна для производства долговечных, художественных и индивидуальных изделий из дерева. Мы используем экологически чистые материалы и местную древесину, поддерживая гармонию между природой и мастерством.",
        certificates: "Сертификаты и награды",
        cert1: "2010 – 1-е место на местной выставке ремесел",
        cert2: "2014 – Участник национального дизайн-фестиваля",
        cert3: "2019 – Сертификат международной выставки деревянного искусства",
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
        a4: "Возврат принимается в течение 14 дней при производственном браке.",
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
          submit: "Отправить",
        },
      },
      cart: {
        title: "Корзина",
        empty: "Ваша корзина пуста",
        total: "Итого",
        checkout: "Оформить заказ",
        continueShopping: "Продолжить покупки",
      },
      order: {
        title: "Подтверждение заказа",
        fullName: "Полное имя",
        phone: "Номер телефона",
        email: "Электронная почта",
        address: "Адрес",
        notes: "Дополнительные примечания (необязательно)",
        submit: "Подтвердить заказ",
        success: "Спасибо! Ваш заказ получен. Скоро мы свяжемся с вами.",
      },
      footer: {
        copyright: "© 2006–2025 Art Wood Design — Все права защищены",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
        delivery: "Политика доставки",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        products: "Products",
        about: "About",
        faq: "FAQ",
        contact: "Contact",
      },
      hero: {
        title: "Art Wood Design",
        subtitle:
          "Handcrafted wooden products created with love and perfection since 2006",
        cta1: "View Products",
        cta2: "Place an Order",
      },
      home: {
        description:
          "We create unique handmade furniture, wooden decorations, and personalized gifts. Each piece is crafted with care and fine detailing, blending traditional carving with modern design.",
      },
      products: {
        title: "Our Products",
        chair: {
          name: "Hand-Carved Chair",
          description: "Made from natural wood with detailed engraving",
          fullDescription:
            "This beautiful chair is hand-carved from local wood with every detail carefully crafted. Combining traditional craftsmanship with modern design, it makes an elegant and durable addition to your home.",
        },
        ornament: {
          name: "Decorative Table Ornament",
          description: "Stylish wood sculpture for home or office",
          fullDescription:
            "This decorative piece blends contemporary and traditional styles, adding unique charm to any room. Crafted from high-quality wood with a perfect finish.",
        },
        giftbox: {
          name: "Gift Box",
          description: "Customizable with engraving or logo",
          fullDescription:
            "A customizable gift box made from premium wood. Can be personalized with messages, logos, or patterns. Perfect for special occasions.",
        },
        addToCart: "Add to Cart",
        price: "Price",
        quantity: "Quantity",
      },
      productDetail: {
        backToProducts: "Back to Products",
        notFound: "Product not found",
        addedToCart: "added to cart",
      },
      about: {
        title: "About Us",
        story:
          "Art Wood Design has been creating handcrafted wooden art since 2006. Our master craftsman combines traditional carving techniques with modern design principles to produce durable, artistic, and customized wooden products. We use eco-friendly materials and local wood, maintaining the harmony between nature and craftsmanship.",
        certificates: "Certificates and Awards",
        cert1: "2010 – 1st Place in Local Handcraft Exhibition",
        cert2: "2014 – National Design Festival Participant",
        cert3: "2019 – International Woodcraft Expo Certificate",
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
        a4: "Returns are accepted within 14 days if there's a production defect.",
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
          submit: "Submit",
        },
      },
      cart: {
        title: "Shopping Cart",
        empty: "Your cart is empty",
        total: "Total",
        checkout: "Checkout",
        continueShopping: "Continue Shopping",
      },
      order: {
        title: "Confirm Order",
        fullName: "Full Name",
        phone: "Phone Number",
        email: "Email",
        address: "Address",
        notes: "Additional Notes (optional)",
        submit: "Confirm Order",
        success:
          "Thank you! Your order has been received. We'll contact you soon.",
      },
      footer: {
        copyright: "© 2006–2025 Art Wood Design — All rights reserved",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        delivery: "Delivery Policy",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
