import theme from "@nuxt/content-theme-docs";

export default theme({
  docs: {
    primaryColor: "#3B82F6",
  },
  i18n: {
    locales: () => [
      {
        code: "ja",
        iso: "ja-JP",
        file: "ja-JP.js",
        name: "日本語",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        name: "English",
      },
    ],
    defaultLocale: "ja",
  },
  buildModules: ["@nuxt/image"],
  modules: ["@nuxt/image"],
  image: {
    // domains: [ ],
    imgix: {
      baseURL: "https://images.microcms-assets.io/",
    },
  },
  pwa: {
    // これを設定しておかないと "static/icon.png" を置き換えても
    // デフォルトのアイコン画像が使われる
    icon: {
      source: "static/icon.png",
    },
  },
  content: {
    markdown: {
      rehypePlugins: [
        [
          "@hankei6km/rehype-image-salt",
          {
            baseURL: "https://images.microcms-assets.io/",
            rebuild: {
              tagName: "nuxt-img",
              baseAttrs: 'provider="imgix" data-salt-q=""',
            },
          },
        ],
      ],
    },
  },
  server: {
    // host: 0,
    host: process.env.NODE_ENV !== "production" ? "0" : "localhost", // デフォルト: localhost
  },
  router: {
    base: process.env.BASE_PATH || "",
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || "http://localhost:3000",
  },
});
