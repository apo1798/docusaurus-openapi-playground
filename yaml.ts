import fs from "fs";
import { parse, stringify } from "yaml";

const supportedLanguages = ["zh-TW", "en"];
const i18nProps = ["summary", "description", "title"];
const outputDir = "examples";

const file = fs.readFileSync(
  "./support-openapi-i18n/jsonplaceholder/openapi.yaml",
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
  lang: string,
) => {
  const clonedObject = structuredClone(fileObject);

  const convertI18nProps = (object: Record<string, any>, path?: string) => {
    for (let key in object) {
      const currentProp = object[key];
      if (Array.isArray(currentProp)) {
        const items = currentProp;
        items.forEach((item, index) => {
          convertI18nProps(
            item,
            path ? `${path}.${key}.${index}` : `${key}.${index}`,
          );
        });
      } else if (
        supportedLanguages.includes(key) &&
        isObject(object) &&
        path &&
        i18nProps.includes(path.split(".").at(-1) ?? "")
      ) {
        const i18nContent = object[lang] || object["en"] || "";
        set(clonedObject, path, i18nContent);
      } else if (isObject(currentProp)) {
        convertI18nProps(currentProp, path ? `${path}.${key}` : `${key}`);
      }
    }
  };

  convertI18nProps(clonedObject);

  fs.writeFileSync(
    `./${outputDir}/${lang}/jsonplaceholder/openapi.yaml`,
    stringify(clonedObject),
    "utf8",
  );
};

supportedLanguages.forEach((lang) => {
  generateLocalizedFiles(fileObject, lang);
});
