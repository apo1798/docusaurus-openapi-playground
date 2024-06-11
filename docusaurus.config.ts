import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import { PluginOptions } from "@easyops-cn/docusaurus-search-local";

import { DOCUSAURUS_VERSION } from "@docusaurus/utils";

const config: Config = {
  title: "Docusaurus OpenAPI Docs",
  tagline: "OpenAPI plugin for generating API reference docs in Docusaurus v2",
  url: "https://apo1798.github.io",
  baseUrl: "/docusaurus-openapi-playground",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "apo1798",
  projectName: "docusaurus-openapi-playground",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-TW"],
    localeConfigs: {},
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: "OpenAPI Docs",
      logo: {
        alt: "Keytar",
        src: "img/docusaurus-openapi-docs-logo.svg",
      },
      items: [
        {
          type: "dropdown",
          label: "API Docs",
          docId: "index",
          position: "left",
          items: [{ label: "JSON Placeholder", to: "/json_placeholder" }],
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "OpenAPI Docs",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://medium.com/palo-alto-networks-developer-blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/PaloAltoNetworks/docusaurus-openapi-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc. Built with Docusaurus ${DOCUSAURUS_VERSION}.`,
    },
    prism: {
      additionalLanguages: [
        "ruby",
        "csharp",
        "php",
        "java",
        "powershell",
        "json",
        "bash",
      ],
    },
    languageTabs: [
      {
        highlight: "bash",
        language: "curl",
        logoClass: "bash",
      },
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
        variant: "requests",
      },
      {
        highlight: "go",
        language: "go",
        logoClass: "go",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
        variant: "axios",
      },
      {
        highlight: "ruby",
        language: "ruby",
        logoClass: "ruby",
      },
      {
        highlight: "csharp",
        language: "csharp",
        logoClass: "csharp",
        variant: "httpclient",
      },
      {
        highlight: "php",
        language: "php",
        logoClass: "php",
      },
      {
        highlight: "java",
        language: "java",
        logoClass: "java",
        variant: "unirest",
      },
      {
        highlight: "powershell",
        language: "powershell",
        logoClass: "powershell",
      },
    ],
    announcementBar: {
      id: "announcementBar_1",
      content: "Beta preview that adds support for Docusaurus v3.0.0",
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          "json_placeholder_zh-TW": {
            specPath: "./examples/zh-TW/jsonplaceholder/openapi_zh-TW.yaml",
            outputDir:
              "./i18n/zh-TW/docusaurus-plugin-content-docs/current/json-placeholder",
            showSchemas: true,
            sidebarOptions: {},
          } satisfies OpenApiPlugin.Options,
          json_placeholder_en: {
            specPath: "./examples/en/jsonplaceholder/openapi_en.yaml",
            outputDir: "./docs/current/json-placeholder",
            showSchemas: true,
            sidebarOptions: {},
          } satisfies OpenApiPlugin.Options,
          // pet_store: {
          //   label: 'Pet Store API Example',
          //   specPath: './examples/petstore.yaml',
          //   outputDir: './docs/pet-store',
          //   showSchemas: true,
          //   sidebarOptions: {},
          //   showExtensions: true,
          // } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    // require.resolve('docusaurus-lunr-search'),
  ],
  themes: [
    "docusaurus-theme-openapi-docs",
    // only available in build
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      { hashed: true, docsRouteBasePath: "/" } satisfies PluginOptions,
    ],
  ],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
};

export default async function createConfig() {
  return config;
}
