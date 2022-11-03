import { baseLanguage } from "./languageString";

export const experience = {
  name: "experience",
  type: "document",
  title: "Experience",
  fields: [
    {
      name: "title",
      type: "languageString",
      title: "Title",
      description:
        "The title of the experience. Should be descriptive of the experience. CV med prosjekt beskrivelser sendes med hvert tilbud. At kriteriebesvarelsene refererer tilbake til spesifikke prosjekter er en måte å legitimisere erfaringene. Det er viktig at hvert prosjekt beskrivers i sin helhet på en måte som komplimenterer og utfyller kriteriebesvarelsene. Hvordan legitimere et prosjekt? Ambisjonen og skala på prosjektet, aktører involvert, pengebruken, antall mennesker og deres status/erfaring. 							",
      validation: (Rule) => Rule.required(),
    },
    //Several types of textual descriptions of the experience
    {
      name: "assignment",
      type: "languageText",
      title: "The Assignment",
      description:
        "Description of the assignment or problem to be solved. Beskriver behovet til kunden og hvordan teamet jobbet for å løse dette behovet. Kan også kort beskrive kunde og kundens forretningsområdet om det er saklig. Formålet med denne delen av teksten og bygge legitimitet og seriøsitet. At det ikke var et vimsete oppdrag, men et seriøst behov av en seriøs kunde. Her er det altså viktig å spille opp kundens seriøsitet. ",
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
        "What was your individual contribution to the project? Responsibilities, work done, problems solved. What parts did you work on and how much of the solution did you make? I mitt bidrag skal jeg rettferdiggjøre min innsatts og plass i prosjektet, uten å tråkke på team medlemmer. Jeg vise kunnskap og kompetanse ved å beskrive bruk av teknologi og løsninger på problemer. Samt reflektere over prioriteringer i prosjektet. Kvantifisering  er et sterkt virkemiddel her, eks arbeidsmengden, stillingsprosent, timer, ting jeg har gjort/løst alene. Forankring av, samt bygging av legitimitet og authoritet er et viktig mål her. ",
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
        "The story of the experience. Chronological events. Non-technical. Can be extensive and include personal notes or show emotions. This texts use case is when showing a human side of the experience. Teksten som beskriver dette oppdraget på nettsiden min. Teksten på nettsiden min skal fortelle en histore ikke skryte så grådig. Skal være et mykt inntrykk og beskrvelse som skal fremmet kunden like mye som meg selv.  Oppgaven her er å fortelle en historie om oppdraget og fremme kunde og meg selv i en myk kontektst. ",
    },

    //Metadata about the experience
    {
      name: "start_date",
      type: "date",
      title: "Start Date",
      description: "The date the experience started.",
    },
    {
      name: "end_date",
      type: "date",
      title: "End Date",
      description: "The date the experience ended.",
    },
    {
      name: "location",
      type: "string",
      title: "Location",
      description: "The location of the experience.",
    },
    {
      name: "type",
      type: "object",
      title: "Experience type",
      fields: [
        {
          name: "name",
          type: "string",
          title: "Name",
          description: "The name of the fasilitator/benefitor.",
        },
        {
          name: "type",
          type: "string",
          title: "Type",
          description: "Type of experience.",
          options: {
            list: [
              { title: "Client", value: "client" },
              { title: "Emplooye", value: "employee" },
              { title: "Startup", value: "startup" },
              { title: "Education", value: "education" },
            ],
          },
        },
      ],
    },
    {
      name: "role",
      type: "string",
      title: "Role",
      description:
        "Your role in the experience. Fullstack, frontend, backend, designer, project manager, etc.",
    },
    {
      name: "teamSize",
      type: "number",
      title: "Team Size",
      description: "The size of the team.",
    },
    {
      name: "technologies",
      type: "array",
      title: "Technologies",
      description: "The technologies used in the experience.",
      of: [{ type: "reference", to: { type: "atomicSkill" } }],
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
    },
  },
};
