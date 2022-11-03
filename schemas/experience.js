import { baseLanguage } from "./languageString";

export const experience = {
  name: "experience",
  type: "document",
  title: "Experience",
  fields: [
    {
      name: "experience_title",
      type: "languageString",
      title: "Experience Title",
      description:
        "The title of the experience. Should be descriptive of the experience.",
      validation: (Rule) => Rule.required(),
    },
    //Several types of textual descriptions of the experience
    {
      name: "assignment",
      type: "languageText",
      title: "The Assignment",
      description: "Description of the assignment or problem to be solved",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "solution",
      type: "languageText",
      title: "The Solution",
      description: "Description of what was made or achieved or delivered.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "process",
      type: "languageText",
      title: "The Process",
      description:
        "A description of methodologies used in the process of solving the assignment. Can be team processes or task processes. Why where they used? What was the benefit?",
    },
    {
      name: "individual_contribution",
      type: "languageText",
      title: "Individual Contribution",
      description:
        "What was your individual contribution to the project? Responsibilities, work done, problems solved. What parts did you work on and how much of the solution did you make?",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "customer_introduction",
      type: "languageText",
      title: "Customer Introduction",
      description:
        "A short description of the customer, their needs, and their goals.",
    },
    {
      name: "learning",
      type: "languageText",
      title: "Learning",
      description:
        "What was learned from that experience? What professional development was achieved or improved upon? Why? Who was involved?",
    },
    {
      name: "story",
      type: "languageText",
      title: "The Story",
      description:
        "The story of the experience. Chronological events. Non-technical. Can be extensive and include personal notes or show emotions. This texts use case is when showing a human side of the experience.",
    },

    //Metadata about the experience
    //customer company
    //my role in the experience
    //type, client project, startup, educational project
    //reference to technology used
    //date from to
    //location
    //team size
  ],
  preview: {
    select: {
      title: `experience_title.${baseLanguage.id}`,
    },
  },
};
