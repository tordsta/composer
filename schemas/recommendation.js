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
          { title: "testimonial", value: "testimonial" },
          { title: "letter", value: "letter" },
          { title: "contactable", value: "contactable" },
        ],
      },
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
