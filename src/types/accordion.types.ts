export type AccordionItemData = {
  id: string;
  /** Header label / node shown for the item */
  title: React.ReactNode;
  /** Content for the expanded region */
  content: React.ReactNode;
};

export type AccordionProps = {
  /** Items to render. If omitted, use <AccordionItem> children instead. */
  items?: AccordionItemData[];
  /** If provided, the item to open by default (uncontrolled). */
  defaultOpenId?: string | null;
  /** Called whenever the open item changes. */
  onChange?(openId: string | null): void;
  /** When true, only one item can be open at a time. */
  singleOpen?: boolean;
  /** Optional wrapper className for the list container */
  className?: string;
  /** Children-based API: render custom <AccordionItem> nodes. */
  children?: React.ReactNode;
};





