import type { LegalPage } from "../types";

/**
 * Legal pages mounted under /legal/[slug].
 *
 * Bilingual content. Pages marked `status: "draft"` render a banner asking
 * counsel for final review. All paragraphs and bullet lists are paired
 * 1-to-1 in EN/AR; the article shell renders the entry matching the user's
 * locale.
 */

export const LEGAL_PAGES: LegalPage[] = [
  // ─────────────────────────────────────────────────────────────── L01 PRIVACY
  {
    slug: "privacy",
    tree: "legal",
    status: "final",
    updated: "2026-08-26",
    title: {
      en: "Privacy Policy — ShotStudio",
      ar: "Privacy Policy — ShotStudio",
    },
    meta: {
      en: "How ShotStudio collects, uses, stores, and protects your personal data. Written to the standards of Egyptian Personal Data Protection Law No. 151/2020 (PDPL), with the same rights extended to users in Iraq.",
      ar: "How ShotStudio collects, uses, stores, and protects your personal data. Written to the standards of Egyptian Personal Data Protection Law No. 151/2020 (PDPL), with the same rights extended to users in Iraq.",
    },
    h1: {
      en: "Privacy Policy",
      ar: "Privacy Policy",
    },
    summary: {
      en: "We collect the minimum personal data needed to operate ShotStudio. We never sell your data. We never train our production AI models on your uploaded images without your explicit, separate consent. You have full rights over your data under Egyptian Personal Data Protection Law No. 151/2020 — including access, rectification, erasure, and portability — and we extend those same rights to users in Iraq. You can exercise them at any time by emailing privacy@shotstudio.ai.",
      ar: "We collect the minimum personal data needed to operate ShotStudio. We never sell your data. We never train our production AI models on your uploaded images without your explicit, separate consent. You have full rights over your data under Egyptian Personal Data Protection Law No. 151/2020 — including access, rectification, erasure, and portability — and we extend those same rights to users in Iraq. You can exercise them at any time by emailing privacy@shotstudio.ai.",
    },
    sections: [
      {
        id: "controller",
        heading: {
          en: "1. Data Controller Identity and Contact Details",
          ar: "1. Data Controller Identity and Contact Details",
        },
        paragraphs: {
          en: [
            "The data controller responsible for your personal data is Innovatx Technologies (trading as “ShotStudio”), with its principal place of business at Austin, Texas, United States. As stated in clause 11.1 of our Terms of Service, we act as data controller for all personal data processed through the Service, including the images you upload. Complete commercial disclosures are published at /legal/business-info.",
            "ShotStudio is released in Egypt and Iraq. Where we process the personal data of users located in Egypt, we do so in accordance with Egyptian Personal Data Protection Law No. 151/2020 (“PDPL”), and this Policy describes the PDPL standards we apply. Our licensing position under the PDPL is published at /legal/egypt-pdpl. Iraq has no comprehensive data-protection statute equivalent to the PDPL; we process the personal data of users in Iraq in accordance with Articles 17 and 40 of the Constitution of Iraq, applicable Iraqi law and the personal data provisions of the CMC Framework Regulations for Digital Platforms and Services, and we extend the same rights and safeguards described in this Policy to users in Iraq as a contractual commitment. Consumer disclosures for Iraq, including those under Consumer Protection Law No. 1 of 2010, are published at /legal/iraq-consumer.",
            "Data Protection Officer (DPO): privacy@shotstudio.ai.",
            "This Privacy Policy applies to personal data processed through the ShotStudio platform at shotstudio.ai and any associated APIs or integrations (the “Service”). It does not apply to third-party websites or services that we link to.",
          ],
          ar: [
            "The data controller responsible for your personal data is Innovatx Technologies (trading as “ShotStudio”), with its principal place of business at Austin, Texas, United States. As stated in clause 11.1 of our Terms of Service, we act as data controller for all personal data processed through the Service, including the images you upload. Complete commercial disclosures are published at /legal/business-info.",
            "ShotStudio is released in Egypt and Iraq. Where we process the personal data of users located in Egypt, we do so in accordance with Egyptian Personal Data Protection Law No. 151/2020 (“PDPL”), and this Policy describes the PDPL standards we apply. Our licensing position under the PDPL is published at /legal/egypt-pdpl. Iraq has no comprehensive data-protection statute equivalent to the PDPL; we process the personal data of users in Iraq in accordance with Articles 17 and 40 of the Constitution of Iraq, applicable Iraqi law and the personal data provisions of the CMC Framework Regulations for Digital Platforms and Services, and we extend the same rights and safeguards described in this Policy to users in Iraq as a contractual commitment. Consumer disclosures for Iraq, including those under Consumer Protection Law No. 1 of 2010, are published at /legal/iraq-consumer.",
            "Data Protection Officer (DPO): privacy@shotstudio.ai.",
            "This Privacy Policy applies to personal data processed through the ShotStudio platform at shotstudio.ai and any associated APIs or integrations (the “Service”). It does not apply to third-party websites or services that we link to.",
          ],
        },
      },
      {
        id: "what-we-collect",
        heading: {
          en: "2. Personal Data We Collect",
          ar: "2. Personal Data We Collect",
        },
        lede: {
          en: "We collect only the personal data that is necessary for the purposes described in this Policy.",
          ar: "We collect only the personal data that is necessary for the purposes described in this Policy.",
        },
        defs: [
          {
            term: {
              en: "Account data",
              ar: "Account data",
            },
            meaning: {
              en: "Name, email address, password (stored as a salted hash — never in plain text), business name, billing address, VAT/tax ID (where provided), and account preferences.",
              ar: "Name, email address, password (stored as a salted hash — never in plain text), business name, billing address, VAT/tax ID (where provided), and account preferences.",
            },
          },
          {
            term: {
              en: "Uploaded content",
              ar: "Uploaded content",
            },
            meaning: {
              en: "Photographs and images you upload to the Service for AI processing. These are treated as potentially containing personal data (e.g. images of people) and are handled with heightened care. See Section 5 for how AI processing works.",
              ar: "Photographs and images you upload to the Service for AI processing. These are treated as potentially containing personal data (e.g. images of people) and are handled with heightened care. See Section 5 for how AI processing works.",
            },
          },
          {
            term: {
              en: "Generated outputs",
              ar: "Generated outputs",
            },
            meaning: {
              en: "AI-edited images and outputs produced by the Service in response to your uploads and prompts. Stored in your library until you delete them.",
              ar: "AI-edited images and outputs produced by the Service in response to your uploads and prompts. Stored in your library until you delete them.",
            },
          },
          {
            term: {
              en: "Usage data",
              ar: "Usage data",
            },
            meaning: {
              en: "Pages and features visited, AI tools used, Credits consumed, session duration, error logs, and device and browser metadata (browser type, operating system, screen resolution, IP address, referring URL).",
              ar: "Pages and features visited, AI tools used, Credits consumed, session duration, error logs, and device and browser metadata (browser type, operating system, screen resolution, IP address, referring URL).",
            },
          },
          {
            term: {
              en: "Payment metadata",
              ar: "Payment metadata",
            },
            meaning: {
              en: "Subscriptions and Credit Pack purchases are processed by Google Play, which acts as merchant of record. We do not receive or store your card number, card brand, or expiry date. We receive the order and transaction identifiers, subscription status and renewal dates, and the billing country associated with your purchase.",
              ar: "Subscriptions and Credit Pack purchases are processed by Google Play, which acts as merchant of record. We do not receive or store your card number, card brand, or expiry date. We receive the order and transaction identifiers, subscription status and renewal dates, and the billing country associated with your purchase.",
            },
          },
          {
            term: {
              en: "Support communications",
              ar: "Support communications",
            },
            meaning: {
              en: "Messages, attachments, and metadata from support tickets, live chat, or email you send to support@shotstudio.ai or appeals@shotstudio.ai.",
              ar: "Messages, attachments, and metadata from support tickets, live chat, or email you send to support@shotstudio.ai or appeals@shotstudio.ai.",
            },
          },
          {
            term: {
              en: "Cookie and tracking data",
              ar: "Cookie and tracking data",
            },
            meaning: {
              en: "Data collected via essential, analytics, and marketing cookies — subject to your consent choices. See our Cookie Policy at /legal/cookies for the full list of cookies we use.",
              ar: "Data collected via essential, analytics, and marketing cookies — subject to your consent choices. See our Cookie Policy at /legal/cookies for the full list of cookies we use.",
            },
          },
        ],
      },
      {
        id: "lawful-bases",
        heading: {
          en: "3. Lawful Bases for Processing (PDPL Art. 4)",
          ar: "3. Lawful Bases for Processing (PDPL Art. 4)",
        },
        lede: {
          en: "Egyptian Personal Data Protection Law No. 151/2020 requires us to identify a lawful basis for each processing activity. We rely on the following:",
          ar: "Egyptian Personal Data Protection Law No. 151/2020 requires us to identify a lawful basis for each processing activity. We rely on the following:",
        },
        defs: [
          {
            term: {
              en: "Consent",
              ar: "Consent",
            },
            meaning: {
              en: "Where we ask for your specific, informed, freely given consent: marketing communications, optional analytics cookies, marketing cookies, and any opt-in to using your uploads for AI model improvement. You may withdraw consent at any time without affecting prior lawful processing.",
              ar: "Where we ask for your specific, informed, freely given consent: marketing communications, optional analytics cookies, marketing cookies, and any opt-in to using your uploads for AI model improvement. You may withdraw consent at any time without affecting prior lawful processing.",
            },
          },
          {
            term: {
              en: "Legitimate interests",
              ar: "Legitimate interests",
            },
            meaning: {
              en: "Where our legitimate business interests or those of a third party are not overridden by your rights: fraud prevention, security monitoring, abuse detection, service improvement analytics (aggregated and de-identified), and communicating product updates to existing customers. You may object to this processing at any time (see Section 9).",
              ar: "Where our legitimate business interests or those of a third party are not overridden by your rights: fraud prevention, security monitoring, abuse detection, service improvement analytics (aggregated and de-identified), and communicating product updates to existing customers. You may object to this processing at any time (see Section 9).",
            },
          },
          {
            term: {
              en: "Legal obligation",
              ar: "Legal obligation",
            },
            meaning: {
              en: "Where processing is required to comply with a legal obligation: retention of tax and financial records under applicable tax and accounting law, responding to valid court orders or regulatory requests, and — in respect of the Service as offered in Egypt — reporting obligations under Anti-Cybercrime Law No. 175/2018.",
              ar: "Where processing is required to comply with a legal obligation: retention of tax and financial records under applicable tax and accounting law, responding to valid court orders or regulatory requests, and — in respect of the Service as offered in Egypt — reporting obligations under Anti-Cybercrime Law No. 175/2018.",
            },
          },
        ],
      },
      {
        id: "how-we-use",
        heading: {
          en: "4. How We Use Your Personal Data",
          ar: "4. How We Use Your Personal Data",
        },
        defs: [
          {
            term: {
              en: "Account management",
              ar: "Account management",
            },
            meaning: {
              en: "Create, authenticate, and maintain your Account; verify your identity; enforce our Terms of Service.",
              ar: "Create, authenticate, and maintain your Account; verify your identity; enforce our Terms of Service.",
            },
          },
          {
            term: {
              en: "AI processing",
              ar: "AI processing",
            },
            meaning: {
              en: "Receive your uploaded images, route them to the appropriate AI tool or provider, return AI Outputs to you, and temporarily cache data as needed for performance.",
              ar: "Receive your uploaded images, route them to the appropriate AI tool or provider, return AI Outputs to you, and temporarily cache data as needed for performance.",
            },
          },
          {
            term: {
              en: "Payment processing",
              ar: "Payment processing",
            },
            meaning: {
              en: "Confirm and maintain your subscription and Credit Pack entitlements through Google Play billing, validate purchase receipts, and keep the transaction records required for tax and accounting purposes.",
              ar: "Confirm and maintain your subscription and Credit Pack entitlements through Google Play billing, validate purchase receipts, and keep the transaction records required for tax and accounting purposes.",
            },
          },
          {
            term: {
              en: "Customer support",
              ar: "Customer support",
            },
            meaning: {
              en: "Respond to support requests, investigate complaints, and process Account appeals.",
              ar: "Respond to support requests, investigate complaints, and process Account appeals.",
            },
          },
          {
            term: {
              en: "Security and fraud prevention",
              ar: "Security and fraud prevention",
            },
            meaning: {
              en: "Detect, investigate, and prevent abuse, unauthorised access, and fraudulent transactions.",
              ar: "Detect, investigate, and prevent abuse, unauthorised access, and fraudulent transactions.",
            },
          },
          {
            term: {
              en: "Service improvement (aggregated)",
              ar: "Service improvement (aggregated)",
            },
            meaning: {
              en: "Analyse anonymised usage patterns to identify bugs, improve performance, and prioritise features. We do not use your individually identifiable data for this purpose without your consent.",
              ar: "Analyse anonymised usage patterns to identify bugs, improve performance, and prioritise features. We do not use your individually identifiable data for this purpose without your consent.",
            },
          },
          {
            term: {
              en: "Communications",
              ar: "Communications",
            },
            meaning: {
              en: "Send essential service communications (payment receipts, renewal reminders, security alerts, planned maintenance notices) that you cannot opt out of; and marketing communications if you have opted in.",
              ar: "Send essential service communications (payment receipts, renewal reminders, security alerts, planned maintenance notices) that you cannot opt out of; and marketing communications if you have opted in.",
            },
          },
          {
            term: {
              en: "Legal compliance",
              ar: "Legal compliance",
            },
            meaning: {
              en: "Retain records as required by applicable tax and accounting law (see Section 8 for retention periods), respond to valid legal process, and report certain offences as required by law.",
              ar: "Retain records as required by applicable tax and accounting law (see Section 8 for retention periods), respond to valid legal process, and report certain offences as required by law.",
            },
          },
        ],
      },
      {
        id: "ai-processing",
        heading: {
          en: "5. How We Handle Your Uploaded Images and AI Processing",
          ar: "5. How We Handle Your Uploaded Images and AI Processing",
        },
        paragraphs: {
          en: [
            "When you upload an image to a ShotStudio AI tool (e.g. background removal, ghost mannequin, scene staging, jewellery retouching), the image is transmitted securely over TLS to our processing infrastructure and, where the relevant AI capability is provided by a third-party model or inference provider, to that provider’s API. The image is used solely to generate your requested AI Output. A full list of the AI providers used by each tool is published at /policies/ai-providers.",
          ],
          ar: [
            "When you upload an image to a ShotStudio AI tool (e.g. background removal, ghost mannequin, scene staging, jewellery retouching), the image is transmitted securely over TLS to our processing infrastructure and, where the relevant AI capability is provided by a third-party model or inference provider, to that provider’s API. The image is used solely to generate your requested AI Output. A full list of the AI providers used by each tool is published at /policies/ai-providers.",
          ],
        },
        defs: [
          {
            term: {
              en: "Transient processing",
              ar: "Transient processing",
            },
            meaning: {
              en: "By default, uploaded images are processed transiently and are not retained after your AI Output is returned to you. If you choose to save an image to your library, it is stored in your Account until you delete it.",
              ar: "By default, uploaded images are processed transiently and are not retained after your AI Output is returned to you. If you choose to save an image to your library, it is stored in your Account until you delete it.",
            },
          },
          {
            term: {
              en: "No training on your uploads by default",
              ar: "No training on your uploads by default",
            },
            meaning: {
              en: "We do not use your uploaded images or AI Outputs to train or fine-tune production AI models without your explicit, granular opt-in consent. This opt-in is separate from acceptance of these Terms and is entirely voluntary. You may review and revoke any training consent at any time from Account → Privacy → AI training preferences, or by visiting /policies/ai-training-opt-out.",
              ar: "We do not use your uploaded images or AI Outputs to train or fine-tune production AI models without your explicit, granular opt-in consent. This opt-in is separate from acceptance of these Terms and is entirely voluntary. You may review and revoke any training consent at any time from Account → Privacy → AI training preferences, or by visiting /policies/ai-training-opt-out.",
            },
          },
          {
            term: {
              en: "Images of people",
              ar: "Images of people",
            },
            meaning: {
              en: "If your uploads contain images of identifiable individuals, you are responsible for holding the necessary consents from those individuals under applicable privacy law before uploading. We apply heightened data-handling standards to images that appear to contain biometric data (facial features) as required by PDPL Art. 1 (definition of sensitive personal data).",
              ar: "If your uploads contain images of identifiable individuals, you are responsible for holding the necessary consents from those individuals under applicable privacy law before uploading. We apply heightened data-handling standards to images that appear to contain biometric data (facial features) as required by PDPL Art. 1 (definition of sensitive personal data).",
            },
          },
        ],
      },
      {
        id: "sharing",
        heading: {
          en: "6. Sharing Personal Data with Third Parties",
          ar: "6. Sharing Personal Data with Third Parties",
        },
        lede: {
          en: "We do not sell your personal data. We do not share it with third parties for their own marketing purposes. We share personal data only in the following circumstances:",
          ar: "We do not sell your personal data. We do not share it with third parties for their own marketing purposes. We share personal data only in the following circumstances:",
        },
        defs: [
          {
            term: {
              en: "Service providers (sub-processors)",
              ar: "Service providers (sub-processors)",
            },
            meaning: {
              en: "Companies that help us operate the Service under contractual data-processing obligations, including Google LLC (Google Play billing and Firebase authentication), Vercel, Inc. (hosting, CDN and edge infrastructure), and the AI model and inference providers listed at /policies/ai-providers. A complete, up-to-date list of sub-processors is published at /legal/sub-processors.",
              ar: "Companies that help us operate the Service under contractual data-processing obligations, including Google LLC (Google Play billing and Firebase authentication), Vercel, Inc. (hosting, CDN and edge infrastructure), and the AI model and inference providers listed at /policies/ai-providers. A complete, up-to-date list of sub-processors is published at /legal/sub-processors.",
            },
          },
          {
            term: {
              en: "Business transfers",
              ar: "Business transfers",
            },
            meaning: {
              en: "In the event of a merger, acquisition, or sale of all or substantially all of our assets, your personal data may be transferred to the acquirer. We will give you 30 days’ notice by email before any such transfer takes effect and describe your options at that time.",
              ar: "In the event of a merger, acquisition, or sale of all or substantially all of our assets, your personal data may be transferred to the acquirer. We will give you 30 days’ notice by email before any such transfer takes effect and describe your options at that time.",
            },
          },
          {
            term: {
              en: "Legal disclosures",
              ar: "Legal disclosures",
            },
            meaning: {
              en: "Where we are required by a valid Egyptian court order, regulatory authority request, or mandatory law to disclose personal data. We will notify you of such disclosures where legally permitted. Our principles and annual statistics are published at /legal/government-requests.",
              ar: "Where we are required by a valid Egyptian court order, regulatory authority request, or mandatory law to disclose personal data. We will notify you of such disclosures where legally permitted. Our principles and annual statistics are published at /legal/government-requests.",
            },
          },
          {
            term: {
              en: "Safety",
              ar: "Safety",
            },
            meaning: {
              en: "Where disclosure is necessary to protect the vital interests of any person, or to detect or prevent illegal activity posing a risk to public safety.",
              ar: "Where disclosure is necessary to protect the vital interests of any person, or to detect or prevent illegal activity posing a risk to public safety.",
            },
          },
        ],
      },
      {
        id: "international-transfers",
        heading: {
          en: "7. Cross-Border Data Transfers (PDPL Art. 14)",
          ar: "7. Cross-Border Data Transfers (PDPL Art. 14)",
        },
        paragraphs: {
          en: [
            "ShotStudio is built on global cloud infrastructure. The Service is offered in Egypt and Iraq, but the hosting, authentication, and AI providers we rely on operate outside both countries — principally in the United States and the European Union. Your personal data, including uploaded images, is therefore transferred out of your country and processed abroad.",
            "For users located in Egypt, those transfers are made under Article 14 of Egyptian Personal Data Protection Law No. 151/2020, which permits cross-border transfers only under specified conditions. For users located in Iraq, no equivalent statutory transfer regime currently applies, and we apply the same safeguards as a matter of contract. The safeguards we rely on for each destination are:",
            "United States (Google/Firebase, Google Play, Vercel, AI inference providers): we rely on (a) your explicit, informed consent given at the point of uploading images to the Service, and (b) the contractual necessity exception in PDPL Art. 14; the transfer is necessary to perform the Service contract with you. We impose contractual data-protection obligations on each recipient and keep a documented assessment of the protection available in each destination. We have applied, or are applying, for the PDPL cross-border transfer licence and do not yet hold it.",
            "European Union (certain AI providers, analytics): we rely on the same consent and contractual basis described above. We do not rely on European standard contractual clauses, because Egyptian law does not recognise them as a transfer basis. EU-based processing additionally benefits from GDPR-level protections.",
            "Data processed within Egypt is subject to PDPL Law No. 151/2020 in full.",
            "Full details of transfer mechanisms per sub-processor are available on request from privacy@shotstudio.ai and are summarised at /legal/international-transfers.",
          ],
          ar: [
            "ShotStudio is built on global cloud infrastructure. The Service is offered in Egypt and Iraq, but the hosting, authentication, and AI providers we rely on operate outside both countries — principally in the United States and the European Union. Your personal data, including uploaded images, is therefore transferred out of your country and processed abroad.",
            "For users located in Egypt, those transfers are made under Article 14 of Egyptian Personal Data Protection Law No. 151/2020, which permits cross-border transfers only under specified conditions. For users located in Iraq, no equivalent statutory transfer regime currently applies, and we apply the same safeguards as a matter of contract. The safeguards we rely on for each destination are:",
            "United States (Google/Firebase, Google Play, Vercel, AI inference providers): we rely on (a) your explicit, informed consent given at the point of uploading images to the Service, and (b) the contractual necessity exception in PDPL Art. 14; the transfer is necessary to perform the Service contract with you. We impose contractual data-protection obligations on each recipient and keep a documented assessment of the protection available in each destination. We have applied, or are applying, for the PDPL cross-border transfer licence and do not yet hold it.",
            "European Union (certain AI providers, analytics): we rely on the same consent and contractual basis described above. We do not rely on European standard contractual clauses, because Egyptian law does not recognise them as a transfer basis. EU-based processing additionally benefits from GDPR-level protections.",
            "Data processed within Egypt is subject to PDPL Law No. 151/2020 in full.",
            "Full details of transfer mechanisms per sub-processor are available on request from privacy@shotstudio.ai and are summarised at /legal/international-transfers.",
          ],
        },
      },
      {
        id: "retention",
        heading: {
          en: "8. How Long We Keep Your Data",
          ar: "8. How Long We Keep Your Data",
        },
        lede: {
          en: "We retain personal data only for as long as necessary to fulfil the purpose for which it was collected, to comply with legal obligations, or to resolve disputes. The table below shows our standard retention periods.",
          ar: "We retain personal data only for as long as necessary to fulfil the purpose for which it was collected, to comply with legal obligations, or to resolve disputes. The table below shows our standard retention periods.",
        },
        table: {
          head: {
            en: [
              "Data category",
              "Retention period",
              "Basis",
            ],
            ar: [
              "Data category",
              "Retention period",
              "Basis",
            ],
          },
          rows: [
            {
              en: [
                "Account profile and preferences",
                "Lifetime of Account + 30 days grace period after closure",
                "Contract / legal obligation",
              ],
              ar: [
                "Account profile and preferences",
                "Lifetime of Account + 30 days grace period after closure",
                "Contract / legal obligation",
              ],
            },
            {
              en: [
                "Uploaded images (not saved to library)",
                "Deleted immediately after AI Output is returned (typically < 1 hour)",
                "Transient processing only",
              ],
              ar: [
                "Uploaded images (not saved to library)",
                "Deleted immediately after AI Output is returned (typically < 1 hour)",
                "Transient processing only",
              ],
            },
            {
              en: [
                "Uploaded images (saved to library)",
                "Until you delete them, or 30 days after Account closure",
                "Contract",
              ],
              ar: [
                "Uploaded images (saved to library)",
                "Until you delete them, or 30 days after Account closure",
                "Contract",
              ],
            },
            {
              en: [
                "AI-generated outputs",
                "Until you delete them, or 30 days after Account closure",
                "Contract",
              ],
              ar: [
                "AI-generated outputs",
                "Until you delete them, or 30 days after Account closure",
                "Contract",
              ],
            },
            {
              en: [
                "Billing and tax records (invoices, payment metadata)",
                "10 years from transaction date",
                "Legal obligation (tax and accounting record-keeping)",
              ],
              ar: [
                "Billing and tax records (invoices, payment metadata)",
                "10 years from transaction date",
                "Legal obligation (tax and accounting record-keeping)",
              ],
            },
            {
              en: [
                "Support ticket records",
                "3 years from closure of ticket",
                "Legitimate interests (dispute resolution)",
              ],
              ar: [
                "Support ticket records",
                "3 years from closure of ticket",
                "Legitimate interests (dispute resolution)",
              ],
            },
            {
              en: [
                "Server access and user activity logs",
                "180 days, then deleted",
                "Legal obligation (Anti-Cybercrime Law No. 175/2018)",
              ],
              ar: [
                "Server access and user activity logs",
                "180 days, then deleted",
                "Legal obligation (Anti-Cybercrime Law No. 175/2018)",
              ],
            },
            {
              en: [
                "Marketing consent records",
                "Until consent is withdrawn + 3 years (proof of consent)",
                "Legal obligation",
              ],
              ar: [
                "Marketing consent records",
                "Until consent is withdrawn + 3 years (proof of consent)",
                "Legal obligation",
              ],
            },
          ],
        },
      },
      {
        id: "your-rights",
        heading: {
          en: "9. Your Rights Under PDPL (Arts. 17–25)",
          ar: "9. Your Rights Under PDPL (Arts. 17–25)",
        },
        lede: {
          en: "Egyptian Personal Data Protection Law No. 151/2020 grants you the following rights in respect of your personal data. These rights apply to the extent that we act as data controller of the relevant data. If you are located in Iraq, we grant you the same rights contractually, even though they are not currently conferred by Iraqi statute. To exercise any right, email privacy@shotstudio.ai with the subject line “Privacy Right Request [right name]” and include your account email address. We will respond within 30 days. Where we are unable to fulfil your request, we will explain why in writing.",
          ar: "Egyptian Personal Data Protection Law No. 151/2020 grants you the following rights in respect of your personal data. These rights apply to the extent that we act as data controller of the relevant data. If you are located in Iraq, we grant you the same rights contractually, even though they are not currently conferred by Iraqi statute. To exercise any right, email privacy@shotstudio.ai with the subject line “Privacy Right Request [right name]” and include your account email address. We will respond within 30 days. Where we are unable to fulfil your request, we will explain why in writing.",
        },
        defs: [
          {
            term: {
              en: "Right of access (Art. 17)",
              ar: "Right of access (Art. 17)",
            },
            meaning: {
              en: "Request a copy of the personal data we hold about you, the purposes for which we process it, the recipients we share it with, and our retention periods.",
              ar: "Request a copy of the personal data we hold about you, the purposes for which we process it, the recipients we share it with, and our retention periods.",
            },
          },
          {
            term: {
              en: "Right to rectification (Art. 18)",
              ar: "Right to rectification (Art. 18)",
            },
            meaning: {
              en: "Request correction of inaccurate or incomplete personal data.",
              ar: "Request correction of inaccurate or incomplete personal data.",
            },
          },
          {
            term: {
              en: "Right to erasure (Art. 19)",
              ar: "Right to erasure (Art. 19)",
            },
            meaning: {
              en: "Request deletion of your personal data when it is no longer necessary for the purpose collected, when you withdraw consent (where consent was the lawful basis), or when processing is unlawful. Deletion may be limited by legal-retention obligations.",
              ar: "Request deletion of your personal data when it is no longer necessary for the purpose collected, when you withdraw consent (where consent was the lawful basis), or when processing is unlawful. Deletion may be limited by legal-retention obligations.",
            },
          },
          {
            term: {
              en: "Right to data portability (Art. 20)",
              ar: "Right to data portability (Art. 20)",
            },
            meaning: {
              en: "Receive your personal data in a structured, machine-readable format (JSON or CSV) and transmit it to another controller, where technically feasible.",
              ar: "Receive your personal data in a structured, machine-readable format (JSON or CSV) and transmit it to another controller, where technically feasible.",
            },
          },
          {
            term: {
              en: "Right to object (Art. 21)",
              ar: "Right to object (Art. 21)",
            },
            meaning: {
              en: "Object at any time to processing based on legitimate interests, including profiling and direct marketing. Where you object to marketing, we will stop processing immediately.",
              ar: "Object at any time to processing based on legitimate interests, including profiling and direct marketing. Where you object to marketing, we will stop processing immediately.",
            },
          },
          {
            term: {
              en: "Right to restrict processing (Art. 22)",
              ar: "Right to restrict processing (Art. 22)",
            },
            meaning: {
              en: "Request that we restrict processing of your data, for example, while the accuracy of data you have contested is verified.",
              ar: "Request that we restrict processing of your data, for example, while the accuracy of data you have contested is verified.",
            },
          },
          {
            term: {
              en: "Right to withdraw consent (Art. 23)",
              ar: "Right to withdraw consent (Art. 23)",
            },
            meaning: {
              en: "Withdraw any consent you have given at any time without penalty. Withdrawal does not affect the lawfulness of processing carried out before withdrawal.",
              ar: "Withdraw any consent you have given at any time without penalty. Withdrawal does not affect the lawfulness of processing carried out before withdrawal.",
            },
          },
          {
            term: {
              en: "Right not to be subject to automated decisions (Art. 24)",
              ar: "Right not to be subject to automated decisions (Art. 24)",
            },
            meaning: {
              en: "We do not make solely automated decisions that produce legal or similarly significant effects on you. AI image processing is a tool you actively direct — it does not determine eligibility, creditworthiness, or access to rights.",
              ar: "We do not make solely automated decisions that produce legal or similarly significant effects on you. AI image processing is a tool you actively direct — it does not determine eligibility, creditworthiness, or access to rights.",
            },
          },
          {
            term: {
              en: "Right to lodge a complaint (Art. 25)",
              ar: "Right to lodge a complaint (Art. 25)",
            },
            meaning: {
              en: "If you are in Egypt, lodge a complaint with the Personal Data Protection Center (PDPC), Ministry of Communications and Information Technology, Smart Village, Giza, Egypt (pdpc.gov.eg). Iraq has no dedicated data-protection authority at present; if you are in Iraq, contact our Data Protection Officer first, and you may also complain to the Communications and Media Commission or any other competent Iraqi authority, or raise consumer complaints through the channels described at /legal/iraq-consumer.",
              ar: "If you are in Egypt, lodge a complaint with the Personal Data Protection Center (PDPC), Ministry of Communications and Information Technology, Smart Village, Giza, Egypt (pdpc.gov.eg). Iraq has no dedicated data-protection authority at present; if you are in Iraq, contact our Data Protection Officer first, and you may also complain to the Communications and Media Commission or any other competent Iraqi authority, or raise consumer complaints through the channels described at /legal/iraq-consumer.",
            },
          },
        ],
      },
      {
        id: "children",
        heading: {
          en: "10. Children’s Privacy",
          ar: "10. Children’s Privacy",
        },
        paragraphs: {
          en: [
            "The Service is not directed at children under 18 years of age. We do not knowingly collect personal data from children. If you are a parent or guardian and believe your child has created an Account or provided personal data to us, contact privacy@shotstudio.ai immediately. We will verify the report and delete the child’s data within 15 business days.",
            "If a paid Account is found to belong to a person under 18, we will suspend the Account, refund any unused credits or subscription fees pro-rata, and notify the registered email address as required by consumer protection law.",
          ],
          ar: [
            "The Service is not directed at children under 18 years of age. We do not knowingly collect personal data from children. If you are a parent or guardian and believe your child has created an Account or provided personal data to us, contact privacy@shotstudio.ai immediately. We will verify the report and delete the child’s data within 15 business days.",
            "If a paid Account is found to belong to a person under 18, we will suspend the Account, refund any unused credits or subscription fees pro-rata, and notify the registered email address as required by consumer protection law.",
          ],
        },
      },
      {
        id: "security",
        heading: {
          en: "11. Security Measures",
          ar: "11. Security Measures",
        },
        lede: {
          en: "We apply technical and organisational measures appropriate to the risk of processing. Current measures include:",
          ar: "We apply technical and organisational measures appropriate to the risk of processing. Current measures include:",
        },
        defs: [
          {
            term: {
              en: "Encryption in transit",
              ar: "Encryption in transit",
            },
            meaning: {
              en: "TLS 1.3 for all data transmitted between your browser and our servers, and between our servers and sub-processors.",
              ar: "TLS 1.3 for all data transmitted between your browser and our servers, and between our servers and sub-processors.",
            },
          },
          {
            term: {
              en: "Encryption at rest",
              ar: "Encryption at rest",
            },
            meaning: {
              en: "AES-256 encryption for stored data, including uploaded images and Account data.",
              ar: "AES-256 encryption for stored data, including uploaded images and Account data.",
            },
          },
          {
            term: {
              en: "Access controls",
              ar: "Access controls",
            },
            meaning: {
              en: "Least-privilege access for all staff; role-based permissions; MFA required for all internal systems.",
              ar: "Least-privilege access for all staff; role-based permissions; MFA required for all internal systems.",
            },
          },
          {
            term: {
              en: "Vendor risk management",
              ar: "Vendor risk management",
            },
            meaning: {
              en: "All sub-processors are assessed for security posture before onboarding and reviewed annually.",
              ar: "All sub-processors are assessed for security posture before onboarding and reviewed annually.",
            },
          },
          {
            term: {
              en: "Network security",
              ar: "Network security",
            },
            meaning: {
              en: "Isolated processing environments for AI workloads.",
              ar: "Isolated processing environments for AI workloads.",
            },
          },
          {
            term: {
              en: "Incident response",
              ar: "Incident response",
            },
            meaning: {
              en: "Documented incident response plan; breach notification to the PDPC within 72 hours of becoming aware — immediately where national security is implicated — and notification to affected individuals within three working days of that report, as the PDPL Executive Regulations require. We apply the same timeframes to users in Iraq as a contractual commitment. Full details are at /trust/security.",
              ar: "Documented incident response plan; breach notification to the PDPC within 72 hours of becoming aware — immediately where national security is implicated — and notification to affected individuals within three working days of that report, as the PDPL Executive Regulations require. We apply the same timeframes to users in Iraq as a contractual commitment. Full details are at /trust/security.",
            },
          },
        ],
      },
      {
        id: "cookies",
        heading: {
          en: "12. Cookies and Tracking Technologies",
          ar: "12. Cookies and Tracking Technologies",
        },
        paragraphs: {
          en: [
            "We use three categories of cookies: essential (required for the Service to function; no consent needed), analytics (help us understand how the Service is used; require your consent), and marketing (personalised outreach requires your consent). You choose your preferences in the consent banner on your first visit. You can update your preferences at any time via the cookie preferences link in the footer.",
            "Full details of each cookie, its provider, its purpose, and its duration are in our Cookie Policy at /legal/cookies.",
          ],
          ar: [
            "We use three categories of cookies: essential (required for the Service to function; no consent needed), analytics (help us understand how the Service is used; require your consent), and marketing (personalised outreach requires your consent). You choose your preferences in the consent banner on your first visit. You can update your preferences at any time via the cookie preferences link in the footer.",
            "Full details of each cookie, its provider, its purpose, and its duration are in our Cookie Policy at /legal/cookies.",
          ],
        },
      },
      {
        id: "changes",
        heading: {
          en: "13. Changes to This Privacy Policy",
          ar: "13. Changes to This Privacy Policy",
        },
        paragraphs: {
          en: [
            "We may update this Privacy Policy from time to time. For material changes, including changes that expand the categories of data we collect, add new processing purposes, or reduce your rights, we will give you at least 30 days’ advance notice by email to your registered address and by a prominent in-app notification. The updated Policy will be posted at shotstudio.ai/legal/privacy with a new “Last updated” date.",
            "For non-material changes (updated contact details, clarifications, typographical corrections), we may update the Policy immediately on posting. Continued use of the Service after the effective date of any change constitutes acceptance of the updated Policy.",
          ],
          ar: [
            "We may update this Privacy Policy from time to time. For material changes, including changes that expand the categories of data we collect, add new processing purposes, or reduce your rights, we will give you at least 30 days’ advance notice by email to your registered address and by a prominent in-app notification. The updated Policy will be posted at shotstudio.ai/legal/privacy with a new “Last updated” date.",
            "For non-material changes (updated contact details, clarifications, typographical corrections), we may update the Policy immediately on posting. Continued use of the Service after the effective date of any change constitutes acceptance of the updated Policy.",
          ],
        },
      },
      {
        id: "contact",
        heading: {
          en: "14. Contact Us",
          ar: "14. Contact Us",
        },
        paragraphs: {
          en: [
            "For questions about this Privacy Policy or to exercise your privacy rights, contact our Data Protection Officer at privacy@shotstudio.ai.",
          ],
          ar: [
            "For questions about this Privacy Policy or to exercise your privacy rights, contact our Data Protection Officer at privacy@shotstudio.ai.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/legal/cookies",
        label: {
          en: "Cookie Policy",
          ar: "Cookie Policy",
        },
      },
      {
        href: "/legal/terms",
        label: {
          en: "Terms of Service",
          ar: "Terms of Service",
        },
      },
      {
        href: "/legal/dpa",
        label: {
          en: "Data Processing Agreement",
          ar: "Data Processing Agreement",
        },
      },
      {
        href: "/legal/sub-processors",
        label: {
          en: "Sub-processors",
          ar: "Sub-processors",
        },
      },
      {
        href: "/policies/ai-training-opt-out",
        label: {
          en: "AI Training Opt-Out",
          ar: "AI Training Opt-Out",
        },
      },
      {
        href: "/legal/iraq-consumer",
        label: {
          en: "Iraq Consumer Disclosure",
          ar: "Iraq Consumer Disclosure",
        },
      },
      {
        href: "/legal/egypt-pdpl",
        label: {
          en: "Egypt PDPL Notice",
          ar: "Egypt PDPL Notice",
        },
      },
      {
        href: "/legal/international-transfers",
        label: {
          en: "International Transfers",
          ar: "International Transfers",
        },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── L02 TERMS
  {
    slug: "terms",
    tree: "legal",
    status: "final",
    updated: "2026-08-26",
    title: {
      en: "Terms of Service — ShotStudio",
      ar: "Terms of Service — ShotStudio",
    },
    meta: {
      en: "The binding contract between you and ShotStudio: what you may do on the platform, who owns your uploads and AI outputs, how billing and refunds work, your consumer rights in Egypt and Iraq, and how disputes are resolved.",
      ar: "The binding contract between you and ShotStudio: what you may do on the platform, who owns your uploads and AI outputs, how billing and refunds work, your consumer rights in Egypt and Iraq, and how disputes are resolved.",
    },
    h1: {
      en: "Terms of Service",
      ar: "Terms of Service",
    },
    summary: {
      en: "These Terms form the binding contract between you and ShotStudio. They explain what you may do on the platform, who owns the content you upload and the images you generate, how billing and refunds work, your rights as a consumer in Egypt and in Iraq, and how disputes are resolved. Please read them before using the Service.",
      ar: "These Terms form the binding contract between you and ShotStudio. They explain what you may do on the platform, who owns the content you upload and the images you generate, how billing and refunds work, your rights as a consumer in Egypt and in Iraq, and how disputes are resolved. Please read them before using the Service.",
    },
    sections: [
      {
        id: "parties",
        heading: {
          en: "1. Parties, Identity and Scope",
          ar: "1. Parties, Identity and Scope",
        },
        paragraphs: {
          en: [
            "1.1 Who we are. The Service is operated by Innovatx Technologies (trading as “ShotStudio”), with its principal place of business at Austin, Texas, United States.",
            "1.2 Cross-border supply. ShotStudio is not established in the Arab Republic of Egypt or in the Republic of Iraq. We supply the Service to users in those countries on a cross-border basis from outside them. This does not reduce your rights: where the mandatory law of your country applies to this contract, it applies regardless of where we are established, and section 23 confirms which law governs.",
            "1.3 Tax status and invoicing. Because we supply on a cross-border basis, subscriptions and Credit Packs are sold through Google Play, which acts as merchant of record, applies the tax treatment required at checkout, and issues your receipt. ShotStudio holds no Egyptian commercial registration, tax card, or ETA simplified-vendor registration, and no Iraqi commercial registration.",
            "1.4 Data protection contact for Egypt. For Personal Data Protection Law No. 151/2020 and its Executive Regulations issued by Decree No. 816 of 2025, we have not yet appointed a representative in Egypt; clause 11.5 sets out our authorisation status and the steps in progress, and our current position is published at shotstudio.ai/legal/egypt-pdpl. Until a representative is appointed, contact our Data Protection Officer at privacy@shotstudio.ai on any matter concerning your personal data.",
            "1.5 Our regulatory contact in Iraq. For the Framework Regulations for Digital Platforms and Services issued by the Communications and Media Commission of Iraq, our liaison contact is legal@shotstudio.ai. Users in Iraq may raise any regulatory concern with us there directly.",
            "1.6 Customer service. Email support@shotstudio.ai. Our complete commercial disclosures are published at shotstudio.ai/legal/business-info, in compliance with the pre-contract disclosure requirements for distance contracts under Consumer Protection Law No. 181/2018 (Egypt) and its Executive Regulations.",
            "1.7 What these Terms cover. These Terms of Service (“Terms”) govern your access to and use of the ShotStudio AI photo-editing platform at shotstudio.ai and any associated applications and APIs (the “Service”). By accessing or using the Service, you enter into a binding contract with us on these Terms. If you do not agree to them, you must not use the Service.",
            "1.8 Documents that form part of this contract. These Terms incorporate the following, each published under shotstudio.ai/legal: the Privacy Policy, the Egypt PDPL Notice, the Content Moderation Policy, the Intellectual Property Complaints Policy and the Sub-processor List. Where any of them conflict with these Terms, these Terms prevail.",
          ],
          ar: [
            "1.1 Who we are. The Service is operated by Innovatx Technologies (trading as “ShotStudio”), with its principal place of business at Austin, Texas, United States.",
            "1.2 Cross-border supply. ShotStudio is not established in the Arab Republic of Egypt or in the Republic of Iraq. We supply the Service to users in those countries on a cross-border basis from outside them. This does not reduce your rights: where the mandatory law of your country applies to this contract, it applies regardless of where we are established, and section 23 confirms which law governs.",
            "1.3 Tax status and invoicing. Because we supply on a cross-border basis, subscriptions and Credit Packs are sold through Google Play, which acts as merchant of record, applies the tax treatment required at checkout, and issues your receipt. ShotStudio holds no Egyptian commercial registration, tax card, or ETA simplified-vendor registration, and no Iraqi commercial registration.",
            "1.4 Data protection contact for Egypt. For Personal Data Protection Law No. 151/2020 and its Executive Regulations issued by Decree No. 816 of 2025, we have not yet appointed a representative in Egypt; clause 11.5 sets out our authorisation status and the steps in progress, and our current position is published at shotstudio.ai/legal/egypt-pdpl. Until a representative is appointed, contact our Data Protection Officer at privacy@shotstudio.ai on any matter concerning your personal data.",
            "1.5 Our regulatory contact in Iraq. For the Framework Regulations for Digital Platforms and Services issued by the Communications and Media Commission of Iraq, our liaison contact is legal@shotstudio.ai. Users in Iraq may raise any regulatory concern with us there directly.",
            "1.6 Customer service. Email support@shotstudio.ai. Our complete commercial disclosures are published at shotstudio.ai/legal/business-info, in compliance with the pre-contract disclosure requirements for distance contracts under Consumer Protection Law No. 181/2018 (Egypt) and its Executive Regulations.",
            "1.7 What these Terms cover. These Terms of Service (“Terms”) govern your access to and use of the ShotStudio AI photo-editing platform at shotstudio.ai and any associated applications and APIs (the “Service”). By accessing or using the Service, you enter into a binding contract with us on these Terms. If you do not agree to them, you must not use the Service.",
            "1.8 Documents that form part of this contract. These Terms incorporate the following, each published under shotstudio.ai/legal: the Privacy Policy, the Egypt PDPL Notice, the Content Moderation Policy, the Intellectual Property Complaints Policy and the Sub-processor List. Where any of them conflict with these Terms, these Terms prevail.",
          ],
        },
      },
      {
        id: "definitions",
        heading: {
          en: "2. Definitions",
          ar: "2. Definitions",
        },
        defs: [
          {
            term: {
              en: "Account",
              ar: "Account",
            },
            meaning: {
              en: "The registered user account through which you access the Service.",
              ar: "The registered user account through which you access the Service.",
            },
          },
          {
            term: {
              en: "AI Output",
              ar: "AI Output",
            },
            meaning: {
              en: "Images, edited photographs or other material generated by the Service in response to your Content and prompts.",
              ar: "Images, edited photographs or other material generated by the Service in response to your Content and prompts.",
            },
          },
          {
            term: {
              en: "Billing Period",
              ar: "Billing Period",
            },
            meaning: {
              en: "The monthly or annual cycle on which your Subscription fee is charged, and your Credit allowance refreshes.",
              ar: "The monthly or annual cycle on which your Subscription fee is charged, and your Credit allowance refreshes.",
            },
          },
          {
            term: {
              en: "Business User",
              ar: "Business User",
            },
            meaning: {
              en: "A User who accesses the Service wholly or mainly for purposes relating to that User’s trade, business, craft or profession, including any User contracting through a company or other legal entity.",
              ar: "A User who accesses the Service wholly or mainly for purposes relating to that User’s trade, business, craft or profession, including any User contracting through a company or other legal entity.",
            },
          },
          {
            term: {
              en: "Consumer",
              ar: "Consumer",
            },
            meaning: {
              en: "A natural person who accesses the Service wholly or mainly for purposes outside that person’s trade, business, craft or profession. Where the law of your country defines “consumer” more broadly than this, that definition applies to you instead.",
              ar: "A natural person who accesses the Service wholly or mainly for purposes outside that person’s trade, business, craft or profession. Where the law of your country defines “consumer” more broadly than this, that definition applies to you instead.",
            },
          },
          {
            term: {
              en: "Content",
              ar: "Content",
            },
            meaning: {
              en: "Images, photographs, text, prompts and any other material you upload to or input into the Service.",
              ar: "Images, photographs, text, prompts and any other material you upload to or input into the Service.",
            },
          },
          {
            term: {
              en: "CPL",
              ar: "CPL",
            },
            meaning: {
              en: "Consumer Protection Law No. 181 of 2018 (Egypt) and its Executive Regulations.",
              ar: "Consumer Protection Law No. 181 of 2018 (Egypt) and its Executive Regulations.",
            },
          },
          {
            term: {
              en: "Credits",
              ar: "Credits",
            },
            meaning: {
              en: "The digital tokens issued to your Account and consumed each time you use an AI tool. Allowances per plan are published on the Pricing page.",
              ar: "The digital tokens issued to your Account and consumed each time you use an AI tool. Allowances per plan are published on the Pricing page.",
            },
          },
          {
            term: {
              en: "Credit Pack",
              ar: "Credit Pack",
            },
            meaning: {
              en: "A one-time purchase of additional Credits. Credit Packs do not expire.",
              ar: "A one-time purchase of additional Credits. Credit Packs do not expire.",
            },
          },
          {
            term: {
              en: "Iraq CPL",
              ar: "Iraq CPL",
            },
            meaning: {
              en: "Consumer Protection Law No. 1 of 2010 (Republic of Iraq).",
              ar: "Consumer Protection Law No. 1 of 2010 (Republic of Iraq).",
            },
          },
          {
            term: {
              en: "PDPL",
              ar: "PDPL",
            },
            meaning: {
              en: "Personal Data Protection Law No. 151 of 2020 (Egypt), together with its Executive Regulations issued by Decree No. 816 of 2025.",
              ar: "Personal Data Protection Law No. 151 of 2020 (Egypt), together with its Executive Regulations issued by Decree No. 816 of 2025.",
            },
          },
          {
            term: {
              en: "PDPC",
              ar: "PDPC",
            },
            meaning: {
              en: "The Personal Data Protection Centre established under the PDPL.",
              ar: "The Personal Data Protection Centre established under the PDPL.",
            },
          },
          {
            term: {
              en: "Service",
              ar: "Service",
            },
            meaning: {
              en: "As defined in clause 1.7.",
              ar: "As defined in clause 1.7.",
            },
          },
          {
            term: {
              en: "Subscription",
              ar: "Subscription",
            },
            meaning: {
              en: "A recurring paid plan (Starter, Pro or Studio) granting a monthly Credit allowance and the features specified on the Pricing page.",
              ar: "A recurring paid plan (Starter, Pro or Studio) granting a monthly Credit allowance and the features specified on the Pricing page.",
            },
          },
          {
            term: {
              en: "User / you",
              ar: "User / you",
            },
            meaning: {
              en: "Any person who accesses or uses the Service. Where you use the Service on behalf of an entity, “you” means that entity and you confirm you have authority to bind it.",
              ar: "Any person who accesses or uses the Service. Where you use the Service on behalf of an entity, “you” means that entity and you confirm you have authority to bind it.",
            },
          },
        ],
      },
      {
        id: "acceptance",
        heading: {
          en: "3. Acceptance, Legal Capacity and Age",
          ar: "3. Acceptance, Legal Capacity and Age",
        },
        paragraphs: {
          en: [
            "3.1 How you accept these Terms. By clicking “Get started”, completing account registration, or otherwise accessing or using the Service, you agree to be bound by these Terms. Your acceptance is an expression of contractual assent, and we record the date, time and version of the Terms accepted so that both of us have a record of what was agreed. We keep that record for as long as your Account exists and for the period described in clause 11.9 afterwards.",
            "3.2 You must be 18 or over. You must be at least 18 years old to create an Account or to use any part of the Service, whether on a free or a paid plan. The Service is not offered to persons under 18 on any tier.",
            "3.3 If we discover an Account is held by a minor. If we become aware that an Account is held by a person under 18, we will suspend the Account, notify the registered email address, refund any unused Credits and any unexpired Subscription fees in full, and delete the Account and its Content in accordance with clause 11.9. No cancellation charge applies.",
            "3.4 Uploading images of minors. You must not upload Content depicting a person under 18 except where you are that person’s parent or legal guardian, or hold the documented consent of the parent or legal guardian, and the use is lawful in your country. Sections 8 and 9 apply in full to any such Content.",
            "3.5 Contracting on behalf of an entity. If you register on behalf of a company, organisation or other legal entity, you confirm that you have authority to bind it and that it meets the capacity requirements of its own jurisdiction. In that case, “you” in these Terms means the entity, and the entity is a Business User for sections 13 and 18.",
          ],
          ar: [
            "3.1 How you accept these Terms. By clicking “Get started”, completing account registration, or otherwise accessing or using the Service, you agree to be bound by these Terms. Your acceptance is an expression of contractual assent, and we record the date, time and version of the Terms accepted so that both of us have a record of what was agreed. We keep that record for as long as your Account exists and for the period described in clause 11.9 afterwards.",
            "3.2 You must be 18 or over. You must be at least 18 years old to create an Account or to use any part of the Service, whether on a free or a paid plan. The Service is not offered to persons under 18 on any tier.",
            "3.3 If we discover an Account is held by a minor. If we become aware that an Account is held by a person under 18, we will suspend the Account, notify the registered email address, refund any unused Credits and any unexpired Subscription fees in full, and delete the Account and its Content in accordance with clause 11.9. No cancellation charge applies.",
            "3.4 Uploading images of minors. You must not upload Content depicting a person under 18 except where you are that person’s parent or legal guardian, or hold the documented consent of the parent or legal guardian, and the use is lawful in your country. Sections 8 and 9 apply in full to any such Content.",
            "3.5 Contracting on behalf of an entity. If you register on behalf of a company, organisation or other legal entity, you confirm that you have authority to bind it and that it meets the capacity requirements of its own jurisdiction. In that case, “you” in these Terms means the entity, and the entity is a Business User for sections 13 and 18.",
          ],
        },
      },
      {
        id: "service",
        heading: {
          en: "4. Description of the Service",
          ar: "4. Description of the Service",
        },
        paragraphs: {
          en: [
            "4.1 What the Service does. ShotStudio is an AI-powered photo-editing platform for e-commerce sellers, retail businesses, photographers and creative professionals. It provides seventeen AI editing tools — including background removal, ghost mannequin, scene staging, colour grading, jewellery retouching, face analysis and textile processing — through a credit-based usage model.",
            "4.2 Plans and Credits. The Service operates on tiered plans (Free, Starter, Pro, Studio) with differing Credit allowances, batch-processing limits and feature access, as described on the Pricing page. Credits are consumed per AI operation.",
            "4.3 How Credits behave. This clause states the only rules that apply to Credits; sections 13 and 19 refer back to it.",
            "4.4 Face analysis and images of people. Several tools, including face analysis, operate on images that depict identifiable people. Those tools detect facial regions to place edits correctly. They do not identify anyone, do not match a face across images, and do not retain facial measurements or templates after the operation completes. Clause 6.4(c) requires you to hold the documented consent of any identifiable person you upload, and clause 11.4 of these Terms and the Privacy Policy govern what happens to those images afterwards.",
            "4.5 Beta features. Features designated “Beta” are experimental, carry no service-level commitment, and may be modified or withdrawn on 14 days’ notice to free-tier users and 30 days’ notice to paid-tier users. We will not charge separately for a Beta feature unless we give you advance notice and an opportunity to decline.",
            "4.6 API and automated access. Automated and programmatic access, including batch processing and API calls, is permitted within the documented rate limits for your plan. Access that circumvents those limits, that is designed to evade metering, or that materially degrades the Service for other users is prohibited under clause 8.2.",
          ],
          ar: [
            "4.1 What the Service does. ShotStudio is an AI-powered photo-editing platform for e-commerce sellers, retail businesses, photographers and creative professionals. It provides seventeen AI editing tools — including background removal, ghost mannequin, scene staging, colour grading, jewellery retouching, face analysis and textile processing — through a credit-based usage model.",
            "4.2 Plans and Credits. The Service operates on tiered plans (Free, Starter, Pro, Studio) with differing Credit allowances, batch-processing limits and feature access, as described on the Pricing page. Credits are consumed per AI operation.",
            "4.3 How Credits behave. This clause states the only rules that apply to Credits; sections 13 and 19 refer back to it.",
            "4.4 Face analysis and images of people. Several tools, including face analysis, operate on images that depict identifiable people. Those tools detect facial regions to place edits correctly. They do not identify anyone, do not match a face across images, and do not retain facial measurements or templates after the operation completes. Clause 6.4(c) requires you to hold the documented consent of any identifiable person you upload, and clause 11.4 of these Terms and the Privacy Policy govern what happens to those images afterwards.",
            "4.5 Beta features. Features designated “Beta” are experimental, carry no service-level commitment, and may be modified or withdrawn on 14 days’ notice to free-tier users and 30 days’ notice to paid-tier users. We will not charge separately for a Beta feature unless we give you advance notice and an opportunity to decline.",
            "4.6 API and automated access. Automated and programmatic access, including batch processing and API calls, is permitted within the documented rate limits for your plan. Access that circumvents those limits, that is designed to evade metering, or that materially degrades the Service for other users is prohibited under clause 8.2.",
          ],
        },
        table: {
          head: {
            en: [
              "Credit type",
              "Rollover",
              "Expiry",
              "Refundable",
            ],
            ar: [
              "Credit type",
              "Rollover",
              "Expiry",
              "Refundable",
            ],
          },
          rows: [
            {
              en: [
                "Free-tier Credits",
                "None",
                "End of Billing Period",
                "No — no fee was paid",
              ],
              ar: [
                "Free-tier Credits",
                "None",
                "End of Billing Period",
                "No — no fee was paid",
              ],
            },
            {
              en: [
                "Subscription Credits",
                "One Billing Period",
                "End of the following Billing Period",
                "Yes, on withdrawal under 13.1 or 13.2, and on discontinuation under 19.2",
              ],
              ar: [
                "Subscription Credits",
                "One Billing Period",
                "End of the following Billing Period",
                "Yes, on withdrawal under 13.1 or 13.2, and on discontinuation under 19.2",
              ],
            },
            {
              en: [
                "Credit Pack Credits",
                "Not applicable",
                "Do not expire",
                "Unused Packs under 13.5; consumed Credits are not refundable",
              ],
              ar: [
                "Credit Pack Credits",
                "Not applicable",
                "Do not expire",
                "Unused Packs under 13.5; consumed Credits are not refundable",
              ],
            },
          ],
        },
      },
      {
        id: "accounts",
        heading: {
          en: "5. Account Registration and Security",
          ar: "5. Account Registration and Security",
        },
        paragraphs: {
          en: [
            "5.1 To access most features you must register an Account with accurate, current and complete information, and keep that information up to date. We may suspend an Account containing materially false registration information, following the notice procedure in clause 20.2.",
            "5.2 You are responsible for the confidentiality of your Account credentials and for activity occurring under your Account. You must not share credentials with any third party except where a team or Studio plan expressly permits it.",
            "5.3 If you suspect unauthorised access to your Account, you must notify us at support@shotstudio.ai without delay. We will take reasonable steps to help you secure it. We are not liable for loss arising from unauthorised access that results from your failure to keep credentials confidential — subject always to section 18, which limits how far that exclusion can operate against a Consumer.",
            "5.4 Accounts are personal and non-transferable. We may limit the number of Accounts one person or entity holds to prevent abuse of free-tier allowances.",
          ],
          ar: [
            "5.1 To access most features you must register an Account with accurate, current and complete information, and keep that information up to date. We may suspend an Account containing materially false registration information, following the notice procedure in clause 20.2.",
            "5.2 You are responsible for the confidentiality of your Account credentials and for activity occurring under your Account. You must not share credentials with any third party except where a team or Studio plan expressly permits it.",
            "5.3 If you suspect unauthorised access to your Account, you must notify us at support@shotstudio.ai without delay. We will take reasonable steps to help you secure it. We are not liable for loss arising from unauthorised access that results from your failure to keep credentials confidential — subject always to section 18, which limits how far that exclusion can operate against a Consumer.",
            "5.4 Accounts are personal and non-transferable. We may limit the number of Accounts one person or entity holds to prevent abuse of free-tier allowances.",
          ],
        },
      },
      {
        id: "user-content",
        heading: {
          en: "6. User Content — Ownership, Licence and Warranties",
          ar: "6. User Content — Ownership, Licence and Warranties",
        },
        paragraphs: {
          en: [
            "6.1 You own your Content. You retain full ownership of all Content you upload. ShotStudio claims no ownership of your photographs, images or other materials.",
            "6.2 The licence you give us, and its limits. By uploading Content you grant ShotStudio a worldwide, non-exclusive, royalty-free licence to host, store, transmit, process and display that Content solely to operate the Service for you and to meet our obligations under these Terms. The licence does not extend to any other purpose. In particular, it does not permit us to use your Content for marketing, to license it to third parties, or to train production AI models, and clause 11.4 confirms that separately.",
            "6.3 When the licence ends. The licence in clause 6.2 ends when you delete the Content or close your Account. It continues for a limited period thereafter only to the extent necessary to complete backup and deletion cycles and to comply with the retention obligations described in clause 11.9, and it expires when those obligations expire.",
            "6.4 Your warranties. You represent and warrant that:",
            "(a) you own or hold all necessary rights, licences and permissions in everything you upload;",
            "(b) your Content does not infringe the intellectual property rights, privacy rights or other rights of any third party;",
            "(c) where your Content depicts an identifiable individual, you hold that person’s valid and documented consent to upload and process the image and to use the resulting AI Output in the manner you intend; and",
            "(d) your Content and your use of any AI Output comply with all applicable laws, including Intellectual Property Law No. 82/2002 and Anti-Cybercrime Law No. 175/2018 (Egypt), and Copyright Law No. 3 of 1971 as amended by CPA Order No. 83 of 2004 (Iraq).",
            "6.5 Removal. We may remove or disable access to Content we reasonably believe breaches section 8 of these Terms or applicable law. Section 9 governs how we do that, what we tell you, and how you can challenge it.",
          ],
          ar: [
            "6.1 You own your Content. You retain full ownership of all Content you upload. ShotStudio claims no ownership of your photographs, images or other materials.",
            "6.2 The licence you give us, and its limits. By uploading Content you grant ShotStudio a worldwide, non-exclusive, royalty-free licence to host, store, transmit, process and display that Content solely to operate the Service for you and to meet our obligations under these Terms. The licence does not extend to any other purpose. In particular, it does not permit us to use your Content for marketing, to license it to third parties, or to train production AI models, and clause 11.4 confirms that separately.",
            "6.3 When the licence ends. The licence in clause 6.2 ends when you delete the Content or close your Account. It continues for a limited period thereafter only to the extent necessary to complete backup and deletion cycles and to comply with the retention obligations described in clause 11.9, and it expires when those obligations expire.",
            "6.4 Your warranties. You represent and warrant that:",
            "(a) you own or hold all necessary rights, licences and permissions in everything you upload;",
            "(b) your Content does not infringe the intellectual property rights, privacy rights or other rights of any third party;",
            "(c) where your Content depicts an identifiable individual, you hold that person’s valid and documented consent to upload and process the image and to use the resulting AI Output in the manner you intend; and",
            "(d) your Content and your use of any AI Output comply with all applicable laws, including Intellectual Property Law No. 82/2002 and Anti-Cybercrime Law No. 175/2018 (Egypt), and Copyright Law No. 3 of 1971 as amended by CPA Order No. 83 of 2004 (Iraq).",
            "6.5 Removal. We may remove or disable access to Content we reasonably believe breaches section 8 of these Terms or applicable law. Section 9 governs how we do that, what we tell you, and how you can challenge it.",
          ],
        },
      },
      {
        id: "ai-output",
        heading: {
          en: "7. AI-Generated Output — Ownership and Commercial Use",
          ar: "7. AI-Generated Output — Ownership and Commercial Use",
        },
        paragraphs: {
          en: [
            "7.1 You own the AI Outputs. As between you and ShotStudio, you own all AI Outputs generated from your Content and prompts.",
            "7.2 Assignment. To the extent that any right, title or interest in an AI Output vests in ShotStudio by operation of law, ShotStudio assigns that right, title and interest to you absolutely, with effect from the moment the AI Output is generated, together with the right to bring proceedings in respect of past infringements.",
            "7.3 Fallback licence. Where an assignment under clause 7.2 is not effective under applicable law, ShotStudio grants you an exclusive, worldwide, perpetual, irrevocable, royalty-free licence to use, reproduce, modify, distribute and commercially exploit that AI Output.",
            "7.4 Not conditional on your Subscription. Neither the assignment nor the fallback licence depends on your maintaining an active Subscription. AI Outputs you have generated remain yours after cancellation, and you may continue to use them commercially.",
            "7.5 Jurisdictional note on copyright in machine-generated images. Some legal systems may not recognise copyright in images that are wholly machine-generated without meaningful human creative contribution. This includes Egypt under Intellectual Property Law No. 82/2002, Iraq under Copyright Law No. 3 of 1971 as amended by CPA Order No. 83 of 2004, and the United States under current Copyright Office guidance. Adding substantive human creative input typically restores eligibility for authorship. We do not give legal advice; for significant commercial uses, take advice from a qualified intellectual property lawyer in your country.",
            "7.6 Limits on use. You must not use AI Outputs to infringe third-party rights, to mislead consumers about the nature, origin or condition of goods or services, or for any purpose prohibited by section 8.",
          ],
          ar: [
            "7.1 You own the AI Outputs. As between you and ShotStudio, you own all AI Outputs generated from your Content and prompts.",
            "7.2 Assignment. To the extent that any right, title or interest in an AI Output vests in ShotStudio by operation of law, ShotStudio assigns that right, title and interest to you absolutely, with effect from the moment the AI Output is generated, together with the right to bring proceedings in respect of past infringements.",
            "7.3 Fallback licence. Where an assignment under clause 7.2 is not effective under applicable law, ShotStudio grants you an exclusive, worldwide, perpetual, irrevocable, royalty-free licence to use, reproduce, modify, distribute and commercially exploit that AI Output.",
            "7.4 Not conditional on your Subscription. Neither the assignment nor the fallback licence depends on your maintaining an active Subscription. AI Outputs you have generated remain yours after cancellation, and you may continue to use them commercially.",
            "7.5 Jurisdictional note on copyright in machine-generated images. Some legal systems may not recognise copyright in images that are wholly machine-generated without meaningful human creative contribution. This includes Egypt under Intellectual Property Law No. 82/2002, Iraq under Copyright Law No. 3 of 1971 as amended by CPA Order No. 83 of 2004, and the United States under current Copyright Office guidance. Adding substantive human creative input typically restores eligibility for authorship. We do not give legal advice; for significant commercial uses, take advice from a qualified intellectual property lawyer in your country.",
            "7.6 Limits on use. You must not use AI Outputs to infringe third-party rights, to mislead consumers about the nature, origin or condition of goods or services, or for any purpose prohibited by section 8.",
          ],
        },
      },
      {
        id: "prohibited",
        heading: {
          en: "8. Prohibited Content and Uses",
          ar: "8. Prohibited Content and Uses",
        },
        lede: {
          en: "8.1 Content prohibitions. The following are prohibited absolutely. Breach may result in immediate suspension or termination under clause 20.3 and, where the law requires it, referral to the competent authorities.",
          ar: "8.1 Content prohibitions. The following are prohibited absolutely. Breach may result in immediate suspension or termination under clause 20.3 and, where the law requires it, referral to the competent authorities.",
        },
        paragraphs: {
          en: [
            "(a) Child sexual abuse material, or any sexualised depiction of a minor. We report this to the competent Egyptian and Iraqi authorities and to relevant international bodies, and we preserve the associated data as the law requires.",
            "(b) Non-consensual intimate imagery, and sexual deepfakes of real, identifiable individuals.",
            "(c) Deepfakes or AI-manipulated images of identifiable individuals created or used without their valid, documented consent.",
            "(d) Content designed to deceive the public in electoral, political, or judicial proceedings.",
            "(e) Hate speech, threats, incitement to violence, or content discriminating based on religion, ethnicity, gender, disability or national origin.",
            "(f) Content infringing intellectual property rights protected under Intellectual Property Law No. 82/2002 (Egypt), Copyright Law No. 3 of 1971 as amended by CPA Order No. 83 of 2004 (Iraq), or equivalent laws elsewhere — including unauthorised use of trademarks, copyrighted works and protected designs.",
            "(g) Content constituting an offence under Anti-Cybercrime Law No. 175/2018 (Egypt) or the applicable criminal law of Iraq, including unauthorised access to systems, publication of indecent or defamatory material, cyberstalking, and electronic fraud.",
            "(h) Malware, phishing kits, exploit code, or material designed to defraud.",
            "(i) Counterfeit goods, fake commercial endorsements, and fabricated reviews.",
            "(j) Images of third parties uploaded without their knowledge and consent, or used for purposes they have not agreed to.",
            "8.2 Use prohibitions. You must not: (a) access the Service by automated means outside the documented rate limits for your plan, circumvent metering, or impose load that materially degrades the Service for others (clause 4.6 governs permitted automated access); (b) reverse-engineer, decompile or disassemble the Service, or attempt to circumvent its technical protection measures or AI safety filters; (c) resell, sub-license or otherwise commercialise access to the Service beyond what your plan expressly permits; or (d) use the Service, or AI Outputs generated through it, to train a competing AI model or service.",
          ],
          ar: [
            "(a) Child sexual abuse material, or any sexualised depiction of a minor. We report this to the competent Egyptian and Iraqi authorities and to relevant international bodies, and we preserve the associated data as the law requires.",
            "(b) Non-consensual intimate imagery, and sexual deepfakes of real, identifiable individuals.",
            "(c) Deepfakes or AI-manipulated images of identifiable individuals created or used without their valid, documented consent.",
            "(d) Content designed to deceive the public in electoral, political, or judicial proceedings.",
            "(e) Hate speech, threats, incitement to violence, or content discriminating based on religion, ethnicity, gender, disability or national origin.",
            "(f) Content infringing intellectual property rights protected under Intellectual Property Law No. 82/2002 (Egypt), Copyright Law No. 3 of 1971 as amended by CPA Order No. 83 of 2004 (Iraq), or equivalent laws elsewhere — including unauthorised use of trademarks, copyrighted works and protected designs.",
            "(g) Content constituting an offence under Anti-Cybercrime Law No. 175/2018 (Egypt) or the applicable criminal law of Iraq, including unauthorised access to systems, publication of indecent or defamatory material, cyberstalking, and electronic fraud.",
            "(h) Malware, phishing kits, exploit code, or material designed to defraud.",
            "(i) Counterfeit goods, fake commercial endorsements, and fabricated reviews.",
            "(j) Images of third parties uploaded without their knowledge and consent, or used for purposes they have not agreed to.",
            "8.2 Use prohibitions. You must not: (a) access the Service by automated means outside the documented rate limits for your plan, circumvent metering, or impose load that materially degrades the Service for others (clause 4.6 governs permitted automated access); (b) reverse-engineer, decompile or disassemble the Service, or attempt to circumvent its technical protection measures or AI safety filters; (c) resell, sub-license or otherwise commercialise access to the Service beyond what your plan expressly permits; or (d) use the Service, or AI Outputs generated through it, to train a competing AI model or service.",
          ],
        },
      },
      {
        id: "moderation",
        heading: {
          en: "9. Content Moderation, Notice and Appeals",
          ar: "9. Content Moderation, Notice and Appeals",
        },
        paragraphs: {
          en: [
            "9.1 How we moderate. We operate automated screening and human review to detect Content breaching section 8. Our Content Moderation Policy at shotstudio.ai/legal/moderation describes what we screen for and how.",
            "9.2 What we tell you. If we remove or disable Content, we will notify you by email within 24 hours, identify the Content, and state the ground in section 8 we relied on — except where notifying you would be unlawful, would prejudice a criminal investigation, or where clause 8.1(a) applies.",
            "9.3 Your right to appeal. You may appeal a removal by emailing appeals@shotstudio.ai within 14 days of our notice. We will have the appeal reviewed by a person who was not involved in the original decision and respond within 5 business days. If we uphold your appeal, we restore the Content and any Credits consumed in the affected operation.",
            "9.4 Reporting Content to us. Anyone may report Content they believe breaches section 8 by emailing report@shotstudio.ai. Tell us what the Content is, where it appears and why you say it breaches these Terms. We acknowledge reports within 2 business days and act on them promptly.",
            "9.5 Repeat breaches. We maintain a record of upheld moderation decisions per Account. Repeated breaches of section 8 lead to suspension or termination under section 20.",
          ],
          ar: [
            "9.1 How we moderate. We operate automated screening and human review to detect Content breaching section 8. Our Content Moderation Policy at shotstudio.ai/legal/moderation describes what we screen for and how.",
            "9.2 What we tell you. If we remove or disable Content, we will notify you by email within 24 hours, identify the Content, and state the ground in section 8 we relied on — except where notifying you would be unlawful, would prejudice a criminal investigation, or where clause 8.1(a) applies.",
            "9.3 Your right to appeal. You may appeal a removal by emailing appeals@shotstudio.ai within 14 days of our notice. We will have the appeal reviewed by a person who was not involved in the original decision and respond within 5 business days. If we uphold your appeal, we restore the Content and any Credits consumed in the affected operation.",
            "9.4 Reporting Content to us. Anyone may report Content they believe breaches section 8 by emailing report@shotstudio.ai. Tell us what the Content is, where it appears and why you say it breaches these Terms. We acknowledge reports within 2 business days and act on them promptly.",
            "9.5 Repeat breaches. We maintain a record of upheld moderation decisions per Account. Repeated breaches of section 8 lead to suspension or termination under section 20.",
          ],
        },
      },
      {
        id: "ip-complaints",
        heading: {
          en: "10. Intellectual Property Complaints — Notice and Takedown",
          ar: "10. Intellectual Property Complaints — Notice and Takedown",
        },
        lede: {
          en: "10.1 How to complain. If you own or are authorised to act for the owner of an intellectual property right you believe is infringed by Content on the Service, send a notice to ip@shotstudio.ai containing:",
          ar: "10.1 How to complain. If you own or are authorised to act for the owner of an intellectual property right you believe is infringed by Content on the Service, send a notice to ip@shotstudio.ai containing:",
        },
        paragraphs: {
          en: [
            "(a) identification of the right relied on and the basis of your ownership or authority;",
            "(b) identification of the Content complained of, sufficient for us to locate it;",
            "(c) your name, address and contact details;",
            "(d) a statement that you believe in good faith that the use is not authorised by the rights-holder, its agent or the law; and",
            "(e) a statement that the information in the notice is accurate.",
            "10.2 What we do. We acknowledge within 2 business days and, where the notice is valid on its face, disable the Content and notify the uploading User under clause 9.2, giving them a copy of the notice.",
            "10.3 Counter-notice. The uploading User may submit a counter-notice to ip@shotstudio.ai within 14 days, stating why the Content does not infringe and providing contact details. We forward valid counter-notices to the complainant. If the complainant does not notify us within 14 days that it has commenced proceedings, we may restore the Content.",
            "10.4 Repeat infringers. We terminate the Accounts of Users who are the subject of repeated upheld infringement notices.",
            "10.5 Abuse of this procedure. Knowingly submitting a materially false notice or counter-notice is a breach of these Terms and may give rise to liability under applicable law.",
          ],
          ar: [
            "(a) identification of the right relied on and the basis of your ownership or authority;",
            "(b) identification of the Content complained of, sufficient for us to locate it;",
            "(c) your name, address and contact details;",
            "(d) a statement that you believe in good faith that the use is not authorised by the rights-holder, its agent or the law; and",
            "(e) a statement that the information in the notice is accurate.",
            "10.2 What we do. We acknowledge within 2 business days and, where the notice is valid on its face, disable the Content and notify the uploading User under clause 9.2, giving them a copy of the notice.",
            "10.3 Counter-notice. The uploading User may submit a counter-notice to ip@shotstudio.ai within 14 days, stating why the Content does not infringe and providing contact details. We forward valid counter-notices to the complainant. If the complainant does not notify us within 14 days that it has commenced proceedings, we may restore the Content.",
            "10.4 Repeat infringers. We terminate the Accounts of Users who are the subject of repeated upheld infringement notices.",
            "10.5 Abuse of this procedure. Knowingly submitting a materially false notice or counter-notice is a breach of these Terms and may give rise to liability under applicable law.",
          ],
        },
      },
      {
        id: "data-protection",
        heading: {
          en: "11. Data Protection and Privacy",
          ar: "11. Data Protection and Privacy",
        },
        paragraphs: {
          en: [
            "11.1 Our role. ShotStudio acts as data controller for all personal data processed through the Service, including data you provide on registration, in billing and in general use, and the Content you upload.",
            "11.2 What we collect. We collect the minimum necessary to operate the Service: account profile, billing metadata, uploaded Content, usage analytics where you have consented, and support communications. Full details of what we collect, why, on what legal basis, and for how long are in our Privacy Policy at shotstudio.ai/legal/privacy.",
            "11.3 We do not sell your personal data.",
            "11.4 We do not train on your Content without your opt-in. We do not use your Content to train production AI models unless you give explicit, granular, separately recorded consent. That consent is not a condition of using the Service, and you may withdraw it at any time from Account → Privacy, with effect for the future.",
            "11.5 Our PDPL compliance position (Egypt). ShotStudio processes the personal data of individuals in Egypt and is subject to the PDPL. The Executive Regulations introduced a licensing system administered by the Personal Data Protection Centre, with a compliance deadline of 31 October 2026. We do not yet hold PDPL authorisations. We are completing the steps required of us: appointing a representative in Egypt, registering a Data Protection Officer with the PDPC, and applying for the controller licence and the cross-border transfer licence. Our current status is published in the Egypt PDPL Notice at shotstudio.ai/legal/egypt-pdpl and updated as it changes. Nothing in this clause reduces your rights under the PDPL, which apply to us whether or not we hold a licence.",
            "11.6 Data Protection Officer. Our Data Protection Officer may be contacted at privacy@shotstudio.ai.",
            "11.7 Transfers outside Egypt. Content and personal data are transmitted to processing infrastructure located outside Egypt, in the United States and the European Union. This is a cross-border transfer under Article 14 of the PDPL. We currently make these transfers based on your explicit, informed consent, given at the point of upload, together with contractual data protection obligations imposed on each recipient and a documented assessment of the protection available in each destination. We have applied, or are applying, for the cross-border transfer licence described in clause 11.5 and do not yet hold it. We do not rely on European standard contractual clauses, because Egyptian law does not recognise them as a transfer basis. If you would prefer that your Content is not transferred outside Egypt, we cannot currently offer that — all AI processing happens on infrastructure abroad — and you should not upload Content you are not content to have processed there.",
            "11.8 Your rights in Egypt. Under the PDPL you have rights of access, rectification, erasure, portability, restriction and objection, and the right to complain to the Personal Data Protection Centre. To exercise any right, email privacy@shotstudio.ai or use the contact route in clause 1.4. We respond within the period the PDPL allows.",
            "11.9 Retention, and why some data is kept longer than 30 days. When you close your Account, we retain your Content and Account data for 30 days so that you can export it, and then delete the Content. We retain account and activity records for longer where the law requires it — in particular, Anti-Cybercrime Law No. 175/2018 (Egypt) requires service providers to retain specified user activity data for 180 days and to make it available to the competent authorities on lawful request. Those records are deleted at the end of the statutory period. This clause governs where any other statement about deletion in these Terms or the Privacy Policy appears to say otherwise.",
            "11.10 Framework (Iraq). We process the personal data of users in Iraq in accordance with Articles 17 and 40 of the Constitution of Iraq, applicable Iraqi law, the personal data provisions of the CMC Framework Regulations for Digital Platforms and Services, and international good practice. Where Iraq brings comprehensive data protection legislation into force, we will comply with it and update these Terms under section 22.",
            "11.11 Transfers outside Iraq. Content and personal data of users in Iraq are transmitted to processing infrastructure in the United States and the European Union. We make those transfers based on your consent given at the point of upload, and we impose contractual data protection obligations on each recipient that are no less protective than those described in this section.",
            "11.12 Your rights in Iraq. We extend to users in Iraq, as a contractual commitment, the same rights of access, rectification, erasure, portability, restriction and objection described in clause 11.8, exercisable by emailing privacy@shotstudio.ai. You may also complain to the Communications and Media Commission or to any other competent Iraqi authority.",
            "11.13 If there is a personal data breach. Where a breach affects your personal data, we notify the PDPC within 72 hours of becoming aware of it — immediately where national security is implicated — and we notify affected individuals within three working days of that report, as the PDPL Executive Regulations require. We apply the same timeframes to users in Iraq as a contractual commitment. Our notice tells you what happened, what data was involved, what we are doing about it, and what you can do to protect yourself.",
            "11.14 Further detail. Our Privacy Policy at shotstudio.ai/legal/privacy sets out in full what we collect, why, on what basis and for how long. Our Egypt PDPL Notice at shotstudio.ai/legal/egypt-pdpl sets out our licensing position and our cross-border transfer arrangements. Our Sub-processor List at shotstudio.ai/legal/sub-processors names every third party that processes personal data on our behalf, with locations and transfer bases.",
          ],
          ar: [
            "11.1 Our role. ShotStudio acts as data controller for all personal data processed through the Service, including data you provide on registration, in billing and in general use, and the Content you upload.",
            "11.2 What we collect. We collect the minimum necessary to operate the Service: account profile, billing metadata, uploaded Content, usage analytics where you have consented, and support communications. Full details of what we collect, why, on what legal basis, and for how long are in our Privacy Policy at shotstudio.ai/legal/privacy.",
            "11.3 We do not sell your personal data.",
            "11.4 We do not train on your Content without your opt-in. We do not use your Content to train production AI models unless you give explicit, granular, separately recorded consent. That consent is not a condition of using the Service, and you may withdraw it at any time from Account → Privacy, with effect for the future.",
            "11.5 Our PDPL compliance position (Egypt). ShotStudio processes the personal data of individuals in Egypt and is subject to the PDPL. The Executive Regulations introduced a licensing system administered by the Personal Data Protection Centre, with a compliance deadline of 31 October 2026. We do not yet hold PDPL authorisations. We are completing the steps required of us: appointing a representative in Egypt, registering a Data Protection Officer with the PDPC, and applying for the controller licence and the cross-border transfer licence. Our current status is published in the Egypt PDPL Notice at shotstudio.ai/legal/egypt-pdpl and updated as it changes. Nothing in this clause reduces your rights under the PDPL, which apply to us whether or not we hold a licence.",
            "11.6 Data Protection Officer. Our Data Protection Officer may be contacted at privacy@shotstudio.ai.",
            "11.7 Transfers outside Egypt. Content and personal data are transmitted to processing infrastructure located outside Egypt, in the United States and the European Union. This is a cross-border transfer under Article 14 of the PDPL. We currently make these transfers based on your explicit, informed consent, given at the point of upload, together with contractual data protection obligations imposed on each recipient and a documented assessment of the protection available in each destination. We have applied, or are applying, for the cross-border transfer licence described in clause 11.5 and do not yet hold it. We do not rely on European standard contractual clauses, because Egyptian law does not recognise them as a transfer basis. If you would prefer that your Content is not transferred outside Egypt, we cannot currently offer that — all AI processing happens on infrastructure abroad — and you should not upload Content you are not content to have processed there.",
            "11.8 Your rights in Egypt. Under the PDPL you have rights of access, rectification, erasure, portability, restriction and objection, and the right to complain to the Personal Data Protection Centre. To exercise any right, email privacy@shotstudio.ai or use the contact route in clause 1.4. We respond within the period the PDPL allows.",
            "11.9 Retention, and why some data is kept longer than 30 days. When you close your Account, we retain your Content and Account data for 30 days so that you can export it, and then delete the Content. We retain account and activity records for longer where the law requires it — in particular, Anti-Cybercrime Law No. 175/2018 (Egypt) requires service providers to retain specified user activity data for 180 days and to make it available to the competent authorities on lawful request. Those records are deleted at the end of the statutory period. This clause governs where any other statement about deletion in these Terms or the Privacy Policy appears to say otherwise.",
            "11.10 Framework (Iraq). We process the personal data of users in Iraq in accordance with Articles 17 and 40 of the Constitution of Iraq, applicable Iraqi law, the personal data provisions of the CMC Framework Regulations for Digital Platforms and Services, and international good practice. Where Iraq brings comprehensive data protection legislation into force, we will comply with it and update these Terms under section 22.",
            "11.11 Transfers outside Iraq. Content and personal data of users in Iraq are transmitted to processing infrastructure in the United States and the European Union. We make those transfers based on your consent given at the point of upload, and we impose contractual data protection obligations on each recipient that are no less protective than those described in this section.",
            "11.12 Your rights in Iraq. We extend to users in Iraq, as a contractual commitment, the same rights of access, rectification, erasure, portability, restriction and objection described in clause 11.8, exercisable by emailing privacy@shotstudio.ai. You may also complain to the Communications and Media Commission or to any other competent Iraqi authority.",
            "11.13 If there is a personal data breach. Where a breach affects your personal data, we notify the PDPC within 72 hours of becoming aware of it — immediately where national security is implicated — and we notify affected individuals within three working days of that report, as the PDPL Executive Regulations require. We apply the same timeframes to users in Iraq as a contractual commitment. Our notice tells you what happened, what data was involved, what we are doing about it, and what you can do to protect yourself.",
            "11.14 Further detail. Our Privacy Policy at shotstudio.ai/legal/privacy sets out in full what we collect, why, on what basis and for how long. Our Egypt PDPL Notice at shotstudio.ai/legal/egypt-pdpl sets out our licensing position and our cross-border transfer arrangements. Our Sub-processor List at shotstudio.ai/legal/sub-processors names every third party that processes personal data on our behalf, with locations and transfer bases.",
          ],
        },
      },
      {
        id: "payments",
        heading: {
          en: "12. Payments, Pricing, Taxes and Subscriptions",
          ar: "12. Payments, Pricing, Taxes and Subscriptions",
        },
        paragraphs: {
          en: [
            "12.1 Currency and price display — Egypt. Prices for users in Egypt are displayed and charged in Egyptian pounds (EGP) through Google Play, which acts as merchant of record, applies the tax treatment required at checkout, and issues your receipt. Clause 1.3 explains our tax status.",
            "12.2 Currency and price display — Iraq. Prices for users in Iraq are displayed and charged in Iraqi dinar (IQD) through Google Play. Iraq does not operate a value added tax; prices are exclusive of any Iraqi tax that may become payable, which will be itemised separately if it applies.",
            "12.3 Billing and renewal. Subscriptions are billed in advance at the start of each Billing Period and renew automatically unless you cancel before the renewal date. We send a renewal reminder by email at least 7 days before each renewal. You can cancel auto-renewal at any time from your Google Play subscription settings, or from Account → Billing.",
            "12.4 Payment processing. Payments are processed by Google Play (Google LLC), which acts as merchant of record for Subscriptions and Credit Packs. By purchasing, you authorise Google Play to charge your selected payment method on the schedule set out in your plan. We do not receive or store your card number, card brand or expiry date; payment data is handled by Google under its own certifications. Our processors are listed in the Sub-processor List at shotstudio.ai/legal/sub-processors.",
            "12.5 Failed payments. If a payment fails, we retry for up to 7 days, during which your Account remains active. After 7 days without successful payment, the Account is downgraded to the free tier. We will not delete your data without giving you a further 30 days’ written notice by email.",
            "12.6 Price changes. We will give at least 30 days’ notice by email and in-app notification before any price increase takes effect. If you do not wish to continue at the new price, you may cancel before it applies, without penalty. Continued use after the effective date constitutes acceptance of the new price.",
          ],
          ar: [
            "12.1 Currency and price display — Egypt. Prices for users in Egypt are displayed and charged in Egyptian pounds (EGP) through Google Play, which acts as merchant of record, applies the tax treatment required at checkout, and issues your receipt. Clause 1.3 explains our tax status.",
            "12.2 Currency and price display — Iraq. Prices for users in Iraq are displayed and charged in Iraqi dinar (IQD) through Google Play. Iraq does not operate a value added tax; prices are exclusive of any Iraqi tax that may become payable, which will be itemised separately if it applies.",
            "12.3 Billing and renewal. Subscriptions are billed in advance at the start of each Billing Period and renew automatically unless you cancel before the renewal date. We send a renewal reminder by email at least 7 days before each renewal. You can cancel auto-renewal at any time from your Google Play subscription settings, or from Account → Billing.",
            "12.4 Payment processing. Payments are processed by Google Play (Google LLC), which acts as merchant of record for Subscriptions and Credit Packs. By purchasing, you authorise Google Play to charge your selected payment method on the schedule set out in your plan. We do not receive or store your card number, card brand or expiry date; payment data is handled by Google under its own certifications. Our processors are listed in the Sub-processor List at shotstudio.ai/legal/sub-processors.",
            "12.5 Failed payments. If a payment fails, we retry for up to 7 days, during which your Account remains active. After 7 days without successful payment, the Account is downgraded to the free tier. We will not delete your data without giving you a further 30 days’ written notice by email.",
            "12.6 Price changes. We will give at least 30 days’ notice by email and in-app notification before any price increase takes effect. If you do not wish to continue at the new price, you may cancel before it applies, without penalty. Continued use after the effective date constitutes acceptance of the new price.",
          ],
        },
      },
      {
        id: "refunds",
        heading: {
          en: "13. Refunds, Cancellation and Withdrawal Rights",
          ar: "13. Refunds, Cancellation and Withdrawal Rights",
        },
        paragraphs: {
          en: [
            "13.1 Statutory withdrawal right — Consumers in Egypt. Under Consumer Protection Law No. 181/2018, including Articles 37, 39 and 40, and its Executive Regulations, you may withdraw from a distance contract for digital services within 14 calendar days without giving a reason. You may also amend your order within 7 working days of purchase — for these purposes an amendment means a change of plan, a change of Billing Period, or a change in the number of seats. Where you have consumed Credits before withdrawing, we deduct the value of those Credits from your refund on a pro-rata basis, reflecting the service already delivered to you. We deduct no administrative or cancellation fee of any kind.",
            "13.2 Withdrawal right — Consumers in Iraq. We extend to Consumers in Iraq, as a contractual right, the same 14-day withdrawal right and the same 7-working-day amendment right described in clause 13.1, on the same terms. This is in addition to, and does not limit, any right you have under Consumer Protection Law No. 1 of 2010 or other mandatory Iraqi law.",
            "13.3 How to withdraw. Notify us clearly in writing — email support@shotstudio.ai with the subject line “Withdrawal — [your account email]” — within the period in clause 13.1 or 13.2. We refund via the original payment method within 10 business days of receiving a valid notice.",
            "13.4 Cancelling a Subscription. You may cancel at any time from Account → Billing or from your Google Play subscription settings. Cancellation takes effect at the end of the current Billing Period, and you keep full access until then. Cancellation is separate from the withdrawal right and does not replace it.",
            "13.5 Other refund grounds. Outside the withdrawal period, we refund:",
            "(a) where the Service was unavailable to you for a continuous period of more than 24 hours during a paid Billing Period, on a pro-rata basis for the period of unavailability, as recorded on our status page;",
            "(b) where you were charged more than once for the same item through our error, in full; and",
            "(c) unused, untouched Credit Packs, in full, within 7 days of purchase.",
            "Requests under (a) and (b) must be made within 30 days of the charge. Consumed Credits are not refundable outside clauses 13.1 and 13.2.",
            "13.6 Making a request. Email support@shotstudio.ai with your account email, the transaction reference, and the reason. We respond within 2 business days.",
            "13.7 Your statutory rights are unaffected. Nothing in this section limits any right you have under the CPL, the Iraq CPL, or any other mandatory law applying to you.",
          ],
          ar: [
            "13.1 Statutory withdrawal right — Consumers in Egypt. Under Consumer Protection Law No. 181/2018, including Articles 37, 39 and 40, and its Executive Regulations, you may withdraw from a distance contract for digital services within 14 calendar days without giving a reason. You may also amend your order within 7 working days of purchase — for these purposes an amendment means a change of plan, a change of Billing Period, or a change in the number of seats. Where you have consumed Credits before withdrawing, we deduct the value of those Credits from your refund on a pro-rata basis, reflecting the service already delivered to you. We deduct no administrative or cancellation fee of any kind.",
            "13.2 Withdrawal right — Consumers in Iraq. We extend to Consumers in Iraq, as a contractual right, the same 14-day withdrawal right and the same 7-working-day amendment right described in clause 13.1, on the same terms. This is in addition to, and does not limit, any right you have under Consumer Protection Law No. 1 of 2010 or other mandatory Iraqi law.",
            "13.3 How to withdraw. Notify us clearly in writing — email support@shotstudio.ai with the subject line “Withdrawal — [your account email]” — within the period in clause 13.1 or 13.2. We refund via the original payment method within 10 business days of receiving a valid notice.",
            "13.4 Cancelling a Subscription. You may cancel at any time from Account → Billing or from your Google Play subscription settings. Cancellation takes effect at the end of the current Billing Period, and you keep full access until then. Cancellation is separate from the withdrawal right and does not replace it.",
            "13.5 Other refund grounds. Outside the withdrawal period, we refund:",
            "(a) where the Service was unavailable to you for a continuous period of more than 24 hours during a paid Billing Period, on a pro-rata basis for the period of unavailability, as recorded on our status page;",
            "(b) where you were charged more than once for the same item through our error, in full; and",
            "(c) unused, untouched Credit Packs, in full, within 7 days of purchase.",
            "Requests under (a) and (b) must be made within 30 days of the charge. Consumed Credits are not refundable outside clauses 13.1 and 13.2.",
            "13.6 Making a request. Email support@shotstudio.ai with your account email, the transaction reference, and the reason. We respond within 2 business days.",
            "13.7 Your statutory rights are unaffected. Nothing in this section limits any right you have under the CPL, the Iraq CPL, or any other mandatory law applying to you.",
          ],
        },
      },
      {
        id: "ip",
        heading: {
          en: "14. ShotStudio Intellectual Property",
          ar: "14. ShotStudio Intellectual Property",
        },
        paragraphs: {
          en: [
            "14.1 The Service — its software, source code, AI models owned or licensed by us, interface, design, graphics, documentation and brand elements (“ShotStudio IP”) — is protected by copyright, trademark, trade secret and other laws, and is owned by or licensed to ShotStudio. You acquire no ownership in it by using the Service.",
            "14.2 Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for your own personal or commercial purposes in accordance with your plan. This does not permit you to (a) copy, modify or create derivative works of ShotStudio IP; (b) distribute, sell or sublicense access to the Service; (c) reverse-engineer, decompile or disassemble it; or (d) use the “ShotStudio” name or mark in a way suggesting endorsement or affiliation without our prior written consent.",
            "14.3 Feedback. If you send us ideas, feedback or suggestions about the Service, you grant us a perpetual, worldwide, royalty-free licence to use and incorporate them without restriction or compensation. This does not apply to your Content or AI Outputs, which are governed by sections 6 and 7.",
          ],
          ar: [
            "14.1 The Service — its software, source code, AI models owned or licensed by us, interface, design, graphics, documentation and brand elements (“ShotStudio IP”) — is protected by copyright, trademark, trade secret and other laws, and is owned by or licensed to ShotStudio. You acquire no ownership in it by using the Service.",
            "14.2 Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for your own personal or commercial purposes in accordance with your plan. This does not permit you to (a) copy, modify or create derivative works of ShotStudio IP; (b) distribute, sell or sublicense access to the Service; (c) reverse-engineer, decompile or disassemble it; or (d) use the “ShotStudio” name or mark in a way suggesting endorsement or affiliation without our prior written consent.",
            "14.3 Feedback. If you send us ideas, feedback or suggestions about the Service, you grant us a perpetual, worldwide, royalty-free licence to use and incorporate them without restriction or compensation. This does not apply to your Content or AI Outputs, which are governed by sections 6 and 7.",
          ],
        },
      },
      {
        id: "third-party",
        heading: {
          en: "15. Third-Party Services and Sub-processors",
          ar: "15. Third-Party Services and Sub-processors",
        },
        paragraphs: {
          en: [
            "15.1 Who we rely on. The Service relies on third parties including Google LLC (Google Play billing and Firebase authentication), Vercel, Inc. (hosting, CDN and edge infrastructure), and the AI model and inference providers listed at shotstudio.ai/policies/ai-providers. A current and complete list of sub-processors handling personal data is published at shotstudio.ai/legal/sub-processors.",
            "15.2 Integrations. Where the Service integrates with third-party platforms such as Shopify, Amazon or Salla, your use of those platforms is governed by their own terms and privacy policies. We are not responsible for their availability, accuracy or security.",
            "15.3 Third-party failures. We are not liable for loss or disruption caused by the failure or unavailability of a third-party service beyond our reasonable control, provided we take commercially reasonable steps to mitigate its impact on you. Section 18 limits how far this operates against a Consumer.",
          ],
          ar: [
            "15.1 Who we rely on. The Service relies on third parties including Google LLC (Google Play billing and Firebase authentication), Vercel, Inc. (hosting, CDN and edge infrastructure), and the AI model and inference providers listed at shotstudio.ai/policies/ai-providers. A current and complete list of sub-processors handling personal data is published at shotstudio.ai/legal/sub-processors.",
            "15.2 Integrations. Where the Service integrates with third-party platforms such as Shopify, Amazon or Salla, your use of those platforms is governed by their own terms and privacy policies. We are not responsible for their availability, accuracy or security.",
            "15.3 Third-party failures. We are not liable for loss or disruption caused by the failure or unavailability of a third-party service beyond our reasonable control, provided we take commercially reasonable steps to mitigate its impact on you. Section 18 limits how far this operates against a Consumer.",
          ],
        },
      },
      {
        id: "sanctions",
        heading: {
          en: "16. Sanctions, Export Control and Lawful Use",
          ar: "16. Sanctions, Export Control and Lawful Use",
        },
        paragraphs: {
          en: [
            "16.1 You represent that you are not a person or entity subject to applicable trade sanctions or export control restrictions, that you are not acting on behalf of such a person or entity, and that you will not use the Service in breach of any applicable sanctions or export control law.",
            "16.2 We may suspend or terminate your Account under section 20 where we reasonably believe clause 16.1 has been breached, or where continuing to provide the Service to you would place our providers or us in breach of applicable law.",
            "16.3 Nothing in this section requires either party to act in a manner contrary to the mandatory law of Egypt or Iraq.",
          ],
          ar: [
            "16.1 You represent that you are not a person or entity subject to applicable trade sanctions or export control restrictions, that you are not acting on behalf of such a person or entity, and that you will not use the Service in breach of any applicable sanctions or export control law.",
            "16.2 We may suspend or terminate your Account under section 20 where we reasonably believe clause 16.1 has been breached, or where continuing to provide the Service to you would place our providers or us in breach of applicable law.",
            "16.3 Nothing in this section requires either party to act in a manner contrary to the mandatory law of Egypt or Iraq.",
          ],
        },
      },
      {
        id: "disclaimers",
        heading: {
          en: "17. Service Availability, Service Levels and Disclaimers",
          ar: "17. Service Availability, Service Levels and Disclaimers",
        },
        paragraphs: {
          en: [
            "17.1 Availability. We provide the Service on a commercially reasonable efforts basis. We do not guarantee uninterrupted, error-free or perfectly secure operation. We aim to give at least 72 hours’ notice of planned maintenance on our status page at shotstudio.ai/status, and to resolve unplanned outages promptly.",
            "17.2 No service level commitment. We do not currently offer a guaranteed level of availability. If the Service is unavailable to you for an extended period, clause 13.5(a) gives you a refund for that period — that is your remedy, and it does not depend on us having missed a target.",
            "17.3 AI Output accuracy. AI-generated images are produced automatically and may contain errors, artefacts, unintended elements or inaccuracies. They are not a substitute for professional photography or human review, and you are responsible for reviewing AI Outputs before using them commercially.",
            "17.4 No professional advice. The Service and AI Outputs do not constitute legal, medical, financial, regulatory or other professional advice.",
            "17.5 Beta features. Features labelled “Beta” are provided without warranty of any kind, and their availability is not a commitment to continue providing them.",
            "17.6 Statutory rights preserved. Nothing in these Terms excludes, restricts or modifies any right or remedy available to you under a mandatory law that cannot be excluded by contract — including the CPL (Egypt), the Iraq CPL, the PDPL, and any equivalent law applying to you.",
          ],
          ar: [
            "17.1 Availability. We provide the Service on a commercially reasonable efforts basis. We do not guarantee uninterrupted, error-free or perfectly secure operation. We aim to give at least 72 hours’ notice of planned maintenance on our status page at shotstudio.ai/status, and to resolve unplanned outages promptly.",
            "17.2 No service level commitment. We do not currently offer a guaranteed level of availability. If the Service is unavailable to you for an extended period, clause 13.5(a) gives you a refund for that period — that is your remedy, and it does not depend on us having missed a target.",
            "17.3 AI Output accuracy. AI-generated images are produced automatically and may contain errors, artefacts, unintended elements or inaccuracies. They are not a substitute for professional photography or human review, and you are responsible for reviewing AI Outputs before using them commercially.",
            "17.4 No professional advice. The Service and AI Outputs do not constitute legal, medical, financial, regulatory or other professional advice.",
            "17.5 Beta features. Features labelled “Beta” are provided without warranty of any kind, and their availability is not a commitment to continue providing them.",
            "17.6 Statutory rights preserved. Nothing in these Terms excludes, restricts or modifies any right or remedy available to you under a mandatory law that cannot be excluded by contract — including the CPL (Egypt), the Iraq CPL, the PDPL, and any equivalent law applying to you.",
          ],
        },
      },
      {
        id: "liability",
        heading: {
          en: "18. Limitation of Liability",
          ar: "18. Limitation of Liability",
        },
        paragraphs: {
          en: [
            "18.1 Consumers. If you use the Service as a Consumer, nothing in these Terms limits or excludes our liability for direct loss you suffer as a result of our breach of contract or our negligence, or any liability that cannot be limited or excluded under Consumer Protection Law No. 181/2018 (Egypt), Consumer Protection Law No. 1 of 2010 (Iraq), the PDPL, or any other mandatory law applying to you. We exclude liability to Consumers only for indirect and consequential loss, and only to the extent applicable law permits.",
            "18.2 Business Users. If you use the Service as a Business User, our total aggregate liability arising out of or in connection with these Terms or your use of the Service — whether in contract, tort (including negligence), statute or otherwise — is limited to the greater of (a) the total fees you paid to us in the twelve months immediately preceding the event giving rise to the claim, or (b) USD 100 or its equivalent in EGP or IQD at the prevailing central bank mid-rate on the date the claim arises.",
            "18.3 Excluded heads of loss — Business Users only. To the maximum extent permitted by law, we are not liable to a Business User for loss of profits, revenue or business; loss of data or Content beyond what is recoverable under our standard backup policy; loss of goodwill or reputation; or indirect, incidental, special, exemplary or consequential damages — even if we were advised of the possibility.",
            "18.4 Liability we never limit. Nothing in these Terms limits or excludes our liability for:",
          ],
          ar: [
            "18.1 Consumers. If you use the Service as a Consumer, nothing in these Terms limits or excludes our liability for direct loss you suffer as a result of our breach of contract or our negligence, or any liability that cannot be limited or excluded under Consumer Protection Law No. 181/2018 (Egypt), Consumer Protection Law No. 1 of 2010 (Iraq), the PDPL, or any other mandatory law applying to you. We exclude liability to Consumers only for indirect and consequential loss, and only to the extent applicable law permits.",
            "18.2 Business Users. If you use the Service as a Business User, our total aggregate liability arising out of or in connection with these Terms or your use of the Service — whether in contract, tort (including negligence), statute or otherwise — is limited to the greater of (a) the total fees you paid to us in the twelve months immediately preceding the event giving rise to the claim, or (b) USD 100 or its equivalent in EGP or IQD at the prevailing central bank mid-rate on the date the claim arises.",
            "18.3 Excluded heads of loss — Business Users only. To the maximum extent permitted by law, we are not liable to a Business User for loss of profits, revenue or business; loss of data or Content beyond what is recoverable under our standard backup policy; loss of goodwill or reputation; or indirect, incidental, special, exemplary or consequential damages — even if we were advised of the possibility.",
            "18.4 Liability we never limit. Nothing in these Terms limits or excludes our liability for:",
          ],
        },
        bullets: {
          en: [
            "(a) death or personal injury caused by our negligence;",
            "(b) fraud or fraudulent misrepresentation;",
            "(c) wilful misconduct or gross negligence;",
            "(d) any liability that cannot lawfully be limited or excluded under the CPL, the Iraq CPL, the PDPL, the Iraqi Civil Code, or any other mandatory law applying to you.",
          ],
          ar: [
            "(a) death or personal injury caused by our negligence;",
            "(b) fraud or fraudulent misrepresentation;",
            "(c) wilful misconduct or gross negligence;",
            "(d) any liability that cannot lawfully be limited or excluded under the CPL, the Iraq CPL, the PDPL, the Iraqi Civil Code, or any other mandatory law applying to you.",
          ],
        },
      },
      {
        id: "service-changes",
        heading: {
          en: "19. Service Changes, Maintenance and Discontinuation",
          ar: "19. Service Changes, Maintenance and Discontinuation",
        },
        paragraphs: {
          en: [
            "19.1 Changes. We may add, modify or remove features. For changes that materially reduce the functionality available to paying subscribers, we give at least 30 days’ notice by email, and you may cancel before the change takes effect with a pro-rata refund of prepaid fees for the period after that date.",
            "19.2 Discontinuation. If we discontinue the Service entirely, we give at least 60 days’ notice by email. During that period you may export your Content and AI Outputs. We refund unused Subscription fees, unexpired Subscription Credits and unexpired Credit Pack balances on a pro-rata basis within 14 days of the discontinuation date, in accordance with clause 4.3.",
          ],
          ar: [
            "19.1 Changes. We may add, modify or remove features. For changes that materially reduce the functionality available to paying subscribers, we give at least 30 days’ notice by email, and you may cancel before the change takes effect with a pro-rata refund of prepaid fees for the period after that date.",
            "19.2 Discontinuation. If we discontinue the Service entirely, we give at least 60 days’ notice by email. During that period you may export your Content and AI Outputs. We refund unused Subscription fees, unexpired Subscription Credits and unexpired Credit Pack balances on a pro-rata basis within 14 days of the discontinuation date, in accordance with clause 4.3.",
          ],
        },
      },
      {
        id: "termination",
        heading: {
          en: "20. Suspension and Termination",
          ar: "20. Suspension and Termination",
        },
        paragraphs: {
          en: [
            "20.1 Closing your Account. You may close your Account at any time from Account → Settings → Close account. Subscription access continues to the end of the current Billing Period unless you request earlier termination.",
            "20.2 Suspension with notice. Where we have reasonable grounds to believe you have breached these Terms or applicable law, we will give you notice describing the breach and a reasonable opportunity to remedy it before suspending your Account.",
            "20.3 Immediate suspension. We may suspend or terminate immediately and without prior notice where the breach involves (a) material within clause 8.1(a) or 8.1(b); (b) fraud, identity theft or attempted unauthorised access to our systems; (c) activity posing a material security threat to the Service or its users; (d) breach of section 16; or (e) any activity we are legally required to stop.",
            "20.4 Appeals. You may appeal a suspension or termination by emailing appeals@shotstudio.ai within 14 days. The appeal is reviewed by a person not involved in the original decision, and we respond within 5 business days. Appeals against Content removal are governed by clause 9.3.",
            "20.5 Effect of termination. On termination: (a) your licence to use the Service ends immediately; (b) your Content and Account data are handled in accordance with clause 11.9; (c) you remain liable for fees accrued before termination; and (d) we refund unused Subscription fees and unexpired Credit balances on a pro-rata basis, except where termination is under clause 20.3.",
            "20.6 Survival. The following survive termination: clause 6.3 (residual licence, to the extent stated and no longer); clause 6.4 (your warranties); section 7 (ownership of AI Outputs); clause 11.9 (retention); section 14 (our intellectual property); section 17 (disclaimers); section 18 (liability); section 23 (governing law and disputes); and section 24 (general provisions).",
          ],
          ar: [
            "20.1 Closing your Account. You may close your Account at any time from Account → Settings → Close account. Subscription access continues to the end of the current Billing Period unless you request earlier termination.",
            "20.2 Suspension with notice. Where we have reasonable grounds to believe you have breached these Terms or applicable law, we will give you notice describing the breach and a reasonable opportunity to remedy it before suspending your Account.",
            "20.3 Immediate suspension. We may suspend or terminate immediately and without prior notice where the breach involves (a) material within clause 8.1(a) or 8.1(b); (b) fraud, identity theft or attempted unauthorised access to our systems; (c) activity posing a material security threat to the Service or its users; (d) breach of section 16; or (e) any activity we are legally required to stop.",
            "20.4 Appeals. You may appeal a suspension or termination by emailing appeals@shotstudio.ai within 14 days. The appeal is reviewed by a person not involved in the original decision, and we respond within 5 business days. Appeals against Content removal are governed by clause 9.3.",
            "20.5 Effect of termination. On termination: (a) your licence to use the Service ends immediately; (b) your Content and Account data are handled in accordance with clause 11.9; (c) you remain liable for fees accrued before termination; and (d) we refund unused Subscription fees and unexpired Credit balances on a pro-rata basis, except where termination is under clause 20.3.",
            "20.6 Survival. The following survive termination: clause 6.3 (residual licence, to the extent stated and no longer); clause 6.4 (your warranties); section 7 (ownership of AI Outputs); clause 11.9 (retention); section 14 (our intellectual property); section 17 (disclaimers); section 18 (liability); section 23 (governing law and disputes); and section 24 (general provisions).",
          ],
        },
      },
      {
        id: "force-majeure",
        heading: {
          en: "21. Force Majeure",
          ar: "21. Force Majeure",
        },
        paragraphs: {
          en: [
            "21.1 Neither party is liable for failure or delay in performance to the extent caused by circumstances beyond its reasonable control, including natural disasters, war, terrorism, civil disturbance, government orders or sanctions, pandemics, power failures, internet backbone outages, and attacks on critical infrastructure (a “Force Majeure Event”).",
            "21.2 The affected party must notify the other in writing as soon as practicable and use commercially reasonable efforts to resume performance. If the Force Majeure Event continues for more than 30 consecutive days, either party may terminate the affected service on 14 days’ written notice, and we will refund prepaid fees for the period of non-performance on a pro-rata basis.",
          ],
          ar: [
            "21.1 Neither party is liable for failure or delay in performance to the extent caused by circumstances beyond its reasonable control, including natural disasters, war, terrorism, civil disturbance, government orders or sanctions, pandemics, power failures, internet backbone outages, and attacks on critical infrastructure (a “Force Majeure Event”).",
            "21.2 The affected party must notify the other in writing as soon as practicable and use commercially reasonable efforts to resume performance. If the Force Majeure Event continues for more than 30 consecutive days, either party may terminate the affected service on 14 days’ written notice, and we will refund prepaid fees for the period of non-performance on a pro-rata basis.",
          ],
        },
      },
      {
        id: "amendments",
        heading: {
          en: "22. Amendments and Notification",
          ar: "22. Amendments and Notification",
        },
        paragraphs: {
          en: [
            "22.1 Material changes. For material changes — including changes that expand your obligations, reduce your rights, or affect billing — we give at least 30 days’ notice by email to your registered address and by prominent in-app notification. The updated Terms are posted at shotstudio.ai/legal/terms with a new version number and effective date.",
            "22.2 If you do not accept. You may close your Account before the effective date without penalty, and we refund pro-rata any unused prepaid Subscription fees for the period after that date. Continued use after the effective date constitutes acceptance.",
            "22.3 Non-material changes. Clarifications, typographical corrections and updated contact details take effect on posting.",
            "22.4 Version history. Each version of these Terms, with its effective date, is archived at shotstudio.ai/legal/terms/versions. We record which version your Account accepted and when.",
          ],
          ar: [
            "22.1 Material changes. For material changes — including changes that expand your obligations, reduce your rights, or affect billing — we give at least 30 days’ notice by email to your registered address and by prominent in-app notification. The updated Terms are posted at shotstudio.ai/legal/terms with a new version number and effective date.",
            "22.2 If you do not accept. You may close your Account before the effective date without penalty, and we refund pro-rata any unused prepaid Subscription fees for the period after that date. Continued use after the effective date constitutes acceptance.",
            "22.3 Non-material changes. Clarifications, typographical corrections and updated contact details take effect on posting.",
            "22.4 Version history. Each version of these Terms, with its effective date, is archived at shotstudio.ai/legal/terms/versions. We record which version your Account accepted and when.",
          ],
        },
      },
      {
        id: "governing-law",
        heading: {
          en: "23. Governing Law and Dispute Resolution",
          ar: "23. Governing Law and Dispute Resolution",
        },
        paragraphs: {
          en: [
            "23.1 Consumers and Users in Egypt. These Terms, and any dispute arising out of or in connection with them including non-contractual disputes, are governed by the laws of the Arab Republic of Egypt. Proceedings may be brought before the courts of Cairo, including the Economic Courts established by Law No. 120/2008 where their jurisdiction applies. If you are a Consumer, you may also bring proceedings in the courts of the governorate in which you are domiciled, and nothing in these Terms requires you to litigate in Cairo.",
            "Before commencing proceedings we ask — but do not require — that you follow this escalation route: (1) contact support@shotstudio.ai and allow 10 business days for a response; (2) if unresolved, escalate to the Consumer Protection Agency (hotline 19588, cpa.gov.eg), which has jurisdiction over consumer disputes under the CPL; and (3) if still unresolved, bring proceedings before the competent court. Nothing in this clause is a precondition to your access to the courts.",
            "23.2 Consumers and Users in Iraq. These Terms, and any dispute arising out of or in connection with them, are governed by the laws of the Republic of Iraq. Nothing in these Terms affects any right you have under Consumer Protection Law No. 1 of 2010 or other mandatory Iraqi law. Before commencing proceedings, we ask that you contact support@shotstudio.ai and allow 10 business days for a response. If the matter is unresolved, you may escalate it to the Consumer Protection Council or to the Communications and Media Commission, and you may bring proceedings before the competent civil court in Iraq. If you are a Consumer, you may also bring proceedings in the courts of your own place of residence in Iraq where Iraqi law entitles you to do so.",
            "23.3 Business Users in Egypt and Iraq. For Business Users, the courts identified in clause 23.1 or 23.2 as applicable have exclusive jurisdiction.",
            "23.4 All other jurisdictions. For Users outside Egypt and Iraq, these Terms are governed by the laws of the State of Texas, United States, and the courts of the State of Texas have exclusive jurisdiction, without prejudice to any mandatory consumer protection right available to you in your country of residence.",
          ],
          ar: [
            "23.1 Consumers and Users in Egypt. These Terms, and any dispute arising out of or in connection with them including non-contractual disputes, are governed by the laws of the Arab Republic of Egypt. Proceedings may be brought before the courts of Cairo, including the Economic Courts established by Law No. 120/2008 where their jurisdiction applies. If you are a Consumer, you may also bring proceedings in the courts of the governorate in which you are domiciled, and nothing in these Terms requires you to litigate in Cairo.",
            "Before commencing proceedings we ask — but do not require — that you follow this escalation route: (1) contact support@shotstudio.ai and allow 10 business days for a response; (2) if unresolved, escalate to the Consumer Protection Agency (hotline 19588, cpa.gov.eg), which has jurisdiction over consumer disputes under the CPL; and (3) if still unresolved, bring proceedings before the competent court. Nothing in this clause is a precondition to your access to the courts.",
            "23.2 Consumers and Users in Iraq. These Terms, and any dispute arising out of or in connection with them, are governed by the laws of the Republic of Iraq. Nothing in these Terms affects any right you have under Consumer Protection Law No. 1 of 2010 or other mandatory Iraqi law. Before commencing proceedings, we ask that you contact support@shotstudio.ai and allow 10 business days for a response. If the matter is unresolved, you may escalate it to the Consumer Protection Council or to the Communications and Media Commission, and you may bring proceedings before the competent civil court in Iraq. If you are a Consumer, you may also bring proceedings in the courts of your own place of residence in Iraq where Iraqi law entitles you to do so.",
            "23.3 Business Users in Egypt and Iraq. For Business Users, the courts identified in clause 23.1 or 23.2 as applicable have exclusive jurisdiction.",
            "23.4 All other jurisdictions. For Users outside Egypt and Iraq, these Terms are governed by the laws of the State of Texas, United States, and the courts of the State of Texas have exclusive jurisdiction, without prejudice to any mandatory consumer protection right available to you in your country of residence.",
          ],
        },
      },
      {
        id: "general",
        heading: {
          en: "24. General Provisions",
          ar: "24. General Provisions",
        },
        paragraphs: {
          en: [
            "24.1 Language. These Terms are currently published in English only. An Arabic version is in preparation and will be published at shotstudio.ai/legal/terms/ar. When it is published, the Arabic version will prevail for users in Egypt and Iraq in the event of any inconsistency between the two. Until the Arabic version is available: if you would like any provision of these Terms explained to you in Arabic before you agree to it, or at any time afterwards, email support@shotstudio.ai and we will explain it in Arabic at no charge. You may also correspond with us in Arabic on any matter.",
            "24.2 Electronic acceptance. Acceptance of these Terms by electronic means constitutes your agreement to be bound by them. We maintain records of acceptance as described in clause 3.1.",
            "24.3 Severability. If any provision is found invalid, unlawful or unenforceable by a competent court, it is severed, and the remaining provisions continue in full force.",
            "24.4 Entire agreement. These Terms, together with the documents listed in clause 1.8, constitute the entire agreement between you and ShotStudio in respect of the Service and supersede all prior representations and understandings on the same subject matter. Nothing in this clause limits liability for fraudulent misrepresentation.",
            "24.5 No waiver. Failure to enforce a provision does not waive the right to enforce it later.",
            "24.6 Assignment. We may assign these Terms in whole or in part to an entity acquiring our business or assets, on 30 days’ written notice to you; if you are a Consumer and object to the assignment, you may close your Account and receive a pro-rata refund of prepaid fees. You may not assign your rights or obligations without our prior written consent.",
            "24.7 Notices. Notices to ShotStudio must be sent to legal@shotstudio.ai and are deemed received 24 hours after sending to a confirmed address. Notices to you are sent to your registered account email address.",
            "24.8 Contact. General support: support@shotstudio.ai. Privacy: privacy@shotstudio.ai. Appeals: appeals@shotstudio.ai. Content reports: report@shotstudio.ai. Intellectual property complaints: ip@shotstudio.ai.",
          ],
          ar: [
            "24.1 Language. These Terms are currently published in English only. An Arabic version is in preparation and will be published at shotstudio.ai/legal/terms/ar. When it is published, the Arabic version will prevail for users in Egypt and Iraq in the event of any inconsistency between the two. Until the Arabic version is available: if you would like any provision of these Terms explained to you in Arabic before you agree to it, or at any time afterwards, email support@shotstudio.ai and we will explain it in Arabic at no charge. You may also correspond with us in Arabic on any matter.",
            "24.2 Electronic acceptance. Acceptance of these Terms by electronic means constitutes your agreement to be bound by them. We maintain records of acceptance as described in clause 3.1.",
            "24.3 Severability. If any provision is found invalid, unlawful or unenforceable by a competent court, it is severed, and the remaining provisions continue in full force.",
            "24.4 Entire agreement. These Terms, together with the documents listed in clause 1.8, constitute the entire agreement between you and ShotStudio in respect of the Service and supersede all prior representations and understandings on the same subject matter. Nothing in this clause limits liability for fraudulent misrepresentation.",
            "24.5 No waiver. Failure to enforce a provision does not waive the right to enforce it later.",
            "24.6 Assignment. We may assign these Terms in whole or in part to an entity acquiring our business or assets, on 30 days’ written notice to you; if you are a Consumer and object to the assignment, you may close your Account and receive a pro-rata refund of prepaid fees. You may not assign your rights or obligations without our prior written consent.",
            "24.7 Notices. Notices to ShotStudio must be sent to legal@shotstudio.ai and are deemed received 24 hours after sending to a confirmed address. Notices to you are sent to your registered account email address.",
            "24.8 Contact. General support: support@shotstudio.ai. Privacy: privacy@shotstudio.ai. Appeals: appeals@shotstudio.ai. Content reports: report@shotstudio.ai. Intellectual property complaints: ip@shotstudio.ai.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/legal/privacy",
        label: {
          en: "Privacy Policy",
          ar: "Privacy Policy",
        },
      },
      {
        href: "/legal/acceptable-use",
        label: {
          en: "Acceptable Use Policy",
          ar: "Acceptable Use Policy",
        },
      },
      {
        href: "/legal/refunds",
        label: {
          en: "Refund & Cancellation Policy",
          ar: "Refund & Cancellation Policy",
        },
      },
      {
        href: "/legal/subscription",
        label: {
          en: "Subscription Terms",
          ar: "Subscription Terms",
        },
      },
      {
        href: "/policies/ai-content-ownership",
        label: {
          en: "AI Content Ownership",
          ar: "AI Content Ownership",
        },
      },
      {
        href: "/legal/egypt-pdpl",
        label: {
          en: "Egypt PDPL Notice",
          ar: "Egypt PDPL Notice",
        },
      },
      {
        href: "/legal/iraq-consumer",
        label: {
          en: "Iraq Consumer Disclosure",
          ar: "Iraq Consumer Disclosure",
        },
      },
      {
        href: "/legal/sub-processors",
        label: {
          en: "Sub-processors",
          ar: "Sub-processors",
        },
      },
      {
        href: "/legal/business-info",
        label: {
          en: "Business Information",
          ar: "Business Information",
        },
      },
    ],
  },

  {
    slug: "cookies",
    tree: "legal",
    status: "final",
    updated: "2026-06-05",
    title: {
      en: "Cookie Policy — ShotStudio",
      ar: "سياسة ملفات تعريف الارتباط — سناب برو",
    },
    meta: {
      en: "Which cookies ShotStudio uses, why, how long they last, and how to manage your preferences. Compliant with ePrivacy and Egyptian PDPL Article 12.",
      ar: "ملفات تعريف الارتباط التي تستخدمها سناب برو، أسباب استخدامها، مدة بقائها، وكيفية إدارتها. متوافقة مع ePrivacy والمادة 12 من قانون حماية البيانات المصري.",
    },
    h1: { en: "Cookie Policy", ar: "سياسة ملفات تعريف الارتباط" },
    summary: {
      en: "We use a small set of cookies and similar storage to keep you signed in, secure your account, measure performance, and improve the product. You can change your choices at any time.",
      ar: "نستخدم مجموعة صغيرة من ملفات تعريف الارتباط ووسائل التخزين المماثلة للحفاظ على تسجيل دخولك وحماية حسابك وقياس الأداء وتحسين المنتج. يمكنك تغيير اختياراتك في أي وقت.",
    },
    sections: [
      {
        id: "what",
        heading: { en: "What cookies are", ar: "ما هي ملفات تعريف الارتباط" },
        paragraphs: {
          en: [
            "Cookies are small text files placed on your device by websites you visit. We also use similar technologies such as localStorage and pixels.",
          ],
          ar: [
            "ملفات تعريف الارتباط هي ملفات نصية صغيرة تضعها المواقع التي تزورها على جهازك. نستخدم أيضاً تقنيات مماثلة مثل localStorage والبكسلات.",
          ],
        },
      },
      {
        id: "categories",
        heading: { en: "Categories we use", ar: "الفئات التي نستخدمها" },
        defs: [
          {
            term: { en: "Strictly necessary", ar: "ضرورية تماماً" },
            meaning: {
              en: "Required to operate the service — e.g. authentication, CSRF protection, load balancing.",
              ar: "ضرورية لتشغيل الخدمة — مثل المصادقة والحماية من تزوير الطلبات وتوزيع الأحمال.",
            },
          },
          {
            term: { en: "Functional", ar: "وظيفية" },
            meaning: {
              en: "Remember your preferences such as language and theme.",
              ar: "تتذكّر تفضيلاتك مثل اللغة والمظهر.",
            },
          },
          {
            term: { en: "Analytics", ar: "تحليلية" },
            meaning: {
              en: "Help us understand which features are used and where to invest engineering effort.",
              ar: "تساعدنا على فهم الميزات الأكثر استخداماً وأين نوجّه جهود التطوير.",
            },
          },
          {
            term: { en: "Marketing", ar: "تسويقية" },
            meaning: {
              en: "Used only with your explicit consent to measure campaign performance.",
              ar: "تُستخدم فقط بموافقتك الصريحة لقياس أداء الحملات التسويقية.",
            },
          },
        ],
      },
      {
        id: "table",
        heading: { en: "Cookie list", ar: "قائمة ملفات تعريف الارتباط" },
        table: {
          head: {
            en: ["Name", "Purpose", "Duration", "Category"],
            ar: ["الاسم", "الغرض", "المدة", "الفئة"],
          },
          rows: [
            {
              en: ["snap-session", "Authentication", "30 days", "Necessary"],
              ar: ["snap-session", "المصادقة", "30 يوماً", "ضرورية"],
            },
            {
              en: ["snap-csrf", "CSRF protection", "Session", "Necessary"],
              ar: ["snap-csrf", "الحماية من CSRF", "الجلسة", "ضرورية"],
            },
            {
              en: [
                "snap-locale",
                "Language preference",
                "1 year",
                "Functional",
              ],
              ar: ["snap-locale", "تفضيل اللغة", "سنة", "وظيفية"],
            },
            {
              en: [
                "snap-analytics",
                "Aggregated usage stats",
                "1 year",
                "Analytics",
              ],
              ar: [
                "snap-analytics",
                "إحصاءات الاستخدام المجمّعة",
                "سنة",
                "تحليلية",
              ],
            },
          ],
        },
      },
      {
        id: "managing",
        heading: { en: "Managing your choices", ar: "إدارة اختياراتك" },
        paragraphs: {
          en: [
            "You can change your preferences any time via the Cookie Settings link in our footer or by clearing cookies in your browser. Disabling necessary cookies will prevent the service from functioning.",
          ],
          ar: [
            "يمكنك تغيير تفضيلاتك في أي وقت عبر رابط إعدادات ملفات تعريف الارتباط في تذييل الموقع أو بمسحها من متصفّحك. قد يمنع تعطيل الملفات الضرورية الخدمة من العمل.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/legal/privacy",
        label: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── L04 AUP
  {
    slug: "acceptable-use",
    tree: "legal",
    status: "final",
    updated: "2026-06-05",
    title: {
      en: "Acceptable Use Policy — ShotStudio",
      ar: "سياسة الاستخدام المقبول — سناب برو",
    },
    meta: {
      en: "Rules for using ShotStudio safely and legally. Covers prohibited content, prohibited activities, enforcement, and reporting.",
      ar: "قواعد استخدام سناب برو بأمان وقانونية: المحتوى المحظور، الأنشطة المحظورة، الإنفاذ، والإبلاغ.",
    },
    h1: { en: "Acceptable Use Policy", ar: "سياسة الاستخدام المقبول" },
    summary: {
      en: "Use ShotStudio for legitimate creative and commercial purposes. Don't generate harmful, illegal, or deceptive content. Don't abuse the platform or other users.",
      ar: "استخدم سناب برو للأغراض الإبداعية والتجارية المشروعة. لا تُنشئ محتوى ضاراً أو غير قانوني أو مضلِّلاً. ولا تسيء استخدام المنصّة أو المستخدمين الآخرين.",
    },
    sections: [
      {
        id: "prohibited-content",
        heading: { en: "Prohibited content", ar: "المحتوى المحظور" },
        bullets: {
          en: [
            "Child sexual abuse material (CSAM) — reported immediately to the relevant authorities and NCMEC.",
            'Non-consensual intimate imagery (NCII) and "deepfake" pornography.',
            "Deepfakes of identifiable individuals without their explicit, documented consent.",
            "Election or political deepfakes intended to deceive.",
            "Hate speech, harassment, threats, or content that incites violence.",
            "Content that infringes copyright, trademark, or other intellectual-property rights.",
            "Malware, phishing kits, or content designed to defraud.",
            "Fake reviews, fake testimonials, or other deceptive commercial content.",
            "Medical, legal, or financial advice presented as factual.",
          ],
          ar: [
            "مواد الاعتداء الجنسي على الأطفال — يتم الإبلاغ عنها فوراً إلى الجهات المختصة والمنظمات الدولية المعنية.",
            'الصور الحميمة دون رضا أصحابها، والمحتوى الإباحي القائم على "التزييف العميق".',
            "أي تزييف عميق لأفراد معروفين دون موافقتهم الصريحة الموثّقة.",
            "تزييف انتخابي أو سياسي يهدف إلى التضليل.",
            "خطاب كراهية، تحرّش، تهديد، أو تحريض على العنف.",
            "محتوى ينتهك حقوق النشر أو العلامات التجارية أو غيرها من حقوق الملكية الفكرية.",
            "برمجيات خبيثة أو أدوات تصيّد أو محتوى هدفه الاحتيال.",
            "مراجعات وشهادات مزوّرة أو أي محتوى تجاري مضلِّل.",
            "نصائح طبية أو قانونية أو مالية تُقدَّم باعتبارها وقائع.",
          ],
        },
      },
      {
        id: "prohibited-activities",
        heading: { en: "Prohibited activities", ar: "الأنشطة المحظورة" },
        bullets: {
          en: [
            "Reverse-engineering, decompiling, or attempting to bypass safety filters.",
            "Sharing your account or selling generated credits to third parties outside team plans.",
            "Automated scraping or excessive load that affects other users.",
            "Using ShotStudio to compete by training a substitute AI service.",
            "Probing security without using our Vulnerability Disclosure program.",
          ],
          ar: [
            "الهندسة العكسية أو فك التجميع أو محاولة تجاوز فلاتر الأمان.",
            "مشاركة الحساب أو بيع الأرصدة المُولَّدة لأطراف ثالثة خارج خطط الفِرق.",
            "الاستخراج الآلي أو الضغط الزائد بما يؤثّر على بقية المستخدمين.",
            "استخدام سناب برو لتدريب خدمة ذكاء اصطناعي منافسة.",
            "اختبار الأمن دون اللجوء إلى برنامج الإفصاح عن الثغرات.",
          ],
        },
      },
      {
        id: "enforcement",
        heading: { en: "Enforcement", ar: "الإنفاذ" },
        paragraphs: {
          en: [
            "We may warn, restrict features, suspend, or terminate accounts that violate this policy. Severe violations (e.g. CSAM) result in immediate termination and reporting to authorities. We may also bar repeat violators from creating new accounts.",
          ],
          ar: [
            "قد نُصدر تحذيرات أو نُقيّد الميزات أو نُعلّق أو نُنهي الحسابات التي تنتهك هذه السياسة. تؤدي الانتهاكات الجسيمة (مثل المواد المتعلقة بالأطفال) إلى إنهاء فوري وإبلاغ الجهات المختصة. كما قد نمنع المخالفين المتكرّرين من إنشاء حسابات جديدة.",
          ],
        },
      },
      {
        id: "reporting",
        heading: { en: "Reporting abuse", ar: "الإبلاغ عن الإساءة" },
        paragraphs: {
          en: [
            "Report content that violates this policy via our AI Abuse Reporting page. Copyright complaints follow our DMCA / Takedown process.",
          ],
          ar: [
            "بلِّغ عن أي محتوى يُخالف هذه السياسة عبر صفحة الإبلاغ عن إساءة استخدام الذكاء الاصطناعي. تُعالَج شكاوى حقوق النشر عبر إجراءاتنا الخاصة بإزالة المحتوى.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/policies/ai-abuse",
        label: {
          en: "AI Abuse Reporting",
          ar: "الإبلاغ عن إساءة الذكاء الاصطناعي",
        },
      },
      {
        href: "/legal/dmca",
        label: { en: "DMCA / Takedown", ar: "إزالة المحتوى المنتهِك" },
      },
      {
        href: "/legal/terms",
        label: { en: "Terms of Service", ar: "شروط الخدمة" },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── L05 REFUNDS
  {
    slug: "refunds",
    tree: "legal",
    status: "final",
    updated: "2026-06-05",
    title: {
      en: "Refund & Cancellation Policy — ShotStudio",
      ar: "سياسة الاسترداد والإلغاء — سناب برو",
    },
    meta: {
      en: "How and when ShotStudio issues refunds, the 14-day cooling-off rights for Egyptian and EU consumers, and how to cancel.",
      ar: "متى وكيف نُصدر استرداداً، حق التراجع خلال 14 يوماً للعملاء في مصر والاتحاد الأوروبي، وكيفية الإلغاء.",
    },
    h1: { en: "Refund & Cancellation Policy", ar: "سياسة الاسترداد والإلغاء" },
    summary: {
      en: "Cancel anytime from your account. Egyptian and EU customers may withdraw within 14 days under their respective consumer-protection laws, subject to those laws' conditions.",
      ar: "ألغِ في أي وقت من حسابك. يحقّ للعملاء في مصر والاتحاد الأوروبي التراجع خلال 14 يوماً بموجب قوانين حماية المستهلك، وفقاً لأحكامها.",
    },
    sections: [
      {
        id: "subscriptions",
        heading: { en: "Subscriptions", ar: "الاشتراكات" },
        paragraphs: {
          en: [
            "You can cancel your subscription at any time from Account → Billing. Cancellation takes effect at the end of your current billing period; you keep access until then.",
          ],
          ar: [
            "يمكنك إلغاء اشتراكك في أي وقت من الحساب ← الفوترة. يسري الإلغاء في نهاية فترة الفوترة الحالية، مع احتفاظك بالوصول حتى ذلك التاريخ.",
          ],
        },
      },
      {
        id: "egypt-14",
        heading: {
          en: "Egypt — 14-day cooling-off",
          ar: "مصر — حق التراجع خلال 14 يوماً",
        },
        paragraphs: {
          en: [
            "Under Egyptian Consumer Protection Law 181/2018, you may withdraw from a digital-service contract within 14 days of purchase unless the service has been performed (i.e. credits used) with your prior express consent.",
          ],
          ar: [
            "وفقاً لقانون حماية المستهلك المصري رقم 181/2018، يحقّ لك التراجع عن عقد الخدمة الرقمية خلال 14 يوماً من الشراء، ما لم يكن قد تمّ تنفيذ الخدمة (أي استهلاك الأرصدة) بموافقتك الصريحة المسبقة.",
          ],
        },
      },
      {
        id: "eu-14",
        heading: {
          en: "EU — 14-day cooling-off",
          ar: "الاتحاد الأوروبي — التراجع خلال 14 يوماً",
        },
        paragraphs: {
          en: [
            "If you reside in the EU/EEA, you have 14 days to withdraw from a contract for digital services unless you expressly waived that right when the service began.",
          ],
          ar: [
            "إذا كنت مقيماً في الاتحاد الأوروبي/المنطقة الاقتصادية الأوروبية، فلديك 14 يوماً للانسحاب من العقد ما لم تكن قد تنازلت عن هذا الحق صراحةً عند بدء الخدمة.",
          ],
        },
      },
      {
        id: "credits",
        heading: { en: "Credit packs", ar: "حزم الأرصدة" },
        paragraphs: {
          en: [
            "Used credits are non-refundable. Unused, untouched credit packs are refundable within 7 days of purchase.",
          ],
          ar: [
            "لا يمكن استرداد الأرصدة المستخدَمة. أما حزم الأرصدة التي لم تُمَس فيمكن استرداد قيمتها خلال 7 أيام من الشراء.",
          ],
        },
      },
      {
        id: "chargeback",
        heading: { en: "Chargebacks", ar: "ردّ المبالغ المدفوعة" },
        paragraphs: {
          en: [
            "Please contact support before initiating a chargeback. We process refunds via the original payment method (Stripe / Paymob / regional gateway) within 5–10 business days; bank settlement times may vary.",
          ],
          ar: [
            "يُرجى التواصل مع الدعم قبل بدء أي إجراء لردّ المبالغ. نُعالج الاسترداد عبر وسيلة الدفع الأصلية (سترايب/بيموب/البوابة الإقليمية) خلال 5 إلى 10 أيام عمل، مع تفاوت أوقات التسوية بين البنوك.",
          ],
        },
      },
      {
        id: "request",
        heading: { en: "How to request a refund", ar: "كيفية طلب الاسترداد" },
        paragraphs: {
          en: [
            "Email support@shotstudio.ai with your account email, order number, and reason. We respond within 2 business days.",
          ],
          ar: [
            "أرسل إلى support@shotstudio.ai بريد حسابك ورقم الطلب وسبب الاسترداد. نردّ خلال يومي عمل.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/legal/subscription",
        label: { en: "Subscription Terms", ar: "شروط الاشتراك" },
      },
      {
        href: "/legal/terms",
        label: { en: "Terms of Service", ar: "شروط الخدمة" },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── L06 SUBSCRIPTION
  {
    slug: "subscription",
    tree: "legal",
    status: "final",
    updated: "2026-06-05",
    title: {
      en: "Subscription Terms — ShotStudio",
      ar: "شروط الاشتراك — سناب برو",
    },
    meta: {
      en: "Plans, billing cycles, auto-renewal, price changes, taxes, and how downgrades and credits work.",
      ar: "الخطط، دورات الفوترة، التجديد التلقائي، تغيّرات الأسعار، الضرائب، وآلية تخفيض الخطط والأرصدة.",
    },
    h1: { en: "Subscription Terms", ar: "شروط الاشتراك" },
    summary: {
      en: "Subscriptions auto-renew. We give you at least 30 days' notice before any price increase. Taxes are shown at checkout. You can downgrade, upgrade, or cancel anytime.",
      ar: "تتجدّد الاشتراكات تلقائياً. نُخطرك بأيّ زيادة سعرية قبل 30 يوماً على الأقل. تُعرض الضرائب عند الدفع. يمكنك تخفيض الخطة أو ترقيتها أو إلغاؤها في أي وقت.",
    },
    sections: [
      {
        id: "auto-renew",
        heading: { en: "Auto-renewal", ar: "التجديد التلقائي" },
        paragraphs: {
          en: [
            "Your plan will renew automatically at the end of each billing cycle (monthly or annual) using your saved payment method. We send a renewal reminder 7 days before each renewal.",
          ],
          ar: [
            "ستتجدّد خطّتك تلقائياً عند انتهاء كل دورة فوترة (شهرية أو سنوية) باستخدام وسيلة الدفع المحفوظة. نُرسل تذكيراً قبل التجديد بسبعة أيام.",
          ],
        },
      },
      {
        id: "price-changes",
        heading: { en: "Price changes", ar: "تغيير الأسعار" },
        paragraphs: {
          en: [
            "We will give you at least 30 days' notice via email and an in-app notice before any price change takes effect. You may cancel before the change applies.",
          ],
          ar: [
            "سنُخطرك بالبريد الإلكتروني وداخل التطبيق قبل 30 يوماً على الأقل من سريان أي تغيير سعري. يحقّ لك الإلغاء قبل تطبيق التغيير.",
          ],
        },
      },
      {
        id: "taxes",
        heading: { en: "Taxes", ar: "الضرائب" },
        paragraphs: {
          en: [
            "Prices on our pricing page are shown with applicable taxes for your billing country: 14% VAT in Egypt, EU VAT, GCC VAT where applicable. Iraqi customers will see prices net of taxes that may apply locally.",
          ],
          ar: [
            "تُعرض الأسعار في صفحة التسعير شاملةً الضرائب المعمول بها وفقاً لبلد الفوترة: 14% في مصر، وضريبة القيمة المضافة الأوروبية، وضرائب القيمة المضافة في دول الخليج عند الانطباق. يرى العملاء في العراق الأسعار صافيةً من الضرائب المحلية.",
          ],
        },
      },
      {
        id: "credits",
        heading: { en: "Credits roll-over", ar: "ترحيل الأرصدة" },
        paragraphs: {
          en: [
            "Plan credits roll over for one billing cycle, then expire. Add-on credit packs do not expire.",
          ],
          ar: [
            "تُرحَّل أرصدة الخطة لدورة فوترة واحدة فقط ثم تنتهي صلاحيتها. أما حزم الأرصدة الإضافية فلا تنتهي.",
          ],
        },
      },
      {
        id: "downgrade",
        heading: { en: "Downgrades & upgrades", ar: "التخفيض والترقية" },
        paragraphs: {
          en: [
            "Upgrades take effect immediately and are prorated. Downgrades take effect at the next billing cycle.",
          ],
          ar: [
            "تُطبَّق الترقية فوراً مع تقسيط الفارق. أمّا التخفيض فيسري عند بدء دورة الفوترة التالية.",
          ],
        },
      },
      {
        id: "grace",
        heading: { en: "Grace period", ar: "فترة السماح" },
        paragraphs: {
          en: [
            "If your payment fails we retry for 7 days and your account remains active. After 7 days the account is paused. We never delete your data without 30 additional days of notice.",
          ],
          ar: [
            "إذا فشلت عملية الدفع، نُعيد المحاولة على مدى 7 أيام مع بقاء الحساب نشطاً. بعد 7 أيام يتم إيقاف الحساب مؤقتاً. لا نحذف بياناتك مطلقاً قبل إخطارك بـ30 يوماً إضافية.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/legal/refunds",
        label: { en: "Refund Policy", ar: "سياسة الاسترداد" },
      },
      { href: "/pricing", label: { en: "Pricing", ar: "الأسعار" } },
    ],
  },

  // ─── REMAINING LEGAL — STRUCTURAL DRAFTS ──────────────────────────────────
  {
    slug: "dpa",
    tree: "legal",
    status: "final",
    updated: "2026-06-05",
    title: {
      en: "Data Processing Agreement — ShotStudio",
      ar: "اتفاقية معالجة البيانات — سناب برو",
    },
    meta: {
      en: "ShotStudio's DPA for enterprise customers — controller-processor terms, sub-processing, security, audit rights, and SCC annexes.",
      ar: "اتفاقية معالجة البيانات لعملاء الشركات — أحكام المعالج والمراقب، المعالجة الفرعية، الأمن، حقوق التدقيق، وملاحق البنود التعاقدية القياسية.",
    },
    h1: { en: "Data Processing Agreement", ar: "اتفاقية معالجة البيانات" },
    summary: {
      en: "When we process personal data on your behalf, this DPA governs that processing. It can be signed electronically and incorporates SCCs, PDPL, UK IDTA, and Swiss FADP addenda.",
      ar: "عندما نُعالج البيانات الشخصية بالنيابة عنك، تحكم هذه الاتفاقية تلك المعالجة. يمكن توقيعها إلكترونياً وتشمل ملاحق البنود التعاقدية القياسية وقانون حماية البيانات المصري والملحق البريطاني والسويسري.",
    },
    sections: [
      {
        id: "scope",
        heading: { en: "Scope & roles", ar: "النطاق والأدوار" },
        paragraphs: {
          en: [
            "Clause 11.1 of our Terms of Service states that ShotStudio acts as data controller for all personal data processed through the Service, including account data, billing metadata and the Content you upload. There is therefore no controller-to-processor relationship between you and ShotStudio in respect of that data, and we do not act as your processor.",
            "What this Agreement covers. This Agreement records the data-processing terms we impose on the sub-processors we engage. In that chain ShotStudio is the controller and each sub-processor is our processor, engaged under a written agreement containing the obligations set out below.",
            "If you are a Business User. Where you are separately a controller under the law applying to you — for example in respect of individuals depicted in Content you upload — you remain responsible for your own compliance, including obtaining the consents required by clause 6.4(c) of the Terms. This Agreement does not transfer that responsibility to us.",
            "Subject matter and duration. The processing of images, prompts, account identifiers and usage metadata for the purposes described in the Privacy Policy, for the term of your Account and the retention periods set out in Section 8 of the Privacy Policy.",
            "Obligations we impose on every sub-processor: process only on our documented instructions; ensure personnel are bound by confidentiality; apply security measures no less protective than those in Annex II; assist us with data-subject requests and with breach notification; and delete or return data on termination, subject to legal retention.",
            "Unlawful instructions. A sub-processor must inform us where it believes an instruction infringes Egyptian Personal Data Protection Law No. 151/2020 or other applicable law, and is not obliged to carry it out.",
          ],
          ar: [
            "Clause 11.1 of our Terms of Service states that ShotStudio acts as data controller for all personal data processed through the Service, including account data, billing metadata and the Content you upload. There is therefore no controller-to-processor relationship between you and ShotStudio in respect of that data, and we do not act as your processor.",
            "What this Agreement covers. This Agreement records the data-processing terms we impose on the sub-processors we engage. In that chain ShotStudio is the controller and each sub-processor is our processor, engaged under a written agreement containing the obligations set out below.",
            "If you are a Business User. Where you are separately a controller under the law applying to you — for example in respect of individuals depicted in Content you upload — you remain responsible for your own compliance, including obtaining the consents required by clause 6.4(c) of the Terms. This Agreement does not transfer that responsibility to us.",
            "Subject matter and duration. The processing of images, prompts, account identifiers and usage metadata for the purposes described in the Privacy Policy, for the term of your Account and the retention periods set out in Section 8 of the Privacy Policy.",
            "Obligations we impose on every sub-processor: process only on our documented instructions; ensure personnel are bound by confidentiality; apply security measures no less protective than those in Annex II; assist us with data-subject requests and with breach notification; and delete or return data on termination, subject to legal retention.",
            "Unlawful instructions. A sub-processor must inform us where it believes an instruction infringes Egyptian Personal Data Protection Law No. 151/2020 or other applicable law, and is not obliged to carry it out.",
          ],
        },
      },
      {
        id: "subprocessors",
        heading: { en: "Sub-processing", ar: "المعالجة الفرعية" },
        paragraphs: {
          en: [
            "Our sub-processors are published at /legal/sub-processors, with their locations and the transfer basis for each.",
            "We give at least 30 days' notice before adding or replacing a sub-processor. If you object on reasonable data-protection grounds within that period, you may close your Account and receive a pro-rata refund of prepaid fees under clause 22.2 of the Terms.",
            "We remain responsible to you for the acts and omissions of our sub-processors in processing personal data on our behalf.",
          ],
          ar: [
            "Our sub-processors are published at /legal/sub-processors, with their locations and the transfer basis for each.",
            "We give at least 30 days' notice before adding or replacing a sub-processor. If you object on reasonable data-protection grounds within that period, you may close your Account and receive a pro-rata refund of prepaid fees under clause 22.2 of the Terms.",
            "We remain responsible to you for the acts and omissions of our sub-processors in processing personal data on our behalf.",
          ],
        },
      },
      {
        id: "security",
        heading: { en: "Security measures", ar: "التدابير الأمنية" },
        paragraphs: {
          en: [
            "We apply the technical and organisational measures set out in Annex II, which mirror Section 11 of the Privacy Policy. We review them at least annually and may update them provided the level of protection is not reduced.",
            "Personal data breach. Where a breach affects your personal data we notify the PDPC within 72 hours of becoming aware of it — immediately where national security is implicated — and notify affected individuals within three working days of that report, as clause 11.13 of the Terms and the PDPL Executive Regulations require. We apply the same timeframes to users in Iraq as a contractual commitment.",
            "Transparency. Our current security documentation is published at /trust/security, and our sub-processor list at /legal/sub-processors is kept up to date so you can see who handles your data and where.",
          ],
          ar: [
            "We apply the technical and organisational measures set out in Annex II, which mirror Section 11 of the Privacy Policy. We review them at least annually and may update them provided the level of protection is not reduced.",
            "Personal data breach. Where a breach affects your personal data we notify the PDPC within 72 hours of becoming aware of it — immediately where national security is implicated — and notify affected individuals within three working days of that report, as clause 11.13 of the Terms and the PDPL Executive Regulations require. We apply the same timeframes to users in Iraq as a contractual commitment.",
            "Transparency. Our current security documentation is published at /trust/security, and our sub-processor list at /legal/sub-processors is kept up to date so you can see who handles your data and where.",
          ],
        },
      },
      {
        id: "annex-i",
        heading: {
          en: "Annex I — Processing details",
          ar: "الملحق الأول — تفاصيل المعالجة",
        },
        bullets: {
          en: [
            "Subject matter: AI processing of images and prompts submitted through the Service.",
            "Duration: term of the Account, plus the retention periods in Section 8 of the Privacy Policy.",
            "Nature and purpose: image editing, enhancement, background and object manipulation, and related AI outputs requested by the customer.",
            "Personal data: images (potentially including facial images), prompts, account identifiers, usage and device metadata.",
            "Data subjects: customers, customer personnel, and individuals depicted in uploaded images.",
            "Transfers: to the United States and the European Union on the basis set out in Section 7 of the Privacy Policy.",
          ],
          ar: [
            "Subject matter: AI processing of images and prompts submitted through the Service.",
            "Duration: term of the Account, plus the retention periods in Section 8 of the Privacy Policy.",
            "Nature and purpose: image editing, enhancement, background and object manipulation, and related AI outputs requested by the customer.",
            "Personal data: images (potentially including facial images), prompts, account identifiers, usage and device metadata.",
            "Data subjects: customers, customer personnel, and individuals depicted in uploaded images.",
            "Transfers: to the United States and the European Union on the basis set out in Section 7 of the Privacy Policy.",
          ],
        },
      },
      {
        id: "annex-ii",
        heading: {
          en: "Annex II — Technical & organizational measures",
          ar: "الملحق الثاني — التدابير التقنية والتنظيمية",
        },
        bullets: {
          en: [
            "Encryption in transit: TLS 1.3 between clients, our servers, and sub-processors.",
            "Encryption at rest: AES-256 for stored images and account data.",
            "Access control: least privilege, role-based permissions, and MFA on internal systems.",
            "Network segregation: isolated processing environments for AI workloads.",
            "Vendor management: security assessment of every sub-processor before onboarding and annually thereafter.",
            "Incident response: documented plan, breach notification to the PDPC within 72 hours where PDPL Art. 26 requires it, and notice to affected users without undue delay.",
            "Data minimisation: uploads are processed transiently and are not retained after the AI Output is returned unless you save them to your library.",
          ],
          ar: [
            "Encryption in transit: TLS 1.3 between clients, our servers, and sub-processors.",
            "Encryption at rest: AES-256 for stored images and account data.",
            "Access control: least privilege, role-based permissions, and MFA on internal systems.",
            "Network segregation: isolated processing environments for AI workloads.",
            "Vendor management: security assessment of every sub-processor before onboarding and annually thereafter.",
            "Incident response: documented plan, breach notification to the PDPC within 72 hours where PDPL Art. 26 requires it, and notice to affected users without undue delay.",
            "Data minimisation: uploads are processed transiently and are not retained after the AI Output is returned unless you save them to your library.",
          ],
        },
      },
      {
        id: "annex-iii",
        heading: {
          en: "Annex III — Sub-processors",
          ar: "الملحق الثالث — المعالجون الفرعيون",
        },
        paragraphs: {
          en: ["See live sub-processors page."],
          ar: ["راجع الصفحة الحيّة للمعالجين الفرعيين."],
        },
      },
    ],
    cta: {
      label: {
        en: "Ask about our data-processing terms",
        ar: "طلب اتفاقية موقّعة من الجهتين",
      },
      href: "/contact?topic=dpa",
    },
    related: [
      {
        href: "/legal/sub-processors",
        label: { en: "Sub-processors", ar: "المعالجون الفرعيون" },
      },
      {
        href: "/trust/security",
        label: { en: "Security Overview", ar: "نظرة عامة على الأمن" },
      },
    ],
  },
  {
    slug: "sub-processors",
    tree: "legal",
    status: "final",
    updated: "2026-06-05",
    title: {
      en: "Sub-processors — ShotStudio",
      ar: "المعالجون الفرعيون — سناب برو",
    },
    meta: {
      en: "Live list of vendors that process personal data on ShotStudio's behalf, with region and transfer mechanism. Subscribe for change alerts.",
      ar: "قائمة محدّثة بالمورّدين الذين يعالجون البيانات الشخصية بالنيابة عن سناب برو، مع المنطقة وآلية النقل. اشترك للحصول على تنبيهات التغيير.",
    },
    h1: { en: "Sub-processors", ar: "المعالجون الفرعيون" },
    summary: {
      en: "We engage third-party providers for hosting, payments, AI processing, analytics, and support. The table below is the authoritative current list.",
      ar: "نتعاقد مع مزوّدين خارجيين للاستضافة والمدفوعات ومعالجة الذكاء الاصطناعي والتحليلات والدعم. الجدول أدناه هو القائمة المرجعية الحالية.",
    },
    sections: [
      {
        id: "current",
        heading: {
          en: "Current sub-processors",
          ar: "المعالجون الفرعيون الحاليون",
        },
        table: {
          head: {
            en: ["Vendor", "Purpose", "Region", "Transfer mechanism"],
            ar: ["المورّد", "الغرض", "المنطقة", "آلية النقل"],
          },
          rows: [
            {
              en: ["Stripe Inc.", "Card processing", "US / EU", "SCCs"],
              ar: [
                "سترايب",
                "معالجة البطاقات",
                "الولايات المتحدة/أوروبا",
                "البنود التعاقدية القياسية",
              ],
            },
            {
              en: [
                "Paymob",
                "Regional payments",
                "Egypt / GCC",
                "PDPL safeguards",
              ],
              ar: [
                "بيموب",
                "مدفوعات إقليمية",
                "مصر/الخليج",
                "ضمانات قانون حماية البيانات",
              ],
            },
            {
              en: ["Cloudflare", "CDN, WAF, DDoS", "Global", "SCCs"],
              ar: [
                "كلاودفلير",
                "CDN وWAF وحماية من DDoS",
                "عالمياً",
                "البنود التعاقدية القياسية",
              ],
            },
            {
              en: ["Vercel", "Hosting & edge", "Global", "SCCs"],
              ar: [
                "فيرسل",
                "الاستضافة والحافة",
                "عالمياً",
                "البنود التعاقدية القياسية",
              ],
            },
          ],
        },
      },
      {
        id: "subscribe",
        heading: { en: "Change alerts", ar: "تنبيهات التغيير" },
        paragraphs: {
          en: [
            "Email subprocessors@shotstudio.ai to receive 30-day advance notice of any addition or replacement.",
          ],
          ar: [
            "راسِل subprocessors@shotstudio.ai للحصول على إشعار قبل 30 يوماً من أي إضافة أو استبدال.",
          ],
        },
      },
    ],
  },
  {
    slug: "international-transfers",
    tree: "legal",
    status: "final",
    title: {
      en: "International Data Transfers — ShotStudio",
      ar: "نقل البيانات الدولي — سناب برو",
    },
    meta: {
      en: "How ShotStudio transfers data across borders, the safeguards we apply, and the adequacy / SCC framework we rely on.",
      ar: "كيف تنقل سناب برو البيانات عبر الحدود، الضمانات المطبَّقة، وإطار قرارات الكفاية والبنود التعاقدية القياسية.",
    },
    h1: { en: "International Data Transfers", ar: "نقل البيانات الدولي" },
    sections: [
      {
        id: "framework",
        heading: { en: "Legal framework", ar: "الإطار القانوني" },
        paragraphs: {
          en: [
            "Standard Contractual Clauses (EU 2021/914), UK IDTA, Swiss FADP addendum, and PDPL-aligned safeguards for transfers outside Egypt.",
          ],
          ar: [
            "البنود التعاقدية القياسية الأوروبية (2021/914)، الملحق البريطاني، ملحق قانون حماية البيانات السويسري، وضمانات متوافقة مع قانون حماية البيانات المصري للنقل خارج مصر.",
          ],
        },
      },
      {
        id: "regions",
        heading: { en: "Where data flows", ar: "أين تتحرّك البيانات" },
        paragraphs: {
          en: [
            "Primary processing in EU and US regions. MENA region edge cache for static assets.",
          ],
          ar: [
            "المعالجة الأساسية في مناطق الاتحاد الأوروبي والولايات المتحدة. ذاكرة حافة في منطقة الشرق الأوسط للأصول الثابتة.",
          ],
        },
      },
    ],
  },
  {
    slug: "government-requests",
    tree: "legal",
    status: "final",
    title: {
      en: "Government Requests — ShotStudio",
      ar: "طلبات الحكومات — سناب برو",
    },
    meta: {
      en: "How ShotStudio handles legal process from government authorities and the principles we apply when responding.",
      ar: "كيف تتعامل سناب برو مع الإجراءات القانونية من السلطات الحكومية، والمبادئ التي نطبّقها عند الردّ.",
    },
    h1: { en: "Government Requests", ar: "طلبات الحكومات" },
    sections: [
      {
        id: "principles",
        heading: { en: "Principles", ar: "المبادئ" },
        paragraphs: {
          en: [
            "We require valid legal process, narrow each disclosure, notify users where lawful, and publish an annual transparency report.",
          ],
          ar: [
            "نشترط إجراءً قانونياً صحيحاً، ونحصر كل إفصاح بالحد الأدنى، ونُخطر المستخدمين متى أمكن قانوناً، ونُصدر تقرير شفافية سنوياً.",
          ],
        },
      },
      {
        id: "report",
        heading: {
          en: "Annual transparency report",
          ar: "تقرير الشفافية السنوي",
        },
        paragraphs: {
          en: [
            "The first report will be published 12 months after general availability launch.",
          ],
          ar: ["سيُنشر التقرير الأول بعد 12 شهراً من الإطلاق العام."],
        },
      },
    ],
  },
  {
    slug: "egypt-pdpl",
    tree: "legal",
    status: "final",
    title: {
      en: "Egypt — PDPL Notice",
      ar: "مصر — إشعار قانون حماية البيانات",
    },
    meta: {
      en: "Egyptian Personal Data Protection Law 151/2020 disclosures, data-subject rights, and the route to file a complaint.",
      ar: "إفصاحات قانون حماية البيانات الشخصية المصري رقم 151/2020، حقوق أصحاب البيانات، وآلية تقديم الشكوى.",
    },
    h1: {
      en: "Egyptian Data Protection Notice",
      ar: "إشعار حماية البيانات للعملاء في مصر",
    },
    summary: {
      en: "If you reside in Egypt, this page summarizes how PDPL Law 151/2020 applies to your use of ShotStudio and how to exercise your rights.",
      ar: "إذا كنت مقيماً في مصر، تلخّص هذه الصفحة كيف يُطبَّق قانون حماية البيانات الشخصية رقم 151/2020 على استخدامك سناب برو وكيف تمارس حقوقك.",
    },
    sections: [
      {
        id: "controller",
        heading: { en: "Controller status", ar: "صفة المراقب" },
        paragraphs: {
          en: [
            "ShotStudio is the data controller for Egyptian users in respect of account data, billing, and product analytics, and acts as a processor for content uploaded by enterprise customers under a written Data Processing Agreement.",
            "Our legal entity, commercial registration, and tax-card details are listed on the Business & Registration Information page (Article 49 of the Executive Regulations of Consumer Protection Law 181/2018).",
          ],
          ar: [
            "سناب برو هي المراقب على بيانات المستخدمين في مصر لما يتعلق ببيانات الحساب والفوترة وتحليلات المنتج، وتعمل كمعالج لمحتوى عملاء الشركات بموجب اتفاقية معالجة بيانات مكتوبة.",
            "تفاصيل الكيان القانوني والسجل التجاري والبطاقة الضريبية مذكورة في صفحة معلومات الشركة والتسجيل (المادة 49 من اللائحة التنفيذية لقانون حماية المستهلك رقم 181/2018).",
          ],
        },
      },
      {
        id: "lawful-basis",
        heading: {
          en: "Lawful basis (PDPL Art. 5)",
          ar: "السند القانوني (المادة 5 من القانون)",
        },
        paragraphs: {
          en: [
            "We process personal data only on one of the bases recognised by Article 5 of PDPL Law 151/2020:",
          ],
          ar: [
            "نُعالج البيانات الشخصية بناءً على أحد السندات المعترف بها في المادة 5 من القانون رقم 151/2020:",
          ],
        },
        bullets: {
          en: [
            "Performance of the contract with you (account creation, billing, AI generation requested).",
            "Your explicit consent (marketing emails, optional analytics, optional model-improvement uploads).",
            "Compliance with a legal obligation (tax invoices, fraud prevention, takedown orders).",
            "Our legitimate interests (service security, abuse prevention) where these do not override your rights.",
          ],
          ar: [
            "تنفيذ العقد المُبرم معك (إنشاء الحساب، الفوترة، تنفيذ طلبات الذكاء الاصطناعي).",
            "موافقتك الصريحة (الرسائل التسويقية، التحليلات الاختيارية، رفع البيانات لتحسين النماذج).",
            "الامتثال لالتزام قانوني (الفواتير الضريبية، منع الاحتيال، أوامر الإزالة).",
            "مصلحتنا المشروعة (أمن الخدمة، منع إساءة الاستخدام) شرط ألا تطغى على حقوقك.",
          ],
        },
      },
      {
        id: "rights",
        heading: {
          en: "Your rights (PDPL Arts. 17–25)",
          ar: "حقوقك (المواد 17 إلى 25 من القانون)",
        },
        bullets: {
          en: [
            "Right to be informed of processing (Art. 12).",
            "Right of access to your data (Art. 17).",
            "Right of rectification (Art. 18).",
            "Right of erasure / withdrawal of consent (Arts. 19, 21).",
            "Right of restriction & objection (Art. 22).",
            "Right of data portability (Art. 23).",
            "Right not to be subject to a solely automated decision producing legal or similarly significant effects (Art. 19).",
            "Right to lodge a complaint with the Personal Data Protection Center (PDPC).",
          ],
          ar: [
            "الحق في الإحاطة بالمعالجة (المادة 12).",
            "الحق في الوصول إلى بياناتك (المادة 17).",
            "الحق في التصحيح (المادة 18).",
            "الحق في المحو وسحب الموافقة (المادتان 19 و21).",
            "الحق في التقييد والاعتراض (المادة 22).",
            "الحق في نقل البيانات (المادة 23).",
            "الحق في عدم الخضوع لقرار آلي بحت يُحدث أثراً قانونياً أو مماثلاً (المادة 19).",
            "الحق في تقديم شكوى لمركز حماية البيانات الشخصية.",
          ],
        },
      },
      {
        id: "retention",
        heading: {
          en: "Retention periods",
          ar: "مدد الاحتفاظ",
        },
        paragraphs: {
          en: [
            "We keep account data while your account is active and for up to 12 months after closure for legal-defence and accounting purposes; tax invoices for 5 years (Egyptian Tax Procedures Law 206/2020 Art. 26); generated content for 90 days after your last sign-in unless you delete it sooner; security logs for 6 months. Specific retention durations per processing activity are listed in the master Privacy Policy.",
          ],
          ar: [
            "نحتفظ ببيانات الحساب طوال نشاطه ولمدة تصل إلى 12 شهراً بعد إغلاقه لأغراض الدفاع القانوني والمحاسبة؛ والفواتير الضريبية لمدة 5 سنوات (المادة 26 من قانون الإجراءات الضريبية رقم 206/2020)؛ والمحتوى المُولَّد لمدة 90 يوماً من آخر تسجيل دخول ما لم تحذفه قبل ذلك؛ وسجلات الأمن لمدة 6 أشهر. مدد الاحتفاظ التفصيلية لكل نشاط معالجة موضّحة في سياسة الخصوصية الرئيسية.",
          ],
        },
      },
      {
        id: "cross-border",
        heading: {
          en: "Cross-border transfers (PDPL Art. 14)",
          ar: "النقل عبر الحدود (المادة 14 من القانون)",
        },
        paragraphs: {
          en: [
            "Article 14 of PDPL Law 151/2020 requires a licence from the Personal Data Protection Center (PDPC) before transferring personal data outside Egypt, save for limited statutory exceptions. The Center's licensing regime is supplied by the PDPL Executive Regulations, which had not yet issued at the time of writing.",
            "ShotStudio relies on third-party AI inference and infrastructure providers located outside Egypt (United States and European Union). Pending issuance of the Executive Regulations and our PDPC licence application, we transfer personal data on the basis of:",
          ],
          ar: [
            "تُلزم المادة 14 من القانون رقم 151/2020 بالحصول على ترخيص من مركز حماية البيانات الشخصية قبل نقل البيانات خارج مصر، باستثناء حالات محدودة. تفاصيل الترخيص واردة في اللائحة التنفيذية للقانون التي لم تصدر بعد عند كتابة هذا الإشعار.",
            "تعتمد سناب برو على مزوّدي بنية تحتية واستدلال ذكاء اصطناعي خارج مصر (الولايات المتحدة والاتحاد الأوروبي). وإلى حين صدور اللائحة التنفيذية والحصول على الترخيص، يستند النقل إلى:",
          ],
        },
        bullets: {
          en: [
            "Your explicit, informed consent at the moment of upload (Art. 14 carve-out).",
            "Necessity for the performance of the contract you have entered into with us (Art. 14 carve-out).",
            "Contractual safeguards equivalent to the EU Standard Contractual Clauses with each overseas processor.",
          ],
          ar: [
            "موافقتك الصريحة المستنيرة عند رفع المحتوى (استثناء المادة 14).",
            "ضرورة تنفيذ العقد المُبرم معنا (استثناء المادة 14).",
            "ضمانات تعاقدية معادلة للبنود التعاقدية القياسية الأوروبية مع كل معالج خارجي.",
          ],
        },
      },
      {
        id: "dsr",
        heading: {
          en: "Data-subject request portal",
          ar: "بوابة طلبات أصحاب البيانات",
        },
        paragraphs: {
          en: [
            "Submit a request via privacy@shotstudio.ai with reasonable proof of identity. We respond within 30 days; for complex or voluminous requests we may extend by a further 30 days and notify you of the reason.",
          ],
          ar: [
            "قدّم طلبك عبر privacy@shotstudio.ai مع إثبات معقول للهوية. نردّ خلال 30 يوماً؛ وفي الطلبات المعقّدة أو الكبيرة الحجم قد نمدّ المهلة 30 يوماً إضافية مع إخطارك بسبب التمديد.",
          ],
        },
      },
      {
        id: "breach",
        heading: {
          en: "Breach notification (PDPL Art. 35)",
          ar: "الإخطار بالاختراق (المادة 35 من القانون)",
        },
        paragraphs: {
          en: [
            "Where a personal-data breach is likely to result in risk to data subjects, ShotStudio will notify the PDPC within 72 hours of becoming aware of the breach and will notify affected users without undue delay where the breach is likely to result in high risk to their rights or freedoms.",
          ],
          ar: [
            "في حال وقوع اختراق بيانات شخصية يُحتمل أن يُلحق ضرراً بأصحابها، تُخطر سناب برو مركز حماية البيانات الشخصية خلال 72 ساعة من العلم بالاختراق، وتُخطر المستخدمين المتأثرين دون تأخير غير مبرّر متى كان الاختراق مرجّح التسبّب في خطر مرتفع على حقوقهم أو حرياتهم.",
          ],
        },
      },
      {
        id: "dpo",
        heading: {
          en: "DPO & supervisory authority (PDPL Art. 8)",
          ar: "مسؤول حماية البيانات والجهة الإشرافية (المادة 8)",
        },
        paragraphs: {
          en: [
            "Article 8 of PDPL Law 151/2020 requires controllers and processors that handle sensitive personal data, conduct large-scale or systematic monitoring, or meet the thresholds set in the Executive Regulations to appoint a Data Protection Officer (DPO).",
            "ShotStudio's Office of the DPO can be contacted at privacy@shotstudio.ai. The named DPO will be published once Executive Regulations issue and our appointment is filed with the PDPC.",
            "Supervisory authority: Personal Data Protection Center (مركز حماية البيانات الشخصية), Ministry of Communications and Information Technology, Smart Village, Giza, Egypt.",
          ],
          ar: [
            "تُلزم المادة 8 من القانون رقم 151/2020 المراقبَ والمعالج اللذَين يتعاملان مع البيانات الحسّاسة أو يُجريان مراقبة منهجية واسعة النطاق أو يستوفيان حدود اللائحة التنفيذية بتعيين مسؤول حماية بيانات.",
            "يمكن التواصل مع مكتب مسؤول حماية البيانات في سناب برو عبر privacy@shotstudio.ai. سيُنشَر اسم المسؤول المعيَّن فور صدور اللائحة التنفيذية وإيداع تعيينه لدى المركز.",
            "الجهة الإشرافية: مركز حماية البيانات الشخصية، وزارة الاتصالات وتكنولوجيا المعلومات، القرية الذكية، الجيزة، جمهورية مصر العربية.",
          ],
        },
      },
      {
        id: "complaints",
        heading: {
          en: "How to lodge a complaint",
          ar: "كيفية تقديم شكوى",
        },
        paragraphs: {
          en: [
            "If you believe we have processed your data unlawfully you may complain directly to the Personal Data Protection Center using the channels published on the PDPC's official portal under the Ministry of Communications and Information Technology (MCIT). We encourage you to contact us first at privacy@shotstudio.ai so we have an opportunity to address the issue.",
          ],
          ar: [
            "إذا رأيت أننا عالجنا بياناتك بصورة مخالفة للقانون يمكنك تقديم شكوى مباشرة إلى مركز حماية البيانات الشخصية عبر القنوات المنشورة على البوّابة الرسمية للمركز التابع لوزارة الاتصالات وتكنولوجيا المعلومات. ونشجّعك على التواصل معنا أولاً عبر privacy@shotstudio.ai لمنحنا فرصة للمعالجة.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/legal/privacy",
        label: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
      },
      {
        href: "/legal/business-info",
        label: { en: "Business Information", ar: "معلومات الشركة" },
      },
      {
        href: "/legal/international-transfers",
        label: {
          en: "International Transfers",
          ar: "نقل البيانات الدولي",
        },
      },
    ],
  },
  {
    slug: "iraq-consumer",
    tree: "legal",
    status: "final",
    title: {
      en: "Iraq — Consumer Rights & E-commerce Disclosure",
      ar: "العراق — حقوق المستهلك وإفصاح التجارة الإلكترونية",
    },
    meta: {
      en: "Disclosures for customers in Iraq under Consumer Protection Law No. 1 of 2010 — pricing, cancellation, complaints, and merchant identity.",
      ar: "الإفصاحات للعملاء في العراق وفقاً لقانون حماية المستهلك رقم 1 لسنة 2010 — التسعير، الإلغاء، الشكاوى، وهوية التاجر.",
    },
    h1: {
      en: "Information for Customers in Iraq",
      ar: "معلومات للعملاء في العراق",
    },
    sections: [
      {
        id: "merchant",
        heading: { en: "Merchant identity", ar: "هوية التاجر" },
        paragraphs: {
          en: [
            "ShotStudio, Inc., operating ShotStudio AI photo studio. See our Business Information page for legal entity details.",
          ],
          ar: [
            "سناب برو، إنك.، مشغّل استوديو سناب برو للذكاء الاصطناعي. راجع صفحة معلومات الشركة لتفاصيل الكيان القانوني.",
          ],
        },
      },
      {
        id: "pricing",
        heading: { en: "Total price", ar: "السعر الإجمالي" },
        paragraphs: {
          en: [
            "Prices are displayed in IQD with USD reference rate. Any local taxes that may apply are your responsibility.",
          ],
          ar: [
            "تُعرض الأسعار بالدينار العراقي مع سعر مرجعي بالدولار. أي ضرائب محلية تنطبق تقع على عاتقك.",
          ],
        },
      },
      {
        id: "cancellation",
        heading: { en: "Cancellation rights", ar: "حقوق الإلغاء" },
        paragraphs: {
          en: [
            "You may cancel from your account dashboard. See Refund Policy for full terms.",
          ],
          ar: [
            "يمكنك الإلغاء من لوحة الحساب. راجع سياسة الاسترداد للأحكام الكاملة.",
          ],
        },
      },
      {
        id: "complaints",
        heading: { en: "Complaints", ar: "الشكاوى" },
        paragraphs: {
          en: [
            "Email support@shotstudio.ai. If unresolved within 30 days you may escalate to the Iraqi consumer-protection authorities.",
          ],
          ar: [
            "راسِل support@shotstudio.ai. وإذا لم يتم الحلّ خلال 30 يوماً يمكنك التصعيد إلى السلطات العراقية المعنية بحماية المستهلك.",
          ],
        },
      },
    ],
  },
  {
    slug: "business-info",
    tree: "legal",
    status: "final",
    title: {
      en: "Business & Registration Information",
      ar: "معلومات الشركة والتسجيل",
    },
    meta: {
      en: "ShotStudio's legal entity, commercial registration number, tax ID, registered address, and electronic invoicing status.",
      ar: "الكيان القانوني لسناب برو، السجل التجاري، الرقم الضريبي، العنوان المسجل، وحالة الفوترة الإلكترونية.",
    },
    h1: {
      en: "Business & Registration Information",
      ar: "معلومات الشركة والتسجيل",
    },
    summary: {
      en: "Required commercial disclosures for Egyptian e-commerce regulations and broader transparency.",
      ar: "إفصاحات تجارية مطلوبة بموجب لوائح التجارة الإلكترونية المصرية وللشفافية بشكل عام.",
    },
    sections: [
      {
        id: "entity",
        heading: { en: "Legal entity", ar: "الكيان القانوني" },
        table: {
          head: { en: ["Field", "Value"], ar: ["الحقل", "القيمة"] },
          rows: [
            {
              en: ["Legal name", "Innovatx (trading as ShotStudio)"],
              ar: ["الاسم القانوني", "Innovatx (تعمل باسم ShotStudio)"],
            },
            {
              en: ["Place of establishment", "Austin, Texas, United States"],
              ar: ["مقر التأسيس", "أوستن، تكساس، الولايات المتحدة"],
            },
            {
              en: ["Activity", "Software-as-a-Service · AI image and video editing for e-commerce sellers"],
              ar: ["النشاط", "برمجيات كخدمة · تحرير الصور والفيديو بالذكاء الاصطناعي"],
            },
            {
              en: ["Markets served", "Egypt and Iraq"],
              ar: ["الأسواق المخدومة", "مصر والعراق"],
            },
            {
              en: ["Local registration", "None — Innovatx is not established in Egypt or Iraq and holds no local commercial registration, tax card, or VAT number"],
              ar: ["التسجيل المحلي", "لا يوجد — ليس لدى Innovatx تأسيس في مصر أو العراق ولا سجل تجاري أو بطاقة ضريبية محلية"],
            },
            {
              en: ["Billing / merchant of record", "Google Play (Google LLC) — subscriptions and Credit Packs"],
              ar: ["الفوترة / التاجر المسجل", "Google Play (Google LLC) — الاشتراكات وحزم الأرصدة"],
            },
            {
              en: ["Receipts and invoices", "Issued by Google Play as merchant of record"],
              ar: ["الإيصالات والفواتير", "تصدر عن Google Play بصفتها التاجر المسجل"],
            },
            {
              en: ["Customer service email", "support@shotstudio.ai"],
              ar: ["البريد الإلكتروني لخدمة العملاء", "support@shotstudio.ai"],
            },
            {
              en: ["Legal notices", "legal@shotstudio.ai"],
              ar: ["الإشعارات القانونية", "legal@shotstudio.ai"],
            },
            {
              en: ["Privacy and data protection", "privacy@shotstudio.ai"],
              ar: ["الخصوصية وحماية البيانات", "privacy@shotstudio.ai"],
            },
            {
              en: ["Complaints (Egypt)", "Egyptian Consumer Protection Agency · hotline 19588 · cpa.gov.eg"],
              ar: ["الشكاوى (مصر)", "جهاز حماية المستهلك المصري · الخط الساخن 19588 · cpa.gov.eg"],
            },
            {
              en: ["Complaints (Iraq)", "See /legal/iraq-consumer"],
              ar: ["الشكاوى (العراق)", "راجع /legal/iraq-consumer"],
            },
          ],
        },
      },
      {
        id: "egypt-disclosures",
        heading: {
          en: "Egyptian e-commerce disclosures",
          ar: "إفصاحات التجارة الإلكترونية في مصر",
        },
        paragraphs: {
          en: [
            "Innovatx is established in the United States and sells into Egypt and Iraq without a local establishment. It therefore holds no Egyptian commercial registration, tax card, or ETA simplified-vendor number, and no Iraqi commercial registration. Subscriptions and Credit Packs are sold through Google Play, which acts as merchant of record, sets the tax treatment at checkout, and issues your receipt.",
            "The identity and contact disclosures required of online traders serving customers in Egypt — under Article 49 of the Executive Regulations (Decree 822/2019) of Consumer Protection Law 181/2018 — are the fields published above, together with the complaint route to the Egyptian Consumer Protection Agency (hotline 19588). Consumer disclosures for Iraq under Consumer Protection Law No. 1 of 2010 are published at /legal/iraq-consumer.",
          ],
          ar: [
            "تأسست Innovatx في الولايات المتحدة وتبيع في مصر والعراق دون مقر محلي، ولذلك لا تحمل سجلاً تجارياً أو بطاقة ضريبية مصرية. تُباع الاشتراكات وحزم الأرصدة عبر Google Play بصفتها التاجر المسجل، وهي التي تُصدر الإيصال.",
            "إفصاحات الهوية والتواصل المطلوبة من التجار الإلكترونيين الذين يخدمون عملاء في مصر — بموجب المادة 49 من اللائحة التنفيذية (قرار 822/2019) لقانون حماية المستهلك 181/2018 — هي الحقول المنشورة أعلاه، إلى جانب آلية الشكوى لجهاز حماية المستهلك (الخط الساخن 19588). وتُنشر إفصاحات المستهلك للعراق على /legal/iraq-consumer.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/legal/egypt-pdpl",
        label: { en: "Egypt PDPL Notice", ar: "إشعار قانون حماية البيانات" },
      },
      {
        href: "/legal/refunds",
        label: { en: "Refund Policy", ar: "سياسة الاسترداد" },
      },
    ],
  },
  {
    slug: "dmca",
    tree: "legal",
    status: "final",
    title: {
      en: "DMCA / Takedown — ShotStudio",
      ar: "إزالة المحتوى المنتهِك — سناب برو",
    },
    meta: {
      en: "How to report copyright infringement on ShotStudio under the DMCA and analogous laws in Egypt, Iraq, and the EU.",
      ar: "كيفية الإبلاغ عن انتهاك حقوق النشر على سناب برو وفقاً لقانون DMCA الأمريكي والأنظمة المماثلة في مصر والعراق والاتحاد الأوروبي.",
    },
    h1: { en: "DMCA / Takedown", ar: "DMCA / إزالة المحتوى" },
    sections: [
      {
        id: "agent",
        heading: { en: "Designated agent", ar: "الوكيل المعتمد" },
        paragraphs: {
          en: ["ShotStudio Copyright Agent · copyright@shotstudio.ai"],
          ar: ["وكيل حقوق النشر في سناب برو · copyright@shotstudio.ai"],
        },
      },
      {
        id: "what-to-include",
        heading: { en: "What to include", ar: "ما يجب تضمينه في البلاغ" },
        bullets: {
          en: [
            "Identification of the work claimed to be infringed.",
            "Identification of the material on ShotStudio that is allegedly infringing (URL).",
            "Your contact information.",
            "A statement of good-faith belief.",
            "A statement under penalty of perjury.",
            "Your physical or electronic signature.",
          ],
          ar: [
            "تحديد العمل المدّعى انتهاك حقوقه.",
            "تحديد المادة على سناب برو المُدَّعى أنها منتهِكة (الرابط).",
            "بيانات اتصالك.",
            "إقرار بحُسن النيّة.",
            "إقرار تحت طائلة المسؤولية القانونية.",
            "توقيعك المادي أو الإلكتروني.",
          ],
        },
      },
      {
        id: "counter",
        heading: { en: "Counter-notification", ar: "إشعار مضاد" },
        paragraphs: {
          en: [
            "If your content was removed and you believe in good faith that the removal is mistaken, you may submit a counter-notice to copyright@shotstudio.ai.",
          ],
          ar: [
            "إذا أُزيل محتواك وكنت تعتقد بحُسن نيّة أن الإزالة خاطئة، يمكنك تقديم إشعار مضاد إلى copyright@shotstudio.ai.",
          ],
        },
      },
      {
        id: "repeat",
        heading: {
          en: "Repeat-infringer policy",
          ar: "سياسة المخالفين المتكرّرين",
        },
        paragraphs: {
          en: [
            "Accounts subject to repeated valid takedowns may be terminated.",
          ],
          ar: ["قد يتمّ إنهاء الحسابات الخاضعة لطلبات إزالة صحيحة متكرّرة."],
        },
      },
    ],
  },
];
