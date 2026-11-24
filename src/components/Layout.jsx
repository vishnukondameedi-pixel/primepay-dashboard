import { useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
  LayoutGrid, Wallet, BarChart3, Users, Bell, HelpCircle, User, FileText,
  LogOut, ChevronLeft, ChevronRight, X, ExternalLink, MessageCircle,
} from 'lucide-react'
import logo from '../primepay-logo.svg'

const sections = [
  { items: [{ to: '/dashboard', label: 'Dashboard', icon: LayoutGrid }] },
  {
    title: 'MONEY',
    items: [
      { to: '/wallet', label: 'Wallet', icon: Wallet },
      { to: '/reports', label: 'Reports', icon: BarChart3 },
    ],
  },
  { title: 'NETWORK', items: [{ to: '/master-distributors', label: 'Master Distributors', icon: Users }] },
  {
    title: 'ACCOUNT',
    items: [
      { to: '/notifications', label: 'Notifications', icon: Bell, badge: 5 },
      { to: '/help', label: 'Help & Support', icon: HelpCircle },
      { to: '/profile', label: 'Profile & Settings', icon: User },
      { to: '/pdf-generation', label: 'Pdf Generation', icon: FileText },
    ],
  },
]

const titles = {
  '/dashboard': ['Dashboard', 'Overview of your transactions.'],
  '/wallet': ['Wallet', 'Add funds, withdraw and track commissions.'],
  '/reports': ['Reports', 'Funds and commission statements'],
  '/master-distributors': ['Master Distributors', 'Master distributors onboarded by you'],
  '/notifications': ['Notifications', 'Updates from admin and your account'],
  '/help': ['Help & Support', 'Raise and track issues with your transactions'],
  '/profile': ['Profile & Settings', 'Your account details and security'],
  '/pdf-generation': ['Pdf Generation', 'Generate and download PDFs'],
  '/add-master-distributor': ['Master Distributors', 'Add a new master distributor'],
}

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false)
  const [banner, setBanner] = useState(true)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [title, sub] = titles[pathname] || titles['/dashboard']

  return (
    <div className="shell">
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="logo-box">
          <img className="logo-img" src={logo} alt="PrimePay" />
        </div>
        <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)} aria-label="Toggle sidebar">
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
        <nav className="nav">
          {sections.map((s, i) => (
            <div key={i}>
              {s.title && <div className="nav-section">{s.title}</div>}
              {s.items.map(({ to, label, icon: Icon, badge }) => (
                <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  <Icon size={20} />
                  <span className="nav-label">{label}</span>
                  {badge && <span className="nav-badge">{badge}</span>}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>
        <div className="logout">
          <button onClick={() => navigate('/login')}>
            <LogOut size={20} />
            <span className="nav-label">Logout</span>
          </button>
        </div>
      </aside>

      <div className="main">
        {banner && (
          <div className="banner">
            <MessageCircle size={24} />
            <span>Follow the PrimePay Technologies Pvt Ltd channel on WhatsApp</span>
            <a href="#follow">Follow <ExternalLink size={14} /></a>
            <button className="close" onClick={() => setBanner(false)} aria-label="Close banner"><X size={20} /></button>
          </div>
        )}
        <header className="topbar">
          <div>
            <h1>{title}</h1>
            <p>{sub}</p>
          </div>
          <div className="spacer" />
          <div className="funds-pill">Funds ₹ 0.00</div>
          <button className="bell" onClick={() => navigate('/notifications')} aria-label="Notifications">
            <Bell size={20} />
            <span className="dot">5</span>
          </button>
          <div className="user">
            <div className="avatar">GS</div>
            <div>
              <div className="uname">GURRAM SOWMYA</div>
              <div className="uid">PSSD01</div>
            </div>
          </div>
        </header>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
