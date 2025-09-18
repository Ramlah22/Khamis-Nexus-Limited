import { useMemo, useState } from 'react'

// Demo-only static rates; replace with live API if needed.
const RATES = {
  USD: 1,
  NGN: 1600,
  EUR: 0.92,
  GBP: 0.78,
}

export default function CurrencyConverter() {
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('NGN')
  const [amount, setAmount] = useState(100)

  const result = useMemo(()=> {
    const usd = amount / RATES[from]
    return (usd * RATES[to]).toFixed(2)
  }, [from, to, amount])

  return (
    <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
      <input type="number" className="col-span-3 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900" value={amount} onChange={e=>setAmount(Number(e.target.value||0))} />
      <select className="px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900" value={from} onChange={e=>setFrom(e.target.value)}>
        {Object.keys(RATES).map(k=> <option key={k}>{k}</option>)}
      </select>
      <div className="flex items-center justify-center">→</div>
      <select className="px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900" value={to} onChange={e=>setTo(e.target.value)}>
        {Object.keys(RATES).map(k=> <option key={k}>{k}</option>)}
      </select>
      <div className="col-span-3 mt-2 p-3 rounded-xl bg-gray-200 dark:bg-gray-800">
        <b>{result}</b> {to}
      </div>
    </div>
  )
}
