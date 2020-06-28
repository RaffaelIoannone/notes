import SecurityUtil from '../utils/security';

export default class IndexController {
  static async login(req, res) {
    SecurityUtil.handleLogin(req, res);
  }
}
