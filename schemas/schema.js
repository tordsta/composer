import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import { experience } from "./experience";
import { languageString } from "./languageString";
import { languageText } from "./languageText";

export default createSchema({
  name: "Composer",
  types: schemaTypes.concat([experience, languageString, languageText]),
});
