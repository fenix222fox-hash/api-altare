const http = require('http');
const port = process.env.SERVER_PORT || process.env.PORT || 3000;
const jogos = [
  { nome: 'Pokémon Emerald', plataforma: 'GBA', emulador: 'My Boy! / RetroArch' },
  { nome: 'God of War: Chains of Olympus', plataforma: 'PSP', emulador: 'PPSSPP' },
  { nome: 'Mario Kart Wii', plataforma: 'Wii', emulador: 'Dolphin' },
  { nome: 'The Legend of Zelda: Ocarina of Time', plataforma: 'N64', emulador: 'RetroArch / M64Plus FZ' }
];
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }
  if (req.url === '/api/jogos') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jogos));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'API api-altare no ar' }));
});
server.listen(port, '0.0.0.0', () => {
  console.log(`API ouvindo na porta ${port}`);
});
