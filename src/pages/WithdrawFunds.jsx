import { useState } from 'react'
import { Landmark, Plus, Search, ChevronUp, WalletCards, X } from 'lucide-react'
import AddBankAccountModal from '../components/AddBankAccountModal'

export default function WithdrawFunds() {
  const [open, setOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [accounts, setAccounts] = useState([])

  function addAccount(account) {
    setAccounts((current) => [...current, account])
  }

  return (
    <>
      <div className="wallet-hero">
        <div><small>Funds wallet</small><div className="big">₹ 0.00</div></div>
        <div className="sep" />
        <div><small>Commission wallet</small><div className="big">₹ 66,710.19</div></div>
      </div>

      <div className="wallet-actions">
        <div className="tabs"><button className="tab active">Withdraw funds</button></div>
        <div style={{ display: 'flex', gap: 10 }}><button className="btn primary" onClick={() => setOpen(true)}>Withdraw</button><button className="btn">History</button></div>
      </div>

      <div className="card panel-row" style={{ marginBottom: 20 }}>
        <div className="ic-sq"><Plus size={20} /></div><h4>ADD ACCOUNT</h4>
        <button className="btn primary" onClick={() => setAccountOpen(true)}><Plus size={16} /> Add Account</button>
      </div>

      <div className="card">
        <div className="panel-row" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ic-sq"><Landmark size={20} /></div>
          <h4>Withdraw account list <span className="count-pill">{accounts.length}</span></h4>
          <button className="btn icon"><ChevronUp size={18} /></button>
        </div>
        <div style={{ padding: '14px 26px', borderBottom: '1px solid var(--border)' }}>
          <div className="search" style={{ width: 300 }}><Search size={18} /><input placeholder="Search name / account no..." /></div>
        </div>
        <div style={{ padding: '30px 26px' }}>
          {accounts.length === 0 ? 'No bank accounts added yet.' : accounts.map((account, index) => (
            <div className="bank-account-row" key={index}><div className="bank-account-icon"><Landmark size={20} /></div><div><b>{account.bank}</b><span>{account.holder} ·••• {account.number.slice(-4)}</span></div><span className="badge active">Active</span></div>
          ))}
        </div>
      </div>

      {open && <div className="withdraw-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
        <div className="withdraw-modal" role="dialog" aria-modal="true">
          <div className="withdraw-modal-head"><div><h3>Withdraw funds</h3><p>Transfer funds to your added bank account.</p></div><button className="withdraw-close" onClick={() => setOpen(false)}><X size={20} /></button></div>
          <div className="withdraw-balance"><span>Available balance</span><strong>₹ 0.00</strong></div>
          <form className="withdraw-form" onSubmit={(event) => { event.preventDefault(); setOpen(false) }}>
            <label><span>Withdraw from wallet*</span><select defaultValue="funds"><option value="funds">Funds wallet</option><option value="commission">Commission wallet</option></select></label>
            <label><span>Bank account*</span><select defaultValue=""><option value="" disabled>Select account</option></select></label>
            <label><span>Amount*</span><div className="withdraw-amount"><b>₹</b><input type="number" min="1" placeholder="Enter amount" /><button type="button">MAX</button></div></label>
            <label><span>Remarks <small>(Optional)</small></span><textarea rows="3" placeholder="Enter remarks" /></label>
            <div className="withdraw-summary"><div><span>Withdrawal amount</span><strong>₹ 0.00</strong></div><div><span>Processing fee</span><strong>₹ 0.00</strong></div><div><span>You receive</span><strong>₹ 0.00</strong></div></div>
            <div className="withdraw-actions"><button type="button" className="btn ghost" onClick={() => setOpen(false)}>Cancel</button><button type="submit" className="btn primary"><WalletCards size={17} /> Submit withdrawal</button></div>
          </form>
        </div>
      </div>}

      {accountOpen && <AddBankAccountModal open={accountOpen} onClose={() => setAccountOpen(false)} onAdded={addAccount} />}
    </>
  )
}
