const supportedLanguages = [
  { id: "en", title: "English" },
  { id: "no", title: "Norwegian", isDefault: true },
];

export const baseLanguage = supportedLanguages.find((l) => l.isDefault);

export const languageString = {
  title: "Language string",
  name: "languageString",
  type: "object",
  fieldsets: [
    {
      title: "Language",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "string",
    fieldset: lang.isDefault ? null : "translations",
  })),
};
