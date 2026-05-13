export default function handler(req, res) {
  const sample = [
    { id: 1, time: '09:00', name: 'Kim Ji-ho', status: 'booked' },
    { id: 2, time: '09:30', name: 'Park Min', status: 'booked' },
    { id: 3, time: '10:00', name: 'Lee Soo', status: 'booked' },
    { id: 4, time: '10:30', name: 'Choi Hana', status: 'booked' }
  ]
  res.setHeader('Content-Type', 'application/json')
  res.status(200).send(JSON.stringify(sample))
}
