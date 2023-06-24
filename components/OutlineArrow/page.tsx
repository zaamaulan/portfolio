import React from 'react';

export default function ArrowRight({ className }: { className: string }) {
  return (
    // <svg
    //   width="16"
    //   height="16"
    //   viewBox="0 0 52 52"
    //   className={className}
    //   xmlns="http://www.w3.org/2000/svg">
    //   <path
    //     d="M39.1517 22.36C38.74 22.36 38.3283 22.2083 38.0033 21.8833L26 9.88L13.9967 21.8833C13.3683 22.5117 12.3283 22.5117 11.7 21.8833C11.3978 21.5775 11.2283 21.1649 11.2283 20.735C11.2283 20.3051 11.3978 19.8925 11.7 19.5867L24.8517 6.435C25.48 5.80667 26.52 5.80667 27.1483 6.435L40.3 19.5867C40.9283 20.215 40.9283 21.255 40.3 21.8833C39.9967 22.2083 39.5633 22.36 39.1517 22.36Z"
    //   className='fill-white'/>
    //   <path
    //     d="M26 46.0417C25.1117 46.0417 24.375 45.305 24.375 44.4167V7.95167C24.375 7.06333 25.1117 6.32667 26 6.32667C26.8883 6.32667 27.625 7.06333 27.625 7.95167V44.4167C27.625 45.305 26.8883 46.0417 26 46.0417Z"
    //   className='fill-white'/>
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-arrow-right">
      <line
        x1="5"
        y1="12"
        x2="19"
        y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

export function ArrowUoRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-arrow-right">
      <line
        x1="5"
        y1="12"
        x2="19"
        y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
