import type { InfoPage } from "@/types/info";

export const infoPages: InfoPage[] = [
  {
    slug: "about",
    title: "About",
    description:
      "Learn what ByteSpace does and why thousands of learners study with us every day.",
    intro:
      "ByteSpace is an online learning platform where experienced creators publish practical, project-based courses for people who want to build real skills.",
    sections: [
      {
        heading: "What we do",
        body: [
          "We bring together independent creators and curious learners. Every course on ByteSpace is built around doing: you watch, you practise, and you finish with something you can show.",
          "Courses cover technology, design, business, photography, wellness and more, and new titles are added every week.",
        ],
      },
      {
        heading: "Our approach",
        body: [
          "Creators keep ownership of their work and set their own pace. Learners get lifetime access to the courses they buy, so they can revisit lessons whenever they need a refresher.",
        ],
      },
      {
        heading: "Join us",
        body: [
          "Create a free account to follow creators, save courses and pick up where you left off — or apply to become a creator and teach what you know.",
        ],
      },
    ],
  },
  {
    slug: "contact",
    title: "Contact",
    description: "Get in touch with the ByteSpace team.",
    intro:
      "Questions about a course, your account or working with us? We usually reply within one business day.",
    sections: [
      {
        heading: "Support",
        body: [
          "For help with signing in, purchases or playback issues, write to support@bytespace.com and include the course name and a short description of the problem.",
        ],
      },
      {
        heading: "Creators & partnerships",
        body: [
          "Interested in publishing a course, partnering with us or sponsoring content? Email creators@bytespace.com with a short outline of what you have in mind.",
        ],
      },
      {
        heading: "Press",
        body: [
          "Members of the press can reach the team at press@bytespace.com for interviews, assets and company information.",
        ],
      },
    ],
  },
  {
    slug: "help",
    title: "Help",
    description: "Answers to common questions about ByteSpace accounts, courses and billing.",
    intro: "Quick answers to the questions we hear most often.",
    sections: [
      {
        heading: "Accounts",
        body: [
          "You can create a free account with your email address. Use the Sign In link at the top of any page to continue learning where you left off.",
        ],
      },
      {
        heading: "Courses",
        body: [
          "Once you enrol, a course stays in your library so you can revisit the lessons as often as you like. Course pages list the lessons, runtime and level before you enrol.",
        ],
      },
      {
        heading: "Billing",
        body: [
          "Prices are shown per course in US dollars. If a purchase did not go through or you were charged twice, contact support@bytespace.com and we will sort it out.",
        ],
      },
    ],
  },
  {
    slug: "become-a-creator",
    title: "Become a Creator",
    description: "Publish your course on ByteSpace and reach learners around the world.",
    intro:
      "If you are good at something, teach it. ByteSpace gives you the tools to record, publish and sell a course under your own name.",
    sections: [
      {
        heading: "How it works",
        body: [
          "You bring the expertise, we bring the platform. Upload your lessons, set your price and publish — your course page, player and payouts are handled for you.",
        ],
      },
      {
        heading: "What you get",
        body: [
          "A public creator profile, analytics on enrolments and completion, and a share of every sale. There is no fee to list a course.",
        ],
      },
      {
        heading: "Get started",
        body: [
          "Create an account, open your creator profile and send us your course outline. Our team reviews new submissions within a few days.",
        ],
      },
    ],
  },
  {
    slug: "affiliate",
    title: "Affiliate Program",
    description: "Earn commission by recommending ByteSpace courses.",
    intro:
      "Share ByteSpace with your audience and earn a commission on every course they buy through your link.",
    sections: [
      {
        heading: "How it works",
        body: [
          "Apply for an affiliate account, generate your personal link and share it in your newsletter, videos or social posts. Conversions are tracked for 30 days after the click.",
        ],
      },
      {
        heading: "Payouts",
        body: [
          "Commissions are paid monthly once your balance passes the minimum payout threshold. You can track clicks, sales and earnings from your dashboard.",
        ],
      },
      {
        heading: "Guidelines",
        body: [
          "Affiliates must disclose the relationship and may not bid on ByteSpace brand terms in paid search. Spam or misleading claims will end the partnership.",
        ],
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: "How ByteSpace collects, uses and protects your personal information.",
    intro:
      "This policy explains what information we collect when you use ByteSpace and how we handle it.",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "We collect the details you give us when you create an account — such as your name and email address — plus usage information like the courses you watch and the pages you visit.",
        ],
      },
      {
        heading: "How we use it",
        body: [
          "We use this information to run your account, recommend courses, process payments and improve the platform. We do not sell your personal information.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You can update your details or delete your account at any time. Questions about this policy can be sent to privacy@bytespace.com.",
        ],
      },
    ],
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    description: "The terms that apply when you use ByteSpace.",
    intro:
      "By creating an account or using ByteSpace you agree to these terms. Please read them before you enrol in a course.",
    sections: [
      {
        heading: "Your account",
        body: [
          "You are responsible for keeping your login details secure and for the activity that happens under your account. You must be at least 16 years old to use ByteSpace.",
        ],
      },
      {
        heading: "Courses and licences",
        body: [
          "Course content is licensed to you for personal learning. You may not download, redistribute or resell a course without permission from the creator.",
        ],
      },
      {
        heading: "Refunds and changes",
        body: [
          "If a course is not what you expected, contact support within 14 days of purchase and we will review your request. We may update these terms as the service evolves.",
        ],
      },
    ],
  },
  {
    slug: "cookies-settings",
    title: "Cookies Settings",
    description: "How ByteSpace uses cookies and how to control them.",
    intro: "Cookies help ByteSpace remember you and understand how the site is used.",
    sections: [
      {
        heading: "Essential cookies",
        body: [
          "These keep you signed in and remember items such as your cookie preferences. The site cannot work properly without them.",
        ],
      },
      {
        heading: "Analytics cookies",
        body: [
          "We use aggregated analytics to see which pages and courses are popular so we can improve them. No data from analytics cookies is sold to third parties.",
        ],
      },
      {
        heading: "Managing cookies",
        body: [
          "You can clear or block cookies in your browser settings at any time. Blocking essential cookies will sign you out and stop the site remembering your choices.",
        ],
      },
    ],
  },
];

export const infoSlugs = infoPages.map((page) => page.slug);
