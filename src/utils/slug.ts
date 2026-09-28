export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const findSlug = (values: string[], slug: string) =>
  values.find((value) => slugify(value) === slug);
