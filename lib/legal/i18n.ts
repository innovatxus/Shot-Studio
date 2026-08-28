/**
 * UI chrome strings used by the locale switcher, draft banners, regional strip,
 * and footer columns. Page-level body content lives in `lib/legal/content/*`.
 */

export type Locale = "en" | "ar";

export const LOCALE_STORAGE_KEY = "snap-locale";

export const DIR: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

export const LANG_LABEL: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

export const UI = {
  draftBanner: {
    title: {
      en: "Draft — pending legal review",
      ar: "مسودة — قيد المراجعة القانونية",
    },
    body: {
      en: "This page is a structural draft prepared by ShotStudio. Final copy will be published after review by qualified counsel and is not legally binding in this preview state.",
      ar: "هذه الصفحة مسودة هيكلية أعدّتها سناب برو. سيتم نشر الصياغة النهائية بعد مراجعتها من قِبل مستشار قانوني مختص، وهي غير ملزِمة قانونياً في هذه الحالة الأولية.",
    },
  },
  lastReviewed: { en: "Last reviewed", ar: "آخر مراجعة" },
  effective: { en: "Effective", ar: "ساري المفعول" },
  contents: { en: "On this page", ar: "في هذه الصفحة" },
  related: { en: "Related", ar: "ذات صلة" },
  primaryCTA: { en: "Continue", ar: "متابعة" },
  switcher: {
    aria: { en: "Change language", ar: "تغيير اللغة" },
    en: { en: "English", ar: "الإنجليزية" },
    ar: { en: "Arabic", ar: "العربية" },
  },
  footer: {
    headings: {
      product: { en: "Product", ar: "المنتج" },
      solutions: { en: "Solutions", ar: "الحلول" },
      resources: { en: "Resources", ar: "المصادر" },
      support: { en: "Support", ar: "الدعم" },
      company: { en: "Company", ar: "الشركة" },
      trustLegal: { en: "Trust & Legal", ar: "الثقة والقانونية" },
    },
    newsletter: {
      eyebrow: { en: "Stay in the loop", ar: "ابقَ على اطلاع" },
      placeholder: { en: "you@business.com", ar: "بريدك@عملك.كوم" },
      cta: { en: "Subscribe", ar: "اشترك" },
      consent: {
        en: "By subscribing you accept our Privacy Policy and Cookie Policy.",
        ar: "بالاشتراك، فإنك توافق على سياسة الخصوصية وسياسة ملفات تعريف الارتباط.",
      },
    },
    regional: {
      title: { en: "Regional disclosures", ar: "إفصاحات إقليمية" },
      egypt: {
        en: "Egypt: PDPL Notice · Commercial Registration · VAT",
        ar: "مصر: إشعار قانون حماية البيانات · السجل التجاري · ضريبة القيمة المضافة",
      },
      iraq: {
        en: "Iraq: Consumer Rights · E-commerce Disclosure",
        ar: "العراق: حقوق المستهلك · إفصاح التجارة الإلكترونية",
      },
      global: {
        en: "Global: International Transfers · Government Requests",
        ar: "عالمياً: نقل البيانات الدولي · طلبات الحكومات",
      },
    },
    rights: {
      en: "All rights reserved",
      ar: "جميع الحقوق محفوظة",
    },
    statusOk: { en: "All systems normal", ar: "جميع الأنظمة طبيعية" },
  },
  consent: {
    eyebrow: { en: "Cookies & data", ar: "ملفات تعريف الارتباط والبيانات" },
    title: {
      en: "Your privacy, your call.",
      ar: "خصوصيتك بيدك.",
    },
    body: {
      en: "We use essential cookies to make ShotStudio work. With your consent we may also use analytics to understand usage and marketing to improve outreach. You can change this anytime from the footer.",
      ar: "نستخدم ملفات تعريف ارتباط أساسية لتشغيل سناب برو. وبموافقتك قد نستخدم أيضاً تحليلات لفهم الاستخدام وتسويقاً لتحسين التواصل. يمكنك تغيير ذلك في أي وقت من تذييل الصفحة.",
    },
    accept: { en: "Accept all", ar: "قبول الكل" },
    reject: { en: "Reject non-essential", ar: "رفض غير الأساسي" },
    manage: { en: "Manage", ar: "إدارة" },
    save: { en: "Save preferences", ar: "حفظ التفضيلات" },
    learnMore: { en: "Read our Cookie Policy", ar: "اقرأ سياسة الكوكيز" },
    categories: {
      essential: {
        title: { en: "Essential", ar: "أساسي" },
        body: {
          en: "Required for the site to function. Cannot be disabled.",
          ar: "ضرورية لعمل الموقع. لا يمكن تعطيلها.",
        },
      },
      analytics: {
        title: { en: "Analytics", ar: "التحليلات" },
        body: {
          en: "Helps us understand which pages and tools are useful so we can improve them.",
          ar: "تساعدنا على فهم أي الصفحات والأدوات مفيدة لتحسينها.",
        },
      },
      marketing: {
        title: { en: "Marketing", ar: "التسويق" },
        body: {
          en: "Lets us show you relevant updates and measure the success of our campaigns.",
          ar: "تتيح لنا عرض تحديثات ذات صلة وقياس نجاح حملاتنا.",
        },
      },
    },
    footerLink: {
      en: "Cookie preferences",
      ar: "تفضيلات الكوكيز",
    },
  },
} as const;
