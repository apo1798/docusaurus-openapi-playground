import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "jsonPlaceholder/json-placeholder-api",
    },
    {
      type: "category",
      label: "Posts",
      items: [
        {
          type: "doc",
          id: "jsonPlaceholder/get-posts",
          label: "getPosts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "jsonPlaceholder/get-post",
          label: "getPost",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "jsonPlaceholder/schemas/postslist",
          label: "PostsList",
        },
        {
          type: "doc",
          id: "jsonPlaceholder/schemas/post",
          label: "Post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
