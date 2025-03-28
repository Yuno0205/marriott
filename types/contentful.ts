import { EntrySkeletonType } from "contentful";

export type ContentfulEntry<TFields> = EntrySkeletonType & {
  fields: TFields;
};

type NavigationItem = {
  label: string;
  url: string;
};

type Asset = {
  url: string;
  title: string;
};

export interface HeaderFields {
  logo: Asset;
  navigation: NavigationItem[];
  languages: string[];
  btnText: string;
}

export interface BannerFields {
  backgroundImage: Asset;
  title: string;
  logo: Asset;
}

export interface PropertiesFields {
  title: string;
  content: string[];
  backgroundImage: Asset;
}

export interface DevelopmentFields {
  backgroundImage: Asset;
  title: string;
  text: string;
  btnText: string;
}

export interface SolutionFields {
  backgroundImage: Asset;
  title: string;
  text: string[];
  btnText: string;
  logo: Asset;
}

export interface FooterFields {
  companyName: string;
  backgroundImage: Asset;
  logo: Asset;
  location: string;
  hotline: string;
  email: string;
  social: Asset[];
}

export interface recuitmentFields {
  address: string;
  experience: string;
  field: string;
  jobDescription: Asset;
  linkForm: string;
  name: string;
  slug: string;
}

// Sử dụng generic utility
// export type HeaderEntry = ContentfulEntry<HeaderFields>;
