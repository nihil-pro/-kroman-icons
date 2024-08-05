import type { SVGProps } from 'react'
export function Square(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M3,3V21H21V3" /></svg>
  )
}
