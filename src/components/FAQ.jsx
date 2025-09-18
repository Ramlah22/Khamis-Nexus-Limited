import { useState } from 'react'

export default function FAQ({ small }) {
  const items = [
    {q:'How fast are exchanges?', a:'Most exchanges are completed instantly once payment is confirmed.'},
    {q:'Do you handle customs?', a:'Yes, we assist with documentation and clearance through our partners.'},
    {q:'What currencies do you support?', a:'NGN, USD, EUR, GBP and more on request.'},
  ]
  return (
    <div className={small ? 'text-base' : ''}>
      {items.map((it, i)=> <Item key={i} {...it} />)}
    </div>
  )
}

function Item({q,a}){
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-gray-200 dark:border-gray-800 py-2">
      <button onClick={()=>setOpen(v=>!v)} className="w-full text-left font-medium">{q}</button>
      {open && <p className="mt-1 text-gray-600 dark:text-gray-300">{a}</p>}
    </div>
  )
}
