// TODO try to into a package entry

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse, stringify } from "yaml";

const supportedLanguages = ["zh-TW", "en"];
const i18nProps = ["summary", "description", "title"];
const outputDir = "examples";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// TODO
// 1. recursively read files
// 2. avoid overwriting existing files
// const currentDir = pwd

const file = fs.readFileSync(
  path.join(__dirname, "./jsonplaceholder/openapi.yaml"),
  "utf8",
);
const fileObject = parse(file);

const isObject = (item: unknown): item is Object => {
  return !Array.isArray(item) && item != null && typeof item === "object";
};
const set = (obj: Record<string, any>, path: string, value: string) => {
  var schema = obj;
  var paths = path.split(".");
  var len = paths.length;
  for (var i = 0; i < paths.length - 1; i++) {
    var elem = paths[i];
    if (!schema[elem]) {
      schema[elem] = {};
    }
    schema = schema[elem];
  }

  schema[paths[len - 1]] = value;
};

const generateLocalizedFiles = (
  fileObject: Record<string, any>,
  supportedLanguages: string[],
) => {
  supportedLanguages.forEach((lang) => {
    const clonedObject = structuredClone(fileObject);

    const convertI18nProps = (
      object: Record<string, any>,
      lang: string,
      path?: string,
    ) => {
      for (let key in object) {
        if (
          supportedLanguages.includes(key) &&
          isObject(object) &&
          path &&
          i18nProps.includes(path.split(".").at(-1) ?? "")
        ) {
          const i18nContent = object[lang] || object["en"] || "";
          console.log(path, i18nContent);
          set(clonedObject, path, i18nContent);
        } else if (isObject(object[key])) {
          convertI18nProps(
            object[key],
            lang,
            path ? `${path}.${key}` : `${key}`,
          );
        }
      }
    };

    convertI18nProps(clonedObject, lang);

    fs.writeFileSync(
      `./examples/jsonplaceholder/openapi_${lang}.yaml`,
      stringify(clonedObject),
      "utf8",
    );
  });
};

generateLocalizedFiles(fileObject, supportedLanguages);
