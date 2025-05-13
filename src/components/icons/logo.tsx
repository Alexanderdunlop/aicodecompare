import { SVGProps, FC } from 'react';

export const Logo: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 154 114" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_14_65)">
      <path
        d="M37 7L7 57L37 107"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M117 7L147 57L117 107"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M77 72C85.2843 72 92 65.2843 92 57C92 48.7157 85.2843 42 77 42C68.7157 42 62 48.7157 62 57C62 65.2843 68.7157 72 77 72Z"
        fill="#FF5252"
      />
    </g>
    <defs>
      <clipPath id="clip0_14_65">
        <rect width="154" height="114" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
