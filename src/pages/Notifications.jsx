import { useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import { notifications } from '../data'

function Promo() {
  return (
    <div className="promo">
      <div className="t">SERVER UPDATE</div>
      <div className="r"><b>TRAVEL</b> · Rate 1.50%</div>
      <div className="r"><b>TRAVEL PURE</b> · Rate 1.50%</div>
      <div className="r"><b>E-COM</b> · Rate 2.52%</div>
      <div className="r"><b>BILL PAYMENTS</b> · 0 Charges</div>
      <div className="r"><b>PAYOUTS</b> · WORKING ✓</div>
    </div>
  )
}

export default function Notifications() {
  const [tab, setTab] = useState('all')
  const [unread, setUnread] = useState(5)
  const tabs = [['all', 'All 6'], ['unread', `Unread ${unread}`], ['alerts', 'Alerts 6'], ['refunds', 'Refunds 0'], ['account', 'Account 0']]

  return (
    <>
      <div className="notif-head">
        <div className="chips">
          {tabs.map(([k, l]) => (
            <button key={k} className={`chip ${tab === k ? 'active' : ''}`} onClick={() => setTab(k)}>{l}</button>
          ))}
        </div>
        <button className="link-btn" onClick={() => setUnread(0)}>Mark all as read</button>
      </div>

      {notifications.map((n, i) => (
        <div className="card notif" key={i}>
          <div className="ico"><AlertTriangle size={22} /></div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h4>{n.title} <span className="tag">Admin alert</span></h4>
            <div>{n.text}</div>
            {n.promo && <div className="img"><Promo /></div>}
            <div className="time">{n.time}</div>
          </div>
          {unread > 0 && <span className="unread" />}
        </div>
      ))}
    </>
  )
}
