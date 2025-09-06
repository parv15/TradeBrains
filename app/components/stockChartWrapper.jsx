'use client'
import dynamic from 'next/dynamic'
import { OrbitProgress } from 'react-loading-indicators'

const StockChart = dynamic(() => import('./stockCharts'), {
  ssr: false,
  loading: () => (
    <div style={{height:360, display:'flex', alignItems:'center', justifyContent:'center'}}>
      <OrbitProgress color="#32cd32" size="medium" />
    </div>
  ),
})

export default function ChartWrapper({ labels, values }) {
  return <StockChart labels={labels} values={values} />
}