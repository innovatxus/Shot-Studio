import type { LegalPage } from "../types";

/**
 * Accessibility statement for the website and the mobile app.
 *
 * Every claim here is checked against the codebase — reduced-motion guards,
 * focus handling, dialog semantics, landmarks and the bilingual shell all
 * exist. The known-limitations section is deliberately specific: a statement
 * that claims full conformance without assistive-technology testing is worth
 * less than one that says exactly where the gaps are.
 */
export const ACCESSIBILITY_PAGE: LegalPage = {
  slug: "accessibility",
  tree: "trust",
  status: "final",
  updated: "2026-08-27",
  title: {
    en: "Accessibility Statement — ShotStudio",
    ar: "بيان إمكانية الوصول — ShotStudio",
  },
  meta: {
    en: "How ShotStudio approaches accessibility on the web and in the mobile app: our conformance target, what we have built, where we fall short, and how to report a barrier.",
    ar: "كيف تتعامل ShotStudio مع إمكانية الوصول على الويب وفي التطبيق: معيارنا المستهدف، وما أنجزناه، وأوجه القصور، وكيفية الإبلاغ عن أي عائق.",
  },
  h1: { en: "Accessibility", ar: "إمكانية الوصول" },
  summary: {
    en: "We build ShotStudio to be usable with a keyboard, a screen reader, magnification, or reduced motion — and we would rather tell you exactly where we fall short than claim we are finished. This statement covers the website and the mobile app, lists our known gaps, and gives you a direct route to report a barrier.",
    ar: "نبني ShotStudio ليكون قابلاً للاستخدام بلوحة المفاتيح أو قارئ الشاشة أو التكبير أو مع تقليل الحركة — ونفضّل أن نوضّح أوجه قصورنا بدل ادّعاء الاكتمال. يغطي هذا البيان الموقع والتطبيق، ويسرد الثغرات المعروفة، ويتيح لك طريقاً مباشراً للإبلاغ عن أي عائق.",
  },
  sections: [
    {
      id: "commitment",
      heading: { en: "1. Our commitment", ar: "١. التزامنا" },
      paragraphs: {
        en: [
          "ShotStudio is a photo-editing tool. If someone cannot operate it, the product has failed for that person — not the other way round. We treat accessibility as part of building the interface, not as a checklist applied afterwards.",
          "We design and test against the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA, and we aim to meet the accessibility obligations that apply in the markets we serve.",
        ],
        ar: [
          "ShotStudio أداة لتحرير الصور. إن لم يستطع شخص ما استخدامها، فالمنتج هو الذي أخفق تجاهه، لا العكس. نتعامل مع إمكانية الوصول كجزء من بناء الواجهة، لا كقائمة تُراجَع لاحقاً.",
          "نصمّم ونختبر وفق إرشادات الوصول لمحتوى الويب (WCAG) الإصدار 2.2 عند المستوى AA، ونسعى للوفاء بالالتزامات المعمول بها في الأسواق التي نخدمها.",
        ],
      },
    },
    {
      id: "status",
      heading: { en: "2. Conformance status", ar: "٢. حالة المطابقة" },
      paragraphs: {
        en: [
          "The website is partially conformant with WCAG 2.2 Level AA. “Partially conformant” means most of the guidance is met, but some content does not yet fully conform. The specific gaps we know about are listed in Section 5.",
          "We say partially rather than fully for one honest reason: our checks so far have been code and design reviews, not a formal audit with assistive technology and disabled testers. Until that audit happens, a claim of full conformance would not be one we could stand behind.",
        ],
        ar: [
          "الموقع مطابق جزئياً لمعيار WCAG 2.2 المستوى AA. تعني «المطابقة الجزئية» أن معظم الإرشادات مستوفاة، لكن بعض المحتوى لم يستوفِها بالكامل بعد. الثغرات المعروفة مذكورة في القسم الخامس.",
          "نقول «جزئياً» لا «كلياً» لسبب صريح: مراجعاتنا حتى الآن كانت مراجعات للشيفرة والتصميم، لا تدقيقاً رسمياً بالتقنيات المساعدة ومع مختبرين من ذوي الإعاقة. وإلى أن يتم ذلك، لن يكون ادّعاء المطابقة الكاملة ادّعاءً نستطيع الدفاع عنه.",
        ],
      },
    },
    {
      id: "scope",
      heading: { en: "3. What this covers", ar: "٣. نطاق البيان" },
      paragraphs: {
        en: [
          "This statement applies to the ShotStudio website at shotstudio.ai, including the marketing pages, the pricing and legal sections, and the in-browser tool previews.",
          "It also applies to the ShotStudio mobile app distributed through Google Play. The app is where images are actually processed, and it inherits the same design system and the same commitment. Native platform features — the operating system's own screen reader, text scaling, and contrast settings — are supported by the app rather than replaced by it. The app has not yet had a separate accessibility audit, and we will publish its result here when it has.",
          "Content hosted by third parties — the Google Play listing, or a payment screen presented by Google — is outside our control, though we will still route any report you send us to the right place.",
        ],
        ar: [
          "ينطبق هذا البيان على موقع ShotStudio على shotstudio.ai، بما يشمل الصفحات التعريفية وأقسام الأسعار والصفحات القانونية ومعاينات الأدوات داخل المتصفح.",
          "وينطبق كذلك على تطبيق ShotStudio المتاح عبر Google Play. التطبيق هو المكان الذي تُعالَج فيه الصور فعلياً، وهو يرث نظام التصميم نفسه والالتزام نفسه. أما خصائص النظام الأساسية — قارئ الشاشة وتكبير النص وإعدادات التباين — فيدعمها التطبيق ولا يستبدلها. لم يخضع التطبيق بعد لتدقيق منفصل لإمكانية الوصول، وسننشر نتيجته هنا فور إتمامه.",
          "أما المحتوى الذي تستضيفه أطراف أخرى — صفحة Google Play أو شاشة الدفع التي تعرضها Google — فهو خارج سيطرتنا، مع ذلك سنوجّه أي بلاغ ترسله إلينا إلى الجهة الصحيحة.",
        ],
      },
    },
    {
      id: "features",
      heading: { en: "4. What we have built", ar: "٤. ما قمنا ببنائه" },
      lede: {
        en: "These are implemented across the site today, not planned:",
        ar: "هذه الخصائص مطبَّقة في الموقع اليوم، وليست مجرّد خطط:",
      },
      bullets: {
        en: [
          "Keyboard access — every interactive control is reachable and operable by keyboard, and a “Skip to content” link is the first stop on every page.",
          "Visible focus — a high-contrast focus ring is applied globally on keyboard focus and is never removed for cosmetic reasons.",
          "Dialogs — every modal, including the app-download prompt and the account panel, exposes a dialog role, traps focus while open, closes on Escape, and returns focus to whatever opened it.",
          "Reduced motion — animation is gated on your system's reduce-motion setting. Scroll reveals, hover effects, video autoplay and modal transitions all fall back to a static or plain-fade presentation.",
          "Motion and audio — no video on the site carries an audio track and none plays sound, so nothing competes with a screen reader. Videos are muted, decorative, and paired with a still poster image.",
          "Meaningful text alternatives — images carry descriptive alt text, icon-only buttons carry accessible labels, and purely decorative graphics are hidden from assistive technology.",
          "Structure — pages use real landmarks and a single ordered heading outline, so a screen reader can navigate by region and heading rather than by guesswork.",
          "Language and direction — the interface is available in English and Arabic, with the page language and right-to-left direction set correctly when Arabic is selected.",
          "Colour and contrast — body text and interface labels are checked against WCAG AA contrast ratios, and colour is never the only way information is conveyed.",
        ],
        ar: [
          "الوصول بلوحة المفاتيح — كل عنصر تفاعلي يمكن الوصول إليه وتشغيله بلوحة المفاتيح، ورابط «تخطَّ إلى المحتوى» هو أول محطة في كل صفحة.",
          "تركيز مرئي — حلقة تركيز عالية التباين تظهر عند التنقل بلوحة المفاتيح ولا تُزال لأسباب جمالية.",
          "النوافذ الحوارية — كل نافذة، بما فيها نافذة تنزيل التطبيق ولوحة الحساب، تعلن عن دورها كنافذة حوارية، وتحصر التركيز داخلها، وتُغلق بمفتاح Escape، وتعيد التركيز إلى العنصر الذي فتحها.",
          "تقليل الحركة — الحركة مرتبطة بإعداد تقليل الحركة في نظامك. تتحوّل تأثيرات الظهور والتمرير وتشغيل الفيديو وانتقالات النوافذ إلى عرض ثابت أو تلاشٍ بسيط.",
          "الحركة والصوت — لا يحتوي أي فيديو في الموقع على مسار صوتي ولا يشغّل صوتاً، فلا شيء يزاحم قارئ الشاشة. الفيديوهات صامتة وتزيينية ومصحوبة بصورة ثابتة.",
          "بدائل نصية ذات معنى — الصور مصحوبة بنص بديل وصفي، والأزرار التي تحوي أيقونة فقط تحمل تسميات وصفية، والرسوم التزيينية مخفية عن التقنيات المساعدة.",
          "البنية — تستخدم الصفحات معالم حقيقية وتسلسل عناوين مرتّباً، ليتمكّن قارئ الشاشة من التنقل بالمناطق والعناوين بدل التخمين.",
          "اللغة والاتجاه — الواجهة متاحة بالإنجليزية والعربية، مع ضبط لغة الصفحة واتجاه الكتابة من اليمين إلى اليسار عند اختيار العربية.",
          "اللون والتباين — تُفحص نصوص المحتوى وتسميات الواجهة مقابل نسب التباين في المستوى AA، ولا يُستخدم اللون وحده لنقل أي معلومة.",
        ],
      },
    },
    {
      id: "limitations",
      heading: { en: "5. Known limitations", ar: "٥. القيود المعروفة" },
      lede: {
        en: "We know about the following and are working on them. If you hit something not listed here, please tell us — that is the most useful message you can send.",
        ar: "نعلم بالنقاط التالية ونعمل على معالجتها. وإن واجهت مشكلة غير مذكورة هنا فأخبرنا — فتلك أنفع رسالة يمكن أن ترسلها إلينا.",
      },
      bullets: {
        en: [
          "No formal assistive-technology audit yet. We have not completed structured testing with screen readers such as NVDA, JAWS, VoiceOver and TalkBack, or with disabled testers. This is our highest priority and the reason we claim partial rather than full conformance.",
          "Arabic legal text is incomplete. The interface translates into Arabic, but the Privacy Policy and Terms of Service are currently published in English only. In Arabic mode those two pages present English text, which a screen reader set to Arabic will pronounce incorrectly. Translations are in preparation; until then you can request any clause be explained in Arabic at no charge.",
          "Some supporting labels are small. A few metadata labels — counters, chips and captions — are set below our own 12px minimum for body text. They are supplementary rather than essential, but they are harder to read than they should be and we are raising them.",
          "Some icon controls are compact. Certain icon-only buttons, such as the gallery scroll arrows, are smaller than the 44px touch target we would prefer, though they exceed the WCAG 2.2 AA minimum.",
          "The in-browser editor is a preview. The web canvas demonstrates a tool's effect; the real render happens in the mobile app. That flow is a deliberate product decision rather than an accessibility barrier, but it does mean the full editing experience is only assessable on mobile.",
          "Third-party and embedded content. Where a page relies on an external service, we cannot guarantee that service meets the same standard.",
        ],
        ar: [
          "لا يوجد تدقيق رسمي بالتقنيات المساعدة بعد. لم نُكمل اختباراً منهجياً مع قارئات الشاشة مثل NVDA وJAWS وVoiceOver وTalkBack، ولا مع مختبرين من ذوي الإعاقة. هذه أولويتنا القصوى وسبب إعلاننا مطابقة جزئية لا كاملة.",
          "النصوص القانونية بالعربية غير مكتملة. تُترجَم الواجهة إلى العربية، لكن سياسة الخصوصية وشروط الخدمة منشورتان بالإنجليزية فقط حالياً. وفي الوضع العربي تعرض الصفحتان نصاً إنجليزياً، وهو ما ينطقه قارئ الشاشة المضبوط على العربية نطقاً خاطئاً. الترجمات قيد الإعداد، وحتى ذلك الحين يمكنك طلب شرح أي بند بالعربية دون مقابل.",
          "بعض التسميات المساعدة صغيرة. عدد من تسميات البيانات — العدّادات والوسوم والتعليقات — بحجم أقل من الحد الأدنى الذي وضعناه لنصوص المحتوى. وهي تكميلية لا أساسية، لكنها أصعب قراءةً مما ينبغي ونعمل على تكبيرها.",
          "بعض أزرار الأيقونات صغيرة. أزرار معيّنة، مثل أسهم تمرير المعرض، أصغر من هدف اللمس البالغ 44 بكسل الذي نفضّله، وإن كانت تتجاوز الحد الأدنى في المستوى AA.",
          "المحرّر داخل المتصفح معاينة. تعرض لوحة الويب أثر الأداة، أما المعالجة الفعلية فتتم في التطبيق. هذا قرار يتعلق بالمنتج لا عائق وصول، لكنه يعني أن تجربة التحرير الكاملة لا يمكن تقييمها إلا على الهاتف.",
          "المحتوى الخارجي والمضمَّن. حين تعتمد صفحة على خدمة خارجية، لا يمكننا ضمان استيفائها المعيار نفسه.",
        ],
      },
    },
    {
      id: "compatibility",
      heading: { en: "6. Compatibility", ar: "٦. التوافق" },
      paragraphs: {
        en: [
          "The website is built to work with current versions of Chrome, Edge, Firefox and Safari on desktop and mobile, together with the assistive technology those browsers support. It should also work with older browsers, though some visual polish may be missing.",
          "The site does not require JavaScript to read its content, does not trap you in any flow, and does not impose a time limit on any task. You can zoom to 200% without losing content or function.",
        ],
        ar: [
          "بُني الموقع ليعمل مع الإصدارات الحالية من Chrome وEdge وFirefox وSafari على الحاسب والهاتف، ومع التقنيات المساعدة التي تدعمها تلك المتصفحات. ومن المفترض أن يعمل مع المتصفحات الأقدم أيضاً، وإن غابت بعض التحسينات البصرية.",
          "لا يتطلّب الموقع تشغيل JavaScript لقراءة محتواه، ولا يحبسك داخل أي مسار، ولا يفرض حدّاً زمنياً على أي مهمة. ويمكنك التكبير حتى ٢٠٠٪ دون فقدان المحتوى أو الوظائف.",
        ],
      },
    },
    {
      id: "feedback",
      heading: { en: "7. Report a barrier", ar: "٧. الإبلاغ عن عائق" },
      paragraphs: {
        en: [
          "If any part of ShotStudio is difficult or impossible to use, email accessibility@shotstudio.ai. Tell us what you were trying to do, the page or screen, and the assistive technology, browser or device you were using — but send the report even if you cannot supply all of that.",
          "We acknowledge every report within 5 business days with an assessment and, where a fix is needed, a remediation plan and timeframe. If a fix will take time, we will offer a way to complete your task in the meantime.",
          "You may write to us in Arabic or English. If you need any part of this statement, our Terms, or our Privacy Policy explained in Arabic, we will do that at no charge.",
        ],
        ar: [
          "إن كان أي جزء من ShotStudio صعب الاستخدام أو متعذّراً، راسلنا على accessibility@shotstudio.ai. أخبرنا بما كنت تحاول فعله، والصفحة أو الشاشة، والتقنية المساعدة أو المتصفح أو الجهاز الذي تستخدمه — وأرسل البلاغ حتى لو لم تتوفّر لديك كل هذه التفاصيل.",
          "نُقرّ باستلام كل بلاغ خلال ٥ أيام عمل مع تقييم، وخطة معالجة وإطار زمني عند الحاجة إلى إصلاح. وإن كان الإصلاح يستغرق وقتاً، سنوفّر لك وسيلة لإتمام مهمتك في هذه الأثناء.",
          "يمكنك مراسلتنا بالعربية أو الإنجليزية. وإن احتجت شرح أي جزء من هذا البيان أو الشروط أو سياسة الخصوصية بالعربية، سنقوم بذلك دون مقابل.",
        ],
      },
    },
    {
      id: "review",
      heading: { en: "8. Review of this statement", ar: "٨. مراجعة هذا البيان" },
      paragraphs: {
        en: [
          "This statement was prepared on 27 August 2026 by self-evaluation of the website against WCAG 2.2 Level AA. It has not been reviewed by an external accessibility auditor.",
          "We review it whenever the interface changes materially, and at least once a year. When the assistive-technology audit described in Section 5 is complete, we will update this page with its findings and revise the conformance claim accordingly.",
        ],
        ar: [
          "أُعِدّ هذا البيان في ٢٧ أغسطس ٢٠٢٦ بتقييم ذاتي للموقع وفق معيار WCAG 2.2 المستوى AA، ولم يخضع لمراجعة مدقّق خارجي لإمكانية الوصول.",
          "نراجعه عند أي تغيير جوهري في الواجهة، ومرة سنوياً على الأقل. وعند اكتمال التدقيق بالتقنيات المساعدة المذكور في القسم الخامس، سنحدّث هذه الصفحة بنتائجه ونعدّل إعلان المطابقة تبعاً لذلك.",
        ],
      },
    },
  ],
  related: [
    { href: "/legal/terms", label: { en: "Terms of Service", ar: "شروط الخدمة" } },
    { href: "/legal/privacy", label: { en: "Privacy Policy", ar: "سياسة الخصوصية" } },
    { href: "/contact", label: { en: "Contact", ar: "تواصل معنا" } },
  ],
};
