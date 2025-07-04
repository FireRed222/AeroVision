// server/server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

// ✅ Bind to 0.0.0.0 so Render can detect the open port
server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 JSON Server is running on http://0.0.0.0:${PORT}`);
});
