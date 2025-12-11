// src/utils/response.js
function successResponse(data = null, message = null) {
  return {
    success: true,
    message,
    data,
  };
}

function errorResponse(message = 'An error occurred', details = null) {
  return {
    success: false,
    message,
    error: details,
  };
}

module.exports = { successResponse, errorResponse };
