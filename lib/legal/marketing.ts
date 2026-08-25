import type { Metadata } from "next";
import type { BiText } from "./types";

export interface MarketingPageContent {
  slug: string;
  eyebrow: BiText;
  title: BiText;
  lede: BiText;
  body: BiText;
  ctaPrimary?: { href: string; label: BiText };
  ctaSecondary?: { href: string; label: BiText };
  draft?: boolean;
}

/**
 * Standalone marketing and support routes. These are real pages with bilingual
 * copy so the Footer can link to live URLs. Full long-form content will be
 * added per-page over time; this stub structure prevents 404s and exposes
 * canonical URLs to search engines and external partners.
 */
export const MARKETING_PAGES: MarketingPageContent[] = [
  {
    slug: "contact",
    eyebrow: { en: "Contact", ar: "تواصل" },
    title: { en: "Talk to a human", ar: "تحدّث مع إنسان" },
    lede: {
      en: "Sales, support, partnerships, press, or legal — pick the team that fits your question.",
      ar: "المبيعات، الدعم، الشراكات، الصحافة، أو الجانب القانوني — اختر الفريق المناسب لسؤالك.",
    },
    body: {
      en: "Email general@shotstudio.ai for general inquiries, sales@shotstudio.ai for plans and quotes, support@shotstudio.ai for help with your account, legal@shotstudio.ai for legal notices, dpo@shotstudio.ai for privacy requests, and security@shotstudio.ai for vulnerability reports.",
      ar: "راسِل general@shotstudio.ai للاستفسارات العامة، و sales@shotstudio.ai للخطط والعروض، و support@shotstudio.ai للمساعدة بحسابك، و legal@shotstudio.ai للإشعارات القانونية، و dpo@shotstudio.ai لطلبات الخصوصية، و security@shotstudio.ai لتقارير الثغرات.",
    },
    ctaPrimary: {
      href: "mailto:general@shotstudio.ai",
      label: { en: "Email us", ar: "راسِلنا" },
    },
  },
  {
    slug: "pricing",
    eyebrow: { en: "Pricing", ar: "الأسعار" },
    title: {
      en: "Simple, credit-based pricing",
      ar: "أسعار بسيطة قائمة على الأرصدة",
    },
    lede: {
      en: "Free monthly credits, predictable subscription tiers, and team plans for agencies.",
      ar: "أرصدة مجانية شهرية، باقات اشتراك واضحة، وخطط فِرَق للوكالات.",
    },
    body: {
      en: "Full pricing details live on the home page pricing section. Egyptian customers see VAT-inclusive pricing at checkout. EU customers see VAT broken out per local rate.",
      ar: "تفاصيل الأسعار كاملة في قسم الأسعار بالصفحة الرئيسية. يرى العملاء المصريون السعر شاملاً ضريبة القيمة المضافة عند الدفع. يرى عملاء الاتحاد الأوروبي ضريبة القيمة المضافة مفصّلة حسب المعدّل المحلي.",
    },
    ctaPrimary: { href: "/", label: { en: "See pricing", ar: "اعرض الأسعار" } },
  },
  {
    slug: "help",
    eyebrow: { en: "Help Center", ar: "مركز المساعدة" },
    title: { en: "How can we help?", ar: "كيف يمكننا المساعدة؟" },
    lede: {
      en: "Guides, walkthroughs, and answers to common questions across all 17 services.",
      ar: "أدلّة، شروحات، وإجابات للأسئلة الشائعة عبر الخدمات الـ17.",
    },
    body: {
      en: "Detailed Help Center articles are rolling out per service. In the meantime, contact support@shotstudio.ai and a real human will reply within one business day.",
      ar: "نُصدِر مقالات مركز المساعدة تباعاً لكل خدمة. في غضون ذلك، راسِل support@shotstudio.ai وسيردّ عليك إنسان حقيقي خلال يوم عمل واحد.",
    },
    draft: true,
  },
  {
    slug: "faq",
    eyebrow: { en: "FAQ", ar: "الأسئلة الشائعة" },
    title: { en: "Frequently asked questions", ar: "الأسئلة الأكثر شيوعاً" },
    lede: {
      en: "Quick answers about credits, plans, AI ownership, and refunds.",
      ar: "إجابات سريعة عن الأرصدة، الخطط، ملكية الذكاء الاصطناعي، والاسترداد.",
    },
    body: {
      en: "Our top FAQ topics: monthly credit rollover, switching plans mid-cycle, downloading high-resolution outputs, refund eligibility under Egyptian Consumer Law and EU rules, and using outputs commercially.",
      ar: "أبرز أسئلتنا الشائعة: ترحيل الأرصدة الشهرية، تغيير الخطة في منتصف الدورة، تنزيل المخرجات بدقّة عالية، شروط الاسترداد بموجب قانون حماية المستهلك المصري ولوائح الاتحاد الأوروبي، واستخدام المخرجات تجارياً.",
    },
    draft: true,
  },
  {
    slug: "careers",
    eyebrow: { en: "Careers", ar: "الوظائف" },
    title: {
      en: "Build the next generation of e-commerce tools",
      ar: "ابنِ الجيل القادم من أدوات التجارة الإلكترونية",
    },
    lede: {
      en: "ShotStudio is a remote-first team building AI tools for the MENA e-commerce ecosystem.",
      ar: "سناب برو فريق يعمل عن بُعد يبني أدوات ذكاء اصطناعي لمنظومة التجارة الإلكترونية في الشرق الأوسط وشمال إفريقيا.",
    },
    body: {
      en: "Active openings publish here. To express interest before we list a role, send your CV and portfolio to careers@shotstudio.ai.",
      ar: "تُنشر الوظائف المفتوحة هنا. للتعبير عن اهتمامك قبل إعلان دور محدد، أرسل سيرتك الذاتية ومعرض أعمالك إلى careers@shotstudio.ai.",
    },
  },
  {
    slug: "press",
    eyebrow: { en: "Press", ar: "الصحافة" },
    title: { en: "Press & media kit", ar: "الصحافة والمواد الإعلامية" },
    lede: {
      en: "Logos, brand guidelines, founder bios, and product screenshots for journalists and analysts.",
      ar: "الشعارات، إرشادات العلامة، نُبَذ المؤسّسين، ولقطات المنتج للصحفيين والمحلّلين.",
    },
    body: {
      en: "Reporters covering AI in MENA e-commerce can email press@shotstudio.ai for interviews, embargoes, and figures.",
      ar: "للصحفيين الذين يُغطّون الذكاء الاصطناعي في تجارة الشرق الأوسط الإلكترونية: راسِلنا على press@shotstudio.ai للمقابلات والتغطية الحصرية والأرقام.",
    },
    draft: true,
  },
  {
    slug: "partners",
    eyebrow: { en: "Partners", ar: "الشركاء" },
    title: { en: "Partner with ShotStudio", ar: "كُن شريكاً مع سناب برو" },
    lede: {
      en: "Agency, platform, and reseller partnerships across MENA.",
      ar: "شراكات وكالات، منصّات، ومُعيدي بيع عبر الشرق الأوسط وشمال إفريقيا.",
    },
    body: {
      en: "Apply via partners@shotstudio.ai. We respond within 5 business days with next steps and a partnership tier proposal.",
      ar: "قدِّم طلبك عبر partners@shotstudio.ai. نردّ خلال 5 أيام عمل بالخطوات التالية ومستوى شراكة مقترح.",
    },
    draft: true,
  },
  {
    slug: "affiliates",
    eyebrow: { en: "Affiliates", ar: "المسوّقون بالعمولة" },
    title: { en: "Affiliate program", ar: "برنامج التسويق بالعمولة" },
    lede: {
      en: "Earn a recurring share of subscription revenue for sellers you refer.",
      ar: "احصل على نسبة متكرّرة من إيرادات اشتراك البائعين الذين تُحيلهم.",
    },
    body: {
      en: "Launching soon. Pre-register at affiliates@shotstudio.ai to be notified when the program opens.",
      ar: "قريباً. سجّل اهتمامك على affiliates@shotstudio.ai ليتمّ إخطارك عند فتح البرنامج.",
    },
    draft: true,
  },
  {
    slug: "integrations",
    eyebrow: { en: "Integrations", ar: "التكاملات" },
    title: {
      en: "Connect ShotStudio to your stack",
      ar: "اربط سناب برو بأدواتك",
    },
    lede: {
      en: "Native integrations with Shopify, WooCommerce, Salla, Zid, Bonat, and more.",
      ar: "تكاملات أصلية مع Shopify و WooCommerce وسلّة وزِد وبونات والمزيد.",
    },
    body: {
      en: "See the Integrations section on the home page for the live list. Need an integration not shown? Email product@shotstudio.ai.",
      ar: "اطّلع على قسم التكاملات في الصفحة الرئيسية للقائمة الحيّة. تحتاج تكاملاً غير معروض؟ راسِل product@shotstudio.ai.",
    },
  },
  {
    slug: "changelog",
    eyebrow: { en: "Changelog", ar: "سجلّ التحديثات" },
    title: { en: "What's new", ar: "ما الجديد" },
    lede: {
      en: "Product updates, new services, performance improvements, and policy changes.",
      ar: "تحديثات المنتج، خدمات جديدة، تحسينات الأداء، وتعديلات السياسات.",
    },
    body: {
      en: "Weekly entries describe shipped changes, including any updates to AI providers, pricing, or terms.",
      ar: "تشرح المداخل الأسبوعية ما تمّ إصداره، بما في ذلك أي تحديثات على مزوّدي الذكاء الاصطناعي، الأسعار، أو الشروط.",
    },
    draft: true,
  },
  {
    slug: "roadmap",
    eyebrow: { en: "Roadmap", ar: "خارطة الطريق" },
    title: { en: "What we're building next", ar: "ما الذي نبنيه تالياً" },
    lede: {
      en: "A transparent view of features, integrations, and compliance milestones in flight.",
      ar: "رؤية شفّافة للميزات والتكاملات ومحطّات الامتثال قيد التنفيذ.",
    },
    body: {
      en: "Roadmap items are not commitments and may change. Major compliance milestones (SOC 2, ISO 27001) are tracked on the Compliance Center page.",
      ar: "بنود خارطة الطريق ليست تعهّدات وقد تتغيّر. تُتابَع المحطّات الرئيسية للامتثال (SOC 2 و ISO 27001) في صفحة مركز الامتثال.",
    },
    draft: true,
  },
  {
    slug: "blog",
    eyebrow: { en: "Blog", ar: "المدوّنة" },
    title: {
      en: "Notes from the ShotStudio team",
      ar: "ملاحظات من فريق سناب برو",
    },
    lede: {
      en: "Behind-the-scenes posts on AI in e-commerce, prompt craft, and ShotStudio engineering.",
      ar: "تدوينات من خلف الكواليس حول الذكاء الاصطناعي في التجارة الإلكترونية، صياغة الموجِّهات، وهندسة سناب برو.",
    },
    body: {
      en: "First articles publish soon. Subscribe in the footer to get them by email.",
      ar: "تُنشَر أولى المقالات قريباً. اشترك في النشرة من تذييل الموقع لتصلك بالبريد.",
    },
    draft: true,
  },
  {
    slug: "tutorials",
    eyebrow: { en: "Tutorials", ar: "الدروس" },
    title: { en: "Video tutorials", ar: "دروس مرئية" },
    lede: {
      en: "Short, focused tutorials for each ShotStudio service.",
      ar: "دروس قصيرة ومُركّزة لكل خدمة من خدمات سناب برو.",
    },
    body: {
      en: "Production is in progress. Until then, see the in-app tooltips and the Help Center for written walkthroughs.",
      ar: "الإنتاج جارٍ. حتى ذلك الحين، راجع التلميحات داخل التطبيق ومركز المساعدة للشروحات المكتوبة.",
    },
    draft: true,
  },
  {
    slug: "community",
    eyebrow: { en: "Community", ar: "المجتمع" },
    title: {
      en: "Join the ShotStudio community",
      ar: "انضمّ إلى مجتمع سناب برو",
    },
    lede: {
      en: "Share prompts, discover use-cases, and request features alongside other sellers.",
      ar: "شارك الموجِّهات، اكتشف حالات الاستخدام، واطلب الميزات مع بائعين آخرين.",
    },
    body: {
      en: "Community channels (Discord, WhatsApp groups by region) launch with public beta. Email community@shotstudio.ai to be invited early.",
      ar: "تنطلق قنوات المجتمع (Discord ومجموعات واتساب حسب المنطقة) مع النسخة التجريبية العامة. راسِل community@shotstudio.ai للحصول على دعوة مبكرة.",
    },
    draft: true,
  },
  {
    slug: "accessibility",
    eyebrow: { en: "Accessibility", ar: "إمكانية الوصول" },
    title: { en: "Accessibility statement", ar: "بيان إمكانية الوصول" },
    lede: {
      en: "Our commitment to WCAG 2.2 AA and to continuously improving access for users with disabilities.",
      ar: "التزامنا بمعيار WCAG 2.2 AA والتحسين المستمرّ للوصول للمستخدمين ذوي الإعاقات.",
    },
    body: {
      en: "We audit ShotStudio against WCAG 2.2 AA. Report accessibility issues to accessibility@shotstudio.ai and we will respond within 5 business days with a remediation plan.",
      ar: "نراجع سناب برو وفقاً لمعيار WCAG 2.2 AA. أبلِغ عن أي مشكلات في الوصول إلى accessibility@shotstudio.ai وسنردّ خلال 5 أيام عمل بخطة معالجة.",
    },
    draft: true,
  },
  {
    slug: "customers",
    eyebrow: { en: "Customers", ar: "العملاء" },
    title: { en: "Customer stories", ar: "قصص العملاء" },
    lede: {
      en: "How sellers across MENA use ShotStudio to ship faster and convert better.",
      ar: "كيف يستخدم البائعون عبر الشرق الأوسط سناب برو لإصدار محتواهم أسرع وتحقيق تحويل أفضل.",
    },
    body: {
      en: "Case studies publish here. To nominate your store, email stories@shotstudio.ai.",
      ar: "تُنشَر دراسات الحالة هنا. لترشيح متجرك، راسِل stories@shotstudio.ai.",
    },
    draft: true,
  },
  {
    slug: "enterprise",
    eyebrow: { en: "Enterprise", ar: "المؤسّسات" },
    title: {
      en: "Enterprise & high-volume",
      ar: "المؤسّسات والاستخدام المرتفع",
    },
    lede: {
      en: "Volume credits, SLAs, SSO, and dedicated procurement for retailers and brands.",
      ar: "أرصدة بكميات كبيرة، اتفاقيات مستوى خدمة، تسجيل دخول موحّد، ومسار مشتريات مخصّص للمتاجر والعلامات التجارية.",
    },
    body: {
      en: "Email sales@shotstudio.ai to request a custom quote, vendor questionnaire, or DPA. Typical onboarding is 2-4 weeks.",
      ar: "راسِل sales@shotstudio.ai لطلب عرض سعر مخصّص أو استبيان مورّد أو اتفاقية معالجة بيانات. عادةً ما يستغرق التأهيل من 2 إلى 4 أسابيع.",
    },
  },
  {
    slug: "sitemap",
    eyebrow: { en: "Sitemap", ar: "خريطة الموقع" },
    title: { en: "Sitemap", ar: "خريطة الموقع" },
    lede: {
      en: "Every public page on shotstudio.ai, in one place.",
      ar: "كل الصفحات العامّة في shotstudio.ai، في مكان واحد.",
    },
    body: {
      en: "A human-readable site index will replace this stub. The machine-readable sitemap.xml is generated by Next.js at /sitemap.xml.",
      ar: "سيُستبدل هذا الموجز بفهرس قابل للقراءة من البشر. أمّا الملف الآلي sitemap.xml فيتم توليده تلقائياً على /sitemap.xml.",
    },
    draft: true,
  },
  {
    slug: "status",
    eyebrow: { en: "Status", ar: "حالة الخدمة" },
    title: { en: "System status", ar: "حالة النظام" },
    lede: {
      en: "Real-time uptime for shotstudio.ai, the API, and queued AI jobs.",
      ar: "حالة تشغيل لحظيّة لـ shotstudio.ai وواجهة البرمجة وطوابير مهام الذكاء الاصطناعي.",
    },
    body: {
      en: "Hosted status page launching with public beta. Subscribe to incident emails at status@shotstudio.ai.",
      ar: "صفحة حالة مستضافة تنطلق مع النسخة التجريبية العامة. اشترك بإشعارات الحوادث على status@shotstudio.ai.",
    },
    draft: true,
  },
];

export function getMarketingPage(
  slug: string,
): MarketingPageContent | undefined {
  return MARKETING_PAGES.find((p) => p.slug === slug);
}

/**
 * Build Next.js Metadata for a marketing stub page. Pages flagged `draft: true`
 * are kept out of search indexes until they ship real content, so we don't
 * leak placeholders into Google. Real pages get standard title + description.
 */
export function getMarketingMetadata(slug: string): Metadata {
  const page = getMarketingPage(slug);
  if (!page) return {};
  return {
    title: `${page.title.en} — ShotStudio`,
    description: page.lede.en,
    ...(page.draft ? { robots: { index: false, follow: false } } : {}),
  };
}
