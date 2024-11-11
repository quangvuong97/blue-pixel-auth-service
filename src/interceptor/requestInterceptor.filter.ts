import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable()
export class RequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    // Code to run before handling the event
    const logger = new Logger();
    const request = context.switchToHttp().getRequest();
    logger.log({
      message: `${request.method} ${request.originalUrl}`,
      payload: JSON.stringify({ query: request.query, body: request.body, params: request.params }),
      context: context.getClass().name,
    });
    return next.handle().pipe(
      catchError((err) => {
        return throwError(() => {
          logger.error({
            message: err.message,
            stack: err.stack,
            payload: JSON.stringify(request.body),
            context: context.getHandler().name,
          });
          if (err instanceof HttpException) return err;
          return new HttpException(err.message, 400);
        });
      }),
      map((data) => {
        return { code: HttpStatus.OK, message: 'Thành công', data: data || null };
      }),
    );
  }
}
