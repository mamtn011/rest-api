// Error is the javascripts default class.
export class HttpException extends Error {
  constructor(
    message = "Something went wrong!",
    errorCode = "1000",
    status = "400",
    errors = {}
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
};
