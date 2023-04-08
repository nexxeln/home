type Config = {
  links: {
    type: string;
    color: string;
    links: {
      name: string;
      url: string;
    }[];
  }[];
};

export const flowConfig: Config = {
  links: [
    {
      type: "Socials",
      color: "green-",
      links: [
        {
          name: "Reddit",
          url: "https://reddit.com",
        },
        {
          name: "Twitter",
          url: "https://twitter.com",
        },
        {
          name: "hn",
          url: "https://news.ycombinator.com",
        },
        {
          name: "Lobsters",
          url: "https://lobste.rs",
        },
      ],
    },
    {
      type: "Tools",
      color: "teal-",
      links: [
        {
          name: "GitHub",
          url: "https://github.com",
        },
        {
          name: "Vercel",
          url: "https://vercel.com",
        },
        {
          name: "ChatGPT",
          url: "https://chat.openai.com",
        },
        {
          name: "Perplexity",
          url: "https://perplexity.ai"
        },
        {
          name: "Notion",
          url: "https://notion.so"
        },
      ],
    },
    {
      type: "Leisure",
      color: "blue-",
      links: [
        {
          name: "YouTube",
          url: "https://youtube.com",
        },
        {
          name: "Twitch",
          url: "https://twitch.tv",
        },
        {
          name: "Kick",
          url: "https://kick.com",
        },

      ],
    },
    {
      type: "Dev",
      color: "blue-",
      links: [
        {
          name: "Repo",
          url: "https://repo.new",
        },
        {
          name: "Uno",
          url: "https://unocss.dev/play",
        },
        {
          name: "Typewolf",
          url: "https://typewolf.com",
        },

      ],
    },
    {
      type: "Others",
      color: "rose-",
      links: [
        {
          name: "Monkeytype",
          url: "https://monkeytype.com",
        },
        {
          name: "LH:3000",
          url: "http://localhost:3000",
        },
        {
          name: "LH:5173",
          url: "http://localhost:5173",
        },
      ],
    },
  ],
};
