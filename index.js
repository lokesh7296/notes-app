const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Notes App is running.');
});

app.get('/notes', (req, res) => {
  const notes = [
    { id: 1, text: 'Learn Docker' },
    { id: 2, text: 'Learn Kubernetes' },
    { id: 3, text: 'Learn CI/CD' }
  ];
  res.json(notes);
});

app.listen(PORT, () => {
  console.log('server running on port ${PORT}');
});
