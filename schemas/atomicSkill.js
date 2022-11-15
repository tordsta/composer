import { baseLanguage } from "./languageString";

export const atomicSkill = {
  name: "atomicSkill",
  type: "document",
  title: "Atomic Skill",
  fields: [
    {
      name: "title",
      type: "languageString",
      title: "Atomic skill",
      description:
        "The title of the technology. Should reference a technology. This is an atom an cannot be broken down further.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      type: "languageString",
      title: "Subtitle",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
      description:
        "A link to a website that describes the technology or skill.",
    },
    {
      name: "competency",
      type: "languageText",
      title: "My Competency",
      description:
        "A description of my competency in this technology. Kompetanse beskriver noe man kan. Det kan være noe man har lest, det kan være utdanning (teoretisk), det kan være sertifisering, det kan være artikler man har skrevet. Kompetanse henger tett sammen med verifiserbarhet av det man kan. ",
    },
    {
      name: "experiences",
      type: "array",
      title: "Experiences",
      description:
        "Erfaring beskriver noe man har gjort. Dette kan være konsulent oppdrag, kommersielle prosjekter, praktisk utdanning, og hobby prosjekter. Hvilken kontekst erfaringen er tilegnet i har ofte alt å si. Eks. i et profisjonelt tilbud er det ofte profisjonell erfaring som teller. ",
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
      type: "array",
      of: [{ type: "reference", to: [{ type: "proofOfWork" }] }],
      description:
        "Proof i have worked with this technology. Poenget med proof-of-work er å løfte tilbudet til et nytt nivå, det skal skille seg ut og det skal imponere leseren. Poeng scoren på vurderingen av tilbudet blir bedre med bruk av proof-of-work. Det skal også fjerne en hver vil om at min kompetanse er lav eller middelmådig.",
      title: "Proof of Work",
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
    },
  },
};
