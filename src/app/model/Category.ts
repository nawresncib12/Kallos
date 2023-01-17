export default class Category {
  id: number;
  description: string;
  dark: string;
  light: string;
  tag: string;
  title: string[];

  constructor(
    id: number,
    description: string,
    dark: string,
    light: string,
    tag: string,
    title: string[]
  ) {
    this.id = id;
    this.description = description;
    this.dark = dark;
    this.light = light;
    this.tag = tag;
    this.title = title;
  }
}
