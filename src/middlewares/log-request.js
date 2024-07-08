export const requestLogger = (req, res, next) => {
  const reqInfo = {
    method: req.method,
    url: req.originalUrl,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  };
  console.log(reqInfo);
  next();
};
