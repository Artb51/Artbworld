import Link from "next/link"

export default function Programs(){
  return (
    <div>
      <h2 className="h1">Programs</h2>

      <section id="ansp" className="hero" style={{marginBottom:16}}>
        <h3 className="h1">ANSP — National Support Program</h3>
        <p className="small">Urgent: Food, Health, Jobs, Shelter, Legal • Non-refundable; Govt policy applies • 1% platform fee to ARTB.</p>
        <div style={{display:'flex',gap:8}}>
          <a className="btn" href="https://razorpay.me/@artbcontractorsprivatelimited" target="_blank">Pay via Razorpay</a>
          <Link className="btn primary" href="#request">Request under ANSP</Link>
        </div>
      </section>

      <section className="hero" style={{marginBottom:16}}>
        <h3 className="h1">ERP — Employment Readiness Program</h3>
        <p className="small">Digital skills, resume & interview prep, local placements • Eligibility: 16–42 + AI KYC.</p>
      </section>

      <section className="hero" style={{marginBottom:16}}>
        <h3 className="h1">Other Support</h3>
        <ul>
          <li>Food & Essentials</li>
          <li>Healthcare Guidance</li>
          <li>Education Support</li>
          <li>Shelter & Legal Aid</li>
        </ul>
      </section>

      <section id="request" className="hero" style={{marginBottom:16}}>
        <h3 className="h1">Request Help</h3>
        <p className="small">Registration ₹599 + AI KYC mandatory • Age 16–42 • Nationalised Bank IFSC only (SBIN0, PUNB0, BARB0, UBIN0, CNRB0, BKID0, CBIN0, IDIB0, UCBA0, PSIB0).</p>
      </section>

      <section id="offer" className="hero">
        <h3 className="h1">Offer Service / Volunteer</h3>
        <p className="small">Join as provider/volunteer and help deliver services under verified programs.</p>
      </section>
    </div>
  )
}
