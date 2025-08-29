import Link from "next/link"

export default function Page(){
  return (
    <div className="grid grid2">
      <section className="hero">
        <h2 className="h1">One Website. All Services.</h2>
        <p className="small">
          Registration Fee: <b>₹599</b> • Age: <b>16–42</b> • AI KYC (Aadhaar/PAN + Selfie Liveness) •
          Nationalised Bank only (SBI, PNB, BOB, Union, Canara, BOI, Central, Indian, UCO, PSB).
        </p>
        <div style={{display:'flex', gap:8, marginTop:12}}>
          <Link className="btn primary" href="/programs#request">Request Help</Link>
          <Link className="btn" href="/programs#offer">Offer Service</Link>
          <Link className="btn" href="/wallet">Open Wallet</Link>
        </div>
      </section>

      <section className="hero">
        <h3 className="h1">ANSP — National Support Program</h3>
        <p className="small">Food, Health, Jobs, Shelter, Legal • Non-refundable; Govt policy applies • 1% platform fee to ARTB.</p>
        <a className="btn" href="https://razorpay.me/@artbcontractorsprivatelimited" target="_blank">Pay via Razorpay</a>
      </section>
    </div>
  )
}
