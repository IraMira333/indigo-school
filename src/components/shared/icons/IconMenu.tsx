import { IconProps } from "@/types/iconProps";

export const IconMenu = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill="none"
      className={className}
      aria-label="menu icon"
    >
      <path
        d="M8.33301 12.5H41.6663M8.33301 25H41.6663M27.083 37.5H41.6663"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
