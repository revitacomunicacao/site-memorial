export interface IMenu {
  name: string;
  href: string;
  children: {
    name: string;
    href: string;
  }[];
}