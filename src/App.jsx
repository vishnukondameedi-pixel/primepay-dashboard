import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Wallet from './pages/Wallet'
import Reports from './pages/Reports'
import MasterDistributors from './pages/MasterDistributors'
import Notifications from './pages/Notifications'
import Help from './pages/Help'
import Profile from './pages/Profile'
import PdfGeneration from './pages/PdfGeneration'
import Login from './pages/Login'
import AddMasterDistributor from './pages/AddMasterDistributor'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/master-distributors" element={<MasterDistributors />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/help" element={<Help />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pdf-generation" element={<PdfGeneration />} />
          <Route path="/add-master-distributor" element={<AddMasterDistributor />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
