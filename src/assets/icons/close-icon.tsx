import { FC, SVGProps } from 'react';

export const CloseIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={18}
    height={18}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
  </svg>
);

export default CloseIcon;