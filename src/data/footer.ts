type Item = { href?: string; content: string };

export const footerData: { title: string; items: Item[] }[] = [
  {
    title: "Company",
    items: [
      { content: "About" },
      { content: "Services" },
      { content: "Careers" },
      { content: "Blog" },
      { content: "Pricing" },
    ],
  },
  {
    title: "Contact",
    items: [
      { content: "Help" },
      { content: "FAQs" },
      { content: "Press" },
      { content: "Terms & Conditions" },
      { content: "Partners" },
    ],
  },
  {
    title: "Discover",
    items: [{ content: "Affiliate" }, { content: "Partner Program" }],
  },
];
