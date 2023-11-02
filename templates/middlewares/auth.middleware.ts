import { NextFunction } from 'express';
import { IRequest, IResponse } from '../interfaces/http.interface';


export default (scope: string = null) => {

    return async (req: IRequest, res: IResponse, next) => {
      try {
        let auth = req.headers['x-auth-token']
          ? req.headers['x-auth-token']
          : req.headers['Authorization'];
        if (!auth) {
          throw new ForbiddenAccess("Auth is required")
        }
        let decoded = await TokenService.verifyServiceToken(auth as string);
        req.body['user'] = decoded;
        // console.log(decoded);
        if (scope && !decoded.scopes.includes(scope.toLocaleUpperCase())) {
          throw new ForbiddenAccess("User does not have the required scope")
        }
        next();
      } catch (err) {
        console.log(err)
        return HandleErrorResponse(err, res)
      }
    };
  
};