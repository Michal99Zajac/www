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
      <circle cx="1014" cy="327" r="10" fill="#3B82F6" className="pulse-circle" />
      <circle cx="898" cy="326" r="6" fill="#3B82F6" />
      <circle cx="6" cy="326" r="6" fill="#3B82F6" />
    </svg>
  )
}

export default ResumeWireIcon
