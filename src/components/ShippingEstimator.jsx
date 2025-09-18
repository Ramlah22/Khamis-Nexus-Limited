import { useMemo, useState } from 'react'

export default function ShippingEstimator() {
  const [weight, setWeight] = useState(5) // kg
  const [distance, setDistance] = useState(600) // km
  const [mode, setMode] = useState('air') // air | sea

  const price = useMemo(() => {
    const base = mode === 'air' ? 1200 : 500 // base NGN per kg
    const distanceFactor = mode === 'air' ? 1.2 : 0.6
    return Math.round(weight * base + distance * distanceFactor)
  }, [weight, distance, mode])

  return (
    <div className="mt-4 text-sm space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <label className="flex items-center gap-2"><input type="radio" name="mode" value="air" checked={mode==='air'} onChange={()=>setMode('air')} />Air</label>
        <label className="flex items-center gap-2"><input type="radio" name="mode" value="sea" checked={mode==='sea'} onChange={()=>setMode('sea')} />Sea</label>
      </div>
      <input type="range" min="1" max="100" value={weight} onChange={e=>setWeight(Number(e.target.value))} className="w-full" />
      <div>Weight: <b>{weight} kg</b></div>
      <input type="range" min="50" max="5000" value={distance} onChange={e=>setDistance(Number(e.target.value))} className="w-full" />
      <div>Distance: <b>{distance} km</b></div>
      <div className="mt-2 p-3 rounded-xl bg-gray-200/80 shadow-sm dark:bg-gray-800">Estimated Cost: <b>₦{price.toLocaleString()}</b></div>
    </div>
  )
}
