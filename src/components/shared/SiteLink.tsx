import { LinkContent } from "@/types/contentTypes";

interface SiteLinkProps {
    linkData: LinkContent;
}

export const SiteLink = ({ linkData }: SiteLinkProps) => {
    return (
        <a href={linkData.to} target="_blank" className="underline">
            {linkData.text}
        </a>
    );
};
