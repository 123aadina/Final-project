const cors = (req, res, next) => {
  res.set("ACCESS-CONTROL-ALLOW-ORIGIN", "http://localhost:3000");
  res.set("ACCESS-CONTROL-ALLOW-CREDENTIALS", "true");
  res.set(
    "ACCESS-CONTROL-ALLOW-HEADERS",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.set(
    "ACCESS-CONTROL-ALLOW-METHODS",
    "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
  );
  next();
};

module.exports = { cors };
