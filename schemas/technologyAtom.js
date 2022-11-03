import { baseLanguage } from "./languageString";

export const technologyAtom = {
  name: "technologyAtom",
  type: "document",
  title: "Technology Atom",
  fields: [
    {
      name: "title",
      type: "languageString",
      title: "Technology Atom Title",
      description:
        "The title of the technology. Should reference a technology. This is an atom an cannot be broken down further.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "competency",
      type: "languageText",
      title: "My Competency",
      description: "A description of my competency in this technology.",
    },
    {
      name: "experiences",
      type: "array",
      title: "Experiences",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "experience",
              type: "reference",
              to: [{ type: "experience" }],
              title: "Experience",
            },
            {
              name: "experienceDescription",
              type: "languageText",
              title: "Description",
              description: "How was this technology used in this experience.",
            },
          ],
          preview: {
            select: {
              title: `experience.title.${baseLanguage.id}`,
            },
          },
        },
      ],
    },
    {
      name: "proofOfWork",
      type: "languageText",
      title: "Proof of Work",
      description: "Proof i have worked with this technology.",
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
    },
  },
};
