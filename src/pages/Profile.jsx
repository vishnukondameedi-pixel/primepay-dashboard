import { useState } from 'react'
import { Pencil, Lock } from 'lucide-react'

export default function Profile() {
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({
    name: 'GURRAM SOWMYA',
    mobile: '+91 87906 92463',
    email: 'gurramsowmya1974@gmail.com',
  })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const Field = ({ label, k }) => (
    <div className="field">
      <label>{label}</label>
      {editing ? <input className="val" value={form[k]} onChange={set(k)} /> : <div className="val">{form[k]}</div>}
    </div>
  )

  return (
    <div className="profile-wrap">
      <div className="card">
        <div className="p-head">
          <div className="avatar lg">GS</div>
          <div className="info">
            <b>{form.name}</b>
            <span>Super Distributor · PSSD01</span>
          </div>
          <button className="btn" onClick={() => setEditing(!editing)}>
            <Pencil size={16} /> {editing ? 'Save' : 'Edit details'}
          </button>
        </div>
        <div className="fields">
          <Field label="Full name" k="name" />
          <Field label="Mobile number" k="mobile" />
          <Field label="Email" k="email" />
        </div>
      </div>

      <div className="card">
        <div className="pass-row">
          <div className="ic-sq"><Lock size={22} /></div>
          <div className="info">
            <b>Passcode</b>
            <span>The 6-digit code you use to sign in.</span>
          </div>
          <button className="btn">Change passcode</button>
        </div>
      </div>
    </div>
  )
}
