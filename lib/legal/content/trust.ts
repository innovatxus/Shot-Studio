import type { LegalPage } from "../types";

export const TRUST_PAGES: LegalPage[] = [
  {
    slug: "index",
    tree: "trust",
    status: "final",
    title: { en: "Trust Center — ShotStudio", ar: "مركز الثقة — سناب برو" },
    meta: {
      en: "ShotStudio's Trust Center: security, compliance, privacy commitments, sub-processors, status, and incident response.",
      ar: "مركز الثقة في سناب برو: الأمن، الامتثال، التزامات الخصوصية، المعالجون الفرعيون، حالة الخدمة، والاستجابة للحوادث.",
    },
    h1: { en: "Trust Center", ar: "مركز الثقة" },
    summary: {
      en: "Everything procurement, security, and privacy teams need to evaluate ShotStudio — in one place.",
      ar: "كل ما تحتاجه فرق المشتريات والأمن والخصوصية لتقييم سناب برو — في مكان واحد.",
    },
    sections: [
      {
        id: "links",
        heading: { en: "Quick links", ar: "روابط سريعة" },
        bullets: {
          en: [
            "Security Overview",
            "Compliance Center",
            "Vulnerability Disclosure",
            "Incident Response",
            "Business Continuity",
            "DPA",
            "Sub-processors",
            "Status",
          ],
          ar: [
            "نظرة عامة على الأمن",
            "مركز الامتثال",
            "الإفصاح عن الثغرات",
            "الاستجابة للحوادث",
            "استمرارية الأعمال",
            "اتفاقية معالجة البيانات",
            "المعالجون الفرعيون",
            "الحالة",
          ],
        },
      },
    ],
  },
  {
    slug: "security",
    tree: "trust",
    status: "final",
    title: {
      en: "Security Overview — ShotStudio",
      ar: "نظرة عامة على الأمن — سناب برو",
    },
    meta: {
      en: "Encryption, access control, perimeter, application security, vendor management, and physical security measures at ShotStudio.",
      ar: "التشفير، التحكم بالوصول، حماية المحيط، أمن التطبيقات، إدارة الموردين، والأمن المادي في سناب برو.",
    },
    h1: { en: "Security Overview", ar: "نظرة عامة على الأمن" },
    sections: [
      {
        id: "encryption",
        heading: { en: "Encryption", ar: "التشفير" },
        bullets: {
          en: [
            "TLS 1.3 in transit",
            "AES-256 at rest",
            "HSM-backed key management",
          ],
          ar: [
            "TLS 1.3 أثناء النقل",
            "AES-256 أثناء التخزين",
            "إدارة مفاتيح بدعم وحدات HSM",
          ],
        },
      },
      {
        id: "access",
        heading: { en: "Access control", ar: "التحكم بالوصول" },
        bullets: {
          en: [
            "MFA mandatory for staff",
            "RBAC + least privilege",
            "Quarterly access reviews",
            "SSO / SAML for enterprise customers (roadmap)",
          ],
          ar: [
            "مصادقة ثنائية إلزامية للموظفين",
            "تحكم RBAC وفق الحد الأدنى من الصلاحيات",
            "مراجعات وصول ربع سنوية",
            "تسجيل دخول موحّد SSO/SAML لعملاء الشركات (خارطة الطريق)",
          ],
        },
      },
      {
        id: "perimeter",
        heading: { en: "Perimeter", ar: "المحيط" },
        bullets: {
          en: ["Cloudflare WAF + DDoS", "Rate limiting", "Bot management"],
          ar: [
            "جدار حماية Cloudflare ومنع DDoS",
            "تحديد معدّل الطلبات",
            "إدارة البوتات",
          ],
        },
      },
      {
        id: "appsec",
        heading: { en: "Application security", ar: "أمن التطبيقات" },
        bullets: {
          en: [
            "SDLC with mandatory code review",
            "Automated dependency scanning",
            "Annual third-party penetration test",
          ],
          ar: [
            "دورة تطوير آمنة مع مراجعة الكود الإلزامية",
            "فحص تبعيات آلي",
            "اختبار اختراق سنوي من طرف ثالث",
          ],
        },
      },
      {
        id: "people",
        heading: { en: "People security", ar: "أمن الأفراد" },
        bullets: {
          en: [
            "Background checks",
            "Annual security training",
            "Confidentiality agreements",
          ],
          ar: ["تحقّق من الخلفيات", "تدريب أمني سنوي", "اتفاقيات سريّة"],
        },
      },
    ],
  },
  {
    slug: "compliance",
    tree: "trust",
    status: "final",
    title: {
      en: "Compliance Center — ShotStudio",
      ar: "مركز الامتثال — سناب برو",
    },
    meta: {
      en: "ShotStudio's compliance roadmap and current alignments with global and regional frameworks.",
      ar: "خارطة طريق الامتثال في سناب برو وتوافقاتها الحالية مع الأطر العالمية والإقليمية.",
    },
    h1: { en: "Compliance Center", ar: "مركز الامتثال" },
    sections: [
      {
        id: "current",
        heading: { en: "Current alignments", ar: "التوافقات الحالية" },
        bullets: {
          en: [
            "Egyptian PDPL aligned",
            "EU GDPR aligned",
            "PCI scope reduction via Stripe / Paymob",
          ],
          ar: [
            "متوافق مع قانون حماية البيانات المصري",
            "متوافق مع GDPR الأوروبي",
            "تقليل نطاق PCI عبر سترايب وبيموب",
          ],
        },
      },
      {
        id: "roadmap",
        heading: { en: "Roadmap", ar: "خارطة الطريق" },
        bullets: {
          en: [
            "SOC 2 Type II — in progress",
            "ISO 27001 — in progress",
            "Saudi PDPL alignment — in progress",
          ],
          ar: [
            "SOC 2 Type II — قيد الإنجاز",
            "ISO 27001 — قيد الإنجاز",
            "التوافق مع نظام حماية البيانات السعودي — قيد الإنجاز",
          ],
        },
      },
    ],
  },
  {
    slug: "vdp",
    tree: "trust",
    status: "final",
    title: {
      en: "Vulnerability Disclosure Program — ShotStudio",
      ar: "برنامج الإفصاح عن الثغرات — سناب برو",
    },
    meta: {
      en: "How to report a security vulnerability to ShotStudio — scope, safe harbor, and rewards.",
      ar: "كيفية الإبلاغ عن ثغرة أمنية إلى سناب برو — النطاق، الملاذ الآمن، والمكافآت.",
    },
    h1: { en: "Report a vulnerability", ar: "بلِّغ عن ثغرة" },
    sections: [
      {
        id: "scope",
        heading: { en: "Scope", ar: "النطاق" },
        bullets: {
          en: ["shotstudio.ai and api.shotstudio.ai", "Mobile apps (iOS, Android)"],
          ar: [
            "shotstudio.ai و api.shotstudio.ai",
            "التطبيقات المحمولة (iOS و Android)",
          ],
        },
      },
      {
        id: "safe-harbor",
        heading: { en: "Safe harbor", ar: "الملاذ الآمن" },
        paragraphs: {
          en: [
            "We will not pursue legal action against researchers acting in good faith and following this policy.",
          ],
          ar: [
            "لن نتّخذ إجراءً قانونياً ضد الباحثين الذين يتصرّفون بحُسن نيّة ووفقاً لهذه السياسة.",
          ],
        },
      },
      {
        id: "report",
        heading: { en: "How to report", ar: "كيف تُبلّغ" },
        paragraphs: {
          en: [
            "Email security@shotstudio.ai with steps to reproduce. PGP key available at /.well-known/pgp.txt.",
          ],
          ar: [
            "راسِل security@shotstudio.ai مع خطوات إعادة الإنتاج. مفتاح PGP متاح على /.well-known/pgp.txt.",
          ],
        },
      },
    ],
  },
  {
    slug: "incident-response",
    tree: "trust",
    status: "final",
    title: {
      en: "Incident Response — ShotStudio",
      ar: "الاستجابة للحوادث — سناب برو",
    },
    meta: {
      en: "How ShotStudio detects, classifies, contains, and notifies on security incidents — including PDPL and GDPR 72-hour timelines.",
      ar: "كيف ترصد سناب برو الحوادث الأمنية وتُصنّفها وتحتويها وتُخطر بها، بما في ذلك حدود الـ72 ساعة في PDPL و GDPR.",
    },
    h1: { en: "Incident Response", ar: "الاستجابة للحوادث" },
    sections: [
      {
        id: "lifecycle",
        heading: { en: "Lifecycle", ar: "دورة الحياة" },
        bullets: {
          en: [
            "Detection (24/7)",
            "Classification (severity 1-4)",
            "Containment",
            "Eradication",
            "Recovery",
            "Post-mortem",
          ],
          ar: [
            "الاكتشاف (24/7)",
            "التصنيف (الحدّة 1-4)",
            "الاحتواء",
            "الاستئصال",
            "الاستعادة",
            "تحليل ما بعد الحادث",
          ],
        },
      },
      {
        id: "notification",
        heading: { en: "Notification timelines", ar: "حدود الإخطار" },
        bullets: {
          en: [
            "Regulators: 72 hours where required",
            "Affected enterprise customers: per contract",
            "Affected end-users: without undue delay",
          ],
          ar: [
            "المنظّمون: 72 ساعة حيث ينطبق",
            "عملاء الشركات المتأثّرون: حسب العقد",
            "المستخدمون المتأثّرون: دون تأخير غير مبرّر",
          ],
        },
      },
    ],
  },
  {
    slug: "business-continuity",
    tree: "trust",
    status: "final",
    title: {
      en: "Business Continuity & DR — ShotStudio",
      ar: "استمرارية الأعمال والتعافي من الكوارث — سناب برو",
    },
    meta: {
      en: "ShotStudio's RTO and RPO targets, multi-region failover, backup strategy, and tested recovery plans.",
      ar: "أهداف RTO و RPO لسناب برو، التحويل بين المناطق، استراتيجية النسخ الاحتياطي، وخطط التعافي المُختبرَة.",
    },
    h1: {
      en: "Business Continuity & Disaster Recovery",
      ar: "استمرارية الأعمال والتعافي من الكوارث",
    },
    sections: [
      {
        id: "targets",
        heading: { en: "Targets", ar: "الأهداف" },
        bullets: {
          en: ["RTO ≤ 4 hours", "RPO ≤ 1 hour", "Annual DR drill"],
          ar: ["RTO ≤ 4 ساعات", "RPO ≤ ساعة واحدة", "تمرين تعافٍ سنوي"],
        },
      },
    ],
  },
];
