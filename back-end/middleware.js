// ALLOW CROSS ORIGIN ACCESS FROM FRONTEND
const cors = (req, res, next) => {
  res.set("ACCESS-CONTROL-ALLOW-ORIGIN", "http://127.0.0.1:5500");
  res.set("ACCESS-CONTROL-ALLOW-CREDENTIALS", "true");
  res.set("ACCESS-CONTROL-ALLOW-HEADERS", "*");
  res.set("ACCESS-CONTROL-ALLOW-METHODS", "*");
  next();
};

module.exports = { cors };
