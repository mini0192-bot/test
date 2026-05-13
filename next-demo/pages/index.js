export default function Home() {
  return (
    <main style={{fontFamily: 'Inter, system-ui, sans-serif', padding: 48, textAlign: 'center'}}>
      <div style={{maxWidth: 720, margin: '0 auto'}}>
        <h1 style={{fontSize: 48, marginBottom: 8}}>Acme Product</h1>
        <p style={{fontSize: 18, color: '#555', marginBottom: 24}}>Fast, simple, and delightful — landing page powered by Next.js.</p>
        <a href="#get-started" style={{display: 'inline-block', padding: '12px 20px', background: '#0070f3', color: '#fff', borderRadius: 8, textDecoration: 'none'}}>Get started</a>

        <section id="get-started" style={{marginTop: 40, textAlign: 'left'}}>
          <h2 style={{fontSize: 24}}>Why Acme?</h2>
          <ul>
            <li>Blazing fast performance</li>
            <li>Zero configuration</li>
            <li>Deploy anywhere</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
