import { useState } from 'react'
import { TableFooter } from '../components/Table'

export default function Help() {
  const [f, setF] = useState('all')
  return (
    <>
      <div className="chips">
        {[['all', 'All 0'], ['open', 'Open 0'], ['progress', 'In progress 0'], ['resolved', 'Resolved 0']].map(([k, l]) => (
          <button key={k} className={`chip ${f === k ? 'active' : ''}`} onClick={() => setF(k)}>{l}</button>
        ))}
      </div>
      <p className="help-note">
        Raise an issue from Wallet payouts or POS history when a payment stays incomplete for more than 5 minutes.
        Open tickets stay until resolved; resolved tickets auto-delete after 30 days.
      </p>
      <div className="card">
        <div className="mini-card-head">
          <h4>Your tickets <span className="muted" style={{ fontWeight: 400 }}>0</span></h4>
          <div className="search" style={{ width: 480, borderRadius: 12 }}>
            <input placeholder="Search ticket or transaction..." />
          </div>
        </div>
        <table>
          <thead>
            <tr><th>#</th><th>Ticket ID</th><th>Subject</th><th>Transaction</th><th>Raised</th><th>Status</th><th style={{ textAlign: 'right' }}>Action</th></tr>
          </thead>
        </table>
        <div className="empty" style={{ borderTop: '1px solid var(--border)' }}>No records found</div>
        <TableFooter />
      </div>
    </>
  )
}
