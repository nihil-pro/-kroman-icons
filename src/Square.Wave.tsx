import type { SVGProps } from 'react'
export function SquareWave(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M2 2V12H4V4H11V22H22V12H20V20H13V2H2Z" /></svg>
  )
}
