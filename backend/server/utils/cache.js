const NodeCatched = require("node-cache");
const cache = new NodeCatched({ stdTTL: 300});

const caching = (duration = 300) => (req, res, next) => {
  if (req.method !== "Get") return next();

  const guestId = req.headers["x-guest-id"];
  const key = `${guestId}:${req.originalUrl}`;

  const cachedResponse = cache.get(key);
  if (cachedResponse) {
    return res.json(cachedResponse);
  }
  const originalJson = res.json.bind(res);
  res.json = (body) => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      cache.set(key, body, duration);
    }
    return originalJson(body);
  };

  next();
};

const clearGuestCache = (req, res, next) => {
  res.on("finish", () => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      const guestId = req.guestId || req.headers["x-guest-id"] || "public";
      cache.keys().forEach((key) => {
        if (key.startsWith(`${guestId}:`)) {
          cache.del(key);
        }
      });
    }
  });
  next();
};

module.exports = { caching, clearGuestCache };
