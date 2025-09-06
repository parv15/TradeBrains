'use client'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function StockChart({ labels = [], values = [] }) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: values,
        labelsColor: 'var(--muted)',
        borderColor: '#6ee7b7',
        backgroundColor: 'rgba(110,231,183,0.08)',
        tension: 0.25,
        pointRadius: 0
      }
    ]
  }
  const options = {
    responsive:true,
    maintainAspectRatio:false,
    scales:{
      x:{ grid:{ color: 'transparent' }, ticks:{ color:'white'}},
      y:{ grid:{ color:'rgba(255,255,255,0.05)' }, ticks:{ color:'white'} }
    },
    plugins:{ legend:{  display:false  } }
  }

  return (
    <div style={{height:360}}>
      <Line data={data} options={options} />
    </div>
  )
}