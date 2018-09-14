import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class GetLogger implements NestMiddleware {
    resolve(...args: any[]): MiddlewareFunction {
        return (res, req, next) => {
            console.log("someone made a get request to '/'...");
            next();
        }
    }
}