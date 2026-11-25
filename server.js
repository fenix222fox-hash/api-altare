const http = require('http');

const port = process.env.SERVER_PORT || process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'API api-altare no ar' }));
});

server.listen(port, '0.0.0.0', () => {
  console.log(`API ouvindo na porta ${port}`);
});
