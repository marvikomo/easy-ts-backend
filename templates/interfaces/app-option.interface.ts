import { Request, Response } from "express";
import { CorsOptions } from "cors";

export interface IAppOptions {
  requestSizeLimit?: string;
  urlencodExtended?: boolean;
  errors?: {
    includeStackTrace?: boolean;
  };
  cors?: CorsOptions;
  compression?: { filter: (req: Request, res: Response) => any };
}