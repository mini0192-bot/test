import {useEffect, useState} from 'react'

export default function Home() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/appointments')
      .then(r => r.json())
      .then(data => setAppointments(data))
      .finally(() => setLoading(false))
  }, [])

  function markNoShow(id) {
    setAppointments(prev => prev.map(a => a.id === id ? {...a, status: 'no-show'} : a))
    // In a real app we'd POST to /api/appointments/:id
  }

  return (
    <main style={{fontFamily: 'Inter, system-ui, sans-serif', padding: 32}}>
      <div style={{maxWidth: 900, margin: '0 auto'}}>
        <h1 style={{fontSize: 36}}>Clinic Scheduler — No-show Reduction</h1>
        <p style={{color:'#555'}}>Simple demo: view today's appointments and mark no-shows. Integrate SMS reminders and waitlist automation in a full build.</p>

        <section style={{marginTop:24}}>
          <h2>Today's appointments</h2>
          {loading ? <p>Loading…</p> : (
            <table style={{width:'100%', borderCollapse:'collapse'}}>
              <thead>
                <tr>
                  <th style={{textAlign:'left', padding:8}}>Time</th>
                  <th style={{textAlign:'left', padding:8}}>Patient</th>
                  <th style={{textAlign:'left', padding:8}}>Status</th>
                  <th style={{padding:8}}></th>
                </tr>
              </thead>
              <tbody>
                {appointments.map(a => (
                  <tr key={a.id} style={{borderTop:'1px solid #eee'}}>
                    <td style={{padding:8}}>{a.time}</td>
                    <td style={{padding:8}}>{a.name}</td>
                    <td style={{padding:8}}>{a.status}</td>
                    <td style={{padding:8}}>
                      {a.status !== 'no-show' && (
                        <button onClick={() => markNoShow(a.id)} style={{padding:'6px 10px', borderRadius:6}}>Mark no-show</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>

      </div>
    </main>
  )
}
