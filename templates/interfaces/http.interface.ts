import { Request, Response, NextFunction } from 'express';

export interface IRequest extends Request {
    user: any;
    body: any;
    cookie: any
}

export interface IResponse extends Response {
    ok(data?: object | Array<object>, message?: string): void;
    created(data?: object | Array<object>, message?: string): void;
    badRequest(data?: object | Array<object>, message?: string): void;
    unauthorized(data?: object | Array<object>, message?: string): void;
    forbidden(data?: object | Array<object>, message?: string): void;
    notFound(data?: object | Array<object>, message?: string): void;
    serverError(data?: object | Array<object>, message?: string): void;
    badGateway(data?: object | Array<object>, message?: string): void;
}

export type INext = NextFunction;