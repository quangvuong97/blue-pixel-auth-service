import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EventInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<unknown>> {
    // Code to run before handling the event
    const logger = new Logger();
    const arg0 = context.getArgByIndex(0);
    const payload = JSON.stringify(Object.prototype.hasOwnProperty.call(arg0, 'payload') ? arg0['payload'] : arg0);
    logger.log({
      message: context.getHandler().name,
      payload,
      context: context.getClass().name,
    });

    return next.handle().pipe(
      catchError((err) => {
        return throwError(() => {
          logger.error({
            message: err.message,
            stack: err.stack,
            payload,
            context: context.getHandler().name,
          });
        });
      }),
    );
  }
}
