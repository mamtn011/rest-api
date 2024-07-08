// Error is the javascripts default class.
export class HttpException extends Error {
  message;
  errorCode;
  status;
  errors;
  constructor(
    message = "Something went wrong!",
    errorCode = "1000",
    status = "400",
    errors = null
  ) {
    super(message);
    this.message = message;
    this.errorCode = errorCode;
    this.status = status;
    this.errors = errors;
  }
}

export const ErrorCodes = {
  item_already_exist: 1001,
  item_not_found: 1002,
  validation_error: 2001,
};
