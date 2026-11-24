import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ShieldCheck } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <main className="login-page">
      <section className="login-hero" aria-label="Secure payments">
        <div className="login-hero-overlay" />
      </section>

      <section className="login-panel">
        <form className="login-card" onSubmit={handleSubmit}>
          <div className="primepay-logo" aria-label="PrimePay">
            <div className="primepay-mark"><span>P</span></div>
            <div>
              <div className="primepay-name">PRIMEPAY</div>
              <div className="primepay-tagline">ONE STOP SOLUTION FOR ALL PAYMENTS</div>
            </div>
          </div>

          <div className="login-heading">
            <h1>Welcome Back!</h1>
            <p>Enter your user id and password to access your account<br />securely. Welcome back to our platform!</p>
          </div>

          <label className="login-field">
            <span>User ID</span>
            <input type="text" placeholder="Enter your user id" />
          </label>

          <label className="login-field">
            <span>Password</span>
            <div className="password-input">
              <input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" />
              <button
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={21} /> : <Eye size={21} />}
              </button>
            </div>
          </label>

          <div className="forgot-row">
            <button type="button" className="forgot-link">Forgot password?</button>
          </div>

          <button type="submit" className="login-submit">
            Log in
          </button>

          <div className="security-badge">
            <ShieldCheck size={28} />
            <div>
              <strong>PCI DSS Certified</strong>
              <span>Secure payment processing</span>
            </div>
          </div>
        </form>
      </section>
    </main>
  )
}
