const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());

// app.use((req, res, next) => {
//   const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//   console.log('User IP Address:', ip);
//   next();
// });

app.get('/api/data', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('User IP Address:', ip);
  res.send({ip: ip});
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
