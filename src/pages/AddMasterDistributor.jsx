import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, UploadCloud, Check, ChevronRight } from 'lucide-react'

export default function AddMasterDistributor() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)

  const steps = [
    'Personal Information',
    'KYC Details',
    'Bank Information',
    'Velocity Checks & Commission Settings',
  ]

  function nextStep() {
    if (step < 4) setStep(step + 1)
  }

  return (
    <div className="add-master-page">
      <button className="back-btn" onClick={() => navigate('/master-distributors')} aria-label="Back">
        <ArrowLeft size={21} />
      </button>

      <div className="master-stepper">
        {steps.map((label, index) => {
          const number = index + 1
          return (
            <div className="step-group" key={label}>
              <button
                type="button"
                className={`step-circle ${number === step ? 'active' : ''} ${number < step ? 'complete' : ''}`}
                onClick={() => setStep(number)}
              >
                {number < step ? <Check size={18} /> : number}
              </button>
              <span className={number === step ? 'active' : ''}>{label}</span>
              {number < steps.length && <div className="step-line" />}
            </div>
          )
        })}
      </div>

      {step === 1 && (
        <form className="master-form-card" onSubmit={(event) => { event.preventDefault(); nextStep() }}>
          <h3>Personal Information</h3>
          <div className="master-form-grid">
            <label><span>First Name*</span><input placeholder="Enter here" /></label>
            <label><span>Last Name*</span><input placeholder="Enter here" /></label>

            <label><span>Email Address*</span><div className="input-action"><input type="email" placeholder="Enter here" /><button type="button">Send OTP</button></div><small>Didn't receive? <b>Send Again</b></small></label>
            <label><span>Enter OTP*</span><div className="input-action"><input placeholder="Enter here" /><button type="button">Verify OTP</button></div></label>

            <label><span>Mobile Number*</span><div className="input-action"><input type="tel" placeholder="Enter here" /><button type="button">Send OTP</button></div><small>Didn't receive? <b>Send Again</b></small></label>
            <label><span>Enter OTP*</span><div className="input-action"><input placeholder="Enter here" /><button type="button">Verify OTP</button></div></label>

            <label><span>Alternative Mobile Number</span><input type="tel" placeholder="Enter here" /></label>
            <label><span>Business Name*</span><input placeholder="Enter here" /></label>

            <label><span>Business Address*</span><input placeholder="Enter here" /></label>
            <label>
              <span>Upload Photo*</span>
              <div className="upload-field">
                <div><UploadCloud size={18} /><strong>Upload Photo</strong><small>Max size 2MB</small></div>
                <span>Supported formats: JPEG, PNG, PDF</span>
                <button type="button">Browse</button>
              </div>
            </label>
          </div>
          <div className="master-form-actions">
            <button type="submit" className="btn primary">Next <ChevronRight size={17} /></button>
          </div>
        </form>
      )}

      {step > 1 && (
        <div className="master-form-card master-placeholder">
          <h3>{steps[step - 1]}</h3>
          <p>Complete the {steps[step - 1].toLowerCase()} for this master distributor.</p>
          <div className="master-form-actions">
            <button type="button" className="btn ghost" onClick={() => setStep(step - 1)}>Previous</button>
            <button type="button" className="btn primary" onClick={nextStep}>{step === 4 ? 'Submit' : 'Next'} <ChevronRight size={17} /></button>
          </div>
        </div>
      )}
    </div>
  )
}
