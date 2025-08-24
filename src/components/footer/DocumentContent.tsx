import { ContentType } from "@/types/contentTypes";
import { SiteEmailLink } from "../shared/SiteEmailLink";
import { SiteLink } from "../shared/SiteLink";

interface DocumentContentProps {
  content: ContentType[];
}

export const DocumentContent = ({ content }: DocumentContentProps) => {
  return (
    <ul className="flex flex-col gap-2 text-pretty">
      {content.map((item, ind) => (
        <li key={ind}>
          <p className="body2">
            {item.paragraph.map((data, ind) => {
              if (data.type === "link") {
                return <SiteLink key={`link + ${ind}`} linkData={data} />;
              }
              if (data.type === "email") {
                return (
                  <SiteEmailLink key={`email + ${ind}`} emailData={data} />
                );
              }
              if (data.sublist) {
                return (
                  <span
                    key={`list + ${ind}`}
                    className="before:mx-2 before:content-['•']"
                  >
                    {data.text}
                  </span>
                );
              }
              return data.text;
            })}
          </p>
        </li>
      ))}
    </ul>
  );
};
