import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Portfolio",
  description: "実績とスキルの紹介",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "ホーム", link: "/" },
      { text: "プロフィール", link: "/about" },
      { text: "制作実績", link: "/projects" },
    ],

    sidebar: [
      {
        text: "コンテンツ",
        items: [
          { text: "プロフィール", link: "/about" },
          {
            text: "制作実績",
            link: "/projects",
            items: [
              { text: "chat-branch", link: "/projects/chat-branch" },
              { text: "DLab", link: "/projects/DLab" },
              { text: "SimpLyz", link: "/projects/SimpLyz" },
              { text: "word2text", link: "/projects/word2text" },
              { text: "MySQL MCP Server", link: "/projects/mysql-mcp-server" },
            ],
            collapsed: true,
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/yukihito-jokyu" },
    ],
  },
});
