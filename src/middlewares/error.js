export const errorMiddleware = (err, req, res) => {
  res.status(err.status).json({
    status: err.status,
    message: err.message,
    errorCode: err.errorCode,
    errors: err.errors,
  });
};
