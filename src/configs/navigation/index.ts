export interface NavigationType {
  url: string;
  label: string;
}

export const navigation: NavigationType[] = [
  { url: "/", label: "Home" },
  { url: "/about", label: "Sobre" },
  { url: "/projects", label: "Projetos" },
  { url: "/contacts", label: "Contato" },
];
