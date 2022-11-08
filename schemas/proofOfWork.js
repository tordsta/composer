export const proofOfWork = {
  name: "proofOfWork",
  type: "document",
  title: "Proof of work",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "url" }],
    },
    {
      name: "files",
      title: "Files",
      type: "array",
      of: [{ type: "file" }],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
