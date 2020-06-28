import CryptoUtil from '../utils/cryptoUtil';

export default class User {
  constructor(email, passwort) {
    this.email = email;
    this.passwortHash = CryptoUtil.hashPwd(passwort);
  }
}
