import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Tag 1 & 2",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "restaurant/restaurant-example",
        },
        {
          type: "category",
          label: "Tag 1",
          items: [
            {
              type: "doc",
              id: "restaurant/get-menu",
              label: "Get Menu",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "restaurant/list-all-products",
              label: "List All Products",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "restaurant/list-all-drinks",
              label: "List All Drinks",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Tag 2",
          items: [
            {
              type: "doc",
              id: "restaurant/list-all-products",
              label: "List All Products",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "restaurant/list-all-drinks",
              label: "List All Drinks",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "tag3",
          items: [
            {
              type: "doc",
              id: "restaurant/make-payment",
              label: "Make Payment",
              className: "api-method post",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Trinity",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "restaurant/restaurant-example",
        },
        {
          type: "category",
          label: "Tag 1",
          items: [
            {
              type: "doc",
              id: "restaurant/get-menu",
              label: "Get Menu",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "restaurant/list-all-products",
              label: "List All Products",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "restaurant/list-all-drinks",
              label: "List All Drinks",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Tag 2",
          items: [
            {
              type: "doc",
              id: "restaurant/list-all-products",
              label: "List All Products",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "restaurant/list-all-drinks",
              label: "List All Drinks",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Tag 3",
          items: [
            {
              type: "doc",
              id: "restaurant/make-payment",
              label: "Make Payment",
              className: "api-method post",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Last Two",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "restaurant/restaurant-example",
        },
        {
          type: "category",
          label: "Tag 2",
          items: [
            {
              type: "doc",
              id: "restaurant/list-all-products",
              label: "List All Products",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "restaurant/list-all-drinks",
              label: "List All Drinks",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Tag 3",
          items: [
            {
              type: "doc",
              id: "restaurant/make-payment",
              label: "Make Payment",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "tag1",
          items: [
            {
              type: "doc",
              id: "restaurant/get-menu",
              label: "Get Menu",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "restaurant/list-all-products",
              label: "List All Products",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "restaurant/list-all-drinks",
              label: "List All Drinks",
              className: "api-method get",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
