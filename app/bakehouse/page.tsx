import dynamic from 'next/dynamic'

const BakehouseGrid = dynamic(() => import('@/components/BakehouseGrid'))

export default function BakehousePage() {
  return (
    <div className="bg-cream pt-28 pb-24">
      <BakehouseGrid />
    </div>
  )
}
