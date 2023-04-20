import { defineField, defineType } from "sanity";
import { BsPersonVcard } from "react-icons/bs";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  icon: BsPersonVcard,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: "Github",
      name: "github",
      type: "object",
      fields: [
        { name: "icon", type: "image", title: "Icon" },
        { name: "url", type: "string", title: "URL" },
      ],
    }),
    defineField({
      title: "LinkedIn",
      name: "linkedIn",
      type: "object",
      fields: [
        { name: "icon", type: "image", title: "Icon" },
        { name: "url", type: "string", title: "URL" },
      ],
    }),
    defineField({
      title: "Twitter",
      name: "twitter",
      type: "object",
      fields: [
        { name: "icon", type: "image", title: "Icon" },
        { name: "url", type: "string", title: "URL" },
      ],
    }),
  ],
});
