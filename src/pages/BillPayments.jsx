import { useState } from 'react'
import { Search, Calendar, Download } from 'lucide-react'

export default function BillPayments() {
  const [tab, setTab] = useState('all')
  const tabs = [['all', 'All 0'], ['success', 'Success 0'], ['failed', 'Failed 0'], ['processing', 'Processing 0'], ['refund', 'Refund 0']]

  return (
    <>
      <div className="mini-card-head card">
        <div><h4>Bill payment transactions</h4><p>View and search your bill payment transactions.</p></div>
        <div className="toolbar">
          <div className="search" style={{ width: 280 }}><Search size={18} /><input placeholder="Search transaction ID" /></div>
          <button className="btn date-btn"><Calendar size={16} /> Select date</button>
          <button className="btn primary"><Download size={16} /> Download</button>
        </div>
      </div>
      <div className="chips" style={{ margin: '20px 0' }}>{tabs.map(([key, label]) => <button key={key} className={`chip ${tab === key ? 'active' : ''}`} onClick={() => setTab(key)}>{label}</button>)}</div>
      <div className="card"><table><thead><tr><th>S.No</th><th>Transaction</th><th>Operator</th><th>Customer</th><th>Amount</th><th>Status</th><th>Date</th></tr></thead></table><div className="empty" style={{ borderTop: '1px solid var(--border)' }}>No transactions found</div></div>
    </>
  )
}
