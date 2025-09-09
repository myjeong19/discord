interface Link {
  label: string;
  href: string;
}

interface NavigationLink extends Link {
  type: "link" | "popover";
  popoverAlign?: "row" | "column";
  popoverSections?: PopoverSection[];
}

interface PopoverSection {
  title: string;
  links: Link[];
}

const SAFETY_CENTER_POPOVER_LINKS: PopoverSection[] = [
  {
    title: "리소스",
    links: [
      {
        label: "Family Center",
        href: "/safety-family-center",
      },
      {
        label: "보안 라이브러리",
        href: "/safety-library",
      },
      {
        label: "보안 뉴스",
        href: "/safety-news",
      },
      {
        label: "청소년 현장",
        href: "/safety-teen-charter",
      },
    ],
  },
  {
    title: "Hubs",
    links: [],
  },
];

export const NAVIGATION_LINKS: NavigationLink[] = [
  {
    label: "다운로드",
    href: "/download",
    type: "link",
  },
  {
    label: "Nitro",
    href: "/nitro",
    type: "link",
  },
  {
    label: "찾기",
    href: "/servers",
    type: "link",
  },
  {
    label: "보안센터",
    href: "/safety",
    type: "popover",
    popoverAlign: "row",
    popoverSections: SAFETY_CENTER_POPOVER_LINKS,
  },
  {
    label: "퀘스트",
    href: "/ads/quests",
    type: "popover",
  },
  {
    label: "지원",
    href: "/hc",
    type: "popover",
  },
  {
    label: "블로그",
    href: "/blog",
    type: "popover",
  },
  {
    label: "개발자",
    href: "/developers",
    type: "popover",
  },
  {
    label: "인재채용",
    href: "/careers",
    type: "link",
  },
];
