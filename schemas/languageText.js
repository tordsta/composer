const supportedLanguages = [
  { id: "en", title: "English" },
  { id: "no", title: "Norwegian", isDefault: true },
];

export const baseLanguage = supportedLanguages.find((l) => l.isDefault);

export const languageText = {
  title: "Language text",
  name: "languageText",
  type: "object",
  fieldsets: [
    {
      title: "Languages",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "text",
    fieldset: lang.isDefault ? null : "translations",
  })),
};
