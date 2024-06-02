import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "cos/cloud-object-storage",
    },
    {
      type: "category",
      label: "Authentication",
      items: [
        {
          type: "doc",
          id: "cos/generating-an-iam-token",
          label: "Generating an IAM token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Bucket operations",
      items: [
        {
          type: "doc",
          id: "cos/list-buckets",
          label: "List buckets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cos/create-a-bucket",
          label: "Create a bucket",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "cos/retrieve-a-buckets-headers",
          label: "Retrieve a bucket's headers",
          className: "api-method head",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
