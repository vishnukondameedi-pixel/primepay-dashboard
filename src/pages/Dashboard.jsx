import { Plus, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const cards = [
  {
    title: 'PayIns',
    rows: [['Success', 'var(--green)'], ['Failed', 'var(--red)']],
  },
  {
    title: 'Payouts',
    rows: [['Processed', 'var(--green)'], ['Failed', 'var(--red)'], ['Pending', 'var(--amber)'], ['Refund', 'var(--purple)']],
  },
  {
    title: 'Bill Payments',
    rows: [['Success', 'var(--green)'], ['Failed', 'var(--red)'], ['Processing', 'var(--amber)'], ['Refund', 'var(--purple)']],
  },
]

export default function Dashboard() {
  return (
    <>
      <div className="dash-top">
        <Link to="/wallet" className="btn" style={{ textDecoration: 'none' }}><Plus size={18} /> Add funds</Link>
        <button className="btn ghost"><Calendar size={18} /> Select date</button>
      </div>
      <div className="grid3">
        {cards.map((c) => (
          <div key={c.title} className="card stat-card">
            <div className="row-between">
              <h3>{c.title}</h3>
              <a className="link" href="#history">View history</a>
            </div>
            <div className="stat-big">
              <strong>₹0</strong>
              <span className="muted">0 transactions</span>
            </div>
            <div className="bar" />
            {c.rows.map(([label, color]) => (
              <div className="stat-row" key={label}>
                <span className="lab"><i className="dot-c" style={{ background: color }} />{label}</span>
                <span className="cnt">0</span>
                <span className="amt">₹0</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
