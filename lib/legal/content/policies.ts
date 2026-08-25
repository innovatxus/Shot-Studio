import type { LegalPage } from "../types";

export const POLICY_PAGES: LegalPage[] = [
  {
    slug: "ai-usage",
    tree: "policies",
    status: "final",
    updated: "2026-06-05",
    title: {
      en: "AI Usage Policy — ShotStudio",
      ar: "سياسة استخدام الذكاء الاصطناعي — سناب برو",
    },
    meta: {
      en: "What you may and may not generate using ShotStudio's AI tools — covering deepfakes, likeness rights, commercial claims, and safety.",
      ar: "ما يمكنك وما لا يمكنك إنشاؤه باستخدام أدوات الذكاء الاصطناعي في سناب برو — التزييف العميق، حقوق الشبَه، الادّعاءات التجارية، والسلامة.",
    },
    h1: { en: "AI Usage Policy", ar: "سياسة استخدام الذكاء الاصطناعي" },
    summary: {
      en: "Generative AI is powerful. To keep ShotStudio safe and useful, we restrict generation that could harm individuals, mislead consumers, or violate the law.",
      ar: "الذكاء الاصطناعي التوليدي قويّ. لإبقاء سناب برو آمنة ومفيدة، نُقيّد إنشاء أيّ محتوى يُسبّب ضرراً للأفراد أو يُضلّل المستهلكين أو يُخالف القانون.",
    },
    sections: [
      {
        id: "what-allowed",
        heading: { en: "What is allowed", ar: "ما هو مسموح به" },
        bullets: {
          en: [
            "Editing your own product photography for catalog, social, and marketplace listings.",
            "Generating lifestyle scenes around your products with synthetic models who do not depict identifiable real persons.",
            "Editing portraits with the subject's documented consent.",
          ],
          ar: [
            "تحرير صور منتجاتك الخاصة لاستخدامها في الكتالوجات ووسائل التواصل والأسواق الإلكترونية.",
            "إنشاء مشاهد حياتية حول منتجاتك بنماذج اصطناعية لا تُمثّل أشخاصاً حقيقيين معروفين.",
            "تحرير الصور الشخصية بموافقة موثّقة من صاحبها.",
          ],
        },
      },
      {
        id: "what-not-allowed",
        heading: { en: "What is not allowed", ar: "ما هو غير مسموح به" },
        bullets: {
          en: [
            "Sexual content depicting minors — strictly prohibited and reported to authorities.",
            "Non-consensual intimate imagery (NCII) of any person.",
            "Deepfakes of identifiable people without their explicit, documented consent.",
            "Election-, war-, or political-actor deepfakes intended to mislead.",
            "Medical, legal, or financial claims presented as factual.",
            "Counterfeit goods, infringing brand assets, or fake reviews.",
          ],
          ar: [
            "أي محتوى جنسي يُصوّر قاصرين — محظور تماماً ويُبلَّغ عنه للسلطات.",
            "صور حميمة لأي شخص دون رضاه.",
            "تزييف عميق لأشخاص معروفين دون موافقتهم الصريحة الموثّقة.",
            "تزييف عميق انتخابي أو حربي أو سياسي بقصد التضليل.",
            "ادّعاءات طبية أو قانونية أو مالية تُقدَّم باعتبارها وقائع.",
            "منتجات مقلَّدة أو أصول علامات تجارية منتهِكة أو مراجعات مزيّفة.",
          ],
        },
      },
      {
        id: "likeness",
        heading: { en: "Human likeness rules", ar: "قواعد التشبيه البشري" },
        paragraphs: {
          en: [
            "If a generated image depicts a real, identifiable person, you must hold a model release or written consent. By submitting such content you represent that you have those rights.",
          ],
          ar: [
            "إذا كانت الصورة المُولَّدة تُمثّل شخصاً حقيقياً قابلاً للتعرّف، فيجب أن تحوز إذناً مكتوباً (model release). وبتقديم هذا المحتوى تُقرّ بامتلاك هذه الحقوق.",
          ],
        },
      },
      {
        id: "appeals",
        heading: { en: "Appeals", ar: "الاستئنافات" },
        paragraphs: {
          en: [
            "If we restrict your content and you believe it was a mistake, contact appeals@shotstudio.ai. We aim to respond within 5 business days.",
          ],
          ar: [
            "إذا قمنا بتقييد محتواك وكنت تعتقد أن ذلك خطأ، تواصل مع appeals@shotstudio.ai. نهدف للردّ خلال 5 أيام عمل.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/policies/responsible-ai",
        label: { en: "Responsible AI", ar: "الذكاء الاصطناعي المسؤول" },
      },
      {
        href: "/policies/ai-abuse",
        label: {
          en: "AI Abuse Reporting",
          ar: "الإبلاغ عن إساءة استخدام الذكاء الاصطناعي",
        },
      },
      {
        href: "/legal/acceptable-use",
        label: { en: "Acceptable Use Policy", ar: "سياسة الاستخدام المقبول" },
      },
    ],
  },
  {
    slug: "responsible-ai",
    tree: "policies",
    status: "final",
    title: {
      en: "Responsible AI — ShotStudio",
      ar: "الذكاء الاصطناعي المسؤول — سناب برو",
    },
    meta: {
      en: "ShotStudio's principles for safe, fair, transparent, and accountable AI — including bias mitigation for MENA users.",
      ar: "مبادئ سناب برو للذكاء الاصطناعي الآمن والعادل والشفّاف والمسؤول، بما في ذلك تخفيف التحيّز لمستخدمي منطقة الشرق الأوسط وشمال إفريقيا.",
    },
    h1: {
      en: "Responsible AI at ShotStudio",
      ar: "الذكاء الاصطناعي المسؤول في سناب برو",
    },
    summary: {
      en: "We commit to building AI that is safe, fair across cultures and skin tones, transparent about its limits, accountable to users and regulators, and respectful of privacy.",
      ar: "نلتزم ببناء ذكاء اصطناعي آمن، عادل عبر الثقافات وألوان البشرة، شفّاف بشأن حدوده، خاضع للمساءلة أمام المستخدمين والمنظّمين، ويحترم الخصوصية.",
    },
    sections: [
      {
        id: "principles",
        heading: { en: "Our six principles", ar: "مبادئنا الستة" },
        bullets: {
          en: [
            "Safety — block known categories of harm at the model and policy layers.",
            "Fairness — test model outputs across skin tones and cultural attire common across MENA and global markets.",
            "Transparency — disclose which features use AI and which providers we rely on.",
            "Human oversight — humans review high-risk policy enforcement decisions.",
            "Accountability — public commitments, public reporting, and a clear appeals path.",
            "Privacy — minimize data, default to no-training, and let users opt out.",
          ],
          ar: [
            "السلامة — حظر فئات الضرر المعروفة على مستوى النموذج والسياسة.",
            "العدالة — اختبار المخرجات عبر مختلف ألوان البشرة والأزياء الشائعة في الشرق الأوسط وعالمياً.",
            "الشفافية — الإفصاح عن الميزات التي تستخدم الذكاء الاصطناعي والمزوّدين الذين نعتمد عليهم.",
            "الإشراف البشري — يُراجع البشر القرارات عالية المخاطر المتعلقة بإنفاذ السياسات.",
            "المساءلة — التزامات علنية، تقارير علنية، ومسار واضح للاستئناف.",
            "الخصوصية — تقليل البيانات، عدم التدريب افتراضياً، والسماح للمستخدمين بالانسحاب.",
          ],
        },
      },
      {
        id: "testing",
        heading: { en: "How we test", ar: "كيف نختبر" },
        paragraphs: {
          en: [
            "Pre-launch evaluations include red-team prompts, fairness suites, and reviewer rubrics. Post-launch, we monitor abuse reports and conduct quarterly fairness reviews.",
          ],
          ar: [
            'قبل الإطلاق، تشمل تقييماتنا اختبارات "الفريق الأحمر" ومجموعات اختبار العدالة ومعايير المراجعين. بعد الإطلاق، نُراقب بلاغات الإساءة ونُجري مراجعات ربع سنوية للعدالة.',
          ],
        },
      },
    ],
  },
  {
    slug: "ai-transparency",
    tree: "policies",
    status: "final",
    title: {
      en: "AI Transparency Disclosures",
      ar: "إفصاحات شفافية الذكاء الاصطناعي",
    },
    meta: {
      en: "Which ShotStudio features use AI, who provides the underlying models, and the limits and watermarking choices we apply.",
      ar: "أيّ ميزات سناب برو تستخدم الذكاء الاصطناعي، من يُوفّر النماذج الأساسية، وحدود استخدامها وخيارات العلامات المائية.",
    },
    h1: { en: "AI Transparency", ar: "شفافية الذكاء الاصطناعي" },
    sections: [
      {
        id: "ai-features",
        heading: {
          en: "Which features are AI-powered",
          ar: "أيّ الميزات مدعومة بالذكاء الاصطناعي",
        },
        paragraphs: {
          en: [
            "Most editing services in ShotStudio rely on a mix of in-house models, open-source models we host, and third-party APIs. See AI Provider Disclosure for the per-feature mapping.",
          ],
          ar: [
            "تعتمد معظم خدمات التحرير في سناب برو على مزيج من نماذجنا الداخلية، ونماذج مفتوحة المصدر نستضيفها، وواجهات برمجية لأطراف ثالثة. راجع صفحة الإفصاح عن مزوّدي الذكاء الاصطناعي للتعيين التفصيلي.",
          ],
        },
      },
      {
        id: "training",
        heading: { en: "Training data stance", ar: "موقفنا من بيانات التدريب" },
        paragraphs: {
          en: [
            "We do not use customer uploads to train production models without explicit opt-in. Internal models are trained on licensed and properly governed datasets.",
          ],
          ar: [
            "لا نستخدم ملفات العملاء المرفوعة لتدريب نماذج الإنتاج دون موافقة صريحة. نماذجنا الداخلية مُدرَّبة على مجموعات بيانات مرخّصة ومحوكَمة.",
          ],
        },
      },
      {
        id: "watermarking",
        heading: {
          en: "Watermarking & provenance",
          ar: "العلامات المائية والمصدر",
        },
        paragraphs: {
          en: [
            "We are integrating C2PA content credentials so AI-generated images can be verified by inspectors and platforms downstream.",
          ],
          ar: [
            "نقوم بدمج اعتمادات C2PA لمحتوى الذكاء الاصطناعي ليتمكّن المُدقّقون والمنصّات اللاحقة من التحقق منه.",
          ],
        },
      },
    ],
  },
  {
    slug: "ai-content-ownership",
    tree: "policies",
    status: "final",
    updated: "2026-06-05",
    title: {
      en: "AI Content Ownership — ShotStudio",
      ar: "ملكية محتوى الذكاء الاصطناعي — سناب برو",
    },
    meta: {
      en: "Who owns AI-generated images on ShotStudio: you do. The exceptions, jurisdictional caveats, and what happens after cancellation.",
      ar: "من يملك الصور المُنشَأة بالذكاء الاصطناعي على سناب برو؟ أنت. مع استثناءات وملاحظات قضائية وما يحدث بعد الإلغاء.",
    },
    h1: {
      en: "Who Owns AI-Generated Images",
      ar: "من يملك الصور المُنشَأة بالذكاء الاصطناعي",
    },
    summary: {
      en: "Subject to applicable law, you own the AI-generated images you create on ShotStudio and may use them commercially. ShotStudio retains no rights beyond the operational license needed to deliver the service to you.",
      ar: "بموجب القانون المعمول به، تملك الصور التي تُنشئها على سناب برو وتستطيع استخدامها تجارياً. لا تحتفظ سناب برو بأي حقوق سوى الترخيص التشغيلي اللازم لتقديم الخدمة لك.",
    },
    sections: [
      {
        id: "ownership",
        heading: { en: "Your ownership", ar: "ملكيتك" },
        paragraphs: {
          en: [
            "You retain all ownership rights to inputs you upload and to outputs generated using ShotStudio. We grant you a worldwide, perpetual, royalty-free license to use, modify, and distribute those outputs commercially.",
          ],
          ar: [
            "تحتفظ بجميع حقوق الملكية للملفات التي ترفعها وللمخرجات المُنشَأة باستخدام سناب برو. ونمنحك ترخيصاً عالمياً ودائماً ومجانياً لاستخدامها وتعديلها وتوزيعها تجارياً.",
          ],
        },
      },
      {
        id: "caveats",
        heading: { en: "Jurisdictional caveats", ar: "اعتبارات قضائية" },
        paragraphs: {
          en: [
            "Some jurisdictions, including the United States, do not currently grant copyright to images that are wholly machine-generated without sufficient human authorship. Adding meaningful human edits typically restores copyrightability. We don't provide legal advice; consult counsel for important commercial uses.",
          ],
          ar: [
            "بعض النطاقات القضائية، ومنها الولايات المتحدة، لا تمنح حالياً حماية حقوق النشر للصور المُولَّدة آلياً بالكامل دون مساهمة بشرية كافية. وعادةً ما تُعيد التعديلات البشرية الفعّالة حقّ التأليف. لا نُقدّم استشارات قانونية؛ يُرجى استشارة محامٍ للاستخدامات التجارية الجوهرية.",
          ],
        },
      },
      {
        id: "after-cancel",
        heading: { en: "After cancellation", ar: "بعد الإلغاء" },
        paragraphs: {
          en: [
            "Cancelling your subscription does not revoke ownership of outputs you have already downloaded. We delete cached copies on our servers within 30 days of account deletion.",
          ],
          ar: [
            "لا يُلغي إنهاء اشتراكك ملكيتك للمخرجات التي قمت بتنزيلها. نحذف النسخ المخزّنة لدينا خلال 30 يوماً من حذف الحساب.",
          ],
        },
      },
    ],
  },
  {
    slug: "ai-abuse",
    tree: "policies",
    status: "final",
    title: {
      en: "AI Abuse Reporting",
      ar: "الإبلاغ عن إساءة استخدام الذكاء الاصطناعي",
    },
    meta: {
      en: "Report AI-generated content that violates ShotStudio's policies — deepfakes, NCII, CSAM, or IP infringement.",
      ar: "أبلِغ عن محتوى مُنشَأ بالذكاء الاصطناعي يُخالف سياسات سناب برو — التزييف العميق، الصور الحميمة دون رضا، مواد الأطفال، أو انتهاك الملكية الفكرية.",
    },
    h1: { en: "Report Abuse", ar: "بلِّغ عن إساءة" },
    sections: [
      {
        id: "categories",
        heading: {
          en: "Categories & response times",
          ar: "الفئات وأوقات الاستجابة",
        },
        table: {
          head: {
            en: ["Category", "Target SLA"],
            ar: ["الفئة", "هدف وقت الاستجابة"],
          },
          rows: [
            {
              en: ["CSAM", "< 1 hour, plus authority report"],
              ar: ["مواد إساءة جنسية للأطفال", "أقل من ساعة، مع إبلاغ السلطات"],
            },
            {
              en: ["NCII / sexual deepfake", "< 24 hours"],
              ar: ["صور حميمة دون رضا / تزييف جنسي", "أقل من 24 ساعة"],
            },
            {
              en: ["Election / political deepfake", "< 24 hours"],
              ar: ["تزييف انتخابي / سياسي", "أقل من 24 ساعة"],
            },
            {
              en: ["Other policy violations", "< 72 hours"],
              ar: ["انتهاكات أخرى للسياسات", "أقل من 72 ساعة"],
            },
          ],
        },
      },
      {
        id: "how",
        heading: { en: "How to report", ar: "كيفية الإبلاغ" },
        paragraphs: {
          en: [
            "Email abuse@shotstudio.ai with the URL or content reference, the policy violated, and any evidence. We acknowledge within 24 hours.",
          ],
          ar: [
            "راسِل abuse@shotstudio.ai مع رابط أو مرجع المحتوى، السياسة التي تمّ خرقها، وأي أدلّة. نؤكّد الاستلام خلال 24 ساعة.",
          ],
        },
      },
    ],
  },
  {
    slug: "ai-providers",
    tree: "policies",
    status: "final",
    title: {
      en: "AI Provider Disclosure",
      ar: "الإفصاح عن مزوّدي الذكاء الاصطناعي",
    },
    meta: {
      en: "Per-feature mapping of which AI provider or in-house model handles each ShotStudio capability.",
      ar: "تعيين تفصيلي يوضّح أيّ مزوّد ذكاء اصطناعي أو نموذج داخلي يُشغّل كل قدرة في سناب برو.",
    },
    h1: { en: "Which AI Models We Use", ar: "النماذج التي نستخدمها" },
    sections: [
      {
        id: "mapping",
        heading: { en: "Mapping", ar: "التعيين" },
        table: {
          head: { en: ["Capability", "Provider"], ar: ["القدرة", "المزوّد"] },
          rows: [
            {
              en: ["Background Removal", "In-house U²-Net derivative"],
              ar: ["إزالة الخلفية", "نموذج داخلي مشتقّ من U²-Net"],
            },
            {
              en: ["Scene Staging", "Third-party diffusion provider"],
              ar: ["تركيب المشهد", "مزوّد انتشار خارجي"],
            },
            {
              en: ["Ghost Mannequin", "In-house"],
              ar: ["المانيكان الشبحي", "داخلي"],
            },
            {
              en: ["Color Grading", "In-house"],
              ar: ["تدرّج الألوان", "داخلي"],
            },
          ],
        },
      },
    ],
  },
  {
    slug: "ai-training-opt-out",
    tree: "policies",
    status: "final",
    title: {
      en: "AI Training Opt-Out",
      ar: "الانسحاب من تدريب الذكاء الاصطناعي",
    },
    meta: {
      en: "ShotStudio does not train production AI models on customer uploads by default. This page explains how to verify and revoke any opt-ins.",
      ar: "لا تُدرّب سناب برو نماذج الذكاء الاصطناعي على ملفات العملاء افتراضياً. توضّح هذه الصفحة كيف تتحقّق من ذلك وكيف تسحب أي موافقات.",
    },
    h1: { en: "AI Training Opt-Out", ar: "الانسحاب من تدريب الذكاء الاصطناعي" },
    summary: {
      en: "Default: opted out. We will only ever train production models on customer content with explicit, granular consent — and you can revoke that consent at any time.",
      ar: "افتراضياً: انسحاب فعّال. لن نُدرّب أي نموذج إنتاجي على محتوى العملاء إلا بموافقة صريحة ومُحدّدة — ويمكنك سحب هذه الموافقة في أي وقت.",
    },
    sections: [
      {
        id: "default",
        heading: { en: "Default behavior", ar: "السلوك الافتراضي" },
        paragraphs: {
          en: [
            "No customer upload is used for production model training unless you opt in explicitly per-account.",
          ],
          ar: [
            "لا تُستخدم أي ملفات عملاء في تدريب نماذج الإنتاج ما لم توافق على ذلك صراحةً لكل حساب.",
          ],
        },
      },
      {
        id: "verify",
        heading: { en: "How to verify", ar: "كيف تتحقّق" },
        paragraphs: {
          en: [
            "Visit Account → Privacy → AI training to view your current preference.",
          ],
          ar: [
            "انتقل إلى الحساب ← الخصوصية ← تدريب الذكاء الاصطناعي لمراجعة تفضيلك الحالي.",
          ],
        },
      },
      {
        id: "revoke",
        heading: { en: "Revoke", ar: "سحب الموافقة" },
        paragraphs: {
          en: [
            "Toggle off any time. Existing models incorporating your data are not retroactively retrainable, but no future training will use your content.",
          ],
          ar: [
            "يمكنك إلغاء التفعيل في أي وقت. النماذج القائمة لا يمكن إعادة تدريبها بأثر رجعي، لكن لن يُستخدم محتواك في أي تدريب مستقبلي.",
          ],
        },
      },
    ],
  },
];
