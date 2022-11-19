import { baseLanguage } from "./languageString";

export const experience = {
  name: "experience",
  type: "document",
  title: "Experience",
  fieldsets: [
    {
      name: "metadata",
      title: "Metadata",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "publicDescriptions",
      title: "Public descriptions",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "restrictedDescriptions",
      title: "Restricted descriptions",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    {
      name: "title",
      type: "languageString",
      title: "Title",
      description:
        "The title of the experience. Should be descriptive of the experience.",
      validation: (Rule) => Rule.required(),
    },

    //Metadata about the experience
    {
      name: "start_date",
      type: "date",
      title: "Start Date",
      fieldset: "metadata",
      description: "The date the experience started.",
    },
    {
      name: "end_date",
      type: "date",
      title: "End Date",
      fieldset: "metadata",
      description: "The date the experience ended.",
    },
    {
      name: "location",
      type: "string",
      title: "Location",
      fieldset: "metadata",
      description: "The location of the experience.",
    },
    {
      name: "type",
      type: "object",
      title: "Experience type",
      fieldset: "metadata",
      fields: [
        {
          name: "name",
          type: "string",
          title: "Stakeholder Name",
          description: "The name of the primary stakeholder.",
        },
        {
          name: "type",
          type: "string",
          title: "Type",
          description: "Type of experience.",
          options: {
            list: [
              { title: "Contract", value: "contract" },
              { title: "Employed", value: "employed" },
              { title: "Startup", value: "startup" },
              { title: "Education", value: "education" },
              { title: "Hobby", value: "hobby" },
              { title: "Volunteer", value: "volunteer" },
            ],
          },
        },
      ],
    },
    {
      name: "role",
      type: "string",
      title: "Role",
      fieldset: "metadata",
      description: "Your official position, title or role in the experience.",
    },
    {
      name: "workload",
      type: "string",
      title: "Workload",
      fieldset: "metadata",
      description:
        "Describe the workload. In hours, full-time, days, money, etc.",
    },
    {
      name: "teamSize",
      type: "number",
      title: "Team Size",
      fieldset: "metadata",
    },

    //Public descriptions
    {
      name: "summary",
      type: "languageText",
      title: "Summary",
      fieldset: "publicDescriptions",
      description:
        "A short description. Describe the context of the experience. Give an overview of main goals and solutions.",
    },
    {
      name: "stakeholders",
      type: "languageText",
      title: "Stakeholders",
      fieldset: "publicDescriptions",
      description:
        "A description of the stakeholder that sets them in a good light. Potentially their needs, goals, vision and mission as well.",
    },
    {
      name: "teamAchievements",
      type: "languageText",
      title: "Team Achievements",
      fieldset: "publicDescriptions",
      description:
        "Description of what was made, achieved or delivered to the stakeholder.",
    },

    //Restricted descriptions
    {
      name: "individualContribution",
      type: "languageText",
      title: "Individual Contribution",
      fieldset: "restrictedDescriptions",
      description:
        "What was your individual contribution to the project? Responsibilities, achievements, problems solved. What discussion and decision's did you make and way in on? How did you prioritize your work, justify your answer? Did anyone validate your work?",
    },
    {
      name: "learning",
      type: "languageText",
      title: "Learning",
      fieldset: "restrictedDescriptions",
      description:
        "What was learned from that experience? Key takeaways. What professional development was achieved or improved upon? How? Who was involved?",
    },
    {
      name: "process",
      type: "languageText",
      title: "The Cooperation Process",
      fieldset: "restrictedDescriptions",
      description:
        "A description of the process of working as a team. What tools, structures and methods were used deliberately used. Show/describe cooperation skills. If not a team expreience, disregard this field.",
    },

    //Document references
    {
      name: "proofOfWork",
      type: "array",
      title: "Proof of Work",
      description: "Proof of work of the experience.",
      of: [{ type: "reference", to: { type: "proofOfWork" } }],
    },
    {
      name: "recommendations",
      type: "array",
      title: "Recommendations",
      description: "Recommendations from the experience.",
      of: [{ type: "reference", to: { type: "recommendation" } }],
    },
  ],
  orderings: [
    {
      title: "End Date, Latest First",
      name: "endDateDesc",
      by: [{ field: "end_date", direction: "desc" }],
    },
    {
      title: "Start Date, Latest First",
      name: "startDateDesc",
      by: [{ field: "start_date", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
    },
  },
};
