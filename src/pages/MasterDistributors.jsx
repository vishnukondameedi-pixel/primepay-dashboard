import { Search, ChevronDown, Calendar, Download, Plus, Eye, Copy } from 'lucide-react'
import { TableFooter } from '../components/Table'
import { distributors } from '../data'
import { useNavigate } from 'react-router-dom'

export default function MasterDistributors() {
  const navigate = useNavigate()

  return (
    <div className="card">
      <div className="mini-card-head">
        <h4>Master Distributors <span className="muted" style={{ fontWeight: 400, marginLeft: 6 }}>{distributors.length}</span></h4>
        <div className="toolbar">
          <div className="search" style={{ width: 375 }}>
            <Search size={18} />
            <input placeholder="Search" />
            <span style={{ borderLeft: '1px solid var(--border)', paddingLeft: 14, color: '#374151', display: 'flex', alignItems: 'center', gap: 8 }}>
              All <ChevronDown size={16} />
            </span>
          </div>
          <button className="btn date-plain"><Calendar size={16} /> Select date</button>
          <button className="btn ghost date-plain" style={{ color: '#374151' }}>Status: All <ChevronDown size={16} /></button>
          <button className="btn ghost date-plain" style={{ color: '#374151' }}>Download <Download size={16} /></button>
          <button className="btn primary" style={{ height: 48 }} onClick={() => navigate('/add-master-distributor')}><Plus size={16} /> Add master distributor</button>
        </div>
      </div>

      <table>
        <thead>
          <tr><th>#</th><th>Agent</th><th>Business</th><th>Onboard</th><th>Wallet</th><th>Last Transaction</th><th>Action</th></tr>
        </thead>
        <tbody>
          {distributors.map((d, i) => (
            <tr key={d.code}>
              <td className="muted">{String(i + 1).padStart(2, '0')}</td>
              <td>
                <div className="agent">
                  <div className="avatar">{d.initials}</div>
                  <div style={{ lineHeight: 1.6 }}>
                    <div><b>{d.name}</b></div>
                    <div>{d.code} <Copy className="copy" size={14} /></div>
                    <div>{d.phone} <Copy className="copy" size={14} /></div>
                    <div className="muted">{d.email}</div>
                  </div>
                </div>
              </td>
              <td className="biz">
                <b>{d.business}</b>
                <span style={{ whiteSpace: 'pre-line' }}>{d.address}</span>
              </td>
              <td>
                <span className={`badge ${d.status.toLowerCase()}`}>{d.status}</span>
                <div style={{ marginTop: 10, fontWeight: 500 }}>Since {d.since}</div>
              </td>
              <td>
                <div className="kv">
                  <span>Comm</span><span>₹ {d.comm}</span>
                  <span>Funds</span><span>₹ {d.funds}</span>
                  {d.t1 && (<><span>T+1</span><span>₹ {d.t1}</span></>)}
                </div>
              </td>
              <td>
                <div className="kv" style={{ gridTemplateColumns: '60px auto' }}>
                  <span>Payin</span><span className="muted">No transactions</span>
                  <span>POS</span><span className="muted">No transactions</span>
                </div>
              </td>
              <td>
                <div className="act">
                  <button className="eye-btn" aria-label="View"><Eye size={16} /></button>
                  <button className="eye-btn" aria-label="Download"><Download size={16} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter shown="1–2 of 2" />
    </div>
  )
}
