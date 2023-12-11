import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function ResumeWireIcon(props: IconProps) {
  return (
    <svg
      width="1028"
      height="422"
      viewBox="0 0 1028 422"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M727 0V103.5H834V200H602V326.5M602 326.5H898.5M602 326.5H5.5V422M1004 326.5H898.5M898.5 326.5V421"
        stroke="black"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <circle cx="1014" cy="327" r="10" fill="#3B82F6" />
      <circle cx="898" cy="326" r="6" fill="#3B82F6" />
      <circle cx="6" cy="326" r="6" fill="#3B82F6" />
      <defs>
        <filter
          id="filter0_d_180_6"
          x="1000"
          y="313"
          width="28"
          height="28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_180_6"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.231373 0 0 0 0 0.509804 0 0 0 0 0.964706 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_180_6" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_180_6" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default ResumeWireIcon
