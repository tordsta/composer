import { baseLanguage } from "./languageString";

export const requirement = {
  name: "requirement",
  type: "document",
  title: "Requirement",
  fields: [
    {
      name: "title",
      type: "languageString",
      title: "Requirement Title",
    },
    {
      name: "description",
      type: "languageText",
      title: "Description",
      description:
        "A description of the requirement. Dette er kriterum fra faktiske oppdragstekster og oppdragsgivere. Ved overlappende kriterier mellom flere søknader skal kun det beste beholdes. Eller hvis mulig skal det splittes i atomiske deler og besvares hver for seg. ",
    },
    {
      name: "answer",
      type: "languageText",
      title: "Answer",
      description: "A description of how the requirement is met.",
    },
    {
      name: "technologies",
      type: "array",
      title: "Technologies",
      description: "Technologies used to meet this requirement.",
      of: [{ type: "reference", to: [{ type: "atomicSkill" }] }],
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
    },
  },
};
