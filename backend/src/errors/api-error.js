const httpStatus = require('http-status');
const ExtendableError = require('./extandable-error');

/**
 * Class representing an API errors.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
  /**
   * Creates an API errors.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of errors.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor({
    message,
    errors,
    stack,
    status = httpStatus.INTERNAL_SERVER_ERROR,
    isPublic = false,
  }) {
    super({
      message, errors, status, isPublic, stack,
    });
  }
}

module.exports = APIError;
