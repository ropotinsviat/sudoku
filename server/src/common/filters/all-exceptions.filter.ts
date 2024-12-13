import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const message = exception.message;

      response.status(status).json({
        statusCode: status,
        message: message,
        error: exception.name,
      });
    } else {
      console.error('Unforeseen Error:', exception);

      response.status(500).json({
        statusCode: 500,
        message: 'An unforeseen error occurred',
        error: 'InternalServerError',
      });
    }
  }
}
