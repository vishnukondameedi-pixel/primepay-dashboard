import { useState } from 'react'

// [label, key, placeholder, required, input type]
const fields = [
  ['Order Id', 'orderId', 'Enter order id', true],
  ['Beneficiary Id', 'beneficiaryId', 'Enter amount', true],
  ['Bank Account Number', 'account', 'Enter bank account number', true],
  ['Ifsc Code', 'ifsc', 'Enter ifsc code', true],
  ['Customer Name', 'customer', 'Enter customer name', true],
  ['Mobile Number', 'mobile', 'Enter mobile number', true],
  ['Payment Date', 'paymentDate', '', true, 'datetime-local'],
  ['Transaction Id', 'txnId', 'Enter transaction id', true],
  ['Receipt No.', 'receipt', 'Enter receipt number', true],
  ['Order Amount', 'orderAmount', 'Enter order amount', true],
  ['Convenience Fee Amount', 'fee', 'Enter convenience fee amount', true],
  ['Card Number Last 4 Digits', 'card', 'Enter card number', false],
  ['Card Network', 'network', 'Enter card network', false],
  ['Service Name', 'service', 'Enter Service name', true],
]

export default function PdfGeneration() {
  const [values, setValues] = useState({})

  const onSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to your PDF generation API
    console.log('Generate PDF with', values)
    alert('Form is valid. Connect the Generate button to your PDF API.')
  }

  return (
    <form className="card pdf-card" onSubmit={onSubmit}>
      <h3>Generate PDF</h3>
      <div className="pdf-grid">
        {fields.map(([label, key, ph, req, type]) => (
          <div key={key}>
            <label htmlFor={key}>{label}{req && <i>*</i>}</label>
            <input
              id={key}
              type={type || 'text'}
              placeholder={ph}
              required={req}
              value={values[key] || ''}
              onChange={(e) => setValues({ ...values, [key]: e.target.value })}
            />
          </div>
        ))}
      </div>
      <div className="pdf-foot">
        <button type="submit" className="btn primary" style={{ padding: '16px 56px' }}>Generate</button>
      </div>
    </form>
  )
}
