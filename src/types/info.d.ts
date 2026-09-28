export type InfoPageSection = {
  heading: string;
  body: string[];
};

export type InfoPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: InfoPageSection[];
};
