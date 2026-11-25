import { useMemo, useState } from 'react'
import { Search, Zap, Flame, Droplets, Wifi, Smartphone, Tv, CreditCard, ShieldCheck, Landmark, Building2, Fuel, ReceiptText, X } from 'lucide-react'

const categories = [
  { name: 'Electricity', icon: Zap, color: '#f59e0b', operators: ['APSPDCL', 'TSSPDCL', 'TNEB', 'BESCOM'] },
  { name: 'LPG Gas', icon: Flame, color: '#ef4444', operators: ['HP Gas', 'Indane', 'Bharat Gas'] },
  { name: 'Water', icon: Droplets, color: '#2563eb', operators: ['Hyderabad Water Board', 'BWSSB', 'CWC'] },
  { name: 'Broadband Postpaid', icon: Wifi, color: '#7c3aed', operators: ['Airtel Broadband', 'JioFiber', 'ACT Fibernet'] },
  { name: 'Mobile Postpaid', icon: Smartphone, color: '#06b6d4', operators: ['Airtel', 'Jio', 'Vi'] },
  { name: 'DTH', icon: Tv, color: '#dc2626', operators: ['Tata Play', 'Dish TV', 'Sun Direct'] },
  { name: 'Credit Card', icon: CreditCard, color: '#0f766e', operators: ['Visa', 'Mastercard', 'RuPay'] },
  { name: 'Insurance', icon: ShieldCheck, color: '#16a34a', operators: ['LIC', 'HDFC Life', 'ICICI Prudential'] },
  { name: 'Loan Repayment', icon: Landmark, color: '#4f46e5', operators: ['HDFC Bank', 'Bajaj Finance', 'L&T Finance'] },
  { name: 'Municipal Taxes', icon: Building2, color: '#ea580c', operators: ['GHMC', 'Municipal Corporation'] },
  { name: 'FASTag', icon: Fuel, color: '#0891b2', operators: ['FASTag Recharge'] },
  { name: 'Other Bills', icon: ReceiptText, color: '#64748b', operators: ['Housing Society', 'Cable TV'] },
]

export default function BillPaymentServices() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const [operator, setOperator] = useState('')
  const [customerId, setCustomerId] = useState('')

  const filtered = useMemo(() => categories.filter((item) => item.name.toLowerCase().includes(query.toLowerCase().trim())), [query])

  function openCategory(category) {
    setSelected(category)
    setOperator(category.operators[0] || '')
    setCustomerId('')
  }

  return (
    <>
      <div className="bill-service-head">
        <div><h2>Bill Payments</h2><p>Pay your bills using one secure payment flow.</p></div>
        <div className="search bill-search"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search bill category" /></div>
      </div>

      <div className="bill-category-grid">
        {filtered.map((category) => {
          const Icon = category.icon
          return <button type="button" className="bill-category-card" key={category.name} onClick={() => openCategory(category)}>
            <span className="bill-category-icon" style={{ background: `${category.color}12`, color: category.color }}><Icon size={26} /></span>
            <span><b>{category.name}</b><small>{category.operators.length} providers</small></span>
          </button>
        })}
      </div>

      {filtered.length === 0 && <div className="card empty">No bill categories found</div>}

      {selected && <div className="withdraw-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}>
        <div className="withdraw-modal bill-payment-modal" role="dialog" aria-modal="true">
          <div className="withdraw-modal-head"><div><h3>{selected.name} payment</h3><p>Select a provider and enter customer details.</p></div><button className="withdraw-close" onClick={() => setSelected(null)}><X size={20} /></button></div>
          <form className="withdraw-form" onSubmit={(event) => { event.preventDefault(); alert('Payment details ready. Connect this form to your BBPS API.') }}>
            <label><span>Provider*</span><select value={operator} onChange={(event) => setOperator(event.target.value)}>{selected.operators.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label><span>Customer ID / Account number*</span><input className="bill-text-input" value={customerId} onChange={(event) => setCustomerId(event.target.value)} placeholder="Enter customer ID" required /></label>
            <label><span>Amount*</span><div className="withdraw-amount"><b>₹</b><input type="number" min="1" placeholder="Enter amount" required /><button type="button">FETCH BILL</button></div></label>
            <div className="bill-info"><ShieldCheck size={18} /><span>Secure BBPS bill payment</span></div>
            <div className="withdraw-actions"><button type="button" className="btn ghost" onClick={() => setSelected(null)}>Cancel</button><button type="submit" className="btn primary">Proceed to pay</button></div>
          </form>
        </div>
      </div>}
    </>
  )
}
