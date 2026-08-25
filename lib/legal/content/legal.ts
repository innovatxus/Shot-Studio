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
    updated: "2026-08-25",
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
            "The data controller responsible for your personal data is Innovatx (trading as “ShotStudio”), with its principal place of business at Austin, Texas, USA. Complete commercial disclosures are published at /legal/business-info.",
            "ShotStudio is released in Egypt and Iraq. Where we process the personal data of users located in Egypt, we do so in accordance with Egyptian Personal Data Protection Law No. 151/2020 (“PDPL”), and this Policy describes the PDPL standards we apply. Iraq has no comprehensive data-protection statute equivalent to the PDPL; we extend the same rights and safeguards described in this Policy to users in Iraq as a contractual commitment. Consumer disclosures for Iraq, including those under Consumer Protection Law No. 1 of 2010, are published at /legal/iraq-consumer.",
            "Data Protection Officer (DPO): privacy@shotstudio.ai.",
            "This Privacy Policy applies to personal data processed through the ShotStudio platform at shotstudio.ai and any associated APIs or integrations (the “Service”). It does not apply to third-party websites or services that we link to.",
          ],
          ar: [
            "The data controller responsible for your personal data is Innovatx (trading as “ShotStudio”), with its principal place of business at Austin, Texas, USA. Complete commercial disclosures are published at /legal/business-info.",
            "ShotStudio is released in Egypt and Iraq. Where we process the personal data of users located in Egypt, we do so in accordance with Egyptian Personal Data Protection Law No. 151/2020 (“PDPL”), and this Policy describes the PDPL standards we apply. Iraq has no comprehensive data-protection statute equivalent to the PDPL; we extend the same rights and safeguards described in this Policy to users in Iraq as a contractual commitment. Consumer disclosures for Iraq, including those under Consumer Protection Law No. 1 of 2010, are published at /legal/iraq-consumer.",
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
              en: "Companies that help us operate the Service under contractual data-processing obligations, including Vercel, Inc. (CDN and security), Firebase / Google LLC (authentication), and AI model/inference providers listed at /policies/ai-providers. A complete, up-to-date list of sub-processors is published at /legal/sub-processors.",
              ar: "Companies that help us operate the Service under contractual data-processing obligations, including Vercel, Inc. (CDN and security), Firebase / Google LLC (authentication), and AI model/inference providers listed at /policies/ai-providers. A complete, up-to-date list of sub-processors is published at /legal/sub-processors.",
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
            "United States (Vercel, Firebase/Google, AI inference providers): we rely on (a) your explicit, informed consent given at the point of uploading images to the Service, and (b) the contractual necessity exception in PDPL Art. 14; the transfer is necessary to perform the Service contract with you. We additionally apply Standard Contractual Clause-equivalent data-processing agreements with each US-based sub-processor.",
            "European Union (certain AI providers, analytics): we rely on the EU adequacy framework and, where applicable, Standard Contractual Clauses. EU-based processing benefits from GDPR-level protections.",
            "Data processed within Egypt is subject to PDPL Law No. 151/2020 in full.",
            "Full details of transfer mechanisms per sub-processor are available on request from privacy@shotstudio.ai and are summarised at /legal/international-transfers.",
          ],
          ar: [
            "ShotStudio is built on global cloud infrastructure. The Service is offered in Egypt and Iraq, but the hosting, authentication, and AI providers we rely on operate outside both countries — principally in the United States and the European Union. Your personal data, including uploaded images, is therefore transferred out of your country and processed abroad.",
            "For users located in Egypt, those transfers are made under Article 14 of Egyptian Personal Data Protection Law No. 151/2020, which permits cross-border transfers only under specified conditions. For users located in Iraq, no equivalent statutory transfer regime currently applies, and we apply the same safeguards as a matter of contract. The safeguards we rely on for each destination are:",
            "United States (Vercel, Firebase/Google, AI inference providers): we rely on (a) your explicit, informed consent given at the point of uploading images to the Service, and (b) the contractual necessity exception in PDPL Art. 14; the transfer is necessary to perform the Service contract with you. We additionally apply Standard Contractual Clause-equivalent data-processing agreements with each US-based sub-processor.",
            "European Union (certain AI providers, analytics): we rely on the EU adequacy framework and, where applicable, Standard Contractual Clauses. EU-based processing benefits from GDPR-level protections.",
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
                "Server access and security logs",
                "90 days rolling",
                "Legitimate interests (security)",
              ],
              ar: [
                "Server access and security logs",
                "90 days rolling",
                "Legitimate interests (security)",
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
              en: "If you are in Egypt, lodge a complaint with the Personal Data Protection Center (PDPC), Ministry of Communications and Information Technology, Smart Village, Giza, Egypt (pdpc.gov.eg). Iraq has no dedicated data-protection authority at present; if you are in Iraq, contact our Data Protection Officer first, and you may also raise consumer complaints through the channels described at /legal/iraq-consumer.",
              ar: "If you are in Egypt, lodge a complaint with the Personal Data Protection Center (PDPC), Ministry of Communications and Information Technology, Smart Village, Giza, Egypt (pdpc.gov.eg). Iraq has no dedicated data-protection authority at present; if you are in Iraq, contact our Data Protection Officer first, and you may also raise consumer complaints through the channels described at /legal/iraq-consumer.",
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
              en: "Documented incident response plan; breach notification to PDPC within 72 hours where required by PDPL Art. 26; notification to affected users without undue delay by email to their registered address. Full details are at /trust/security.",
              ar: "Documented incident response plan; breach notification to PDPC within 72 hours where required by PDPL Art. 26; notification to affected users without undue delay by email to their registered address. Full details are at /trust/security.",
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
    status: "draft",
    updated: "2026-07-13",
    title: {
      en: "Terms of Service — ShotStudio",
      ar: "Terms of Service — ShotStudio",
    },
    meta: {
      en: "The binding contract between you and ShotStudio. Covers account rules, user content, AI-output ownership, payments, refunds, acceptable use, liability, and Egyptian-law dispute resolution.",
      ar: "The binding contract between you and ShotStudio. Covers account rules, user content, AI-output ownership, payments, refunds, acceptable use, liability, and Egyptian-law dispute resolution.",
    },
    h1: { en: "Terms of Service", ar: "Terms of Service" },
    summary: {
      en: "These Terms form the binding contract between you (the \"User\") and ShotStudio. They explain what you can do on the platform, who owns the content you upload and the images you generate, how billing and refunds work, your rights as a consumer under Egyptian law, and how disputes are resolved. Please read them carefully before using the Service.",
      ar: "These Terms form the binding contract between you (the \"User\") and ShotStudio. They explain what you can do on the platform, who owns the content you upload and the images you generate, how billing and refunds work, your rights as a consumer under Egyptian law, and how disputes are resolved. Please read them carefully before using the Service.",
    },
    sections: [
      // ── 1. PARTIES ──────────────────────────────────────────────────────────
      {
        id: "parties",
        heading: {
          en: "1. Parties, Identity, and Scope",
          ar: "1. Parties, Identity, and Scope",
        },
        paragraphs: {
          en: [
            "ShotStudio is operated by [COMPANY LEGAL NAME] (trading as \"ShotStudio\"), registered under Commercial Registration No. [CR NUMBER] issued by [ISSUING CHAMBER], with its principal place of business at [REGISTERED ADDRESS], Egypt. Tax Card No.: [TAX CARD NUMBER] (Egyptian Tax Authority). ETA Simplified Vendor Registration No.: [ETA SIMPLIFIED VENDOR NUMBER] (pursuant to Law No. 3/2022 and Decree No. 24/2023). Authorised signatory: [AUTHORISED SIGNATORY NAME AND TITLE]. Customer service: support@shotstudio.ai · Tel: [CUSTOMER SERVICE PHONE — EGYPT]. Complete commercial disclosures are published at /legal/business-info in compliance with Article 49 of the Executive Regulations (Decree No. 822/2019) of Consumer Protection Law No. 181/2018.",
            "These Terms of Service (\"Terms\") govern your access to and use of the ShotStudio AI photo-editing platform available at shotstudio.ai and any associated applications or APIs (the \"Service\"). By accessing or using the Service you enter into a binding legal contract with us on these Terms. If you do not agree, you must stop using the Service immediately.",
          ],
          ar: [
            "ShotStudio is operated by [COMPANY LEGAL NAME] (trading as \"ShotStudio\"), registered under Commercial Registration No. [CR NUMBER] issued by [ISSUING CHAMBER], with its principal place of business at [REGISTERED ADDRESS], Egypt. Tax Card No.: [TAX CARD NUMBER] (Egyptian Tax Authority). ETA Simplified Vendor Registration No.: [ETA SIMPLIFIED VENDOR NUMBER] (pursuant to Law No. 3/2022 and Decree No. 24/2023). Authorised signatory: [AUTHORISED SIGNATORY NAME AND TITLE]. Customer service: support@shotstudio.ai · Tel: [CUSTOMER SERVICE PHONE — EGYPT]. Complete commercial disclosures are published at /legal/business-info in compliance with Article 49 of the Executive Regulations (Decree No. 822/2019) of Consumer Protection Law No. 181/2018.",
            "These Terms of Service (\"Terms\") govern your access to and use of the ShotStudio AI photo-editing platform available at shotstudio.ai and any associated applications or APIs (the \"Service\"). By accessing or using the Service you enter into a binding legal contract with us on these Terms. If you do not agree, you must stop using the Service immediately.",
          ],
        },
      },
      // ── 2. DEFINITIONS ──────────────────────────────────────────────────────
      {
        id: "definitions",
        heading: {
          en: "2. Definitions",
          ar: "2. Definitions",
        },
        defs: [
          {
            term: { en: "Service", ar: "Service" },
            meaning: {
              en: "The ShotStudio AI photo-editing platform at shotstudio.ai, including all features, tools, APIs, and content made available through it.",
              ar: "The ShotStudio AI photo-editing platform at shotstudio.ai, including all features, tools, APIs, and content made available through it.",
            },
          },
          {
            term: { en: "Account", ar: "Account" },
            meaning: {
              en: "The registered user account you create to access paid or free features of the Service.",
              ar: "The registered user account you create to access paid or free features of the Service.",
            },
          },
          {
            term: { en: "User / you", ar: "User / you" },
            meaning: {
              en: "Any individual or entity that accesses or uses the Service. Where you use the Service on behalf of a company or organisation, \"you\" refers to that entity and you represent you have authority to bind it to these Terms.",
              ar: "Any individual or entity that accesses or uses the Service. Where you use the Service on behalf of a company or organisation, \"you\" refers to that entity and you represent you have authority to bind it to these Terms.",
            },
          },
          {
            term: { en: "Content", ar: "Content" },
            meaning: {
              en: "Images, photographs, text, prompts, and any other material that you upload to or input into the Service.",
              ar: "Images, photographs, text, prompts, and any other material that you upload to or input into the Service.",
            },
          },
          {
            term: { en: "AI Output", ar: "AI Output" },
            meaning: {
              en: "Images, edited photographs, or other material generated by the Service's AI tools in response to your Content and prompts.",
              ar: "Images, edited photographs, or other material generated by the Service's AI tools in response to your Content and prompts.",
            },
          },
          {
            term: { en: "Credits", ar: "Credits" },
            meaning: {
              en: "The digital tokens issued to your Account that are consumed each time you use an AI service. Credit allowances per plan are listed on the Pricing page.",
              ar: "The digital tokens issued to your Account that are consumed each time you use an AI service. Credit allowances per plan are listed on the Pricing page.",
            },
          },
          {
            term: { en: "Subscription", ar: "Subscription" },
            meaning: {
              en: "A recurring paid plan (Starter, Pro, or Studio) that grants you a monthly Credit allowance and access to the features specified on the Pricing page.",
              ar: "A recurring paid plan (Starter, Pro, or Studio) that grants you a monthly Credit allowance and access to the features specified on the Pricing page.",
            },
          },
          {
            term: { en: "Credit Pack", ar: "Credit Pack" },
            meaning: {
              en: "A one-time purchase of additional Credits that supplement your Subscription or free allowance. Credit Packs do not expire.",
              ar: "A one-time purchase of additional Credits that supplement your Subscription or free allowance. Credit Packs do not expire.",
            },
          },
          {
            term: { en: "Billing Period", ar: "Billing Period" },
            meaning: {
              en: "The monthly or annual cycle on which your Subscription fee is charged and your Credit allowance refreshes.",
              ar: "The monthly or annual cycle on which your Subscription fee is charged and your Credit allowance refreshes.",
            },
          },
        ],
      },
      // ── 3. ACCEPTANCE ───────────────────────────────────────────────────────
      {
        id: "acceptance",
        heading: {
          en: "3. Acceptance and Legal Capacity",
          ar: "3. Acceptance and Legal Capacity",
        },
        paragraphs: {
          en: [
            "By clicking \"Get started\", completing account registration, or otherwise accessing or using the Service, you confirm that you have read these Terms and agree to be bound by them. This act of electronic acceptance constitutes a valid and binding electronic signature under E-Signature Law No. 15/2004 (Egypt) and has the same legal force as a handwritten signature.",
            "You must be at least 18 years old to create an Account or use paid features of the Service. Persons under 18 may use the free tier only with verifiable parental or guardian consent provided to us on request. If we discover that a paid Account is held by a person under 18 without the required consent, we will suspend the Account, refund any unused Credits, and notify the registered email address.",
            "If you are registering on behalf of a company, organisation, or other legal entity, you represent and warrant that you have the legal authority to bind that entity to these Terms and that the entity satisfies the capacity requirements above. In that case, \"you\" in these Terms refers to the entity.",
          ],
          ar: [
            "By clicking \"Get started\", completing account registration, or otherwise accessing or using the Service, you confirm that you have read these Terms and agree to be bound by them. This act of electronic acceptance constitutes a valid and binding electronic signature under E-Signature Law No. 15/2004 (Egypt) and has the same legal force as a handwritten signature.",
            "You must be at least 18 years old to create an Account or use paid features of the Service. Persons under 18 may use the free tier only with verifiable parental or guardian consent provided to us on request. If we discover that a paid Account is held by a person under 18 without the required consent, we will suspend the Account, refund any unused Credits, and notify the registered email address.",
            "If you are registering on behalf of a company, organisation, or other legal entity, you represent and warrant that you have the legal authority to bind that entity to these Terms and that the entity satisfies the capacity requirements above. In that case, \"you\" in these Terms refers to the entity.",
          ],
        },
      },
      // ── 4. SERVICE ──────────────────────────────────────────────────────────
      {
        id: "service",
        heading: {
          en: "4. Description of the Service",
          ar: "4. Description of the Service",
        },
        paragraphs: {
          en: [
            "ShotStudio is an AI-powered photo-editing platform designed for e-commerce sellers, retail businesses, photographers, and creative professionals. The Service includes seventeen AI editing tools — such as background removal, ghost mannequin, scene staging, colour grading, jewellery retouching, face analysis, and textile processing — delivered through a credit-based usage model.",
            "The Service operates on a tiered Subscription model (Free, Starter, Pro, Studio) with differing Credit allowances, batch-processing limits, and feature access, as described on the Pricing page at shotstudio.ai/pricing. Credits are consumed per AI operation. Free-tier Credits do not roll over; Subscription Credits roll over for one Billing Period then expire; Credit Packs do not expire.",
            "Certain features are designated \"Beta\". Beta features are experimental, carry no service-level guarantee, and may be modified or withdrawn at any time with 14 days' notice for free-tier users and 30 days' notice for paid-tier users. We will not charge separately for Beta features unless we give you advance notice and an opportunity to opt out.",
          ],
          ar: [
            "ShotStudio is an AI-powered photo-editing platform designed for e-commerce sellers, retail businesses, photographers, and creative professionals. The Service includes seventeen AI editing tools — such as background removal, ghost mannequin, scene staging, colour grading, jewellery retouching, face analysis, and textile processing — delivered through a credit-based usage model.",
            "The Service operates on a tiered Subscription model (Free, Starter, Pro, Studio) with differing Credit allowances, batch-processing limits, and feature access, as described on the Pricing page at shotstudio.ai/pricing. Credits are consumed per AI operation. Free-tier Credits do not roll over; Subscription Credits roll over for one Billing Period then expire; Credit Packs do not expire.",
            "Certain features are designated \"Beta\". Beta features are experimental, carry no service-level guarantee, and may be modified or withdrawn at any time with 14 days' notice for free-tier users and 30 days' notice for paid-tier users. We will not charge separately for Beta features unless we give you advance notice and an opportunity to opt out.",
          ],
        },
      },
      // ── 5. ACCOUNTS ─────────────────────────────────────────────────────────
      {
        id: "accounts",
        heading: {
          en: "5. Account Registration and Security",
          ar: "5. Account Registration and Security",
        },
        paragraphs: {
          en: [
            "To access most features, you must register for an Account by providing accurate, current, and complete information. You are responsible for keeping that information up to date. We may suspend Accounts that contain materially false or misleading registration information.",
            "You are solely responsible for maintaining the confidentiality of your Account credentials (username, password, and any authentication tokens). You agree not to share your credentials with any third party except where expressly permitted under a team or Studio plan. You are liable for all activity that occurs under your Account.",
            "If you suspect unauthorised access to or use of your Account, you must notify us immediately at support@shotstudio.ai. We will take reasonable steps to help you secure the Account but are not liable for losses arising from unauthorised access caused by your failure to keep your credentials confidential.",
            "Accounts are personal and non-transferable. We reserve the right to limit the number of Accounts you may hold at any one time to prevent abuse.",
          ],
          ar: [
            "To access most features, you must register for an Account by providing accurate, current, and complete information. You are responsible for keeping that information up to date. We may suspend Accounts that contain materially false or misleading registration information.",
            "You are solely responsible for maintaining the confidentiality of your Account credentials (username, password, and any authentication tokens). You agree not to share your credentials with any third party except where expressly permitted under a team or Studio plan. You are liable for all activity that occurs under your Account.",
            "If you suspect unauthorised access to or use of your Account, you must notify us immediately at support@shotstudio.ai. We will take reasonable steps to help you secure the Account but are not liable for losses arising from unauthorised access caused by your failure to keep your credentials confidential.",
            "Accounts are personal and non-transferable. We reserve the right to limit the number of Accounts you may hold at any one time to prevent abuse.",
          ],
        },
      },
      // ── 6. USER CONTENT ─────────────────────────────────────────────────────
      {
        id: "user-content",
        heading: {
          en: "6. User Content — Ownership, Licence, and Warranties",
          ar: "6. User Content — Ownership, Licence, and Warranties",
        },
        paragraphs: {
          en: [
            "You retain full ownership of all Content you upload to the Service. ShotStudio does not claim any ownership over your photographs, images, or other materials.",
            "By uploading Content, you grant ShotStudio a worldwide, non-exclusive, royalty-free licence to host, store, transmit, process, and display your Content solely to operate the Service for you and fulfil our obligations under these Terms. This licence terminates when you delete the Content or close your Account, subject to our data-retention obligations described in the Privacy Policy.",
            "You represent and warrant that: (a) you own or hold all necessary rights, licences, and permissions in everything you upload; (b) your Content does not infringe the intellectual-property rights, privacy rights, or any other rights of any third party; (c) where your Content depicts an identifiable individual, you hold that person's valid and documented consent to upload, process, and use the resulting AI Output in the manner you intend; and (d) your Content and use of any AI Output complies with all applicable laws, including Intellectual Property Law No. 82/2002 and Anti-Cybercrime Law No. 175/2018 (Egypt).",
            "We reserve the right to remove or disable access to any Content that we reasonably believe violates these Terms, our Acceptable Use Policy (/legal/acceptable-use), or applicable law, without prior notice in urgent cases.",
          ],
          ar: [
            "You retain full ownership of all Content you upload to the Service. ShotStudio does not claim any ownership over your photographs, images, or other materials.",
            "By uploading Content, you grant ShotStudio a worldwide, non-exclusive, royalty-free licence to host, store, transmit, process, and display your Content solely to operate the Service for you and fulfil our obligations under these Terms. This licence terminates when you delete the Content or close your Account, subject to our data-retention obligations described in the Privacy Policy.",
            "You represent and warrant that: (a) you own or hold all necessary rights, licences, and permissions in everything you upload; (b) your Content does not infringe the intellectual-property rights, privacy rights, or any other rights of any third party; (c) where your Content depicts an identifiable individual, you hold that person's valid and documented consent to upload, process, and use the resulting AI Output in the manner you intend; and (d) your Content and use of any AI Output complies with all applicable laws, including Intellectual Property Law No. 82/2002 and Anti-Cybercrime Law No. 175/2018 (Egypt).",
            "We reserve the right to remove or disable access to any Content that we reasonably believe violates these Terms, our Acceptable Use Policy (/legal/acceptable-use), or applicable law, without prior notice in urgent cases.",
          ],
        },
      },
      // ── 7. AI OUTPUT ────────────────────────────────────────────────────────
      {
        id: "ai-output",
        heading: {
          en: "7. AI-Generated Output — Ownership and Commercial Use",
          ar: "7. AI-Generated Output — Ownership and Commercial Use",
        },
        paragraphs: {
          en: [
            "Subject to these Terms and applicable law, you own the AI Outputs generated from your Content and prompts on the Service. ShotStudio retains no rights in your AI Outputs beyond the operational licence in Section 6.",
            "We grant you a worldwide, perpetual, royalty-free licence to use, reproduce, modify, distribute, and commercially exploit your AI Outputs. This licence is not conditioned on maintaining an active Subscription; AI Outputs you have already downloaded remain yours after cancellation.",
            "Jurisdictional note: Some legal systems — including Egypt under Law No. 82/2002 and the United States under current Copyright Office guidance — may not automatically recognise copyright in images that are wholly machine-generated without meaningful human creative contribution. Adding substantive human edits typically restores authorship eligibility. We do not provide legal advice; for important commercial uses consult a qualified intellectual-property attorney in your jurisdiction.",
            "You may not use AI Outputs to infringe third-party intellectual-property rights, to mislead consumers about the nature or origin of products, or for any purpose prohibited by Section 8 of these Terms.",
          ],
          ar: [
            "Subject to these Terms and applicable law, you own the AI Outputs generated from your Content and prompts on the Service. ShotStudio retains no rights in your AI Outputs beyond the operational licence in Section 6.",
            "We grant you a worldwide, perpetual, royalty-free licence to use, reproduce, modify, distribute, and commercially exploit your AI Outputs. This licence is not conditioned on maintaining an active Subscription; AI Outputs you have already downloaded remain yours after cancellation.",
            "Jurisdictional note: Some legal systems — including Egypt under Law No. 82/2002 and the United States under current Copyright Office guidance — may not automatically recognise copyright in images that are wholly machine-generated without meaningful human creative contribution. Adding substantive human edits typically restores authorship eligibility. We do not provide legal advice; for important commercial uses consult a qualified intellectual-property attorney in your jurisdiction.",
            "You may not use AI Outputs to infringe third-party intellectual-property rights, to mislead consumers about the nature or origin of products, or for any purpose prohibited by Section 8 of these Terms.",
          ],
        },
      },
      // ── 8. PROHIBITED ───────────────────────────────────────────────────────
      {
        id: "prohibited",
        heading: {
          en: "8. Prohibited Content and Uses",
          ar: "8. Prohibited Content and Uses",
        },
        lede: {
          en: "The following are strictly prohibited on the Service. Violations may result in immediate suspension, termination, and referral to the relevant authorities.",
          ar: "The following are strictly prohibited on the Service. Violations may result in immediate suspension, termination, and referral to the relevant authorities.",
        },
        bullets: {
          en: [
            "Child sexual abuse material (CSAM) or any sexualised depiction of minors — reported immediately to the relevant Egyptian and international authorities.",
            "Non-consensual intimate imagery (NCII) or deepfake pornography involving real, identifiable individuals.",
            "Deepfakes or AI-manipulated images of identifiable individuals without their valid, documented consent.",
            "Content designed to deceive the public in electoral, political, or judicial proceedings.",
            "Hate speech, threats, incitement to violence, or content that discriminates on the basis of religion, ethnicity, gender, disability, or national origin.",
            "Content that infringes intellectual-property rights protected under Egyptian Intellectual Property Law No. 82/2002 or equivalent laws in other jurisdictions, including unauthorised use of trademarks, copyrighted works, or protected designs.",
            "Content that constitutes an offence under Egyptian Anti-Cybercrime Law No. 175/2018, including but not limited to: unauthorised access to systems, publication of indecent or defamatory content, cyberstalking, or fraud by electronic means.",
            "Malware, phishing kits, exploit code, or content designed to deceive or defraud any person.",
            "Counterfeit goods, fake commercial endorsements, or fabricated reviews.",
            "Uploading images of third parties without their knowledge and consent for purposes they have not agreed to.",
            "Automated scraping, bulk API calls, or excessive load that degrades Service performance for other users.",
            "Reverse-engineering, decompiling, or attempting to circumvent the Service's technical protection measures or AI safety filters.",
            "Reselling, sub-licensing, or otherwise commercialising access to the Service beyond what is expressly permitted under your Subscription plan.",
            "Using the Service to train a competing AI model or service.",
          ],
          ar: [
            "Child sexual abuse material (CSAM) or any sexualised depiction of minors — reported immediately to the relevant Egyptian and international authorities.",
            "Non-consensual intimate imagery (NCII) or deepfake pornography involving real, identifiable individuals.",
            "Deepfakes or AI-manipulated images of identifiable individuals without their valid, documented consent.",
            "Content designed to deceive the public in electoral, political, or judicial proceedings.",
            "Hate speech, threats, incitement to violence, or content that discriminates on the basis of religion, ethnicity, gender, disability, or national origin.",
            "Content that infringes intellectual-property rights protected under Egyptian Intellectual Property Law No. 82/2002 or equivalent laws in other jurisdictions, including unauthorised use of trademarks, copyrighted works, or protected designs.",
            "Content that constitutes an offence under Egyptian Anti-Cybercrime Law No. 175/2018, including but not limited to: unauthorised access to systems, publication of indecent or defamatory content, cyberstalking, or fraud by electronic means.",
            "Malware, phishing kits, exploit code, or content designed to deceive or defraud any person.",
            "Counterfeit goods, fake commercial endorsements, or fabricated reviews.",
            "Uploading images of third parties without their knowledge and consent for purposes they have not agreed to.",
            "Automated scraping, bulk API calls, or excessive load that degrades Service performance for other users.",
            "Reverse-engineering, decompiling, or attempting to circumvent the Service's technical protection measures or AI safety filters.",
            "Reselling, sub-licensing, or otherwise commercialising access to the Service beyond what is expressly permitted under your Subscription plan.",
            "Using the Service to train a competing AI model or service.",
          ],
        },
      },
      // ── 9. DATA PROTECTION ──────────────────────────────────────────────────
      {
        id: "data-protection",
        heading: {
          en: "9. Data Protection and Privacy",
          ar: "9. Data Protection and Privacy",
        },
        paragraphs: {
          en: [
            "ShotStudio acts as data controller for personal data you provide during registration, billing, and general use of the Service, and as data processor for Content uploaded by enterprise customers under a written Data Processing Agreement. We process personal data in compliance with Egyptian Personal Data Protection Law No. 151/2020 (PDPL), its Executive Regulations, and applicable international data-protection frameworks.",
            "We collect the minimum data necessary to operate the Service: account profile, billing metadata, uploaded Content (processed transiently unless saved to your library), usage analytics (with your consent), and support communications. We do not sell your personal data. We do not train production AI models on your uploaded Content without your explicit, granular opt-in. Full details of what we collect, why, on what legal basis, and for how long are in our Privacy Policy at /legal/privacy.",
            "When you upload Content, it is transmitted to AI processing infrastructure located outside Egypt (United States and European Union). This constitutes a cross-border transfer under Article 14 of PDPL Law No. 151/2020. We rely on your explicit, informed consent given at the point of upload and on the contractual necessity basis (Article 14 statutory exceptions), and apply Standard Contractual Clause-equivalent safeguards with each overseas processor. Full details are in our Egypt PDPL Notice at /legal/egypt-pdpl.",
            "Your rights under PDPL Arts. 17–25 include: access, rectification, erasure, portability, restriction, objection, and the right to lodge a complaint with the Personal Data Protection Center (PDPC), Ministry of Communications and Information Technology, Smart Village, Giza, Egypt. To exercise any right, email privacy@shotstudio.ai.",
          ],
          ar: [
            "ShotStudio acts as data controller for personal data you provide during registration, billing, and general use of the Service, and as data processor for Content uploaded by enterprise customers under a written Data Processing Agreement. We process personal data in compliance with Egyptian Personal Data Protection Law No. 151/2020 (PDPL), its Executive Regulations, and applicable international data-protection frameworks.",
            "We collect the minimum data necessary to operate the Service: account profile, billing metadata, uploaded Content (processed transiently unless saved to your library), usage analytics (with your consent), and support communications. We do not sell your personal data. We do not train production AI models on your uploaded Content without your explicit, granular opt-in. Full details of what we collect, why, on what legal basis, and for how long are in our Privacy Policy at /legal/privacy.",
            "When you upload Content, it is transmitted to AI processing infrastructure located outside Egypt (United States and European Union). This constitutes a cross-border transfer under Article 14 of PDPL Law No. 151/2020. We rely on your explicit, informed consent given at the point of upload and on the contractual necessity basis (Article 14 statutory exceptions), and apply Standard Contractual Clause-equivalent safeguards with each overseas processor. Full details are in our Egypt PDPL Notice at /legal/egypt-pdpl.",
            "Your rights under PDPL Arts. 17–25 include: access, rectification, erasure, portability, restriction, objection, and the right to lodge a complaint with the Personal Data Protection Center (PDPC), Ministry of Communications and Information Technology, Smart Village, Giza, Egypt. To exercise any right, email privacy@shotstudio.ai.",
          ],
        },
      },
      // ── 10. PAYMENTS ────────────────────────────────────────────────────────
      {
        id: "payments",
        heading: {
          en: "10. Payments, Pricing, and Subscriptions",
          ar: "10. Payments, Pricing, and Subscriptions",
        },
        paragraphs: {
          en: [
            "Current plan prices are published on the Pricing page at shotstudio.ai/pricing. Prices are displayed in US Dollars (USD). Egyptian users are charged in USD; the EGP equivalent and the applicable 14% value-added tax (VAT) under VAT Law No. 67/2016 (as amended by Law No. 3/2022) are itemised separately at checkout. ShotStudio is registered with the Egyptian Tax Authority under the simplified vendor scheme and issues e-invoices in compliance with the ETA e-invoicing mandate.",
            "Subscriptions are billed in advance at the start of each Billing Period. Your Subscription automatically renews at the end of each Billing Period using your saved payment method unless you cancel before the renewal date. We send a renewal reminder by email at least 7 days before each renewal. You can cancel auto-renewal at any time from Account → Billing.",
            "Payments are processed by Stripe, Inc. (international) and Paymob (regional — Egypt and GCC), or such other processors as we may introduce with notice. By providing payment details you authorise the relevant processor to charge your payment method on the schedule set out in your plan. ShotStudio does not store full card numbers; payment data is handled directly by processors under their own PCI DSS certifications.",
            "If a payment fails, we will retry for up to 7 days and your Account will remain active during that period. After 7 days without successful payment, your Account will be downgraded to the free tier. We will not permanently delete your data without first giving you 30 additional days' written notice by email.",
            "We will give you at least 30 days' advance notice by email and in-app notification before any price increase takes effect. If you do not wish to continue at the new price, you may cancel before the new price applies without penalty. Continued use of the Service after the effective date constitutes your acceptance of the change.",
          ],
          ar: [
            "Current plan prices are published on the Pricing page at shotstudio.ai/pricing. Prices are displayed in US Dollars (USD). Egyptian users are charged in USD; the EGP equivalent and the applicable 14% value-added tax (VAT) under VAT Law No. 67/2016 (as amended by Law No. 3/2022) are itemised separately at checkout. ShotStudio is registered with the Egyptian Tax Authority under the simplified vendor scheme and issues e-invoices in compliance with the ETA e-invoicing mandate.",
            "Subscriptions are billed in advance at the start of each Billing Period. Your Subscription automatically renews at the end of each Billing Period using your saved payment method unless you cancel before the renewal date. We send a renewal reminder by email at least 7 days before each renewal. You can cancel auto-renewal at any time from Account → Billing.",
            "Payments are processed by Stripe, Inc. (international) and Paymob (regional — Egypt and GCC), or such other processors as we may introduce with notice. By providing payment details you authorise the relevant processor to charge your payment method on the schedule set out in your plan. ShotStudio does not store full card numbers; payment data is handled directly by processors under their own PCI DSS certifications.",
            "If a payment fails, we will retry for up to 7 days and your Account will remain active during that period. After 7 days without successful payment, your Account will be downgraded to the free tier. We will not permanently delete your data without first giving you 30 additional days' written notice by email.",
            "We will give you at least 30 days' advance notice by email and in-app notification before any price increase takes effect. If you do not wish to continue at the new price, you may cancel before the new price applies without penalty. Continued use of the Service after the effective date constitutes your acceptance of the change.",
          ],
        },
      },
      // ── 11. REFUNDS ─────────────────────────────────────────────────────────
      {
        id: "refunds",
        heading: {
          en: "11. Refunds, Cancellation, and Statutory Withdrawal Right",
          ar: "11. Refunds, Cancellation, and Statutory Withdrawal Right",
        },
        paragraphs: {
          en: [
            "You may cancel your Subscription at any time from Account → Billing. Cancellation takes effect at the end of the current Billing Period; you retain full access to your plan's features until that date.",
            "Statutory 14-day withdrawal right — Egypt: Under Articles 9–11 of Consumer Protection Law No. 181/2018 and Article 27 of its Executive Regulations (Decree No. 822/2019), you have the right to withdraw from a distance contract for digital services within 14 calendar days of the date of purchase without giving any reason, unless you expressly consented to performance beginning before the withdrawal period expired and acknowledged that your right to withdraw would thereby be lost. Where Credits have been consumed prior to withdrawal, the value of those Credits will be deducted from any refund on a pro-rata basis.",
            "To exercise the 14-day withdrawal right, notify us clearly and in writing — email support@shotstudio.ai with the subject line \"Withdrawal — [your account email]\" — within 14 days of purchase. We will process your refund via the original payment method within 10 business days of receiving valid notice.",
            "Outside the 14-day statutory window, refunds are granted at our discretion for: (a) a verified technical failure that rendered the Service completely inoperable for more than 48 consecutive hours during a paid Billing Period; or (b) a duplicate charge caused by a billing error on our side. Requests must be submitted within 30 days of the charge.",
            "Credit Packs: used Credits are non-refundable. Unused, untouched Credit Packs purchased as a one-time add-on are refundable in full within 7 days of purchase.",
            "To request any refund, email support@shotstudio.ai with your account email address, the order or transaction reference number, and a description of the reason. We aim to respond within 2 business days.",
          ],
          ar: [
            "You may cancel your Subscription at any time from Account → Billing. Cancellation takes effect at the end of the current Billing Period; you retain full access to your plan's features until that date.",
            "Statutory 14-day withdrawal right — Egypt: Under Articles 9–11 of Consumer Protection Law No. 181/2018 and Article 27 of its Executive Regulations (Decree No. 822/2019), you have the right to withdraw from a distance contract for digital services within 14 calendar days of the date of purchase without giving any reason, unless you expressly consented to performance beginning before the withdrawal period expired and acknowledged that your right to withdraw would thereby be lost. Where Credits have been consumed prior to withdrawal, the value of those Credits will be deducted from any refund on a pro-rata basis.",
            "To exercise the 14-day withdrawal right, notify us clearly and in writing — email support@shotstudio.ai with the subject line \"Withdrawal — [your account email]\" — within 14 days of purchase. We will process your refund via the original payment method within 10 business days of receiving valid notice.",
            "Outside the 14-day statutory window, refunds are granted at our discretion for: (a) a verified technical failure that rendered the Service completely inoperable for more than 48 consecutive hours during a paid Billing Period; or (b) a duplicate charge caused by a billing error on our side. Requests must be submitted within 30 days of the charge.",
            "Credit Packs: used Credits are non-refundable. Unused, untouched Credit Packs purchased as a one-time add-on are refundable in full within 7 days of purchase.",
            "To request any refund, email support@shotstudio.ai with your account email address, the order or transaction reference number, and a description of the reason. We aim to respond within 2 business days.",
          ],
        },
      },
      // ── 12. ShotStudio IP ─────────────────────────────────────────────────────
      {
        id: "ip",
        heading: {
          en: "12. ShotStudio Intellectual Property",
          ar: "12. ShotStudio Intellectual Property",
        },
        paragraphs: {
          en: [
            "The Service — including its software, source code, AI models owned or licensed by ShotStudio, user interface, design, graphics, documentation, and brand elements (collectively, \"ShotStudio IP\") — is protected by copyright, trademark, trade-secret, and other intellectual-property laws. ShotStudio IP is owned by or licensed to ShotStudio and you acquire no ownership rights in it by using the Service.",
            "Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for your own personal or commercial purposes in accordance with your active plan. This licence does not permit you to: (a) copy, modify, or create derivative works of ShotStudio IP; (b) distribute, sell, or sublicense access to the Service; (c) reverse-engineer, decompile, or disassemble the Service; or (d) use the \"ShotStudio\" name or mark in any way that suggests endorsement by or affiliation with us without our prior written consent.",
            "If you submit ideas, feedback, or suggestions about the Service (\"Feedback\"), you grant ShotStudio a perpetual, worldwide, royalty-free licence to use, copy, modify, and incorporate that Feedback into the Service or any successor product without restriction or compensation to you.",
          ],
          ar: [
            "The Service — including its software, source code, AI models owned or licensed by ShotStudio, user interface, design, graphics, documentation, and brand elements (collectively, \"ShotStudio IP\") — is protected by copyright, trademark, trade-secret, and other intellectual-property laws. ShotStudio IP is owned by or licensed to ShotStudio and you acquire no ownership rights in it by using the Service.",
            "Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for your own personal or commercial purposes in accordance with your active plan. This licence does not permit you to: (a) copy, modify, or create derivative works of ShotStudio IP; (b) distribute, sell, or sublicense access to the Service; (c) reverse-engineer, decompile, or disassemble the Service; or (d) use the \"ShotStudio\" name or mark in any way that suggests endorsement by or affiliation with us without our prior written consent.",
            "If you submit ideas, feedback, or suggestions about the Service (\"Feedback\"), you grant ShotStudio a perpetual, worldwide, royalty-free licence to use, copy, modify, and incorporate that Feedback into the Service or any successor product without restriction or compensation to you.",
          ],
        },
      },
      // ── 13. THIRD PARTIES ───────────────────────────────────────────────────
      {
        id: "third-party",
        heading: {
          en: "13. Third-Party Services and Integrations",
          ar: "13. Third-Party Services and Integrations",
        },
        paragraphs: {
          en: [
            "The Service relies on third-party services including: Stripe, Inc. and Paymob (payment processing); Cloudflare, Inc. (CDN and security); Vercel, Inc. (hosting and edge infrastructure); Firebase (authentication); and various AI model and inference providers. A current list of sub-processors that handle personal data is published at /legal/sub-processors.",
            "Where the Service integrates with third-party platforms such as Shopify, Amazon, or Salla, your use of those platforms is governed solely by their respective terms of service and privacy policies. ShotStudio is not responsible for the availability, accuracy, or security of any third-party service.",
            "We are not liable for any loss, damage, or disruption caused by the failure or unavailability of a third-party service that is beyond our reasonable control, provided that we take commercially reasonable steps to mitigate the impact on you.",
          ],
          ar: [
            "The Service relies on third-party services including: Stripe, Inc. and Paymob (payment processing); Cloudflare, Inc. (CDN and security); Vercel, Inc. (hosting and edge infrastructure); Firebase (authentication); and various AI model and inference providers. A current list of sub-processors that handle personal data is published at /legal/sub-processors.",
            "Where the Service integrates with third-party platforms such as Shopify, Amazon, or Salla, your use of those platforms is governed solely by their respective terms of service and privacy policies. ShotStudio is not responsible for the availability, accuracy, or security of any third-party service.",
            "We are not liable for any loss, damage, or disruption caused by the failure or unavailability of a third-party service that is beyond our reasonable control, provided that we take commercially reasonable steps to mitigate the impact on you.",
          ],
        },
      },
      // ── 14. DISCLAIMERS ─────────────────────────────────────────────────────
      {
        id: "disclaimers",
        heading: {
          en: "14. Disclaimers",
          ar: "14. Disclaimers",
        },
        paragraphs: {
          en: [
            "Service availability: The Service is provided on a commercially reasonable efforts basis. We do not guarantee uninterrupted, error-free, or perfectly secure operation. We will endeavour to notify you of planned downtime in advance and to resolve unplanned outages promptly.",
            "AI Output accuracy: AI-generated images are produced automatically and may contain errors, artefacts, unintended elements, or inaccuracies. AI Outputs are not a substitute for professional photography or human review. You are solely responsible for reviewing AI Outputs before using them commercially.",
            "No professional advice: The Service and any AI Outputs do not constitute legal, medical, financial, regulatory, or any other professional advice. Do not rely on AI Outputs for any purpose requiring professional expertise.",
            "Beta features: Features labelled \"Beta\" are provided without warranty of any kind, express or implied. Their inclusion in the Service does not represent a commitment to continue providing them.",
            "Statutory rights preserved: Nothing in these Terms excludes, restricts, or modifies any right or remedy you are entitled to under Egyptian law that cannot be excluded by contract, including your rights under Consumer Protection Law No. 181/2018.",
          ],
          ar: [
            "Service availability: The Service is provided on a commercially reasonable efforts basis. We do not guarantee uninterrupted, error-free, or perfectly secure operation. We will endeavour to notify you of planned downtime in advance and to resolve unplanned outages promptly.",
            "AI Output accuracy: AI-generated images are produced automatically and may contain errors, artefacts, unintended elements, or inaccuracies. AI Outputs are not a substitute for professional photography or human review. You are solely responsible for reviewing AI Outputs before using them commercially.",
            "No professional advice: The Service and any AI Outputs do not constitute legal, medical, financial, regulatory, or any other professional advice. Do not rely on AI Outputs for any purpose requiring professional expertise.",
            "Beta features: Features labelled \"Beta\" are provided without warranty of any kind, express or implied. Their inclusion in the Service does not represent a commitment to continue providing them.",
            "Statutory rights preserved: Nothing in these Terms excludes, restricts, or modifies any right or remedy you are entitled to under Egyptian law that cannot be excluded by contract, including your rights under Consumer Protection Law No. 181/2018.",
          ],
        },
      },
      // ── 15. LIABILITY ────────────────────────────────────────────────────────
      {
        id: "liability",
        heading: {
          en: "15. Limitation of Liability",
          ar: "15. Limitation of Liability",
        },
        paragraphs: {
          en: [
            "To the maximum extent permitted by applicable law, ShotStudio's total aggregate liability to you arising out of or in connection with these Terms or your use of the Service — whether in contract, tort (including negligence), statute, or otherwise — is limited to the greater of: (a) the total fees you paid to ShotStudio in the twelve months immediately preceding the event giving rise to the claim; or (b) USD 100 (or the equivalent in EGP at the prevailing Central Bank of Egypt mid-rate on the date the claim arises).",
            "To the maximum extent permitted by applicable law, ShotStudio is not liable to you for any: (a) loss of profits, revenue, or business; (b) loss of data or Content beyond what is recoverable under our standard backup policy; (c) loss of goodwill or reputation; or (d) indirect, incidental, special, exemplary, or consequential damages of any kind — even if we have been advised of the possibility of such damages.",
            "Mandatory carve-outs — the limitations above do not apply to, and ShotStudio does not exclude or limit liability for: (a) death or personal injury caused by our negligence; (b) fraud or fraudulent misrepresentation; (c) wilful misconduct or gross negligence; (d) any liability that cannot lawfully be limited or excluded under Consumer Protection Law No. 181/2018, PDPL Law No. 151/2020, or any other mandatory Egyptian law; or (e) any liability for which limitation is prohibited by the applicable law of your jurisdiction.",
          ],
          ar: [
            "To the maximum extent permitted by applicable law, ShotStudio's total aggregate liability to you arising out of or in connection with these Terms or your use of the Service — whether in contract, tort (including negligence), statute, or otherwise — is limited to the greater of: (a) the total fees you paid to ShotStudio in the twelve months immediately preceding the event giving rise to the claim; or (b) USD 100 (or the equivalent in EGP at the prevailing Central Bank of Egypt mid-rate on the date the claim arises).",
            "To the maximum extent permitted by applicable law, ShotStudio is not liable to you for any: (a) loss of profits, revenue, or business; (b) loss of data or Content beyond what is recoverable under our standard backup policy; (c) loss of goodwill or reputation; or (d) indirect, incidental, special, exemplary, or consequential damages of any kind — even if we have been advised of the possibility of such damages.",
            "Mandatory carve-outs — the limitations above do not apply to, and ShotStudio does not exclude or limit liability for: (a) death or personal injury caused by our negligence; (b) fraud or fraudulent misrepresentation; (c) wilful misconduct or gross negligence; (d) any liability that cannot lawfully be limited or excluded under Consumer Protection Law No. 181/2018, PDPL Law No. 151/2020, or any other mandatory Egyptian law; or (e) any liability for which limitation is prohibited by the applicable law of your jurisdiction.",
          ],
        },
      },
      // ── 16. SERVICE CHANGES ─────────────────────────────────────────────────
      {
        id: "service-changes",
        heading: {
          en: "16. Service Changes, Maintenance, and Discontinuation",
          ar: "16. Service Changes, Maintenance, and Discontinuation",
        },
        paragraphs: {
          en: [
            "We may add, modify, or remove features and tools from the Service at any time. For changes that materially reduce the functionality available to paying subscribers, we will give at least 30 days' advance notice by email. For planned maintenance windows, we aim to give at least 72 hours' advance notice via our status page at shotstudio.ai/status.",
            "If we decide to discontinue the Service entirely, we will give at least 60 days' advance notice by email. During that notice period, you may export your Content and AI Outputs. We will refund any unused Subscription fees and unexpired Credit Pack balances on a pro-rata basis within 14 days of the discontinuation date.",
          ],
          ar: [
            "We may add, modify, or remove features and tools from the Service at any time. For changes that materially reduce the functionality available to paying subscribers, we will give at least 30 days' advance notice by email. For planned maintenance windows, we aim to give at least 72 hours' advance notice via our status page at shotstudio.ai/status.",
            "If we decide to discontinue the Service entirely, we will give at least 60 days' advance notice by email. During that notice period, you may export your Content and AI Outputs. We will refund any unused Subscription fees and unexpired Credit Pack balances on a pro-rata basis within 14 days of the discontinuation date.",
          ],
        },
      },
      // ── 17. TERMINATION ─────────────────────────────────────────────────────
      {
        id: "termination",
        heading: {
          en: "17. Suspension and Termination",
          ar: "17. Suspension and Termination",
        },
        paragraphs: {
          en: [
            "You may close your Account at any time from Account → Settings → Close account. Any remaining Subscription access continues to the end of the current Billing Period unless you request earlier termination.",
            "We may suspend or restrict your Account if we have reasonable grounds to believe you have violated these Terms, our Acceptable Use Policy, or applicable law. Except where the violation is serious (see below), we will give you a warning and a reasonable opportunity to remedy the breach before suspending your Account.",
            "We may immediately suspend or terminate your Account without prior warning where the violation involves: (a) CSAM or NCII; (b) fraud, identity theft, or attempted unauthorised access to our systems; (c) any activity posing a material security threat to the Service or other users; or (d) any activity we are legally required to stop.",
            "You may appeal a suspension by emailing appeals@shotstudio.ai within 14 days of the suspension notice. We will review your appeal and respond within 5 business days.",
            "On termination: (a) your licence to use the Service ends immediately; (b) we retain your Content and Account data for 30 days to allow export, after which we delete it subject to legal-retention obligations in the Privacy Policy; (c) you remain liable for any fees accrued before termination; (d) Sections 6, 7, 9, 12, 14, 15, 20, and 21 survive termination.",
          ],
          ar: [
            "You may close your Account at any time from Account → Settings → Close account. Any remaining Subscription access continues to the end of the current Billing Period unless you request earlier termination.",
            "We may suspend or restrict your Account if we have reasonable grounds to believe you have violated these Terms, our Acceptable Use Policy, or applicable law. Except where the violation is serious (see below), we will give you a warning and a reasonable opportunity to remedy the breach before suspending your Account.",
            "We may immediately suspend or terminate your Account without prior warning where the violation involves: (a) CSAM or NCII; (b) fraud, identity theft, or attempted unauthorised access to our systems; (c) any activity posing a material security threat to the Service or other users; or (d) any activity we are legally required to stop.",
            "You may appeal a suspension by emailing appeals@shotstudio.ai within 14 days of the suspension notice. We will review your appeal and respond within 5 business days.",
            "On termination: (a) your licence to use the Service ends immediately; (b) we retain your Content and Account data for 30 days to allow export, after which we delete it subject to legal-retention obligations in the Privacy Policy; (c) you remain liable for any fees accrued before termination; (d) Sections 6, 7, 9, 12, 14, 15, 20, and 21 survive termination.",
          ],
        },
      },
      // ── 18. FORCE MAJEURE ───────────────────────────────────────────────────
      {
        id: "force-majeure",
        heading: {
          en: "18. Force Majeure",
          ar: "18. Force Majeure",
        },
        paragraphs: {
          en: [
            "Neither party is liable for any failure or delay in performance under these Terms to the extent caused by circumstances beyond that party's reasonable control, including but not limited to: natural disasters, acts of God, war, terrorism, civil disturbance, government orders or sanctions, pandemics, power failures, internet backbone outages, or attacks on critical infrastructure (a \"Force Majeure Event\").",
            "The affected party must notify the other in writing as soon as practicable and use commercially reasonable efforts to resume performance. If the Force Majeure Event continues for more than 30 consecutive days, either party may terminate the affected service on 14 days' written notice; ShotStudio will refund any prepaid fees for the period of non-performance on a pro-rata basis.",
          ],
          ar: [
            "Neither party is liable for any failure or delay in performance under these Terms to the extent caused by circumstances beyond that party's reasonable control, including but not limited to: natural disasters, acts of God, war, terrorism, civil disturbance, government orders or sanctions, pandemics, power failures, internet backbone outages, or attacks on critical infrastructure (a \"Force Majeure Event\").",
            "The affected party must notify the other in writing as soon as practicable and use commercially reasonable efforts to resume performance. If the Force Majeure Event continues for more than 30 consecutive days, either party may terminate the affected service on 14 days' written notice; ShotStudio will refund any prepaid fees for the period of non-performance on a pro-rata basis.",
          ],
        },
      },
      // ── 19. AMENDMENTS ──────────────────────────────────────────────────────
      {
        id: "amendments",
        heading: {
          en: "19. Amendments and Notification",
          ar: "19. Amendments and Notification",
        },
        paragraphs: {
          en: [
            "We may update these Terms from time to time. For material changes — including changes that expand your obligations, reduce your rights, or affect billing — we will give you at least 30 days' advance notice by email to your registered address and by a prominent in-app notification. The updated Terms will be posted at shotstudio.ai/legal/terms with a new \"Last updated\" date and version number.",
            "If you do not accept a material change, you may close your Account before the effective date without penalty; any unused prepaid Subscription fees for the period after the effective date will be refunded pro-rata. Continued use of the Service after the effective date constitutes your acceptance of the updated Terms.",
            "For non-material changes (clarifications, typographical corrections, updated contact details) we may update the Terms immediately by posting the revised version; such changes take effect upon posting.",
          ],
          ar: [
            "We may update these Terms from time to time. For material changes — including changes that expand your obligations, reduce your rights, or affect billing — we will give you at least 30 days' advance notice by email to your registered address and by a prominent in-app notification. The updated Terms will be posted at shotstudio.ai/legal/terms with a new \"Last updated\" date and version number.",
            "If you do not accept a material change, you may close your Account before the effective date without penalty; any unused prepaid Subscription fees for the period after the effective date will be refunded pro-rata. Continued use of the Service after the effective date constitutes your acceptance of the updated Terms.",
            "For non-material changes (clarifications, typographical corrections, updated contact details) we may update the Terms immediately by posting the revised version; such changes take effect upon posting.",
          ],
        },
      },
      // ── 20. GOVERNING LAW ───────────────────────────────────────────────────
      {
        id: "governing-law",
        heading: {
          en: "20. Governing Law and Dispute Resolution",
          ar: "20. Governing Law and Dispute Resolution",
        },
        paragraphs: {
          en: [
            "Users in Egypt: These Terms and any dispute arising out of or in connection with them — including non-contractual disputes — are governed by the laws of the Arab Republic of Egypt. The courts of Cairo, Egypt, including the Economic Courts established by Law No. 120/2008 where their jurisdiction applies to e-commerce and consumer disputes, shall have exclusive jurisdiction.",
            "Before commencing litigation, we ask that you follow the escalation process: (1) Contact our support team at support@shotstudio.ai and allow 10 business days for a response. (2) If unresolved, escalate your complaint to the Egyptian Consumer Protection Agency (Hotline 19588 · cpa.gov.eg), which has jurisdiction over consumer disputes under Consumer Protection Law No. 181/2018. (3) If the matter remains unresolved after the CPA process, either party may bring proceedings before the competent Egyptian court.",
            "Users in Iraq: These Terms are governed by the laws of the Republic of Iraq. Disputes shall be submitted to the competent Iraqi courts.",
            "Enterprise customers: Parties to a signed enterprise order form may elect DIFC-seat arbitration under DIFC-LCIA Rules as the exclusive dispute resolution mechanism, provided that election is expressly stated in the order form.",
            "Users in all other jurisdictions: These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict-of-laws principles. Any dispute shall be submitted to the state or federal courts located in Delaware.",
          ],
          ar: [
            "Users in Egypt: These Terms and any dispute arising out of or in connection with them — including non-contractual disputes — are governed by the laws of the Arab Republic of Egypt. The courts of Cairo, Egypt, including the Economic Courts established by Law No. 120/2008 where their jurisdiction applies to e-commerce and consumer disputes, shall have exclusive jurisdiction.",
            "Before commencing litigation, we ask that you follow the escalation process: (1) Contact our support team at support@shotstudio.ai and allow 10 business days for a response. (2) If unresolved, escalate your complaint to the Egyptian Consumer Protection Agency (Hotline 19588 · cpa.gov.eg), which has jurisdiction over consumer disputes under Consumer Protection Law No. 181/2018. (3) If the matter remains unresolved after the CPA process, either party may bring proceedings before the competent Egyptian court.",
            "Users in Iraq: These Terms are governed by the laws of the Republic of Iraq. Disputes shall be submitted to the competent Iraqi courts.",
            "Enterprise customers: Parties to a signed enterprise order form may elect DIFC-seat arbitration under DIFC-LCIA Rules as the exclusive dispute resolution mechanism, provided that election is expressly stated in the order form.",
            "Users in all other jurisdictions: These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict-of-laws principles. Any dispute shall be submitted to the state or federal courts located in Delaware.",
          ],
        },
      },
      // ── 21. GENERAL ─────────────────────────────────────────────────────────
      {
        id: "general",
        heading: {
          en: "21. General Provisions",
          ar: "21. General Provisions",
        },
        paragraphs: {
          en: [
            "Severability: If any provision of these Terms is found by a court of competent jurisdiction to be invalid, unlawful, or unenforceable, that provision will be severed and the remaining provisions will continue in full force and effect.",
            "Entire Agreement: These Terms, together with the Privacy Policy (/legal/privacy), Acceptable Use Policy (/legal/acceptable-use), Refund & Cancellation Policy (/legal/refunds), Subscription Terms (/legal/subscription), and any signed order form or addendum, constitute the entire agreement between you and ShotStudio in respect of the Service and supersede all prior oral or written representations, understandings, and agreements on the same subject matter.",
            "No Waiver: Our failure to enforce any provision of these Terms at any time does not constitute a waiver of our right to enforce that provision or any other provision in the future.",
            "Assignment: ShotStudio may assign or transfer these Terms, in whole or in part, to any entity that acquires ShotStudio's business or assets, with 30 days' written notice to you. You may not assign or transfer your rights or obligations under these Terms without ShotStudio's prior written consent.",
            "Language: These Terms are currently published in English only. An Arabic translation will be made available in due course. When an Arabic version is published, in the event of any inconsistency between the English and Arabic versions the Arabic version shall prevail for users in Egypt and other Arabic-speaking jurisdictions.",
            "Electronic Signature: Acceptance of these Terms by electronic means — including by clicking an acceptance button or completing account registration — constitutes a valid and binding electronic signature under E-Signature Law No. 15/2004 (Egypt) and has the same legal force as a handwritten signature.",
            "Legal Notices: Notices to ShotStudio under these Terms must be sent by email to [LEGAL NOTICES EMAIL] and are deemed received 24 hours after sending to a confirmed address. Notices to you will be sent to your registered account email address. For formal legal process, notices must also be served by registered post to [REGISTERED ADDRESS], Egypt.",
            "Attorney Review Notice: These Terms have been drafted with reference to Egyptian law as at 13 July 2026 but have not yet been reviewed by a licensed Egyptian attorney. They should be reviewed by qualified Egyptian legal counsel before the Service is commercially launched in Egypt and before each material revision.",
          ],
          ar: [
            "Severability: If any provision of these Terms is found by a court of competent jurisdiction to be invalid, unlawful, or unenforceable, that provision will be severed and the remaining provisions will continue in full force and effect.",
            "Entire Agreement: These Terms, together with the Privacy Policy (/legal/privacy), Acceptable Use Policy (/legal/acceptable-use), Refund & Cancellation Policy (/legal/refunds), Subscription Terms (/legal/subscription), and any signed order form or addendum, constitute the entire agreement between you and ShotStudio in respect of the Service and supersede all prior oral or written representations, understandings, and agreements on the same subject matter.",
            "No Waiver: Our failure to enforce any provision of these Terms at any time does not constitute a waiver of our right to enforce that provision or any other provision in the future.",
            "Assignment: ShotStudio may assign or transfer these Terms, in whole or in part, to any entity that acquires ShotStudio's business or assets, with 30 days' written notice to you. You may not assign or transfer your rights or obligations under these Terms without ShotStudio's prior written consent.",
            "Language: These Terms are currently published in English only. An Arabic translation will be made available in due course. When an Arabic version is published, in the event of any inconsistency between the English and Arabic versions the Arabic version shall prevail for users in Egypt and other Arabic-speaking jurisdictions.",
            "Electronic Signature: Acceptance of these Terms by electronic means — including by clicking an acceptance button or completing account registration — constitutes a valid and binding electronic signature under E-Signature Law No. 15/2004 (Egypt) and has the same legal force as a handwritten signature.",
            "Legal Notices: Notices to ShotStudio under these Terms must be sent by email to [LEGAL NOTICES EMAIL] and are deemed received 24 hours after sending to a confirmed address. Notices to you will be sent to your registered account email address. For formal legal process, notices must also be served by registered post to [REGISTERED ADDRESS], Egypt.",
            "Attorney Review Notice: These Terms have been drafted with reference to Egyptian law as at 13 July 2026 but have not yet been reviewed by a licensed Egyptian attorney. They should be reviewed by qualified Egyptian legal counsel before the Service is commercially launched in Egypt and before each material revision.",
          ],
        },
      },
    ],
    related: [
      {
        href: "/legal/privacy",
        label: { en: "Privacy Policy", ar: "Privacy Policy" },
      },
      {
        href: "/legal/acceptable-use",
        label: { en: "Acceptable Use Policy", ar: "Acceptable Use Policy" },
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
        label: { en: "Subscription Terms", ar: "Subscription Terms" },
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
        label: { en: "Egypt PDPL Notice", ar: "Egypt PDPL Notice" },
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

  // ─────────────────────────────────────────────────────────────── L03 COOKIES
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
    status: "draft",
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
            "Final clauses to be drafted by external counsel based on the standard EU SCCs (2021/914) and PDPL Article 12 obligations.",
          ],
          ar: [
            "الصياغة النهائية ستُعدّها استشارات قانونية خارجية استناداً إلى البنود التعاقدية القياسية الأوروبية (2021/914) والمادة 12 من قانون حماية البيانات المصري.",
          ],
        },
      },
      {
        id: "subprocessors",
        heading: { en: "Sub-processing", ar: "المعالجة الفرعية" },
        paragraphs: {
          en: [
            "Sub-processors are listed in our public Sub-processors page; customers can subscribe to changes.",
          ],
          ar: [
            "يتم إدراج المعالجين الفرعيين في صفحة المعالجين الفرعيين العامة، ويمكن للعملاء الاشتراك في تنبيهات التغيير.",
          ],
        },
      },
      {
        id: "security",
        heading: { en: "Security measures", ar: "التدابير الأمنية" },
        paragraphs: {
          en: ["See Annex II — derived from our Security Overview."],
          ar: ["راجع الملحق الثاني — مستمدّ من نظرة الأمن العامة لدينا."],
        },
      },
      {
        id: "annex-i",
        heading: {
          en: "Annex I — Processing details",
          ar: "الملحق الأول — تفاصيل المعالجة",
        },
        paragraphs: { en: ["To be drafted."], ar: ["سيتم صياغته."] },
      },
      {
        id: "annex-ii",
        heading: {
          en: "Annex II — Technical & organizational measures",
          ar: "الملحق الثاني — التدابير التقنية والتنظيمية",
        },
        paragraphs: { en: ["To be drafted."], ar: ["سيتم صياغته."] },
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
        en: "Request a counter-signed DPA",
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
    status: "draft",
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
    status: "draft",
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
    status: "draft",
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
              en: ["Legal name (Latin)", "ShotStudio, Inc."],
              ar: ["الاسم القانوني (لاتيني)", "سناب برو، إنك."],
            },
            {
              en: [
                "Legal name (Arabic)",
                "[Arabic legal name — pending company filing]",
              ],
              ar: [
                "الاسم القانوني (عربي)",
                "[الاسم العربي — قيد إعداد الشركة]",
              ],
            },
            {
              en: [
                "Commercial Registration (Law 34/1976)",
                "[CR number & issuing chamber — pending counsel]",
              ],
              ar: [
                "السجل التجاري (قانون 34/1976)",
                "[رقم السجل والغرفة المُصدِرة — قيد المستشار]",
              ],
            },
            {
              en: ["Tax Card (ETA)", "[tax card number — pending]"],
              ar: [
                "البطاقة الضريبية (مصلحة الضرائب)",
                "[رقم البطاقة — قيد الإعداد]",
              ],
            },
            {
              en: [
                "ETA Simplified Vendor # (Law 3/2022, Decree 24/2023)",
                "[non-resident VAT registration — pending]",
              ],
              ar: [
                "رقم المورد المبسّط بمصلحة الضرائب (قانون 3/2022، قرار 24/2023)",
                "[تسجيل القيمة المضافة لغير المقيمين — قيد الإعداد]",
              ],
            },
            {
              en: ["Registered headquarters", "[address — pending]"],
              ar: ["العنوان المسجل", "[العنوان — قيد الإعداد]"],
            },
            {
              en: [
                "Authorised signatory & capacity",
                "[name & role — pending company filing]",
              ],
              ar: [
                "المفوّض بالتوقيع وصفته",
                "[الاسم والصفة — قيد إعداد الشركة]",
              ],
            },
            {
              en: [
                "Activity (per CR codes)",
                "Software-as-a-Service · AI image and video editing for e-commerce sellers",
              ],
              ar: [
                "النشاط (بحسب رموز السجل)",
                "خدمات برمجية تشغيلية · تحرير صور وفيديو بالذكاء الاصطناعي لبائعي التجارة الإلكترونية",
              ],
            },
            {
              en: ["Customer service email", "support@shotstudio.ai"],
              ar: ["البريد الإلكتروني لخدمة العملاء", "support@shotstudio.ai"],
            },
            {
              en: [
                "Customer service phone (Egypt)",
                "[phone — pending company filing]",
              ],
              ar: ["هاتف خدمة العملاء (مصر)", "[الهاتف — قيد إعداد الشركة]"],
            },
            {
              en: [
                "Complaints (Egypt)",
                "Egyptian Consumer Protection Agency · hotline 19588 · cpa.gov.eg",
              ],
              ar: [
                "الشكاوى (مصر)",
                "جهاز حماية المستهلك المصري · الخط الساخن 19588 · cpa.gov.eg",
              ],
            },
            {
              en: ["E-invoicing status", "Active (Egyptian Tax Authority)"],
              ar: ["الفوترة الإلكترونية", "نشطة (مصلحة الضرائب المصرية)"],
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
            "The fields above are published in compliance with Article 49 of the Executive Regulations (Decree 822/2019) of Consumer Protection Law 181/2018, which obliges online traders serving customers in Egypt to disclose their identity, registration details, contact channels, total price (including VAT), and the route to file a complaint with the Egyptian Consumer Protection Agency (CPA, hotline 19588).",
            'ShotStudio\'s prices on this site are inclusive of value-added tax at the rate prescribed by VAT Law 67/2016 (as amended by Law 3/2022) where applicable. Any item not yet finalised is marked "pending" and will be filled in before commercial launch in Egypt.',
          ],
          ar: [
            "تُنشر الحقول أعلاه التزاماً بالمادة 49 من اللائحة التنفيذية (قرار 822/2019) لقانون حماية المستهلك رقم 181/2018، التي تُلزم التجار الإلكترونيين الذين يخدمون عملاء في مصر بالإفصاح عن هويتهم وبيانات تسجيلهم وقنوات التواصل والسعر الإجمالي (شاملاً ضريبة القيمة المضافة) وآلية تقديم الشكوى لجهاز حماية المستهلك (الخط الساخن 19588).",
            'أسعار سناب برو على هذا الموقع شاملة لضريبة القيمة المضافة بالنسبة المقرّرة بقانون 67/2016 (المعدّل بالقانون 3/2022) حيثما تنطبق. وأي حقل لم يُحدَّد نهائياً مذكور بعلامة "قيد الإعداد" وسيتمّ استكماله قبل الإطلاق التجاري في مصر.',
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
