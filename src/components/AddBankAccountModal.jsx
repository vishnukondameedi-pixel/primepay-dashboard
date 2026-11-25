import { useState } from 'react'
import { Landmark, X, ShieldCheck } from 'lucide-react'

export default function AddBankAccountModal({ open, onClose, onAdded }) {
  const [form, setForm] = useState({ holder: '', number: '', confirmNumber: '', ifsc: '', bank: '', branch: '', type: 'Savings' })
  const set = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }))

  if (!open) return null

  function submit(event) {
    event.preventDefault()
    onAdded?.(form)
    onClose()
  }

  return (
    <div className="withdraw-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="withdraw-modal add-account-modal" role="dialog" aria-modal="true" aria-labelledby="add-account-title">
        <div className="withdraw-modal-head">
          <div className="add-account-title"><span className="add-account-icon"><Landmark size={21} /></span><div><h3 id="add-account-title">Add bank account</h3><p>Add an account for payouts and withdrawals.</p></div></div>
          <button type="button" className="withdraw-close" onClick={onClose} aria-label="Close"><X size={20} /></button>
        </div>

        <form className="withdraw-form account-form" onSubmit={submit}>
          <div className="account-form-grid">
            <label><span>Account holder name*</span><input value={form.holder} onChange={set('holder')} placeholder="Enter account holder name" required /></label>
            <label><span>Bank name*</span><input value={form.bank} onChange={set('bank')} placeholder="Enter bank name" required /></label>
            <label><span>Account number*</span><input value={form.number} onChange={set('number')} placeholder="Enter account number" inputMode="numeric" required /></label>
            <label><span>Confirm account number*</span><input value={form.confirmNumber} onChange={set('confirmNumber')} placeholder="Re-enter account number" inputMode="numeric" pattern={form.number} title="Account numbers must match" required /></label>
            <label><span>IFSC code*</span><input value={form.ifsc} onChange={set('ifsc')} placeholder="Enter IFSC code" style={{ textTransform: 'uppercase' }} required /></label>
            <label><span>Branch name</span><input value={form.branch} onChange={set('branch')} placeholder="Enter branch name" /></label>
            <label><span>Account type*</span><select value={form.type} onChange={set('type')}><option>Savings</option><option>Current</option></select></label>
          </div>
          <div className="account-security"><ShieldCheck size={20} /><span>Your bank details are encrypted and used only for payouts.</span></div>
          <div className="withdraw-actions"><button type="button" className="btn ghost" onClick={onClose}>Cancel</button><button type="submit" className="btn primary">Add account</button></div>
        </form>
      </div>
    </div>
  )
}
