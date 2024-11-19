import { SvgProps } from './types';

export const Document = ({ className }: SvgProps) => (
  <svg
    className={className}
    fill="none"
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.25 7.5C2.25 4.67175 2.25 3.25725 3.129 2.379C4.008 1.50075 5.42175 1.5 8.25 1.5H9.75C12.5782 1.5 13.9927 1.5 14.871 2.379C15.7492 3.258 15.75 4.67175 15.75 7.5V10.5C15.75 13.3282 15.75 14.7427 14.871 15.621C13.992 16.4992 12.5782 16.5 9.75 16.5H8.25C5.42175 16.5 4.00725 16.5 3.129 15.621C2.25075 14.742 2.25 13.3282 2.25 10.5V7.5Z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M6 9H12M6 6H12M6 12H9.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.2"
    />
  </svg>
);
