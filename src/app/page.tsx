import Link from "next/link"

export default function Page(){
  return (
    <div>
      <h2>Welcome to ARTB World 🌍</h2>
      <p>Registration Fee: ₹599 • Age 16–42 • AI KYC mandatory • Nationalised Bank Only</p>
      <div style={{display:"flex",gap:"8px"}}>
        <Link href="/programs">Programs</Link>
        <Link href="/wallet">Wallet</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  )
}
