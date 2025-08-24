export interface DocumentType {
  title: string;
  subtitle: ContentType[];
  date: string;
  points: PointType[];
}

interface PointType {
  title: string;
  content: ContentType[];
}

export type ContentType = { paragraph: ParagraphType[] };

type ParagraphType = TextContent | LinkContent | EmailContent;

type TextContent = {
  type: "text";
  text: string;
  sublist?: boolean;
};

export type LinkContent = {
  type: "link";
  to: string;
  text: string;
};

export type EmailContent = {
  type: "email";
  to: string;
  text: string;
};
