export const SITE = {
  website: "https://diary.samirb.com.np/", // replace this with your deployed domain
  author: "Samir",
  profile: "https://diary.samirb.com.np/",
  desc: "A personal diary where I share my thoughts, opinions, and experiences - some public, some personal. Join me on this journey of self-discovery and reflection.",
  title: "SamirDiary",
  ogImage: "samir-diary-og.png",
  lightAndDarkMode: true,
  postPerIndex: 6, // Show more entries on homepage
  postPerPage: 8, // More entries per page for better browsing
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  showFeaturedQuote: true, // show featured quote section on homepage
  editPost: {
    enabled: false,
    text: "Edit entry",
    url: "https://github.com/notsopreety/samir-diary/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/kathmandu", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  facebookAppId: "1070942521211576", // Facebook App ID for comments
} as const;
