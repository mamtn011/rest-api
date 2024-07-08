export const errorMiddleware = (err, req, res, next) => {
  res.status(err.status).json({
    status: err.status,
    message: err.message,
    errorCode: err.errorCode,
    errors: err.errors,
  });
};
