import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "json-placeholder/json-placeholder-api",
    },
    {
      type: "category",
      label: "Posts",
      items: [
        {
          type: "doc",
          id: "json-placeholder/get-posts",
          label: "getPosts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "json-placeholder/get-post",
          label: "getPost",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
