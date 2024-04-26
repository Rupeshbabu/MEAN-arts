exports.successResponse = (statusCode, successMessage, res) => {
  const successObj = {
    status: statusCode,
    message: successMessage,
    data: res,
  };
  return successObj;
};
