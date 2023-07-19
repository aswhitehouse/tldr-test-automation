const { spawn } = require('child_process');

const serverProcess = spawn('node', ['sd-server.js']);

process.on('exit', () => {
  serverProcess.kill();
});
