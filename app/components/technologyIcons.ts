import type { IconType } from "react-icons";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill, RiPhpFill, RiVercelFill } from "react-icons/ri";
import {
  SiExpress,
  SiFigma,
  SiJest,
  SiReact,
  SiShadcnui,
  SiSymfony,
  SiVitest,
} from "react-icons/si";

export interface Technology {
  name: string;
  icon?: IconType;
}

export const technologyIcons: Record<string, IconType> = {
  Express: SiExpress,
  Figma: SiFigma,
  Javascript: BiLogoJavascript,
  Jest: SiJest,
  Next: RiNextjsFill,
  PHP: RiPhpFill,
  React: SiReact,
  Shadcnui: SiShadcnui,
  Symfony: SiSymfony,
  Typescript: BiLogoTypescript,
  Vercel: RiVercelFill,
  Vitest: SiVitest,
};

export function parseTechnology(technology: string | undefined): Technology[] {
  if (!technology) return [];
  return technology.split("|").map((tech) => ({
    name: tech.trim(),
    icon: technologyIcons[tech.trim()],
  }));
}
