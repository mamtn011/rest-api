import { HttpException } from "./root.js";

export class ValidationError extends HttpException {
  constructor(error, message, errorCode) {
    super(message, errorCode, 422, error);
  }
}
