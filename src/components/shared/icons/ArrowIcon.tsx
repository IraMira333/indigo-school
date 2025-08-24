import { IconProps } from "@/types/iconProps";

export const ArrowIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="icon arrow"
      className={`${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0117 9.87134L40.3465 23.5416C41.223 24.4182 41.223 25.8394 40.3465 26.716L26.5776 40.146C25.5196 39.0879 25.982 39.567 25.1054 38.6904C24.2289 37.8139 24.9904 38.5588 23.4033 36.9717L33.3404 27.3734H9.00391L9.00391 22.8842H33.3404L23.8374 13.0457C24.8955 11.9875 24.5477 12.3347 25.4243 11.4582C26.3008 10.5816 26.4824 10.4001 27.0117 9.87134Z"
        fill="currentColor"
      />
    </svg>
  );
};
