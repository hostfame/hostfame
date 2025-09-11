import { IconType } from "react-icons";

export type FaqCategory = { id: string; label: string; icon: IconType };
export type FaqItem = {
  id: string;
  categoryId: string;
  question: string;
  answer: string;
};