import { useState } from 'react'
import { RefreshCw, Plus, ChevronUp, Search, Landmark, Calendar, Download, Filter, Eye, X } from 'lucide-react'
import { commissions } from '../data'
import AddBankAccountModal from '../components/AddBankAccountModal'

export default function Wallet() {
  const [tab, setTab] = useState('withdraw')
  const [withdrawOpen, setWithdrawOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [accounts, setAccounts] = useState([])

  return (
    <>
      <div className="wallet-hero">
        <div>
          <small>Funds wallet</small>
          <div className="big">₹ 0.00</div>
        </div>
        <div className="sep" />
        <div>
          <small>Commission wallet</small>
          <div className="big">₹ 66,710.19</div>
        </div>
        <button className="refresh" aria-label="Refresh"><RefreshCw size={18} /></button>
      </div>

      <div className="wallet-actions">
        <div className="tabs">
          <button className={`tab ${tab === 'withdraw' ? 'active' : ''}`} onClick={() => setTab('withdraw')}>Withdraw funds</button>
          <button className={`tab ${tab === 'commissions' ? 'active' : ''}`} onClick={() => setTab('commissions')}>Commissions</button>
        </div>
        {tab === 'withdraw' && (
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn primary" onClick={() => setWithdrawOpen(true)}>Withdraw</button>
            <button className="btn">History</button>
          </div>
        )}
      </div>

      {tab === 'withdraw' ? (
        <>
          <div className="card panel-row" style={{ marginBottom: 20 }}>
            <div className="ic-sq" style={{ background: '#fff3e0' }}><Plus size={20} /></div>
            <h4 style={{ letterSpacing: '.01em' }}>ADD ACCOUNT</h4>
            <button className="btn primary" onClick={() => setAccountOpen(true)}><Plus size={16} /> Add Account</button>
          </div>

          <div className="card">
            <div className="panel-row" style={{ borderBottom: '1px solid var(--border)' }}>
              <div className="ic-sq"><Landmark size={20} /></div>
              <h4>Withdraw account list <span className="count-pill">{accounts.length}</span></h4>
              <button className="btn icon" aria-label="Collapse"><ChevronUp size={18} /></button>
            </div>
            <div style={{ padding: '14px 26px', borderBottom: '1px solid var(--border)' }}>
              <div className="search" style={{ width: 300 }}>
                <Search size={18} />
                <input placeholder="Search name / account no..." />
              </div>
            </div>
            {accounts.length === 0 ? (
              <div style={{ padding: '30px 26px' }}>No bank accounts added yet.</div>
            ) : (
              <div style={{ padding: '14px 26px' }}>
                {accounts.map((account, index) => (
                  <div className="bank-account-row" key={index}>
                    <div className="bank-account-icon"><Landmark size={20} /></div>
                    <div><b>{account.bank}</b><span>{account.holder} ·••• {account.number.slice(-4)}</span></div>
                    <span className="badge active">Active</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <p className="footnote">
            This site is protected by reCAPTCHA and the Google <a href="#privacy">Privacy Policy</a> and{' '}
            <a href="#terms">Terms of Service</a> apply.
          </p>

          {withdrawOpen && (
            <div className="withdraw-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setWithdrawOpen(false) }}>
              <div className="withdraw-modal" role="dialog" aria-modal="true" aria-labelledby="withdraw-title">
                <div className="withdraw-modal-head">
                  <div>
                    <h3 id="withdraw-title">Withdraw funds</h3>
                    <p>Transfer funds to your added bank account.</p>
                  </div>
                  <button className="withdraw-close" onClick={() => setWithdrawOpen(false)} aria-label="Close"><X size={20} /></button>
                </div>

                <div className="withdraw-balance">
                  <span>Available balance</span>
                  <strong>₹ 0.00</strong>
                </div>

                <form className="withdraw-form" onSubmit={(event) => { event.preventDefault(); setWithdrawOpen(false) }}>
                  <label>
                    <span>Withdraw from wallet*</span>
                    <select defaultValue="funds"><option value="funds">Funds wallet</option><option value="commission">Commission wallet</option></select>
                  </label>

                  <label>
                    <span>Bank account*</span>
                    <select defaultValue=""><option value="" disabled>Select account</option><option value="new">Add / use added account</option></select>
                  </label>

                  <label>
                    <span>Amount*</span>
                    <div className="withdraw-amount"><b>₹</b><input type="number" min="1" placeholder="Enter amount" /><button type="button">MAX</button></div>
                  </label>

                  <label>
                    <span>Remarks <small>(Optional)</small></span>
                    <textarea placeholder="Enter remarks" rows="3" />
                  </label>

                  <div className="withdraw-summary">
                    <div><span>Withdrawal amount</span><strong>₹ 0.00</strong></div>
                    <div><span>Processing fee</span><strong>₹ 0.00</strong></div>
                    <div><span>You receive</span><strong>₹ 0.00</strong></div>
                  </div>

                  <div className="withdraw-actions">
                    <button type="button" className="btn ghost" onClick={() => setWithdrawOpen(false)}>Cancel</button>
                    <button type="submit" className="btn primary">Submit withdrawal</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {accountOpen && (
            <AddBankAccountModal open={accountOpen} onClose={() => setAccountOpen(false)} onAdded={(newAccount) => setAccounts((current) => [...current, newAccount])} />
          )}
        </>
      ) : (
        <div className="card">
          <div className="mini-card-head">
            <div>
              <h4>Commissions</h4>
              <p>Commission amount is net of TDS.</p>
            </div>
            <div className="toolbar">
              <div className="search" style={{ width: 275 }}>
                <Search size={18} />
                <input placeholder="Search ID or name" />
              </div>
              <button className="btn date-btn"><Calendar size={16} /> 26 Oct – 24 Nov 2026</button>
              <button className="btn primary" style={{ height: 48 }}><Download size={16} /> Download</button>
              <button className="btn ghost" style={{ height: 48 }}>Filter <Filter size={16} fill="currentColor" /></button>
            </div>
          </div>
          <table>
            <thead>
              <tr><th>S.No</th><th>Transaction</th><th>Service</th><th>Amount</th><th>Commission</th><th>Date</th><th /></tr>
            </thead>
            <tbody>
              {commissions.map((c, i) => (
                <tr key={c.id}>
                  <td className="muted">{String(i + 1).padStart(2, '0')}</td>
                  <td><span className="tx-pill">{c.id}</span></td>
                  <td>PAYIN</td>
                  <td><b>₹ {c.amount}</b></td>
                  <td><b>₹ {c.commission}</b></td>
                  <td>
                    24 Nov 2026
                    <div className="muted" style={{ marginTop: 4 }}>07:42 AM</div>
                  </td>
                  <td><button className="eye-btn" aria-label="View"><Eye size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
