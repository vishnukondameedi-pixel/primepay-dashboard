import { useState } from 'react'
import { Search, Calendar, Download } from 'lucide-react'
import { TableFooter } from '../components/Table'
import { commissions } from '../data'

function Summary({ opening, credited, debited, closing }) {
  return (
    <div className="sum-grid">
      <div className="sum"><small>Opening balance</small><strong>₹ {opening}</strong></div>
      <div className="sum green"><small>Credited amount</small><strong>₹ {credited}</strong></div>
      <div className="sum red"><small>Debited amount</small><strong>₹ {debited}</strong></div>
      <div className="sum blue"><small>Closing balance</small><strong>₹ {closing}</strong></div>
    </div>
  )
}

function Toolbar({ title }) {
  return (
    <div className="mini-card-head" style={{ paddingBottom: 18 }}>
      <h4>{title}</h4>
      <div className="toolbar">
        <div className="search" style={{ width: 275 }}>
          <Search size={18} />
          <input placeholder="Search ID or name" />
        </div>
        <button className="btn date-btn"><Calendar size={16} /> 26 Oct – 24 Nov 2026</button>
        <button className="btn primary" style={{ height: 48 }}><Download size={16} /> Download</button>
      </div>
    </div>
  )
}

function Funds() {
  const [f, setF] = useState('all')
  return (
    <>
      <Summary opening="0.00" credited="0.00" debited="0.00" closing="0.00" />
      <div className="card">
        <Toolbar title="Funds report" />
        <div className="chips" style={{ padding: '0 26px 22px' }}>
          {[['all', 'All 0'], ['debit', 'Debit 0'], ['credit', 'Credit 0']].map(([k, l]) => (
            <button key={k} className={`chip ${f === k ? 'active' : ''}`} onClick={() => setF(k)}>{l}</button>
          ))}
        </div>
        <table>
          <thead>
            <tr><th>S.No</th><th>Transaction</th><th>Flow</th><th>Type/Category</th><th>Opening</th><th>Amount</th><th>Closing</th><th>Date</th></tr>
          </thead>
        </table>
        <div className="empty" style={{ borderTop: '1px solid var(--border)' }}>No records found</div>
        <TableFooter />
      </div>
    </>
  )
}

function Commissions() {
  const [f, setF] = useState('all')
  return (
    <>
      <Summary opening="1,90,944.94" credited="1,67,040.25" debited="2,91,275.00" closing="66,710.19" />
      <div className="card">
        <Toolbar title="Commissions report" />
        <div className="chips" style={{ padding: '0 26px 22px' }}>
          {[['all', 'All 21875'], ['debit', 'Debit 0'], ['credit', 'Credit 10']].map(([k, l]) => (
            <button key={k} className={`chip ${f === k ? 'active' : ''}`} onClick={() => setF(k)}>{l}</button>
          ))}
        </div>
        <table>
          <thead>
            <tr><th>S.No</th><th>Transaction</th><th>Type</th><th>Opening</th><th>Amount</th><th>Closing</th><th>Date</th></tr>
          </thead>
          <tbody>
            {commissions.map((c, i) => (
              <tr key={c.id}>
                <td className="muted">{String(i + 1).padStart(2, '0')}</td>
                <td><span className="tx-pill">{c.id}</span></td>
                <td><span className="badge credit">Credit</span></td>
                <td>₹ {c.opening}</td>
                <td className="pos">+₹ {c.change}</td>
                <td>₹ {c.closing}</td>
                <td>
                  <b>24 Nov 2026</b>
                  <div className="muted" style={{ marginTop: 4 }}>07:42 AM</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default function Reports() {
  const [tab, setTab] = useState('funds')
  return (
    <>
      <div className="tabs">
        <button className={`tab ${tab === 'funds' ? 'active' : ''}`} onClick={() => setTab('funds')}>Funds</button>
        <button className={`tab ${tab === 'commissions' ? 'active' : ''}`} onClick={() => setTab('commissions')}>Commissions</button>
      </div>
      {tab === 'funds' ? <Funds /> : <Commissions />}
    </>
  )
}
