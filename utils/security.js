import jwt from 'jsonwebtoken';
import util from 'util';
import { userStore } from '../services/userStore';

const sign = util.promisify(jwt.sign);

export default class SecurityUtil {
  static isLoggedIn(req) {
    return req.user != null;
  }

  static authenticated(req, res, next) {
    if (this.isLoggedIn(req)) {
      next();
    } else {
      res.status(401).send(false);
    }
  }

  static currentUser(req) {
    return req.user.email;
  }

  static async createSessionToken(email, secret, options) {
    if (!email) {
      return '';
    }
    return sign({ email }, secret, options);
  }

  static async handleLogin(req, res) {
    if (this.isLoggedIn(req)) {
      res.send(true);
    } else {
      const authenticated = await userStore.authenticate(req.body.email, req.body.pwd);
      if (authenticated) {
        const token = await this.createSessionToken(
          req.body.email,
          req.app.get('jwt-secret'),
          req.app.get('jwt-sign'),
        );
        res.json(token);
      } else {
        res.status('401').json(false);
      }
    }
  }
}
