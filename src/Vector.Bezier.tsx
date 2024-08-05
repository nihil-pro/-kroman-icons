import type { SVGProps } from 'react'
export function VectorBezier(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M7.5,4A1.5,1.5 0 0,0 6,5.5A1.5,1.5 0 0,0 7.5,7C8.13,7 8.7,6.6 8.91,6H13C13.67,5.33 14.33,5 15,5H8.91C8.7,4.4 8.13,4 7.5,4M19,5C8,5 14,17 5,17V19C16,19 10,7 19,7V5M16.5,17C15.87,17 15.3,17.4 15.09,18H11C10.33,18.67 9.67,19 9,19H15.09C15.3,19.6 15.87,20 16.5,20A1.5,1.5 0 0,0 18,18.5A1.5,1.5 0 0,0 16.5,17Z" /></svg>
  )
}