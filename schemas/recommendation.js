export const recommendation = {
  name: "recommendation",
  type: "document",
  title: "Recommendation",
  fields: [
    {
      name: "title",
      type: "languageString",
      title: "Recommendation Title",
    },
    {
      name: "from",
      type: "string",
      title: "From",
      description: "Who is the recommendation from?",
    },
    {
      name: "type",
      type: "string",
      title: "Type",
      description: "Type of recommendation.",
      options: {
        list: [
          { title: "Testimonial", value: "testimonial" },
          { title: "Letter", value: "letter" },
          { title: "Contactable", value: "contactable" },
        ],
      },
    },
    {
      name: "plainText",
      type: "text",
      title: "Plain Text",
      description:
        "The content of the recommendation. Do not fill in if you have a file. ",
    },
    {
      name: "files",
      type: "array",
      title: "Files",
      description: "Files containing the recommendation.",
      of: [{ type: "file" }],
    },
  ],
};
