// src/middleware/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error(err); // keep it simple — in prod use proper logger
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({
    success: false,
    error: {
      message,
      ...(process.env.NODE_ENV === 'development' ? { stack: err.stack } : {})
    }
  });
};
