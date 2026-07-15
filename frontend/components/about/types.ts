export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutStat {
  label: string;
  value: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  description: string[];
  image?: AboutImage;
  stats: AboutStat[];
}
