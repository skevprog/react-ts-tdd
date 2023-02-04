import { createPortal } from 'react-dom'
import { PropsWithChildren } from 'react'

type DismissableBlurbProps = PropsWithChildren<{
   header: string;
   link: string;
}>;

function DismissableBlurb({ header, children, link }: DismissableBlurbProps) {
   return (createPortal((
   <div>
      <h2>{header}</h2>
      {children}
      <a>{link}</a>
   </div>
   ), document.body))
}

export default DismissableBlurb
